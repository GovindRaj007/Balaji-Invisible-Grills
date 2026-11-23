import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BUSINESS, LOCATIONS, SERVICES, priceFaqAnswer, type Location, type Service } from "@/data/business";
import { SERVICE_GALLERY_IMAGES } from "@/data/images";
import { Breadcrumbs, CTASection, FAQ, FeatureList, Gallery, Testimonials } from "@/components/site/Sections";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/components/site/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/service-areas/$service/$location")({
  loader: ({ params }) => {
    const s = SERVICES.find((x) => x.slug === params.service);
    const l = LOCATIONS.find((x) => x.slug === params.location);
    if (!s || !l) throw notFound();
    return { service: s, loc: l };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { service: s, loc: l } = loaderData;
    const kw = s.keyword.toLowerCase();
    const cityLabel = l.altName ? `${l.name} (${l.altName})` : l.name;
    const path = `/service-areas/${s.slug}/${l.slug}`;
    return buildHead({
      // e.g. "Invisible Grills in Vijayawada | Balcony & Window Grills – Balaji"
      title: `${s.keyword} in ${l.name} | ${s.localTitleSuffix} – Balaji`,
      // Price replaces the phone number when set, keeping the snippet under ~160 chars.
      description: `${s.keyword} in ${cityLabel}${s.startingPrice ? ` from ₹${s.startingPrice}/sq ft` : ""} — ${s.types.slice(0, 2).map((t) => t.name.toLowerCase()).join(" & ")}. Free site visit & fixed quote.${s.startingPrice ? "" : ` Call ${BUSINESS.phoneDisplay}.`}`,
      path,
      ogImage: SITE_CONFIG.ogImages.service,
      keywords: [
        `${kw} in ${l.name.toLowerCase()}`,
        `${kw} ${l.name.toLowerCase()}`,
        ...(l.altName ? [`${kw} in ${l.altName.toLowerCase()}`] : []),
        ...s.keywords.slice(0, 4).map((k) => `${k} in ${l.name.toLowerCase()}`),
      ],
      schemas: [
        serviceSchema(s.slug, l.slug),
        faqSchema(comboFaqs(s, l)),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: s.keyword, url: `/services/${s.slug}` },
          { name: `${s.keyword} in ${l.name}`, url: path },
        ]),
      ],
    });
  },
  component: ComboPage,
});

function comboFaqs(s: Service, l: Location) {
  const kw = s.keyword.toLowerCase();
  const city = l.name;
  return [
    { q: `What is the price of ${kw} in ${city}?`, a: `${priceFaqAnswer(s, city)} We give the same transparent pricing in ${city} — there is no extra travel charge within city limits.` },
    { q: `Do you install ${kw} near me in ${city}?`, a: `Yes. We cover ${l.areas.join(", ")} and every other locality in ${city}. Call ${BUSINESS.phoneDisplay} and we will schedule a free site visit, usually within 24–48 hours.` },
    { q: `How long does ${kw} installation take in ${city}?`, a: s.process.map((p) => p.desc).find((d) => /hour|minute/i.test(d)) ?? `Most ${city} jobs are completed in a single visit.` },
    { q: `Do you install for gated communities and apartments in ${city}?`, a: `Yes — we install for individual flats and entire towers in ${city}, and can coordinate with your RWA or builder for bulk installations.` },
    ...s.faqs.slice(0, 2),
  ];
}

function ComboPage() {
  const { service: s, loc: l } = Route.useLoaderData();
  const kw = s.keyword.toLowerCase();
  const cityLabel = l.altName ? `${l.name} (${l.altName})` : l.name;

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: s.keyword, href: "/services/$service", params: { service: s.slug } },
        { name: `${s.keyword} in ${l.name}` },
      ]} />

      <section className="container-x py-10 md:py-16 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
        <div>
          <span className="chip"><MapPin className="size-3.5" /> Serving all of {l.name}</span>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">
            {s.keyword} in <span className="text-accent">{l.name}</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Looking for <strong>{kw} in {cityLabel}</strong>? {BUSINESS.shortName} installs{" "}
            {s.types.map((t) => t.name.toLowerCase()).join(", ")} for homes, apartments and institutions in{" "}
            {l.areas.slice(0, 4).join(", ")} and every other part of {l.name} — with a free site visit, a fixed quote and a written warranty.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${BUSINESS.phone}`} className="btn-primary"><Phone className="size-5" /> Call {BUSINESS.phoneDisplay}</a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hi, I'd like a quote for ${s.keyword} in ${l.name}.`)}`} target="_blank" rel="noopener noreferrer" className="btn-outline"><WhatsAppIcon className="size-5" /> WhatsApp Quote</a>
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
            <span className="eyebrow">{s.keyword} in {l.name}</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4">Why {l.name} families choose our {kw}</h2>
            <p className="text-muted-foreground leading-relaxed">{l.serviceNotes[s.slug]}</p>
            <p className="text-muted-foreground leading-relaxed mt-3">{l.trend}</p>
          </div>
          <div>
            <h3 className="font-display text-2xl mb-4">Key benefits</h3>
            <FeatureList items={s.benefits.slice(0, 6)} />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <span className="eyebrow">Types</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Types of {kw} we install in {l.name}</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {s.types.map((t) => (
              <div key={t.name} className="card-surface">
                <h3 className="font-display text-xl">{t.name} in {l.name}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <span className="eyebrow">Coverage</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-6">{s.keyword} near you in {l.name}</h2>
          <div className="flex flex-wrap gap-2">
            {l.areas.map((a: string) => <span key={a} className="chip !bg-surface-muted !border-border !text-foreground">{a}</span>)}
          </div>
          <p className="text-sm text-muted-foreground mt-4">Plus surrounding areas near {l.landmarks.slice(0, 3).join(", ")} — call us for any pincode in {l.name}.</p>
        </div>
      </section>

      <Gallery
        caption={`${s.keyword} installations in ${l.name} and across Andhra Pradesh — from individual flats to entire residential towers.`}
        images={SERVICE_GALLERY_IMAGES[s.slug]}
        altPrefix={`${s.keyword} in ${l.name}`}
      />

      <section className="section-y">
        <div className="container-x max-w-4xl">
          <span className="eyebrow">Pricing</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4">{s.keyword} price in {l.name}</h2>
          <p className="text-muted-foreground leading-relaxed">{s.pricing}</p>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <span className="eyebrow">Process</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10">How we install {kw} in {l.name}</h2>
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

      <section className="section-y">
        <div className="container-x">
          <span className="eyebrow">Other services in {l.name}</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">More from {BUSINESS.shortName} in {l.name}</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {SERVICES.filter((x) => x.slug !== s.slug).map((other) => (
              <Link key={other.slug} to="/service-areas/$service/$location" params={{ service: other.slug, location: l.slug }} className="card-surface group">
                <h3 className="font-display text-xl">{other.keyword} in {l.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{other.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">Learn more <ArrowRight className="size-4" /></span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            <span className="text-muted-foreground mr-1">{s.keyword} in other cities:</span>
            {LOCATIONS.filter((x) => x.slug !== l.slug).map((x) => (
              <Link key={x.slug} to="/service-areas/$service/$location" params={{ service: s.slug, location: x.slug }} className="chip !bg-surface-muted !border-border !text-foreground hover:!text-accent">
                {s.keyword} in {x.name}
              </Link>
            ))}
            <Link to="/services/$service" params={{ service: s.slug }} className="chip">All about {kw}</Link>
          </div>
        </div>
      </section>

      <FAQ faqs={comboFaqs(s, l)} />
      <CTASection title={`Get your ${kw} quote in ${l.name} today`} location={l.name} />
    </>
  );
}
