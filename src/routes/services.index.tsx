import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BUSINESS, SERVICES } from "@/data/business";
import { SERVICE_IMAGES } from "@/data/images";
import { Breadcrumbs, CTASection } from "@/components/site/Sections";
import { generateSEOMeta } from "@/lib/seo";
import { getFullUrl } from "@/config/site";

export const Route = createFileRoute("/services/")({
  head: () => {
    const title = `Services | Invisible Grills, Safety Nets, Cricket Nets | ${BUSINESS.name}`;
    const description = `Professional installation of 316L invisible grills, child & pet safety nets, cricket nets, and ceiling cloth hangers across Visakhapatnam, Vijayawada, Rajahmundry, Guntur, Ongole, Tirupati & Anantapur.`;
    const keywords = ["services", "invisible grills", "safety nets", "cricket nets", "cloth hangers", "installation", "balcony safety"];
    
    return {
      ...generateSEOMeta({
        title,
        description,
        keywords,
        ogImage: "/og-service.jpg",
        canonical: getFullUrl("/services"),
      }),
    };
  },
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <section className="container-x py-10 md:py-14">
        <span className="chip">Services Overview</span>
        <h1 className="font-display text-4xl md:text-6xl mt-3 leading-tight max-w-3xl">Four premium services that protect Andhra Pradesh families.</h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">From 316L invisible grills to UV-stabilised safety nets — every solution is engineered for our climate and backed by industry-leading warranty.</p>
      </section>

      <section className="container-x grid md:grid-cols-2 gap-6 pb-12">
        {SERVICES.map((s) => (
          <Link key={s.slug} to="/services/$service" params={{ service: s.slug }} className="card-surface group !p-0 overflow-hidden">
            <div className="aspect-[16/9] relative overflow-hidden">
              <img src={SERVICE_IMAGES[s.slug]} alt={s.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
              <div className="absolute bottom-4 left-4 chip !bg-white/15 !text-white !border-white/25 backdrop-blur">{s.name}</div>
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl">{s.hero}</h2>
              <p className="text-muted-foreground mt-2">{s.description.slice(0, 160)}…</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">View {s.name} <ArrowRight className="size-4" /></span>
            </div>
          </Link>
        ))}
      </section>

      <CTASection />
    </>
  );
}
