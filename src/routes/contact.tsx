import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BUSINESS, LOCATIONS, SERVICES } from "@/data/business";
import { Breadcrumbs } from "@/components/site/Sections";
import { generateSEOMeta } from "@/lib/seo";
import { getFullUrl } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => {
    const title = `Contact Balaji Invisible Grills | Free Quote in Andhra Pradesh`;
    const description = `Get free site visits & transparent quotes within 24 hours. Call, WhatsApp, or email. Serving Visakhapatnam, Vijayawada, Rajahmundry, Guntur, Ongole, Tirupati & Anantapur.`;
    const keywords = ["contact", "free quote", "site visit", "customer support", "inquiry"];
    
    return {
      ...generateSEOMeta({
        title,
        description,
        keywords,
        canonical: getFullUrl("/contact"),
      }),
    };
  },
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState('');
  const isPhoneValid = phone.length === 10 && /^\d{10}$/.test(phone);

  return (
    <>
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact" }]} />

      <section className="container-x py-10 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 md:gap-8 lg:gap-12">
        <div className="card-surface !p-6 md:!p-8 h-fit">
          {submitted ? (
            <div className="text-center py-12">
              <div className="size-16 rounded-full bg-accent/15 text-accent grid place-items-center mx-auto"><Send className="size-7" /></div>
              <h2 className="font-display text-2xl mt-4">Thanks — we'll be in touch within 30 minutes.</h2>
              <p className="text-muted-foreground mt-2">For urgent requests, call <a href={`tel:${BUSINESS.phone}`} className="text-accent font-semibold">{BUSINESS.phoneDisplay}</a>.</p>
            </div>
          ) : (
            <form
              className="grid gap-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const phoneInput = form.querySelector('input[name="phone"]') as HTMLInputElement | null;
                if (!isPhoneValid && phoneInput) {
                  phoneInput.reportValidity();
                  return;
                }
                const fd = new FormData(form);
                try {
                  const res = await fetch('https://formspree.io/f/mpqgbgqp', {
                    method: 'POST',
                    body: fd,
                    headers: {
                      Accept: 'application/json',
                    },
                  });
                  if (res.ok) {
                    setSubmitted(true);
                  } else {
                    const data = await res.json().catch(() => ({}));
                    console.error('Formspree error', data);
                    alert('There was a problem submitting the form. Please try again.');
                  }
                } catch (err) {
                  console.error(err);
                  alert('Network error while submitting. Please try again.');
                }
              }}
            >
              <h2 className="font-display text-2xl">Request a free quote</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Full name *</span>
                  <input name="name" required className="px-3.5 py-2.5 rounded-lg border border-input bg-background" placeholder="Your name" />
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-medium">Phone *</span>
                  <input
                    name="phone"
                    type="text"
                    inputMode="numeric"
                    pattern="\d{10}"
                    title="Enter valid 10 digit number"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setPhone(val);
                    }}
                    required
                    className={`px-3.5 py-2.5 rounded-lg border bg-background transition-colors ${
                      phone && !isPhoneValid ? 'border-red-500' : 'border-input'
                    }`}
                    placeholder="10-digit number"
                  />
                  {phone && !isPhoneValid && (
                    <span className="text-xs text-red-500">Please enter a valid 10-digit number</span>
                  )}
                </label>
              </div>

              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Service *</span>
                <select name="service" required className="px-3.5 py-2.5 rounded-lg border border-input bg-background">
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => <option key={s.slug} value={s.name}>{s.name}</option>)}
                </select>
              </label>

              <button type="submit" disabled={!isPhoneValid} className={`btn-primary justify-center mt-2 transition-opacity ${!isPhoneValid ? 'opacity-50 cursor-not-allowed' : ''}`}><Send className="size-4" /> Request Free Quote</button>
              <p className="text-xs text-muted-foreground text-center">We'll reply within 30 minutes during business hours.</p>
            </form>
          )}
        </div>

        <div>
          <span className="chip">Get in touch</span>
          <h1 className="font-display text-4xl md:text-5xl mt-3 leading-tight">Talk to a safety specialist — free.</h1>
          <p className="mt-4 text-muted-foreground text-lg">Tell us about your balcony, window or sports ground. We'll schedule a free site visit and share a fixed quote within 24 hours.</p>

          <div className="mt-8 space-y-3">
            <a href={`tel:${BUSINESS.phone}`} className="card-surface flex items-center gap-4 !p-5">
              <div className="size-12 rounded-xl bg-accent/15 text-accent grid place-items-center"><Phone className="size-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Call us</div>
                <div className="font-display text-xl">{BUSINESS.phoneDisplay}</div>
                <div className="text-sm text-muted-foreground">{BUSINESS.secondaryPhoneDisplay}</div>
              </div>
            </a>
            <a href={`https://wa.me/${BUSINESS.whatsapp}`} target="_blank" rel="noopener noreferrer" className="card-surface flex items-center gap-4 !p-5">
              <div className="size-12 rounded-xl bg-[oklch(0.7_0.18_150)]/15 text-[oklch(0.55_0.18_150)] grid place-items-center"><WhatsAppIcon className="size-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">WhatsApp</div>
                <div className="font-display text-xl">Chat with us</div>
              </div>
            </a>
            <div className="card-surface flex items-center gap-4 !p-5">
              <div className="size-12 rounded-xl bg-primary/10 text-primary grid place-items-center"><Mail className="size-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-display text-lg">{BUSINESS.email}</div>
              </div>
            </div>
            <div className="card-surface flex items-center gap-4 !p-5">
              <div className="size-12 rounded-xl bg-surface-muted text-foreground grid place-items-center"><MapPin className="size-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">{BUSINESS.branchName}</div>
                <div className="font-semibold">{BUSINESS.address}</div>
              </div>
            </div>
            <div className="card-surface flex items-center gap-4 !p-5">
              <div className="size-12 rounded-xl bg-surface-muted text-foreground grid place-items-center"><MapPin className="size-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Hours</div>
                <div className="font-semibold">{BUSINESS.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
