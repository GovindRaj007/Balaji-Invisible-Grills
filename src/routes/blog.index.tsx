import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BLOG_POSTS, BUSINESS } from "@/data/business";
import { Breadcrumbs, CTASection } from "@/components/site/Sections";
import { generateSEOMeta } from "@/lib/seo";
import { getFullUrl } from "@/config/site";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const title = `Blog & Safety Guides | ${BUSINESS.name}`;
    const description = `Expert insights on invisible grills, safety nets, child safety, balcony protection and home security solutions for Andhra Pradesh families.`;
    const keywords = ["blog", "guides", "safety tips", "balcony safety", "child safety", "expert advice", "home security"];
    
    return {
      ...generateSEOMeta({
        title,
        description,
        keywords,
        ogImage: "/og-blog.jpg",
        canonical: getFullUrl("/blog"),
      }),
    };
  },
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
      <section className="container-x py-10 md:py-16 max-w-3xl">
        <span className="chip">From the journal</span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-tight">Guides, comparisons & safety insights.</h1>
        <p className="mt-5 text-lg text-muted-foreground">Practical, climate-aware advice on choosing balcony safety, invisible grills, cricket nets and more — written by our installation specialists.</p>
      </section>

      <section className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-12">
        {BLOG_POSTS.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-surface group">
            <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {p.readTime}</div>
            <h2 className="font-display text-xl mt-2 group-hover:text-accent transition">{p.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">Read article <ArrowRight className="size-4" /></span>
          </Link>
        ))}
      </section>

      <CTASection />
    </>
  );
}
