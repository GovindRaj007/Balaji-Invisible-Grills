import { createFileRoute } from "@tanstack/react-router";
import InvisibleGrillsLandingPage, { LANDING_FAQS } from "@/components/ads/InvisibleGrillsLandingPage";
import { faqSchema, serviceSchema } from "@/components/site/JsonLd";
import { SITE_CONFIG } from "@/config/site";
import { buildHead } from "@/lib/seo";

// Paid-traffic landing page. It is noindex so it never competes with the organic
// /services/invisible-grills page; the canonical points there for the same reason.
// Header/Footer come from the root layout — rendering them here would duplicate them.
export const Route = createFileRoute("/ads/invisible-grills")({
  head: () => {
    const head = buildHead({
      title: "Invisible Grills & Ceiling Cloth Hangers – Vijayawada, Vizag, Guntur | Free Quote",
      description: "Invisible grills and ceiling cloth hangers in Vijayawada, Vizag, Rajahmundry and Guntur — free site visit, transparent quote, 10-year warranty.",
      path: "/services/invisible-grills",
      ogImage: SITE_CONFIG.ogImages.service,
      noindex: true,
      schemas: [serviceSchema("invisible-grills"), faqSchema(LANDING_FAQS)],
    });
    return head;
  },
  component: function AdsLanding() {
    return <InvisibleGrillsLandingPage />;
  },
});

export default Route;
