/**
 * Site Configuration - Centralized settings for domain, SEO, and performance
 */

export const SITE_CONFIG = {
  // Domain & URLs
  domain: "balajiinvisiblegrills.in",
  siteUrl: "https://balajiinvisiblegrills.in",
  
  // Business Identity (for Google Search results)
  businessName: "Balaji Invisible Grills",
  
  // OG Images (using existing asset images for all pages)
  ogImages: {
    default: "/og-image.jpg",      // Homepage: will use hero-invisible-grills.jpg
    service: "/og-service.jpg",    // Service pages: will use service card images
    locations: "/og-locations.jpg", // Location pages: will use service card images
    blog: "/og-blog.jpg",          // Blog pages: will use service card images
  },
  
  // Global Keywords
  globalKeywords: [
    "Invisible Grills",
    "Safety Nets",
    "Cricket Nets",
    "Balcony Safety",
    "Window Safety",
    "Stainless Steel",
    "Andhra Pradesh",
    "Visakhapatnam",
    "Vijayawada",
  ],
  
  // Sitemap URL
  sitemapUrl: "https://balajiinvisiblegrills.in/sitemap.xml",
} as const;

export function getFullUrl(path: string): string {
  return `${SITE_CONFIG.siteUrl}${path}`;
}
