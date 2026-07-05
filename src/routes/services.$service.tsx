import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BUSINESS, LOCATIONS, SERVICES, type ServiceSlug } from "@/data/business";
import { SERVICE_GALLERY_IMAGES, SERVICE_IMAGE_SOURCES } from "@/data/images";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  Breadcrumbs, CTASection, FAQ, FeatureList, Gallery,
  RelatedServices, ServiceAreasGrid, Testimonials,
} from "@/components/site/Sections";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/site/JsonLd";
import { getFullUrl, SITE_CONFIG } from "@/config/site";

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const s = getService(params.service);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const s = loaderData.service;
    const locationKeywords = LOCATIONS.map(l => l.name).join(", ");
    const title = `${s.name} Installation in Andhra Pradesh | ${SITE_CONFIG.businessName}`;
    const description = `Professional ${s.name} installation across ${locationKeywords}. ${s.short} Free site visit, transparent pricing, 10-year warranty.`;
    const keywords = [...s.keywords, ...LOCATIONS.map(l => `${s.name} in ${l.name}`), "installation", "free quote"];
    
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords.join(", ") },
        { name: "theme-color", content: "#1B2D4D" },
        { property: "og:type", content: "product" },
        { property: "og:site_name", content: SITE_CONFIG.businessName },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: getFullUrl(`/services/${params.service}`) },
        { property: "og:image", content: getFullUrl(SITE_CONFIG.ogImages.service) },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: getFullUrl(SITE_CONFIG.ogImages.service) },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: SITE_CONFIG.businessName },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      ],
      links: [
        { rel: "canonical", href: getFullUrl(`/services/${params.service}`) },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceSchema(s.slug)) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(s.faqs)) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([
          { name: "Home", url: getFullUrl("/") },
          { name: "Services", url: getFullUrl("/services") },
          { name: s.name, url: getFullUrl(`/services/${s.slug}`) },
        ])) },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const slug = s.slug as ServiceSlug;
  
  // Custom headings for each service
  const getCustomHeading = (slug: ServiceSlug) => {
    const headings: Record<ServiceSlug, string> = {
      "invisible-grills": "Invisible Grills in Andhra Pradesh",
      "child-pet-safety-nets": "Balcony Safety Nets in Andhra Pradesh",
      "cricket-sports-nets": "Cricket & Sports Nets in Andhra Pradesh",
      "ceiling-cloth-hangers": "Ceiling Cloth Hangers in Andhra Pradesh",
    };
    return headings[slug];
  };

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: s.name },
      ]} />

      <section className="container-x py-10 md:py-16 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <span className="chip">{s.name}</span>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-tight">{getCustomHeading(slug)}</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">{s.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary"><Phone className="size-5" /> Call {BUSINESS.phoneDisplay}</a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20${encodeURIComponent(s.name)}.`} target="_blank" rel="noopener noreferrer" className="btn-outline"><WhatsAppIcon className="size-5" /> WhatsApp</a>
          </div>
        </div>
        <div className="aspect-[4/5] rounded-3xl shadow-2xl relative overflow-hidden">
          <OptimizedImage
            avifSrc={SERVICE_IMAGE_SOURCES[slug].avif}
            webpSrc={SERVICE_IMAGE_SOURCES[slug].webp}
            fallbackSrc={SERVICE_IMAGE_SOURCES[slug].jpg}
            alt={s.name}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur rounded-2xl p-5 border border-border">
            <div className="text-xs font-semibold text-accent uppercase tracking-wider">Free site visit</div>
            <div className="font-display text-xl mt-1">{s.name}</div>
            <div className="text-sm text-muted-foreground mt-1">Installed across 7 AP cities</div>
          </div>
        </div>
      </section>

      <section className="pt-[64px] bg-surface">
        <div className="container-x">
          <span className="eyebrow">Why this service</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-6">Benefits of {s.name}</h2>
          <FeatureList items={s.benefits} />
        </div>
      </section>

      <Gallery
        caption={`Real ${s.name.toLowerCase()} installations across Andhra Pradesh — apartments, villas, and community spaces.`}
        images={SERVICE_GALLERY_IMAGES[slug]}
      />

      <section className="pt-[64px] bg-surface">
        <div className="container-x">
          <span className="eyebrow">Where it's used</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-6">Applications</h2>
          <FeatureList items={s.applications} />
        </div>
      </section>

      <section className="pt-[64px]">
        <div className="container-x">
          <span className="eyebrow">Specifications</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Features & technical details</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {s.features.map((f: string) => (
              <div key={f} className="card-surface flex gap-3 items-start">
                <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[64px] bg-surface">
        <div className="container-x">
          <span className="eyebrow">Process</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10">Installation Process</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {s.process.map((p: { title: string; desc: string }, i: number) => (
              <div key={i} className="card-surface">
                <div className="font-display text-5xl text-accent/30">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="font-display text-xl mt-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[64px]">
        <div className="container-x">
          <span className="eyebrow">Why choose us</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10 max-w-3xl">Why choose {BUSINESS.shortName} for {s.name}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Premium materials, every job", d: "We never substitute. 316L stainless, UV-grade HDPE, anodised aluminium — always." },
              { t: "Certified in-house team", d: "Zero subcontracting. Every installer is trained, badged, and accountable." },
              { t: "Industry-leading warranty", d: "10-year structural warranty in writing — the longest in Andhra Pradesh." },
            ].map((w, i) => (
              <div key={i} className="card-surface">
                <ShieldCheck className="size-7 text-accent" />
                <h3 className="font-display text-xl mt-3">{w.t}</h3>
                <p className="text-muted-foreground text-sm mt-2">{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="pt-[64px]">
        <div className="container-x">
          <span className="eyebrow">Service Areas</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">{s.name} across Andhra Pradesh</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} to="/service-areas/$service/$location" params={{ service: slug, location: l.slug }} className="card-surface flex items-center justify-between !p-4 text-sm">
                <span className="font-semibold">{s.name} in {l.name}</span>
                <ArrowRight className="size-4 text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices exclude={s.slug} />
      <FAQ faqs={s.faqs} />
      <CTASection title={`Get your free ${s.name} quote today`} />
    </>
  );
}
