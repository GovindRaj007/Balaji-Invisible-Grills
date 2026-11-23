/**
 * SEO Utilities — one helper builds the full <head> for every route so titles,
 * descriptions, canonicals, Open Graph and robots stay consistent site-wide.
 */

import { SITE_CONFIG, getFullUrl } from "@/config/site";

export interface SEOConfig {
  /** Page title. Keep the primary keyword first; aim for ≤ 65 characters. */
  title: string;
  /** Meta description. Aim for 140–160 characters with the primary keyword + a CTA. */
  description: string;
  /** Path of the page, e.g. "/services/invisible-grills". Used for canonical + og:url. */
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  /** JSON-LD objects to emit for this page. */
  schemas?: object[];
  /** Extra <link> tags (preloads etc). */
  links?: Record<string, string>[];
  /** Extra meta tags (article:published_time etc). */
  extraMeta?: Record<string, string>[];
  /** Hide the page from search (thank-you pages, ad landing pages, 404). */
  noindex?: boolean;
}

const ROBOTS_INDEX = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

export function buildHead(config: SEOConfig) {
  const canonical = getFullUrl(config.path);
  const ogImage = getFullUrl(config.ogImage || SITE_CONFIG.ogImages.default);

  const meta: Record<string, string>[] = [
    { title: config.title },
    { name: "description", content: config.description },
    { name: "robots", content: config.noindex ? "noindex, follow" : ROBOTS_INDEX },
    { property: "og:type", content: config.ogType || "website" },
    { property: "og:site_name", content: SITE_CONFIG.businessName },
    { property: "og:locale", content: "en_IN" },
    { property: "og:title", content: config.title },
    { property: "og:description", content: config.description },
    { property: "og:url", content: canonical },
    { property: "og:image", content: ogImage },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: config.title },
    { name: "twitter:description", content: config.description },
    { name: "twitter:image", content: ogImage },
    ...(config.extraMeta ?? []),
  ];
  if (config.keywords?.length) meta.push({ name: "keywords", content: config.keywords.join(", ") });

  return {
    meta,
    links: [{ rel: "canonical", href: canonical }, ...(config.links ?? [])],
    scripts: (config.schemas ?? []).map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify(s),
    })),
  };
}
