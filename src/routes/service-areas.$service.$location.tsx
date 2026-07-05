import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { BUSINESS, LOCATIONS, SERVICES } from "@/data/business";
import { SERVICE_GALLERY_IMAGES } from "@/data/images";
import { Breadcrumbs, CTASection, FAQ, FeatureList, Gallery, Testimonials } from "@/components/site/Sections";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/site/JsonLd";
import { getFullUrl, SITE_CONFIG } from "@/config/site";

export const Route = createFileRoute("/service-areas/$service/$location")({
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.service);
    const l = LOCATIONS.find((x) => x.slug === params.location);
    if (!s || !l) throw notFound();
    return { service: s, loc: l };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return {};
    const { service: s, loc: l } = loaderData;
    const title = `${s.name} in ${l.name} | Local Installation Services by ${SITE_CONFIG.businessName}`;
    const desc = `Professional ${s.name} installation in ${l.name}. 316L marine-grade materials, local team, free site visit, 10-year warranty. Serving ${l.areas.slice(0, 4).join(", ")} & nearby areas.`;
    const keywords = [
      `${s.name} in ${l.name}`,
      `best ${s.name.toLowerCase()} ${l.name}`,
      `${s.name.toLowerCase()} installation ${l.name}`,
      `${l.name} ${s.name.toLowerCase()} specialist`,
      ...s.keywords.map(k => `${k} ${l.name}`),
      l.name,
    ];
    
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: keywords.join(", ") },
        { name: "theme-color", content: "#1B2D4D" },
        { property: "og:type", content: "product" },
        { property: "og:site_name", content: SITE_CONFIG.businessName },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: getFullUrl(`/service-areas/${params.service}/${params.location}`) },
        { property: "og:image", content: getFullUrl(SITE_CONFIG.ogImages.service) },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
        { name: "twitter:image", content: getFullUrl(SITE_CONFIG.ogImages.service) },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: SITE_CONFIG.businessName },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      ],
      links: [
        { rel: "canonical", href: getFullUrl(`/service-areas/${params.service}/${params.location}`) },
      ],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(serviceSchema(s.slug, l.name)) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(comboFaqs(s.name, l.name))) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([
          { name: "Home", url: getFullUrl("/") },
          { name: "Service Areas", url: getFullUrl("/locations") },
          { name: s.name, url: getFullUrl(`/services/${s.slug}`) },
          { name: l.name, url: getFullUrl(`/service-areas/${s.slug}/${l.slug}`) },
        ])) },
      ],
    };
  },
  component: ComboPage,
});

function comboFaqs(service: string, city: string) {
  return [
    { q: `How much do ${service} cost in ${city}?`, a: `${service} pricing in ${city} depends on your balcony or window size, material spec and accessories. We share a fixed transparent quote within 24 hours of your free site visit — no hidden costs.` },
    { q: `How long does ${service.toLowerCase()} installation take in ${city}?`, a: `For most apartments in ${city}, our certified team completes installation in 4–6 hours with zero damage to your walls or flooring.` },
    { q: `Do you serve gated communities and high-rises in ${city}?`, a: `Yes — we install for individual flats and entire towers in ${city}, including coordination with your RWA or builder for bulk installations.` },
    { q: `What warranty do I get for ${service.toLowerCase()} in ${city}?`, a: `Every installation in ${city} carries our standard 10-year structural warranty plus lifetime servicing support. We back every job we do.` },
  ];
}

function ComboPage() {
  const { service: s, loc: l } = Route.useLoaderData();

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: s.name, href: "/services/$service", params: { service: s.slug } },
        { name: l.name },
      ]} />

      <section className="container-x py-10 md:py-16 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
        <div>
          <span className="chip"><MapPin className="size-3.5" /> Serving all of {l.name}</span>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">
            {s.name} in <span className="text-accent">{l.name}</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Looking for the best <strong>{s.name.toLowerCase()} installer in {l.name}</strong>? {BUSINESS.shortName} has installed across {l.areas.slice(0, 3).join(", ")} and beyond — with 316L premium materials, certified local installers, and a 10-year written warranty.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary"><Phone className="size-5" /> Call {BUSINESS.phoneDisplay}</a>
            <Link to="/contact" className="btn-outline">Free site visit <ArrowRight className="size-4" /></Link>
          </div>
        </div>
        <div className="card-surface">
          <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent text-accent" />)}</div>
          <p className="mt-3 italic">&ldquo;{l.testimonial.text}&rdquo;</p>
          <div className="mt-4 pt-4 border-t border-border">
            <div className="font-semibold">{l.testimonial.name}</div>
            <div className="text-xs text-muted-foreground">{l.testimonial.area}</div>
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid md:grid-cols-2 gap-10">
          <div>
            <span className="eyebrow">About this service in {l.name}</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4">Why {l.name} families choose our {s.name.toLowerCase()}</h2>
            <p className="text-muted-foreground leading-relaxed">{l.trend}</p>
            <p className="text-muted-foreground leading-relaxed mt-3">{s.description}</p>
          </div>
          <div>
            <h3 className="font-display text-2xl mb-4">Key benefits</h3>
            <FeatureList items={s.benefits.slice(0, 6)} />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <span className="eyebrow">Coverage</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-6">Neighbourhoods we serve in {l.name}</h2>
          <div className="flex flex-wrap gap-2">
            {l.areas.map((a: string) => <span key={a} className="chip !bg-surface-muted !border-border !text-foreground">{s.name} in {a}</span>)}
          </div>
          <p className="text-sm text-muted-foreground mt-4">Plus surrounding areas near {l.landmarks.slice(0, 3).join(", ")} — call us for any pincode.</p>
        </div>
      </section>

      <Gallery
        caption={`${s.name} installations across ${l.name} — from individual flats to entire residential towers.`}
        images={SERVICE_GALLERY_IMAGES[s.slug]}
      />

      <section className="section-y">
        <div className="container-x">
          <span className="eyebrow">Process</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10">How we install in {l.name}</h2>
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

      <Testimonials items={[l.testimonial, ...LOCATIONS.filter((x) => x.slug !== l.slug).slice(0, 2).map((x) => x.testimonial)]} />

      <section className="section-y bg-surface">
        <div className="container-x">
          <span className="eyebrow">Other services in {l.name}</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Explore more from {BUSINESS.shortName} in {l.name}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.filter((x) => x.slug !== s.slug).map((other) => (
              <Link key={other.slug} to="/service-areas/$service/$location" params={{ service: other.slug, location: l.slug }} className="card-surface group">
                <h3 className="font-display text-xl">{other.name} in {l.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{other.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">Learn more <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={comboFaqs(s.name, l.name)} />
      <CTASection title={`Get your ${s.name} quote for ${l.name} today`} location={l.name} />
    </>
  );
}
