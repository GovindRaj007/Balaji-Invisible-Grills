import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, SERVICES, type ServiceSlug } from "@/data/business";
import { buildHead } from "@/lib/seo";
import { Breadcrumbs, CTASection, FAQ } from "@/components/site/Sections";
import { breadcrumbSchema, faqSchema } from "@/components/site/JsonLd";
import { getFullUrl, SITE_CONFIG } from "@/config/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const p = loaderData.post;
    const path = `/blog/${p.slug}`;
    return buildHead({
      title: `${p.title} | ${SITE_CONFIG.businessName}`,
      description: p.excerpt,
      path,
      ogType: "article",
      ogImage: SITE_CONFIG.ogImages.blog,
      extraMeta: [{ property: "article:published_time", content: p.date }],
      schemas: [
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          dateModified: p.updated ?? p.date,
          mainEntityOfPage: getFullUrl(path),
          author: { "@type": "Organization", name: SITE_CONFIG.businessName, url: getFullUrl("/") },
          publisher: { "@id": getFullUrl("/#organization") },
          image: getFullUrl(SITE_CONFIG.ogImages.blog),
        },
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: p.title, url: path },
        ]),
        ...(p.faqs?.length ? [faqSchema(p.faqs)] : []),
      ],
    });
  },
  component: BlogPost,
});

/** Pick the service a post is about, so every article links to the page that should rank. */
function relatedServiceSlug(slug: string): ServiceSlug {
  if (slug.includes("cricket")) return "cricket-sports-nets";
  if (slug.includes("cloth")) return "ceiling-cloth-hangers";
  if (slug.includes("net")) return "child-pet-safety-nets";
  return "invisible-grills";
}

function BlogPost() {
  const { post } = Route.useLoaderData();
  const service = SERVICES.find((x) => x.slug === relatedServiceSlug(post.slug))!;
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
          {post.body.map((section, i) => (
            <section key={i}>
              <h2 className="font-display text-2xl md:text-3xl mb-4">{section.heading}</h2>
              <div className="space-y-4 text-foreground leading-relaxed">
                {section.paragraphs.map((p, j) => <p key={j}>{p}</p>)}
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2">
                    {section.list.map((li, j) => <li key={j}>{li}</li>)}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>
        <aside className="mt-12 card-surface">
          <div className="text-xs font-semibold text-accent uppercase tracking-wider">Related service</div>
          <h2 className="font-display text-2xl mt-2">{service.keyword}</h2>
          <p className="text-muted-foreground text-sm mt-2">{service.intro}</p>
          <Link to="/services/$service" params={{ service: service.slug }} className="mt-4 inline-flex items-center gap-1.5 text-accent font-semibold text-sm">
            Explore {service.keyword.toLowerCase()} <ArrowRight className="size-4" />
          </Link>
        </aside>
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

      {post.faqs?.length ? <FAQ faqs={post.faqs} /> : null}
      <CTASection />
    </>
  );
}
