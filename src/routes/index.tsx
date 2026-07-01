import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BUSINESS, LOCATIONS, SERVICES, BLOG_POSTS } from "@/data/business";
import { HERO_IMAGE, SERVICE_IMAGES } from "@/data/images";
import { CTASection, FAQ, ServiceAreasGrid, Testimonials, TrustIndicators } from "@/components/site/Sections";
import { SITE_CONFIG, getFullUrl } from "@/config/site";
import { organizationSchema, websiteSchema } from "@/components/site/JsonLd";

export const Route = createFileRoute("/")({
  head: () => {
    const title = "Balaji Invisible Grills | Premium Safety Nets, Grills & Cricket Nets in Andhra Pradesh";
    const description = "Andhra Pradesh's #1 installer of 316L invisible grills, safety nets & cricket nets. 6500+ installations, 10-year warranty, free site visits. Serving Visakhapatnam, Vijayawada, Rajahmundry, Guntur, Ongole, Tirupati & Anantapur.";
    const keywords = "invisible grills, safety nets, cricket nets, balcony safety, window safety, Visakhapatnam, Vijayawada, Rajahmundry, Guntur, Ongole, Tirupati, Anantapur, stainless steel, child safety";
    
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "keywords", content: keywords },
        { name: "theme-color", content: "#1B2D4D" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: SITE_CONFIG.businessName },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: getFullUrl("/") },
        { property: "og:image", content: SITE_CONFIG.ogImages.default },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: SITE_CONFIG.ogImages.default },
        // Additional SEO
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: SITE_CONFIG.businessName },
        { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      ],
      links: [
        { rel: "canonical", href: getFullUrl("/") },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(organizationSchema()),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(websiteSchema()),
        },
      ],
    };
  },
  component: HomePage,
});

const homeFaqs = [
  { q: "Which cities in Andhra Pradesh do you serve?", a: "We install across Visakhapatnam, Vijayawada, Rajahmundry, Guntur, Ongole, Tirupati and Anantapur — with surrounding towns covered on request." },
  { q: "Do you offer free site visits and quotations?", a: "Yes. Our specialist visits, measures your balcony or window, and shares a transparent fixed quote within 24 hours — at no charge or obligation." },
  { q: "What warranty do you provide?", a: "10-year structural warranty on invisible grill tracks and cables, 5-year UV warranty on safety nets, and 3-year warranty on cricket nets." },
  { q: "How long does installation take?", a: "A typical 3BHK balcony is completed in 4–6 hours for invisible grills, and 60–90 minutes for safety nets." },
  { q: "Do you serve coastal cities like Visakhapatnam?", a: "Yes — and we use 316L marine-grade stainless steel specifically engineered for the salt-air corrosion you get in Vizag." },
];

function HomePage() {
  const heroFeatures = [
    { icon: ShieldCheck, label: "Invisible Grills" },
    { icon: CheckCircle2, label: "Safety Nets" },
    { icon: Wrench, label: "Cricket Nets" },
    { icon: Sparkles, label: "Cloth Hangers" }
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative overflow-hidden py-8 md:py-12 lg:py-16 flex items-center justify-center min-h-screen pb-12 md:pb-16 lg:pb-20">
        {/* Floating Card Content */}
        <div className="container-x relative z-10 w-full px-4 sm:px-6">
          {/* Mobile/Tablet: Single Card Layout */}
          <div className="lg:hidden max-w-3xl mx-auto">
            <div className="rounded-3xl shadow-2xl overflow-hidden border border-border/50">
              {/* Card Background Image */}
              <div className="relative">
                <img src={HERO_IMAGE} alt="Premium invisible grill on a high-rise apartment balcony in Andhra Pradesh" width={1280} height={1600} className="w-full h-[400px] md:h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/10" />

                {/* Content Overlay on Image */}
                <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 md:p-8">
                  <div>
                    <span className="chip"><Sparkles className="size-3.5" /> Premium safety since 2013</span>
                  </div>
                  
                  {/* Badge Over Image - Bottom Position */}
                  <div className="bg-background/95 backdrop-blur border border-border/50 rounded-2xl p-3.5 md:p-4">
                    <div className="font-display text-base md:text-lg font-semibold text-accent">Andhra's #1 invisible grill installer</div>
                    <div className="text-xs md:text-sm text-muted-foreground mt-1.5">6,500+ apartments protected · 0 incidents</div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-background/95 backdrop-blur p-5 sm:p-6 md:p-8">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">
                  Uninterrupted views.<br />
                  <span className="text-accent">Uncompromising safety.</span>
                </h1>

                {/* Subheadline */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm md:text-base text-muted-foreground font-medium">
                  <span>Best price in {LOCATIONS.map(l => l.name).join(", ")}</span>
                  <span className="hidden sm:inline text-border">|</span>
                  <span>6500+ satisfied homes</span>
                </div>
                
                {/* Features Grid */}
                <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {heroFeatures.map((feature, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                      <div className="size-9 md:size-10 rounded-lg bg-accent/15 text-accent grid place-items-center mb-2"><feature.icon className="size-5 md:size-6" /></div>
                      <span className="text-xs md:text-sm font-medium leading-tight">{feature.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 w-full">
                  <a href={`tel:${BUSINESS.phone}`} className="btn-primary justify-center flex-1 sm:flex-none"><Phone className="size-5" /> Call {BUSINESS.phoneDisplay}</a>
                  <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center flex-1 sm:flex-none"><WhatsAppIcon className="size-5" /> WhatsApp Quote</a>
                </div>

                {/* Trust Indicators */}
                <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-border flex items-center justify-center gap-2 text-sm">
                  <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent text-accent" />)}</div>
                  <span className="font-semibold text-foreground">{BUSINESS.rating}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Two Column Layout */}
          <div className="hidden lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:items-center max-w-6xl mx-auto">
            {/* Left Column: Text Content */}
            <div>
              <span className="chip"><Sparkles className="size-3.5" /> Premium safety since 2013</span>
              
              <h1 className="font-display text-5xl lg:text-6xl mt-6 leading-[1.1]">
                Uninterrupted views.<br />
                <span className="text-accent">Uncompromising safety.</span>
              </h1>

              {/* Subheadline */}
              <div className="mt-6 flex items-center gap-4 text-base text-muted-foreground font-medium">
                <span>Best price in {LOCATIONS.map(l => l.name).join(", ")}</span>
                <span className="text-border">|</span>
                <span>6500+ satisfied homes</span>
              </div>

              {/* Features Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {heroFeatures.map((feature, i) => (
                  <div key={i} className="flex flex-col items-start gap-2">
                    <div className="size-10 rounded-lg bg-accent/15 text-accent grid place-items-center"><feature.icon className="size-5" /></div>
                    <span className="text-sm font-medium leading-tight">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex gap-3">
                <a href={`tel:${BUSINESS.phone}`} className="btn-primary"><Phone className="size-5" /> Call {BUSINESS.phoneDisplay}</a>
                <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline"><WhatsAppIcon className="size-5" /> WhatsApp Quote</a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 pt-8 border-t border-border flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent text-accent" />)}</div>
                  <span className="font-semibold text-foreground">{BUSINESS.rating}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Image Card */}
            <div>
              <div className="rounded-3xl shadow-2xl overflow-hidden border border-border/50 relative">
                <img src={HERO_IMAGE} alt="Premium invisible grill on a high-rise apartment balcony in Andhra Pradesh" width={1280} height={1600} className="w-full h-[600px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/10" />

                {/* Badge Over Image - Bottom Position */}
                <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur border border-border/50 rounded-2xl p-4">
                  <div className="font-display text-lg font-semibold text-accent">Andhra's #1 invisible grill installer</div>
                  <div className="text-sm text-muted-foreground mt-2">6,500+ apartments protected · 0 incidents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustIndicators />

      {/* SERVICES */}
      <section className="pt-[64px]">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="eyebrow">Our Services</span>
              <h2 className="font-display text-3xl md:text-5xl mt-2">Four services. One promise: safety done right.</h2>
            </div>
            <Link to="/services" className="btn-outline">View all services <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/services/$service" params={{ service: s.slug }} className="card-surface group !p-0 overflow-hidden">
                <div className="aspect-[16/8] relative overflow-hidden">
                  <img src={SERVICE_IMAGES[s.slug]} alt={s.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <div className="absolute top-4 left-4 chip !bg-white/15 !text-white !border-white/25 backdrop-blur">{s.name}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{s.hero}</h3>
                  <p className="text-muted-foreground mt-2">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">Explore {s.name} <ArrowRight className="size-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="pt-[64px] bg-surface">
        <div className="container-x">
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-5xl mt-2 mb-12 max-w-3xl">Engineered for Andhra Pradesh. Trusted by 6,500+ families.</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, t: "316L Marine-Grade Materials", d: "Built for coastal Vizag salt air and Anantapur dry heat — the same alloys used in shipbuilding and offshore rigs." },
              { icon: Wrench, t: "Certified In-House Installers", d: "Zero subcontracting. Every installer is trained, badged and accountable for your warranty." },
              { icon: Star, t: "Transparent, Honest Pricing", d: "Fixed per-sqft pricing. No hidden charges. Quote in 24 hours and locked for 30 days." },
              { icon: CheckCircle2, t: "10-Year Structural Warranty", d: "We back every grill with a 10-year written warranty — the longest in Andhra Pradesh." },
              { icon: Sparkles, t: "Zero-Damage Installation", d: "We protect your floors and walls. Most jobs leave zero mess and no visible mounting damage." },
              { icon: Phone, t: "Lifetime Support", d: "One call and our team is back. We service every installation we do, for as long as it stands." },
            ].map((b, i) => (
              <div key={i} className="card-surface">
                <div className="size-11 rounded-xl bg-accent/15 text-accent grid place-items-center"><b.icon className="size-5" /></div>
                <h3 className="font-display text-xl mt-4">{b.t}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pt-[64px]">
        <div className="container-x">
          <span className="eyebrow">Installation Process</span>
          <h2 className="font-display text-3xl md:text-5xl mt-2 mb-12">From enquiry to handover in 48 hours.</h2>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Enquiry", d: "Call, WhatsApp or fill the form. We respond within 30 minutes." },
              { n: "02", t: "Free Site Visit", d: "Our specialist measures and shares a 3D mock-up the same day." },
              { n: "03", t: "Installation", d: "Certified team installs in 4–6 hours with zero damage." },
              { n: "04", t: "Handover & Warranty", d: "Tension test, walk-through, and 10-year warranty card." },
            ].map((s) => (
              <div key={s.n} className="card-surface relative">
                <div className="font-display text-5xl text-accent/30">{s.n}</div>
                <h3 className="font-display text-xl mt-3">{s.t}</h3>
                <p className="text-muted-foreground text-sm mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasGrid />

      <Testimonials />

      {/* BLOG */}
      <section className="pt-[64px]">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <span className="eyebrow">From the Journal</span>
              <h2 className="font-display text-3xl md:text-5xl mt-2">Guides & expert insights</h2>
            </div>
            <Link to="/blog" className="btn-outline">All articles <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(0, 3).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-surface group">
                <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · {p.readTime}</div>
                <h3 className="font-display text-xl mt-2 group-hover:text-accent transition">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={homeFaqs} />
      <CTASection />
    </>
  );
}
