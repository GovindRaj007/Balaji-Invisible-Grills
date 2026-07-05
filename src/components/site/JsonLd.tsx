// Helper not used as a component — kept here for shared schema generators.
import { BUSINESS, LOCATIONS, SERVICES } from "@/data/business";
import { getFullUrl } from "@/config/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "/#organization",
    name: BUSINESS.name,
    image: getFullUrl("/og-image.jpg"),
    telephone: [BUSINESS.phone, BUSINESS.secondaryPhone],
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: "IN",
    },
    areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: l.name })),
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
    },
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    url: getFullUrl("/"),
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
      item: it.url,
    })),
  };
}

export function serviceSchema(serviceSlug: string, locationName?: string) {
  const s = SERVICES.find((x) => x.slug === serviceSlug)!;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: s.name,
    name: locationName ? `${s.name} in ${locationName}` : s.name,
    provider: { "@id": "/#organization" },
    areaServed: locationName ?? "Andhra Pradesh",
    description: s.description,
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
