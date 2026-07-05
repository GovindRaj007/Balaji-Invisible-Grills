import heroJpg from "@/assets/hero-invisible-grills.jpg";
import logoJpg from "@/assets/balaji-logo.jpg";
import invisible1Jpg from "@/assets/balcony-invisible-grills-1.jpg";
import invisible2Jpg from "@/assets/balcony-invisible-grills-2.jpg";
import invisible3Jpg from "@/assets/balcony-invisible-grills-3.jpg";
import invisible4Jpg from "@/assets/balcony-invisible-grills-4.jpg";
import safety1Jpg from "@/assets/balcony-safety-nets-1.jpg";
import safety2Jpg from "@/assets/balcony-safety-nets-2.jpg";
import safety3Jpg from "@/assets/balcony-safety-nets-3.jpg";
import safety4Jpg from "@/assets/balcony-safety-nets-4.jpg";
import sports1Jpg from "@/assets/sports-net-1.jpg";
import sports2Jpg from "@/assets/sports-net-2.jpg";
import sports3Jpg from "@/assets/sports-net-3.jpg";
import sports4Jpg from "@/assets/sports-net-4.jpg";
import hangers1Jpg from "@/assets/cloth-hangers-1.jpg";
import hangers2Jpg from "@/assets/cloth-hangers-2.jpg";
import hangers3Jpg from "@/assets/cloth-hangers-3.jpg";
import hangers4Jpg from "@/assets/cloth-hangers-4.jpg";
import heroAvif from "@/assets/optimized/hero-invisible-grills.avif";
import heroWebp from "@/assets/optimized/hero-invisible-grills.webp";
import logoAvif from "@/assets/optimized/balaji-logo.avif";
import logoWebp from "@/assets/optimized/balaji-logo.webp";
import invisible1Avif from "@/assets/optimized/balcony-invisible-grills-1.avif";
import invisible1Webp from "@/assets/optimized/balcony-invisible-grills-1.webp";
import invisible2Avif from "@/assets/optimized/balcony-invisible-grills-2.avif";
import invisible2Webp from "@/assets/optimized/balcony-invisible-grills-2.webp";
import invisible3Avif from "@/assets/optimized/balcony-invisible-grills-3.avif";
import invisible3Webp from "@/assets/optimized/balcony-invisible-grills-3.webp";
import invisible4Avif from "@/assets/optimized/balcony-invisible-grills-4.avif";
import invisible4Webp from "@/assets/optimized/balcony-invisible-grills-4.webp";
import safety1Avif from "@/assets/optimized/balcony-safety-nets-1.avif";
import safety1Webp from "@/assets/optimized/balcony-safety-nets-1.webp";
import safety2Avif from "@/assets/optimized/balcony-safety-nets-2.avif";
import safety2Webp from "@/assets/optimized/balcony-safety-nets-2.webp";
import safety3Avif from "@/assets/optimized/balcony-safety-nets-3.avif";
import safety3Webp from "@/assets/optimized/balcony-safety-nets-3.webp";
import safety4Avif from "@/assets/optimized/balcony-safety-nets-4.avif";
import safety4Webp from "@/assets/optimized/balcony-safety-nets-4.webp";
import sports1Avif from "@/assets/optimized/sports-net-1.avif";
import sports1Webp from "@/assets/optimized/sports-net-1.webp";
import sports2Avif from "@/assets/optimized/sports-net-2.avif";
import sports2Webp from "@/assets/optimized/sports-net-2.webp";
import sports3Avif from "@/assets/optimized/sports-net-3.avif";
import sports3Webp from "@/assets/optimized/sports-net-3.webp";
import sports4Avif from "@/assets/optimized/sports-net-4.avif";
import sports4Webp from "@/assets/optimized/sports-net-4.webp";
import hangers1Avif from "@/assets/optimized/cloth-hangers-1.avif";
import hangers1Webp from "@/assets/optimized/cloth-hangers-1.webp";
import hangers2Avif from "@/assets/optimized/cloth-hangers-2.avif";
import hangers2Webp from "@/assets/optimized/cloth-hangers-2.webp";
import hangers3Avif from "@/assets/optimized/cloth-hangers-3.avif";
import hangers3Webp from "@/assets/optimized/cloth-hangers-3.webp";
import hangers4Avif from "@/assets/optimized/cloth-hangers-4.avif";
import hangers4Webp from "@/assets/optimized/cloth-hangers-4.webp";
import type { ServiceSlug } from "./business";

export const HERO_IMAGE_SOURCES = {
  avif: heroAvif,
  webp: heroWebp,
  jpg: heroJpg,
};

export const LOGO_IMAGE_SOURCES = {
  avif: logoAvif,
  webp: logoWebp,
  jpg: logoJpg,
};

export const SERVICE_IMAGE_SOURCES: Record<ServiceSlug, { avif: string; webp: string; jpg: string }> = {
  "invisible-grills": { avif: invisible1Avif, webp: invisible1Webp, jpg: invisible1Jpg },
  "child-pet-safety-nets": { avif: safety1Avif, webp: safety1Webp, jpg: safety1Jpg },
  "cricket-sports-nets": { avif: sports1Avif, webp: sports1Webp, jpg: sports1Jpg },
  "ceiling-cloth-hangers": { avif: hangers1Avif, webp: hangers1Webp, jpg: hangers1Jpg },
};

export type ImageSource = {
  avif: string;
  webp: string;
  jpg: string;
};

export const SERVICE_GALLERY_IMAGES: Record<ServiceSlug, ImageSource[]> = {
  "invisible-grills": [
    { avif: invisible1Avif, webp: invisible1Webp, jpg: invisible1Jpg },
    { avif: invisible2Avif, webp: invisible2Webp, jpg: invisible2Jpg },
    { avif: invisible3Avif, webp: invisible3Webp, jpg: invisible3Jpg },
    { avif: invisible4Avif, webp: invisible4Webp, jpg: invisible4Jpg },
  ],
  "child-pet-safety-nets": [
    { avif: safety1Avif, webp: safety1Webp, jpg: safety1Jpg },
    { avif: safety2Avif, webp: safety2Webp, jpg: safety2Jpg },
    { avif: safety3Avif, webp: safety3Webp, jpg: safety3Jpg },
    { avif: safety4Avif, webp: safety4Webp, jpg: safety4Jpg },
  ],
  "cricket-sports-nets": [
    { avif: sports1Avif, webp: sports1Webp, jpg: sports1Jpg },
    { avif: sports2Avif, webp: sports2Webp, jpg: sports2Jpg },
    { avif: sports3Avif, webp: sports3Webp, jpg: sports3Jpg },
    { avif: sports4Avif, webp: sports4Webp, jpg: sports4Jpg },
  ],
  "ceiling-cloth-hangers": [
    { avif: hangers1Avif, webp: hangers1Webp, jpg: hangers1Jpg },
    { avif: hangers2Avif, webp: hangers2Webp, jpg: hangers2Jpg },
    { avif: hangers3Avif, webp: hangers3Webp, jpg: hangers3Jpg },
    { avif: hangers4Avif, webp: hangers4Webp, jpg: hangers4Jpg },
  ],
};
