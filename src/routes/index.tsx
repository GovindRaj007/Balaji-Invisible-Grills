import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck, Sparkles, Star, Wrench } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BUSINESS, LOCATIONS, SERVICES, BLOG_POSTS } from "@/data/business";
import { HERO_IMAGE_SOURCES, SERVICE_IMAGE_SOURCES } from "@/data/images";
import { CTASection, FAQ, Testimonials, TrustIndicators } from "@/components/site/Sections";
import { SITE_CONFIG } from "@/config/site";
import { faqSchema } from "@/components/site/JsonLd";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { buildHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    buildHead({
      // Home targets the broad, location-free service terms + brand. City-specific
      // searches ("invisible grills in vijayawada") are owned by the service × city pages.
      title: "Invisible Grills, Safety Nets & Cloth Hangers in Andhra Pradesh | Balaji",
      description:
        "Invisible grills for balcony & windows from ₹100/sq ft, pigeon & children safety nets, cricket nets and cloth hangers in Vijayawada, Vizag & across AP.",
      path: "/",
      ogImage: SITE_CONFIG.ogImages.default,
      keywords: [
        "invisible grills", "invisible grills near me", "invisible grills for balcony", "invisible grills for windows",
        "balcony safety nets", "pigeon nets", "children safety nets", "cricket practice nets", "ceiling cloth hanger",
      ],
      links: [
        { rel: "preload", as: "image", href: HERO_IMAGE_SOURCES.avif, type: "image/avif", fetchPriority: "high" },
      ],
      schemas: [faqSchema(homeFaqs)],
    }),
  component: HomePage,
});

const homeFaqs = [
  { q: "Do you install invisible grills near me?", a: "We install invisible grills, balcony safety nets, pigeon nets and ceiling cloth hangers across Vijayawada, Vizag (Visakhapatnam), Guntur, Rajahmundry, Tirupati, Ongole and Anantapur — with surrounding towns covered on request. Our main branch is in Vijayawada." },
  { q: "What is the price of invisible grills per sq ft?", a: "Invisible grills start from ₹100 per sq ft. The final price depends on SS 304 vs SS 316 cable, cable thickness, spacing and floor height. We share a fixed, itemised quote after a free site visit — usually within 24 hours." },
  { q: "Invisible grills or safety nets — which is better for my balcony?", a: "Invisible grills are a permanent, premium stainless steel solution with a 10-year warranty. Balcony safety nets cost less, install in 60–90 minutes and are ideal for pigeon control or rented homes. Many families use grills on the main balcony and pigeon nets on the utility balcony." },
  { q: "What warranty do you provide?", a: "10-year structural warranty on invisible grill tracks and cables, 5-year UV warranty on safety nets, and 3-year warranty on cricket nets." },
  { q: "How long does installation take?", a: "A typical balcony invisible grill takes 4–6 hours, balcony safety nets 60–90 minutes, and a ceiling cloth hanger under an hour." },
  { q: "Will invisible grills rust in coastal cities like Vizag?", a: "No — we use SS 316 marine-grade stainless steel, engineered specifically for the salt-air corrosion you get in Vizag and other coastal towns." },
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
                <OptimizedImage
                  avifSrc={HERO_IMAGE_SOURCES.avif}
                  webpSrc={HERO_IMAGE_SOURCES.webp}
                  fallbackSrc={HERO_IMAGE_SOURCES.jpg}
                  alt="Premium invisible grill on a high-rise apartment balcony in Andhra Pradesh"
                  width={1280}
                  height={1600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
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
                  Invisible Grills &amp; Balcony Safety Nets <span className="text-accent">in Andhra Pradesh</span>
                </h1>
                <p className="mt-3 text-base md:text-lg font-medium text-foreground/80">Uninterrupted views. Uncompromising safety.</p>

                {/* Subheadline */}
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm md:text-base text-muted-foreground font-medium">
                  <span>Vijayawada · Vizag · Guntur · Rajahmundry · Tirupati · Ongole · Anantapur</span>
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
              
              <p className="font-display text-5xl lg:text-6xl mt-6 leading-[1.1]">
                Invisible Grills &amp; Balcony Safety Nets <span className="text-accent">in Andhra Pradesh</span>
              </p>
              <p className="mt-4 text-xl font-medium text-foreground/80">Uninterrupted views. Uncompromising safety.</p>

              {/* Subheadline */}
              <div className="mt-6 flex items-center gap-4 text-base text-muted-foreground font-medium">
                <span>Vijayawada · Vizag · Guntur · Rajahmundry · Tirupati · Ongole · Anantapur</span>
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
                <OptimizedImage
                  avifSrc={HERO_IMAGE_SOURCES.avif}
                  webpSrc={HERO_IMAGE_SOURCES.webp}
                  fallbackSrc={HERO_IMAGE_SOURCES.jpg}
                  alt="Premium invisible grill on a high-rise apartment balcony in Andhra Pradesh"
                  width={1280}
                  height={1600}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="w-full h-[600px] object-cover"
                />
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
              <h2 className="font-display text-3xl md:text-5xl mt-2">Invisible grills, safety nets, cricket nets &amp; cloth hangers</h2>
            </div>
            <Link to="/services" className="btn-outline">View all services <ArrowRight className="size-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/services/$service" params={{ service: s.slug }} className="card-surface group !p-0 overflow-hidden">
                <div className="aspect-[16/8] relative overflow-hidden">
                  <OptimizedImage
                    avifSrc={SERVICE_IMAGE_SOURCES[s.slug].avif}
                    webpSrc={SERVICE_IMAGE_SOURCES[s.slug].webp}
                    fallbackSrc={SERVICE_IMAGE_SOURCES[s.slug].jpg}
                    alt={`${s.keyword} installation by ${BUSINESS.shortName}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                  <div className="absolute top-4 left-4 chip !bg-white/15 !text-white !border-white/25 backdrop-blur">{s.name}</div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{s.keyword}</h3>
                  <p className="text-sm font-medium text-accent mt-1">{s.hero}</p>
                  <p className="text-muted-foreground mt-2">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-accent font-semibold text-sm group-hover:gap-3 transition-all">Explore {s.name} <ArrowRight className="size-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KEYWORD INTRO — plain, crawlable copy covering every core service term */}
      <section className="pt-[64px]">
        <div className="container-x max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl">Balcony safety specialists across Andhra Pradesh</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {BUSINESS.name} installs <Link to="/services/$service" params={{ service: "invisible-grills" }} className="text-accent font-semibold hover:underline">invisible grills for balconies and windows</Link>,{" "}
            <Link to="/services/$service" params={{ service: "child-pet-safety-nets" }} className="text-accent font-semibold hover:underline">balcony safety nets, pigeon nets and children safety nets</Link>,{" "}
            <Link to="/services/$service" params={{ service: "cricket-sports-nets" }} className="text-accent font-semibold hover:underline">cricket practice nets and sports nets</Link> and{" "}
            <Link to="/services/$service" params={{ service: "ceiling-cloth-hangers" }} className="text-accent font-semibold hover:underline">ceiling cloth hangers</Link> for apartments, villas, schools and academies.
            With our main branch in Vijayawada and teams covering Vizag (Visakhapatnam), Guntur, Rajahmundry, Tirupati, Ongole and Anantapur,
            we offer a free site visit, a fixed transparent quote and a written warranty on every installation.
          </p>
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

      {/* SERVICES BY CITY — direct internal links to every service × city page */}
      <section className="pt-[64px]">
        <div className="container-x">
          <span className="eyebrow">Services near you</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Find our services in your city</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LOCATIONS.map((l) => (
              <div key={l.slug} className="card-surface">
                <Link to="/locations/$location" params={{ location: l.slug }} className="font-display text-xl flex items-center gap-2 hover:text-accent">
                  <MapPin className="size-4 text-accent" /> {l.name}
                </Link>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link to="/service-areas/$service/$location" params={{ service: s.slug, location: l.slug }} className="text-muted-foreground hover:text-accent">
                        {s.keyword} in {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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
