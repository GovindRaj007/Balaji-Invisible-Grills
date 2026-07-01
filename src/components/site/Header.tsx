import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Phone } from "lucide-react";
import { BUSINESS, SERVICES, LOCATIONS } from "@/data/business";
import { HERO_IMAGE, LOGO_IMAGE } from "@/data/images";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
} from "@/components/ui/drawer";

export function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs md:text-sm">
      <div className="container-x flex items-center justify-between py-2 gap-4">
        <span className="opacity-90">Free site visit & transparent quote within 24 hours</span>
        <a href={`tel:${BUSINESS.phone}`} className="hidden sm:inline-flex items-center gap-2 font-semibold hover:text-accent">
          <Phone className="size-3.5" /> {BUSINESS.phoneDisplay}
        </a>
      </div>
    </div>
  );
}

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locOpen, setLocOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border">
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group hover:opacity-80 transition-opacity">
          <img src={LOGO_IMAGE} alt="Balaji Invisible Grills Logo" className="h-16 md:h-18 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium">
          <Link to="/" className="px-3 py-2 hover:text-accent" activeProps={{ className: "text-accent" }} activeOptions={{ exact: true }}>Home</Link>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Link to="/services" className="px-3 py-2 hover:text-accent inline-flex items-center gap-1">Services</Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 w-72 bg-popover border border-border rounded-xl shadow-xl p-2">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to="/services/$service" params={{ service: s.slug }} className="block px-3 py-2 rounded-lg hover:bg-muted">
                    <div className="font-semibold text-sm">{s.name}</div>
                    <div className="text-xs text-muted-foreground line-clamp-1">{s.short}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative" onMouseEnter={() => setLocOpen(true)} onMouseLeave={() => setLocOpen(false)}>
            <Link to="/locations" className="px-3 py-2 hover:text-accent inline-flex items-center gap-1">Locations</Link>
            {locOpen && (
              <div className="absolute top-full left-0 w-56 bg-popover border border-border rounded-xl shadow-xl p-2 grid grid-cols-1">
                {LOCATIONS.map((l) => (
                  <Link key={l.slug} to="/locations/$location" params={{ location: l.slug }} className="px-3 py-2 rounded-lg hover:bg-muted text-sm">{l.name}</Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/about" className="px-3 py-2 hover:text-accent">About</Link>
          <Link to="/blog" className="px-3 py-2 hover:text-accent">Blog</Link>
          <Link to="/contact" className="px-3 py-2 hover:text-accent">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${BUSINESS.phone}`} className="hidden md:inline-flex btn-primary !py-2.5 !px-4 text-sm">
            <Phone className="size-4" /> Call Now
          </a>

          {/* Mobile Drawer Trigger */}
          <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <DrawerTrigger asChild className="lg:hidden">
              <button className="p-2 hover:bg-muted rounded-lg transition-colors" aria-label="Toggle menu">
                <Menu className="size-5" />
              </button>
            </DrawerTrigger>

            {/* Drawer Content */}
            <DrawerContent className="border-t border-white/10 rounded-t-3xl p-0 overflow-hidden h-[80vh]">
              {/* Background with Image and Gradient Overlay */}
              <div className="absolute inset-0">
                <img src={HERO_IMAGE} alt="" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-foreground/65 to-primary/60" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>

                {/* Scrollable Menu Items */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
                  <Link
                    to="/"
                    onClick={() => setIsDrawerOpen(false)}
                    className="block py-2.5 px-4 rounded-lg text-white hover:bg-white/10 transition-colors font-medium"
                  >
                    Home
                  </Link>

                  {/* Services Dropdown */}
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "Services" ? null : "Services")}
                      className="w-full flex items-center justify-between py-2.5 px-4 rounded-lg text-white hover:bg-white/10 transition-colors font-medium text-left"
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === "Services" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === "Services" && (
                      <div className="pl-4 space-y-1 max-h-64 overflow-y-auto">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to="/services/$service"
                            params={{ service: s.slug }}
                            onClick={() => setIsDrawerOpen(false)}
                            className="block py-2 px-4 text-sm text-white/70 hover:text-accent transition-colors rounded-lg"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Locations Dropdown */}
                  <div>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === "Locations" ? null : "Locations")}
                      className="w-full flex items-center justify-between py-2.5 px-4 rounded-lg text-white hover:bg-white/10 transition-colors font-medium text-left"
                    >
                      Locations
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          activeDropdown === "Locations" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === "Locations" && (
                      <div className="pl-4 space-y-1 max-h-64 overflow-y-auto">
                        {LOCATIONS.map((l) => (
                          <Link
                            key={l.slug}
                            to="/locations/$location"
                            params={{ location: l.slug }}
                            onClick={() => setIsDrawerOpen(false)}
                            className="block py-2 px-4 text-sm text-white/70 hover:text-accent transition-colors rounded-lg"
                          >
                            {l.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* About */}
                  <Link
                    to="/about"
                    onClick={() => setIsDrawerOpen(false)}
                    className="block py-2.5 px-4 rounded-lg text-white hover:bg-white/10 transition-colors font-medium"
                  >
                    About
                  </Link>

                  {/* Blog */}
                  <Link
                    to="/blog"
                    onClick={() => setIsDrawerOpen(false)}
                    className="block py-2.5 px-4 rounded-lg text-white hover:bg-white/10 transition-colors font-medium"
                  >
                    Blog
                  </Link>

                  {/* Contact */}
                  <Link
                    to="/contact"
                    onClick={() => setIsDrawerOpen(false)}
                    className="block py-2.5 px-4 rounded-lg text-white hover:bg-white/10 transition-colors font-medium"
                  >
                    Contact
                  </Link>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto pb-8 px-4 flex flex-col gap-4">
                  <a href={`tel:${BUSINESS.phone}`} onClick={() => setIsDrawerOpen(false)}>
                    <button className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                      <Phone className="w-4 h-4" />
                      Call {BUSINESS.phoneDisplay}
                    </button>
                  </a>
                  <Link to="/contact" onClick={() => setIsDrawerOpen(false)}>
                    <button className="w-full py-3 px-4 bg-accent text-accent-foreground font-semibold rounded-xl hover:bg-accent/90 transition-colors">
                      Get Free Quote
                    </button>
                  </Link>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
