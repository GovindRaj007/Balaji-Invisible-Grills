import React from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Phone, ShieldCheck, Star, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BUSINESS, LOCATIONS, SERVICES } from "@/data/business";

export function Breadcrumbs({ items }: { items: { name: string; href?: string; params?: any }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        {items.map((it, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="size-3" />}
            {it.href ? (
              <Link to={it.href as any} params={it.params} className="hover:text-accent">{it.name}</Link>
            ) : (
              <span className="text-foreground font-medium">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function TrustIndicators() {
  const items = [
    { v: `${BUSINESS.yearsExperience}+`, l: "Years of Experience" },
    { v: `${BUSINESS.projectsCompleted.toLocaleString()}+`, l: "Installations Completed" },
    { v: "10 Yr", l: "Structural Warranty" },
    { v: `${BUSINESS.rating}★`, l: `${BUSINESS.reviewCount}+ Google Reviews` },
  ];
  return (
    <div className="container-x">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 -mt-8 md:-mt-12 relative z-10">
        {items.map((it) => (
          <div key={it.l} className="bg-card border border-border rounded-2xl p-4 md:p-5 text-center shadow-sm">
            <div className="font-display text-2xl md:text-3xl text-primary font-semibold">{it.v}</div>
            <div className="text-xs md:text-sm text-muted-foreground mt-1">{it.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CTASection({ title, sub, location }: { title?: string; sub?: string; location?: string }) {
  const t = title ?? `Get a Free Site Visit ${location ? `in ${location}` : "Today"}`;
  return (
    <section className="pt-[64px]">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 md:p-14">
          <div className="absolute inset-0 opacity-30 hero-bg pointer-events-none" />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <span className="chip !bg-accent/20 !border-accent/40 !text-accent">Free Quote · 24h Response</span>
              <h2 className="font-display text-3xl md:text-5xl mt-3 leading-tight">{t}</h2>
              <p className="opacity-85 mt-4 max-w-lg">{sub ?? "Talk to our specialist now. Transparent pricing. No-obligation site visit. 10-year warranty on all installations."}</p>
            </div>
            <div className="flex flex-col gap-3">
              <a href={`tel:${BUSINESS.phone}`} className="btn-primary justify-center text-base"><Phone className="size-5" /> Call {BUSINESS.phoneDisplay}</a>
              <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline justify-center !bg-white/10 !border-white/20 !text-white hover:!text-accent">
                <WhatsAppIcon className="size-5" /> WhatsApp Us
              </a>
              <Link to="/contact" className="text-center text-sm underline opacity-80 hover:opacity-100">or fill the enquiry form →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="pt-[64px] bg-surface">
      <div className="container-x max-w-4xl">
        <span className="eyebrow">FAQs</span>
        <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={i} className="group card-surface !p-0">
              <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4 font-semibold">
                <span>{f.q}</span>
                <ChevronRight className="size-5 transition-transform group-open:rotate-90 shrink-0 mt-0.5 text-accent" />
              </summary>
              <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ items }: { items?: { name: string; area: string; text: string; rating: number }[] }) {
  const t = items ?? LOCATIONS.slice(0, 3).map((l) => l.testimonial);
  return (
    <section className="pt-[64px]">
      <div className="container-x">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="eyebrow">Reviews</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2">What our clients say</h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-accent text-accent" />)}</div>
            <span className="font-semibold">{BUSINESS.rating}/5</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {t.map((r, i) => (
            <div key={i} className="card-surface">
              <div className="flex gap-0.5">{Array.from({ length: r.rating }).map((_, k) => <Star key={k} className="size-4 fill-accent text-accent" />)}</div>
              <p className="mt-3 text-foreground leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.area}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceAreasGrid({ exclude }: { exclude?: string }) {
  return (
    <section className="pt-[64px] bg-surface">
      <div className="container-x">
        <span className="eyebrow">Service Areas</span>
        <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">We install across Andhra Pradesh</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {LOCATIONS.filter((l) => l.slug !== exclude).map((l) => (
            <Link key={l.slug} to="/locations/$location" params={{ location: l.slug }} className="card-surface flex items-center justify-between !p-4">
              <span className="font-semibold">{l.name}</span>
              <ChevronRight className="size-4 text-accent" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedServices({ exclude }: { exclude?: string }) {
  return (
    <section className="pt-[64px]">
      <div className="container-x">
        <span className="eyebrow">Related Services</span>
        <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Explore more from {BUSINESS.shortName}</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {SERVICES.filter((s) => s.slug !== exclude).slice(0, 3).map((s) => (
            <Link key={s.slug} to="/services/$service" params={{ service: s.slug }} className="card-surface group">
              <div className="flex items-center gap-2 text-accent text-sm font-semibold"><ShieldCheck className="size-4" /> Service</div>
              <h3 className="font-display text-xl mt-2">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.short}</p>
              <span className="mt-4 inline-flex text-sm text-accent font-semibold group-hover:gap-2 transition-all">Learn more <ChevronRight className="size-4" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeatureList({ items, title }: { items: string[]; title?: string }) {
  return (
    <div>
      {title && <h3 className="font-display text-2xl mb-4">{title}</h3>}
      <ul className="grid sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <li key={it} className="flex gap-2.5 items-start text-sm leading-relaxed">
            <CheckCircle2 className="size-5 text-accent shrink-0 mt-0.5" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Gallery({ caption, images, count }: { caption?: string; images: string[]; count?: number }) {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const displayImages = typeof count === "number" ? images.slice(0, count) : images;

  return (
    <section className="pt-[64px] bg-surface">
      <div className="container-x">
        <span className="eyebrow">Gallery</span>
        <h2 className="font-display text-3xl md:text-4xl mt-2 mb-2">See our work in action</h2>
        {caption && <p className="text-muted-foreground max-w-2xl mb-8">{caption}</p>}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {displayImages.map((src, i) => (
            <div key={i} className="aspect-[4/3] rounded-2xl relative overflow-hidden group cursor-pointer" onClick={() => setSelectedImage(src)}>
              <img src={src} alt={`Installation by ${BUSINESS.shortName} #${1000 + i}`} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Full view" className="w-full h-auto rounded-lg" />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-lg transition-colors"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
