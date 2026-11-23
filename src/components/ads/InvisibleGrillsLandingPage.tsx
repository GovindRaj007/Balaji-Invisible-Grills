import { useState, useRef } from "react";
import { BUSINESS } from "@/data/business";
import { HERO_IMAGE_SOURCES, SERVICE_IMAGE_SOURCES } from "@/data/images";

const PHONE_NUMBER = BUSINESS.phoneDisplay;
const PHONE_HREF = BUSINESS.phone.replace(/\s+/g, "");
const WHATSAPP_HREF = BUSINESS.whatsapp;

const LINKS = {
  invisibleGrills: "/services/invisible-grills",
  ceilingClothHangers: "/services/ceiling-cloth-hangers",
  vijayawada: "/locations/vijayawada",
  visakhapatnam: "/locations/vizag",
  rajahmundry: "/locations/rajahmundry",
  guntur: "/locations/guntur",
  contact: "https://www.balajiinvisiblegrills.in/contact",
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "Are invisible grills safe for balconies with kids and pets?",
    a: "Yes. Balcony invisible grills use tensioned SS316 marine-grade wires spaced to hold body-weight loads, closing off the open edge without the visual bulk of a traditional MS grill — so the balcony stays child- and pet-safe and still looks like it has no grill at all.",
  },
  {
    q: "How long does installation take?",
    a: "Most balcony invisible grill installations are completed in 3-4 hours per balcony. Ceiling cloth hanger installation typically takes under an hour per unit.",
  },
  {
    q: "Do you install invisible grills near me?",
    a: "We install across Vijayawada, Vizag (Visakhapatnam), Rajahmundry, Guntur and nearby towns in Andhra Pradesh, with a free on-site measurement visit before every quote.",
  },
];

const LOCATIONS: { name: string; href: string }[] = [
  { name: "Vijayawada", href: LINKS.vijayawada },
  { name: "Visakhapatnam (Vizag)", href: LINKS.visakhapatnam },
  { name: "Rajahmundry", href: LINKS.rajahmundry },
  { name: "Guntur", href: LINKS.guntur },
];

function WireLines({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 40" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <line x1="0" y1="38" x2="400" y2="2" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="24" x2="400" y2="-12" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 flex-none" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="10" fill="#2E7D53" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#F5F6F4" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InvisibleGrillsLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const ctaRef = useRef<HTMLDivElement>(null);

  function scrollToCta() {
    ctaRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="bg-[#F5F6F4] text-[#142033]">
      <section aria-labelledby="hero-heading" className="relative overflow-hidden bg-[#0B131F] text-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "radial-gradient(130% 160% at 20% 0%, #33486D 0%, #142033 55%, #0B131F 100%)" }} aria-hidden="true" />
            <div className="relative p-2 sm:p-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#E3A85E]">Vijayawada · Vizag · Rajahmundry · Guntur</p>
              <h1 id="hero-heading" className="mt-4 font-[Space_Grotesk,_sans-serif] text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[2.75rem]">Balcony Invisible Grills &amp; Ceiling Cloth Hangers, installed near you</h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[#F0F2F4] sm:text-lg">SS316 invisible grills for balconies keep the view open and the railing safe — no bulky bars, no blocked sunlight. Pair it with a space-saving ceiling cloth hanger and get both jobs done in one visit, with a written 10-year warranty.</p>

              <ul className="mt-6 flex flex-col gap-2 text-sm font-medium text-white sm:flex-row sm:gap-6">
                <li className="flex items-center gap-2"><CheckIcon /> Free on-site measurement</li>
                <li className="flex items-center gap-2"><CheckIcon /> SS316 marine-grade wire</li>
                <li className="flex items-center gap-2"><CheckIcon /> 10-year warranty</li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={scrollToCta} className="inline-flex items-center justify-center rounded-md bg-[#C1873D] px-6 py-3 text-sm font-semibold text-[#142033] transition-colors hover:bg-[#D89A4E]">Get a free quote</button>
                <a href={`tel:${PHONE_HREF}`} className="inline-flex items-center justify-center rounded-md border border-white/50 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10" aria-label={`Call ${BUSINESS.name} at ${PHONE_NUMBER}`}>Call {PHONE_NUMBER}</a>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src={HERO_IMAGE_SOURCES.webp} alt="Balcony fitted with invisible grill wires" className="aspect-[4/3] w-full rounded-lg object-cover shadow-xl" />
          </div>
        </div>
      </section>

      <nav aria-label="Our services" className="border-b border-[#B8C0C6]/60 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-center sm:gap-8 sm:px-6 lg:px-8">
          <a href={LINKS.invisibleGrills} className="text-center text-sm font-semibold text-[#142033] underline decoration-[#C1873D] decoration-2 underline-offset-4 hover:text-[#C1873D]">Invisible Grills for Balconies</a>
          <span className="hidden text-[#B8C0C6] sm:inline" aria-hidden="true">|</span>
          <a href={LINKS.ceilingClothHangers} className="text-center text-sm font-semibold text-[#142033] underline decoration-[#C1873D] decoration-2 underline-offset-4 hover:text-[#C1873D]">Ceiling Cloth Hangers</a>
        </div>
      </nav>

      <section aria-labelledby="ig-heading" className="border-t border-[#B8C0C6]/60 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <img src={SERVICE_IMAGE_SOURCES["invisible-grills"].webp} alt="Close-up of stainless steel invisible grill wires" className="aspect-[4/3] w-full rounded-lg object-cover shadow-md" />
          </div>
          <div>
            <h2 id="ig-heading" className="font-[Space_Grotesk,_sans-serif] text-2xl font-semibold sm:text-3xl">Invisible Grills for Balconies &amp; Windows</h2>
            <p className="mt-3 leading-relaxed text-[#4B5A68]">Whether you're comparing invisible grills for your balcony in Vijayawada or looking for invisible grills near me in Vizag, the fitting works the same way: stainless steel wires are tensioned across the opening in a grid, closing the gap without a single visible bar.</p>
            <ul className="mt-5 space-y-2 text-sm text-[#142033]">
              <li className="flex items-start gap-2"><CheckIcon /> Balcony invisible grills, window invisible grills and duct-area invisible grills</li>
              <li className="flex items-start gap-2"><CheckIcon /> SS316 wire, powder-coated fittings</li>
              <li className="flex items-start gap-2"><CheckIcon /> Custom-measured for every balcony shape</li>
            </ul>
            <a href={LINKS.invisibleGrills} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C1873D] underline underline-offset-4 hover:text-[#A76F2E]">See invisible grill specifications &amp; pricing <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </section>

      <section aria-labelledby="cch-heading" className="border-t border-[#B8C0C6]/60 bg-[#F5F6F4]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
          <div className="md:order-2">
            <img src={SERVICE_IMAGE_SOURCES["ceiling-cloth-hangers"].webp} alt="Ceiling-mounted cloth drying hanger" className="aspect-[4/3] w-full rounded-lg object-cover shadow-md" />
          </div>
          <div className="md:order-1">
            <h2 id="cch-heading" className="font-[Space_Grotesk,_sans-serif] text-2xl font-semibold sm:text-3xl">Ceiling Cloth Hangers for Small Balconies &amp; Utility Areas</h2>
            <p className="mt-3 leading-relaxed text-[#4B5A68]">A ceiling cloth hanger mounts flush against the ceiling and lowers on a pulley when you need to hang laundry. It's the fix most apartment balconies need once the invisible grill goes up and floor space gets tight.</p>
            <ul className="mt-5 space-y-2 text-sm text-[#142033]">
              <li className="flex items-start gap-2"><CheckIcon /> Lifts flush to the ceiling when not in use</li>
              <li className="flex items-start gap-2"><CheckIcon /> Rust-resistant hardware, smooth pulley action</li>
              <li className="flex items-start gap-2"><CheckIcon /> Installed in under an hour per unit</li>
            </ul>
            <a href={LINKS.ceilingClothHangers} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#C1873D] underline underline-offset-4 hover:text-[#A76F2E]">See ceiling cloth hanger options <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>
      </section>

      <section aria-labelledby="locations-heading" className="border-t border-[#B8C0C6]/60 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 id="locations-heading" className="font-[Space_Grotesk,_sans-serif] text-2xl font-semibold sm:text-3xl">Invisible grill &amp; ceiling cloth hanger installation, city by city</h2>
          <p className="mt-3 max-w-2xl text-[#4B5A68]">Looking for invisible grills near you specifically? Jump to your city for local pricing, turnaround time and past work.</p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((loc) => (
              <li key={loc.href}>
                <a href={loc.href} className="block rounded-lg border border-[#B8C0C6]/60 px-5 py-4 text-sm font-semibold text-[#142033] transition-colors hover:border-[#C1873D] hover:text-[#C1873D]">Invisible grills in {loc.name}<span className="mt-1 block text-xs font-normal text-[#4B5A68]">Balcony grills &amp; ceiling hangers</span></a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 id="faq-heading" className="font-[Space_Grotesk,_sans-serif] text-2xl font-semibold sm:text-3xl">Common questions before booking</h2>
        <div className="mt-8 divide-y divide-[#B8C0C6]/60 border-y border-[#B8C0C6]/60">
          {FAQS.map((item, i) => {
            const isOpen = openFaq === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.q}>
                <h3>
                  <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenFaq(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-[#142033] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C1873D] sm:text-base">
                    {item.q}
                    <span aria-hidden="true" className="flex-none text-[#C1873D]">{isOpen ? "−" : "+"}</span>
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="pb-4 text-sm leading-relaxed text-[#4B5A68]">{item.a}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="cta-heading" ref={ctaRef} className="border-t border-[#B8C0C6]/60 bg-[#142033] text-[#F5F6F4]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <h2 id="cta-heading" className="font-[Space_Grotesk,_sans-serif] text-2xl font-semibold sm:text-3xl">Get a free quote for your balcony or ceiling</h2>
            <p className="mt-3 max-w-md text-[#C7CDD3]">Tell us your city and what you need — a balcony invisible grill, a ceiling cloth hanger, or both — and we'll call to schedule a free site visit.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`tel:${PHONE_HREF}`} className="inline-flex items-center justify-center rounded-md border border-[#C7CDD3]/40 px-5 py-3 text-sm font-semibold hover:bg-white/10">Call {PHONE_NUMBER}</a>
              <a href={`https://wa.me/${WHATSAPP_HREF}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md border border-[#C7CDD3]/40 px-5 py-3 text-sm font-semibold hover:bg-white/10">Message on WhatsApp</a>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center rounded-lg bg-white p-6 text-[#142033] sm:p-8">
            <h3 className="font-[Space_Grotesk,_sans-serif] text-lg font-semibold">Request a free site visit</h3>
            <p className="mt-2 text-sm text-[#4B5A68]">Submit your details on our contact page and we'll get back to you to schedule a free measurement visit for your balcony invisible grill or ceiling cloth hanger.</p>
            <a href={LINKS.contact} className="mt-5 inline-flex w-full items-center justify-center rounded-md bg-[#C1873D] px-6 py-3 text-sm font-semibold text-[#142033] transition-colors hover:bg-[#D89A4E]">Submit form</a>
            <p className="mt-3 text-center text-xs text-[#4B5A68]">Opens our contact page — takes under a minute.</p>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-[#B8C0C6]/60 bg-white sm:hidden">
        <a href={`tel:${PHONE_HREF}`} className="flex-1 border-r border-[#B8C0C6]/60 px-4 py-3 text-center text-sm font-semibold text-[#142033]">Call now</a>
        <a href={`https://wa.me/${WHATSAPP_HREF}`} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-3 text-center text-sm font-semibold text-[#C1873D]">WhatsApp</a>
      </div>

      <div className="h-14 sm:hidden" aria-hidden="true" />
    </div>
  );
}

export { FAQS as LANDING_FAQS };
