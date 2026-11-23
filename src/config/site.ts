/**
 * Site Configuration - Centralized settings for domain, SEO, and performance
 *
 * IMPORTANT: Vercel serves the site on the www host (the bare domain 308-redirects
 * to www), and Google has chosen the www URLs as canonical. Every canonical, og:url,
 * sitemap entry and schema URL must therefore use the www origin — pointing them at
 * the bare domain makes Google see canonicals that redirect, which blocks indexing.
 */

export const SITE_CONFIG = {
  // Domain & URLs
  domain: "www.balajiinvisiblegrills.in",
  siteUrl: "https://www.balajiinvisiblegrills.in",

  // Business Identity (for Google Search results)
  businessName: "Balaji Invisible Grills",

  // OG Images
  ogImages: {
    default: "/og-image.jpg",
    service: "/og-service.jpg",
    locations: "/og-locations.jpg",
    blog: "/og-blog.jpg",
  },

  // Sitemap URL
  sitemapUrl: "https://www.balajiinvisiblegrills.in/sitemap.xml",
} as const;

export function getFullUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_CONFIG.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
