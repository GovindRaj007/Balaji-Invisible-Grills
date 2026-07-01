import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, BUSINESS } from "@/data/business";
import { Breadcrumbs, CTASection } from "@/components/site/Sections";
import { breadcrumbSchema } from "@/components/site/JsonLd";
import { getFullUrl, SITE_CONFIG } from "@/config/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const p = loaderData.post;
    const title = `${p.title} | ${SITE_CONFIG.businessName} Blog`;
    const keywords = [p.title, "guide", "safety", "blog", "tips"];
    
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { name: "keywords", content: keywords.join(", ") },
        { name: "theme-color", content: "#1B2D4D" },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: SITE_CONFIG.businessName },
        { property: "og:title", content: title },
        { property: "og:description", content: p.excerpt },
        { property: "og:url", content: getFullUrl(`/blog/${params.slug}`) },
        { property: "og:image", content: SITE_CONFIG.ogImages.blog },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "article:published_time", content: p.date },
        { property: "article:author", content: SITE_CONFIG.businessName },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: p.excerpt },
        { name: "twitter:image", content: SITE_CONFIG.ogImages.blog },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: SITE_CONFIG.businessName },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      ],
      links: [
        { rel: "canonical", href: getFullUrl(`/blog/${params.slug}`) },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          author: { "@type": "Organization", name: SITE_CONFIG.businessName },
          publisher: { "@type": "Organization", name: SITE_CONFIG.businessName },
          image: SITE_CONFIG.ogImages.blog,
        })},
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([
          { name: "Home", url: getFullUrl("/") },
          { name: "Blog", url: getFullUrl("/blog") },
          { name: p.title, url: getFullUrl(`/blog/${p.slug}`) },
        ])) },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: post.title },
      ]} />

      <article className="container-x py-10 md:py-16 max-w-3xl">
        <div className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {post.readTime}</div>
        <h1 className="font-display text-4xl md:text-5xl mt-3 leading-tight">{post.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground italic">{post.excerpt}</p>

        <div className="mt-10 space-y-10">
          {post.body.map((section: { heading: string; paragraphs: string[] }, i: number) => (
            <section key={i}>
              <h2 className="font-display text-2xl md:text-3xl mb-4">{section.heading}</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                {section.paragraphs.map((p: string, j: number) => <p key={j}>{p}</p>)}
              </div>
            </section>
          ))}
        </div>
      </article>

      <section className="section-y bg-surface">
        <div className="container-x">
          <h2 className="font-display text-2xl md:text-3xl mb-6">Continue reading</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-surface group">
                <h3 className="font-display text-lg group-hover:text-accent transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">Read <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
