import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BUSINESS, LOCATIONS, SERVICES, priceFaqAnswer, type ServiceSlug } from "@/data/business";
import { SERVICE_GALLERY_IMAGES, SERVICE_IMAGE_SOURCES } from "@/data/images";
import { OptimizedImage } from "@/components/ui/optimized-image";
import {
  Breadcrumbs, CTASection, FAQ, FeatureList, Gallery,
  RelatedServices, Testimonials,
} from "@/components/site/Sections";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/site/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { buildHead } from "@/lib/seo";

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

/** Service FAQs plus a "near me" and a "price" question — the two most common query modifiers. */
export function serviceFaqs(s: (typeof SERVICES)[number]) {
  return [
    {
      q: `Do you install ${s.keyword.toLowerCase()} near me?`,
      a: `Yes. We install ${s.keyword.toLowerCase()} across ${LOCATIONS.map((l) => l.name).join(", ")} and surrounding towns in Andhra Pradesh. Call ${BUSINESS.phoneDisplay} or WhatsApp us to book a free site visit.`,
    },
    { q: `What is the price of ${s.keyword.toLowerCase()}?`, a: priceFaqAnswer(s) },
    ...s.faqs,
  ];
}

export const Route = createFileRoute("/services/$service")({
  loader: ({ params }) => {
    const s = getService(params.service);
    if (!s) throw notFound();
    return { service: s };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const s = loaderData.service;
    return buildHead({
      title: s.seoTitle,
      description: s.seoDescription,
      path: `/services/${s.slug}`,
      ogImage: SITE_CONFIG.ogImages.service,
      keywords: s.keywords,
      schemas: [
        serviceSchema(s.slug),
        faqSchema(serviceFaqs(s)),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: s.keyword, url: `/services/${s.slug}` },
        ]),
      ],
    });
  },
  component: ServicePage,
});

function ServicePage() {
  const { service: s } = Route.useLoaderData();
  const slug = s.slug as ServiceSlug;
  const kw = s.keyword.toLowerCase();

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: s.keyword },
      ]} />

      <section className="container-x py-10 md:py-16 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <span className="chip">{s.hero}</span>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-tight">{s.h1}</h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-xl">{s.intro}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary"><Phone className="size-5" /> Call {BUSINESS.phoneDisplay}</a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%2C%20I%27d%20like%20a%20quote%20for%20${encodeURIComponent(s.keyword)}.`} target="_blank" rel="noopener noreferrer" className="btn-outline"><WhatsAppIcon className="size-5" /> WhatsApp</a>
          </div>
        </div>
        <div className="aspect-[4/5] rounded-3xl shadow-2xl relative overflow-hidden">
          <OptimizedImage
            avifSrc={SERVICE_IMAGE_SOURCES[slug].avif}
            webpSrc={SERVICE_IMAGE_SOURCES[slug].webp}
            fallbackSrc={SERVICE_IMAGE_SOURCES[slug].jpg}
            alt={`${s.keyword} installed by ${BUSINESS.shortName}`}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur rounded-2xl p-5 border border-border">
            <div className="text-xs font-semibold text-accent uppercase tracking-wider">Free site visit</div>
            <div className="font-display text-xl mt-1">{s.keyword}</div>
            <div className="text-sm text-muted-foreground mt-1">Installed across {LOCATIONS.length} cities in Andhra Pradesh</div>
          </div>
        </div>
      </section>

      {/* Sub-types: each matches a distinct search ("for balcony", "for windows", "pigeon nets"…) */}
      <section className="pt-[64px]">
        <div className="container-x">
          <span className="eyebrow">Types</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Types of {kw} we install</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {s.types.map((t) => (
              <div key={t.name} className="card-surface">
                <h3 className="font-display text-xl">{t.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-[64px] bg-surface">
        <div className="container-x">
          <span className="eyebrow">Why this service</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4">Benefits of {kw}</h2>
          <p className="text-muted-foreground max-w-3xl mb-6 leading-relaxed">{s.description}</p>
          <FeatureList items={s.benefits} />
        </div>
      </section>

      <Gallery
        caption={`Real ${kw} installations across Andhra Pradesh — apartments, villas, and community spaces.`}
        images={SERVICE_GALLERY_IMAGES[slug]}
        altPrefix={s.keyword}
      />

      <section className="pt-[64px]">
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

      <section className="pt-[64px]">
        <div className="container-x max-w-4xl">
          <span className="eyebrow">Pricing</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4">{s.keyword} price</h2>
          <p className="text-muted-foreground leading-relaxed">{s.pricing}</p>
          <a href={`tel:${BUSINESS.phone}`} className="btn-primary mt-6 inline-flex"><Phone className="size-5" /> Get a free quote</a>
        </div>
      </section>

      <section className="pt-[64px] bg-surface">
        <div className="container-x">
          <span className="eyebrow">Process</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10">{s.keyword} installation process</h2>
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
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10 max-w-3xl">Why choose {BUSINESS.shortName} for {kw}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Premium materials, every job", d: "We never substitute. 316L stainless, UV-grade HDPE, anodised aluminium — always." },
              { t: "Certified in-house team", d: "Zero subcontracting. Every installer is trained, badged, and accountable." },
              { t: "Industry-leading warranty", d: "Written warranty on every installation, plus lifetime service support." },
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
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">{s.keyword} near you</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} to="/service-areas/$service/$location" params={{ service: slug, location: l.slug }} className="card-surface flex items-center justify-between !p-4 text-sm">
                <span className="font-semibold flex items-center gap-2"><MapPin className="size-4 text-accent" />{s.keyword} in {l.name}</span>
                <ArrowRight className="size-4 text-accent" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices exclude={s.slug} />
      <FAQ faqs={serviceFaqs(s)} />
      <CTASection title={`Get your free ${kw} quote today`} />
    </>
  );
}
