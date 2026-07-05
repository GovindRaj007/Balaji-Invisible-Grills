import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, LOCATIONS, SERVICES } from "@/data/business";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { LOGO_IMAGE_SOURCES } from "@/data/images";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-x py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="mb-6 inline-flex items-center justify-center rounded-2xl bg-white/95 p-3 shadow-sm">
            <OptimizedImage
              avifSrc={LOGO_IMAGE_SOURCES.avif}
              webpSrc={LOGO_IMAGE_SOURCES.webp}
              fallbackSrc={LOGO_IMAGE_SOURCES.jpg}
              alt="Balaji Invisible Grills Logo"
              className="h-15 w-auto"
            />
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Andhra Pradesh's trusted name for invisible grills, child & pet safety nets, cricket nets and ceiling cloth hangers — installed by certified specialists, backed by 10-year warranty.
          </p>
          <div className="mt-5 space-y-2 text-sm">
            <a href={`tel:${BUSINESS.phone}`} className="flex items-center gap-2 hover:text-accent"><Phone className="size-4" />{BUSINESS.phoneDisplay}</a>
            <a href={`tel:${BUSINESS.secondaryPhone}`} className="flex items-center gap-2 hover:text-accent"><Phone className="size-4" />{BUSINESS.secondaryPhoneDisplay}</a>
            <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2 hover:text-accent"><Mail className="size-4" />{BUSINESS.email}</a>
            <div className="flex items-start gap-2 opacity-80">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span><span className="font-semibold">{BUSINESS.branchName}:</span> {BUSINESS.address}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$service" params={{ service: s.slug }} className="opacity-85 hover:opacity-100 hover:text-accent">{s.name}</Link>
              </li>
            ))}
            <li><Link to="/services" className="opacity-85 hover:text-accent">All Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Service Areas</h4>
          <ul className="space-y-2 text-sm">
            {LOCATIONS.map((l) => (
              <li key={l.slug}>
                <Link to="/locations/$location" params={{ location: l.slug }} className="opacity-85 hover:opacity-100 hover:text-accent">{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-accent">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="opacity-85 hover:text-accent">About Us</Link></li>
            <li><Link to="/blog" className="opacity-85 hover:text-accent">Blog & Guides</Link></li>
            <li><Link to="/contact" className="opacity-85 hover:text-accent">Contact / Free Quote</Link></li>
            <li><Link to="/locations" className="opacity-85 hover:text-accent">All Locations</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs opacity-70 flex flex-wrap justify-between gap-3">
          <span>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</span>
          <span>Serving Andhra Pradesh: Vizag · Vijayawada · Rajahmundry · Guntur · Ongole · Tirupati · Anantapur</span>
        </div>
      </div>
    </footer>
  );
}
