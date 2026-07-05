/**
 * SEO Utilities - Helper functions for generating meta tags and schemas
 */

import { SITE_CONFIG, getFullUrl } from "@/config/site";
import { organizationSchema } from "@/components/site/JsonLd";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article" | "business.business";
  canonical?: string;
  hrefLang?: string;
}

export function generateSEOMeta(config: SEOConfig) {
  const keywords = (config.keywords && config.keywords.length ? config.keywords : SITE_CONFIG.globalKeywords).join(", ");
  // Prefer an absolute URL for Open Graph images so previews resolve reliably
  const rawOg = config.ogImage || SITE_CONFIG.ogImages.default;
  const ogImage = rawOg.startsWith("/") ? getFullUrl(rawOg) : rawOg;
  const canonical = config.canonical || SITE_CONFIG.siteUrl;
  
  return {
    meta: [
      { title: config.title },
      { name: "description", content: config.description },
      { name: "keywords", content: keywords },
      { name: "theme-color", content: "#1B2D4D" },
      // Open Graph
      { property: "og:type", content: config.ogType || "website" },
      { property: "og:site_name", content: SITE_CONFIG.businessName },
      { property: "og:title", content: config.title },
      { property: "og:description", content: config.description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: config.title },
      { name: "twitter:description", content: config.description },
      { name: "twitter:image", content: ogImage },
      // Additional SEO
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: SITE_CONFIG.businessName },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
    ],
    links: [
      { rel: "canonical", href: canonical },
      config.hrefLang ? { rel: "alternate", hrefLang: config.hrefLang, href: canonical } : undefined,
    ].filter(Boolean),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema()),
      },
    ],
  };
}
