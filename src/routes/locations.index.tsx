import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { BUSINESS, LOCATIONS } from "@/data/business";
import { Breadcrumbs, CTASection } from "@/components/site/Sections";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/locations/")({
  head: () =>
    buildHead({
      title: "Service Areas – Vijayawada, Vizag, Guntur & More | Balaji Invisible Grills",
      description: `Invisible grills, balcony safety nets, cricket nets and ceiling cloth hangers in Vijayawada, Vizag, Guntur, Rajahmundry, Tirupati, Ongole & Anantapur.`,
      path: "/locations",
      ogImage: "/og-locations.jpg",
    }),
  component: LocationsIndex,
});

function LocationsIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Locations" }]} />
      <section className="container-x py-10 md:py-16 max-w-3xl">
        <span className="chip">Service Locations</span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-tight">Our service areas across Andhra Pradesh</h1>
        <p className="mt-5 text-lg text-muted-foreground">From coastal Vizag to Anantapur's industrial corridor — our certified teams install premium safety solutions across seven cities, with surrounding towns served on request.</p>
      </section>

      <section className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-5 pb-12">
        {LOCATIONS.map((l) => (
          <Link key={l.slug} to="/locations/$location" params={{ location: l.slug }} className="card-surface group">
            <div className="flex items-center gap-2 text-accent text-sm font-semibold"><MapPin className="size-4" /> {l.name}</div>
            <h2 className="font-display text-2xl mt-2">Invisible Grills & Safety Nets in {l.name}</h2>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{l.intro}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">Explore {l.name} <ArrowRight className="size-4" /></span>
          </Link>
        ))}
      </section>

      <CTASection />
    </>
  );
}
