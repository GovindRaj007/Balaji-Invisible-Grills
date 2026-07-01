import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Heart, ShieldCheck, Target, Users } from "lucide-react";
import { BUSINESS } from "@/data/business";
import { CTASection } from "@/components/site/Sections";
import { generateSEOMeta } from "@/lib/seo";
import { getFullUrl } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => {
    const title = `About ${BUSINESS.name} | 12+ Years of Balcony Safety Excellence`;
    const description = `Learn about ${BUSINESS.name}'s journey since 2013. 6,500+ installations, 10-year warranties, and a commitment to family safety across Andhra Pradesh.`;
    const keywords = ["about us", "company history", "experience", "team", "quality standards", "safety commitment"];
    
    return {
      ...generateSEOMeta({
        title,
        description,
        keywords,
        canonical: getFullUrl("/about"),
      }),
    };
  },
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="hero-bg py-16 md:py-24">
        <div className="container-x max-w-4xl text-center">
          <span className="chip">About Us</span>
          <h1 className="font-display text-4xl md:text-6xl mt-4 leading-tight">Built on a simple promise: every family deserves a safe balcony.</h1>
          <p className="mt-6 text-lg text-muted-foreground">Since 2013, we've installed over 6,500 invisible grills and safety nets across Andhra Pradesh — and never had a single structural failure.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 mb-6">From one Vizag balcony to all of Andhra Pradesh.</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{BUSINESS.name} started in 2013 with one mission: bring world-class balcony safety to Andhra Pradesh families at honest, transparent prices.</p>
              <p>Our founder watched too many families compromise — either accepting rust-prone iron grills that ruined their view, or skipping safety altogether. So we sourced 316L marine-grade stainless steel directly from manufacturers, trained our own installers, and built a brand around two non-negotiables: <strong>premium materials</strong> and <strong>spotless installation</strong>.</p>
              <p>Twelve years later, we serve seven cities, employ over 40 certified installers, and stand behind every job with India's longest balcony safety warranty.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: `${BUSINESS.yearsExperience}+`, l: "Years in business" },
              { v: `${BUSINESS.projectsCompleted.toLocaleString()}+`, l: "Installations" },
              { v: "40+", l: "Certified installers" },
              { v: "7", l: "Cities served" },
              { v: "0", l: "Structural failures" },
              { v: "10 yr", l: "Warranty standard" },
            ].map((s) => (
              <div key={s.l} className="card-surface text-center">
                <div className="font-display text-3xl text-accent">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <span className="eyebrow">What we stand for</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-10">Our values</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, t: "Safety is non-negotiable", d: "Every cable, every knot, every anchor is rated and tested. We never cut corners." },
              { icon: Heart, t: "Honest pricing", d: "Fixed per-sqft rates. No surprise costs. The number you see is the number you pay." },
              { icon: Award, t: "Premium materials only", d: "316L stainless. UV-stabilised HDPE. Anodised aluminium. Period." },
              { icon: Users, t: "Our installers, our accountability", d: "Zero subcontracting. Every installer wears our badge and stands behind their work." },
              { icon: Target, t: "On time, every time", d: "We commit to a slot and we honour it. Your day is not disrupted." },
              { icon: CheckCircle2, t: "Lifetime support", d: "We service every installation we do. One call and our team is back." },
            ].map((v, i) => (
              <div key={i} className="card-surface">
                <v.icon className="size-7 text-accent" />
                <h3 className="font-display text-xl mt-4">{v.t}</h3>
                <p className="text-muted-foreground text-sm mt-2">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <span className="eyebrow">Certifications & Standards</span>
          <h2 className="font-display text-3xl md:text-4xl mt-2 mb-8">Built to international standards.</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {["BIS Safety Compliant", "ISO 9001 Quality Process", "316L Material Certified", "MSME Registered"].map((c) => (
              <div key={c} className="card-surface text-center">
                <CheckCircle2 className="size-7 text-accent mx-auto" />
                <div className="font-semibold mt-3 text-sm">{c}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="btn-primary">Book a free site visit</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
