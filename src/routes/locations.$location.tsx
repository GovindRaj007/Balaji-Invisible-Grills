import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { BUSINESS, LOCATIONS, SERVICES, priceFaqAnswer } from "@/data/business";
import { Breadcrumbs, CTASection, FAQ, ServiceAreasGrid, Testimonials } from "@/components/site/Sections";
import { breadcrumbSchema, faqSchema } from "@/components/site/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/locations/$location")({
  loader: ({ params }) => {
    const loc = LOCATIONS.find((l) => l.slug === params.location);
    if (!loc) throw notFound();
    return { loc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const l = loaderData.loc;
    const cityLabel = l.altName ? `${l.name} (${l.altName})` : l.name;
    return buildHead({
      // Hub page: "all services in {city}". The exact "{service} in {city}" terms
      // belong to the service × city pages this page links to.
      title: `Invisible Grills, Safety Nets & Cloth Hangers in ${l.name} | Balaji`,
      description: `Balcony safety in ${cityLabel}: invisible grills, pigeon & child safety nets, cricket nets and ceiling cloth hangers. Free site visit & fixed quote.`,
      path: `/locations/${l.slug}`,
      ogImage: SITE_CONFIG.ogImages.locations,
      schemas: [
        faqSchema(getLocationFaqs(l.name)),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Locations", url: "/locations" },
          { name: l.name, url: `/locations/${l.slug}` },
        ]),
      ],
    });
  },
  component: LocationPage,
});

function getLocationFaqs(city: string) {
  return [
    { q: `Do you install invisible grills in ${city}?`, a: `Yes — we have a dedicated installation team based in ${city} that handles invisible grill installations daily across apartments, villas, and community projects.` },
    { q: `What is the price of invisible grills in ${city}?`, a: priceFaqAnswer(SERVICES[0], city) },
    { q: `How quickly can you install in ${city}?`, a: `Most ${city} jobs are scheduled within 48–72 hours of the site visit. Urgent same-day slots are available on request.` },
    { q: `Do you serve apartments and gated communities in ${city}?`, a: `Yes — we are empanelled with multiple builders and gated communities in ${city} and can coordinate directly with your association for bulk installations.` },
  ];
}

function LocationPage() {
  const { loc: l } = Route.useLoaderData();
  const faqs = getLocationFaqs(l.name);

  return (
    <>
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Locations", href: "/locations" },
        { name: l.name },
      ]} />

      <section className="container-x py-10 md:py-16 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
        <div>
          <span className="chip"><MapPin className="size-3.5" /> {l.name}, Andhra Pradesh</span>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-tight">Balcony Safety Solutions in <span className="text-accent">{l.name}</span></h1>
          <p className="mt-5 text-lg text-muted-foreground">{l.intro}</p>
          {l.altName && <p className="mt-3 text-sm text-muted-foreground">Serving all of {l.name} ({l.altName}) and nearby towns.</p>}
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
            <span className="eyebrow">Local Insight</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4">Why {l.name} chooses {BUSINESS.shortName}</h2>
            <p className="text-muted-foreground leading-relaxed">{l.trend}</p>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Areas we cover in {l.name}:</h3>
              <div className="flex flex-wrap gap-2">
                {l.areas.map((a: string) => <span key={a} className="chip !bg-surface-muted !border-border !text-foreground">{a}</span>)}
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Notable landmarks served nearby:</h3>
              <p className="text-sm text-muted-foreground">{l.landmarks.join(" · ")}</p>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our Services in {l.name}</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 mb-6">Invisible grills, safety nets, cricket nets &amp; cloth hangers in {l.name}</h2>
            <div className="space-y-3">
              {SERVICES.map((s) => (
                <Link key={s.slug} to="/service-areas/$service/$location" params={{ service: s.slug, location: l.slug }} className="card-surface !p-4 flex items-center justify-between group">
                  <div>
                    <div className="font-semibold">{s.keyword} in {l.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.short}</div>
                  </div>
                  <ArrowRight className="size-5 text-accent group-hover:translate-x-1 transition" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials items={[l.testimonial, ...LOCATIONS.filter((x) => x.slug !== l.slug).slice(0, 2).map((x) => x.testimonial)]} />

      <ServiceAreasGrid exclude={l.slug} />

      <FAQ faqs={faqs} />
      <CTASection title={`Book your free site visit in ${l.name}`} location={l.name} />
    </>
  );
}
