// Shared JSON-LD (schema.org) generators.
import { BUSINESS, LOCATIONS, SERVICES } from "@/data/business";
import { getFullUrl } from "@/config/site";

const ORG_ID = getFullUrl("/#organization");
const WEBSITE_ID = getFullUrl("/#website");

function cityList() {
  return LOCATIONS.map((l) => ({
    "@type": "City",
    name: l.name,
    ...(l.altName ? { alternateName: l.altName } : {}),
    containedInPlace: { "@type": "State", name: "Andhra Pradesh" },
  }));
}

/** "From ₹X per sq ft" offer for services with a published starting price. */
function startingOffer(price: number, url?: string) {
  return {
    "@type": "Offer",
    priceCurrency: "INR",
    ...(url ? { url } : {}),
    availability: "https://schema.org/InStock",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      minPrice: price,
      price,
      priceCurrency: "INR",
      unitText: "per sq ft",
      unitCode: "FTK",
    },
  };
}

/** LocalBusiness — emitted once per page from the root route. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": ORG_ID,
    name: BUSINESS.name,
    url: getFullUrl("/"),
    logo: getFullUrl("/favicon.jpg"),
    image: getFullUrl("/og-image.jpg"),
    description:
      "Invisible grills, balcony safety nets, pigeon nets, cricket practice nets and ceiling cloth hangers installed across Vijayawada, Vizag, Guntur, Rajahmundry, Tirupati, Ongole and Anantapur.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: "IN",
    },
    contactPoint: [
      { "@type": "ContactPoint", telephone: BUSINESS.phone, contactType: "customer service", areaServed: "IN", availableLanguage: ["en", "te", "hi"] },
      { "@type": "ContactPoint", telephone: BUSINESS.secondaryPhone, contactType: "sales", areaServed: "IN" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    areaServed: cityList(),
    priceRange: "₹₹",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Balcony safety services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.keyword, url: getFullUrl(`/services/${s.slug}`) },
        ...(s.startingPrice ? { priceSpecification: startingOffer(s.startingPrice).priceSpecification } : {}),
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: BUSINESS.name,
    url: getFullUrl("/"),
    publisher: { "@id": ORG_ID },
    inLanguage: "en-IN",
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: getFullUrl(it.url),
    })),
  };
}

export function serviceSchema(serviceSlug: string, locationSlug?: string) {
  const s = SERVICES.find((x) => x.slug === serviceSlug)!;
  const l = locationSlug ? LOCATIONS.find((x) => x.slug === locationSlug) : undefined;
  const path = l ? `/service-areas/${s.slug}/${l.slug}` : `/services/${s.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": getFullUrl(`${path}#service`),
    name: l ? `${s.keyword} in ${l.name}` : s.keyword,
    serviceType: s.keyword,
    alternateName: s.types.map((t) => t.name),
    description: l ? l.serviceNotes[s.slug] : s.intro,
    url: getFullUrl(path),
    provider: { "@id": ORG_ID },
    ...(s.startingPrice ? { offers: startingOffer(s.startingPrice, getFullUrl(path)) } : {}),
    areaServed: l
      ? { "@type": "City", name: l.name, ...(l.altName ? { alternateName: l.altName } : {}) }
      : cityList(),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
