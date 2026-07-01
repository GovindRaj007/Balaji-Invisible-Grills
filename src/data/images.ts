import hero from "@/assets/hero-invisible-grills.jpg";
import logo from "@/assets/balaji-logo.jpg";
import invisible1 from "@/assets/balcony-invisible-grills-1.jpg";
import invisible2 from "@/assets/balcony-invisible-grills-2.jpg";
import invisible3 from "@/assets/balcony-invisible-grills-3.jpg";
import invisible4 from "@/assets/balcony-invisible-grills-4.jpg";
import safety1 from "@/assets/balcony-safety-nets-1.jpg";
import safety2 from "@/assets/balcony-safety-nets-2.jpg";
import safety3 from "@/assets/balcony-safety-nets-3.jpg";
import safety4 from "@/assets/balcony-safety-nets-4.jpg";
import sports1 from "@/assets/sports-net-1.jpg";
import sports2 from "@/assets/sports-net-2.jpg";
import sports3 from "@/assets/sports-net-3.jpg";
import sports4 from "@/assets/sports-net-4.jpg";
import hangers1 from "@/assets/cloth-hangers-1.jpg";
import hangers2 from "@/assets/cloth-hangers-2.jpg";
import hangers3 from "@/assets/cloth-hangers-3.jpg";
import hangers4 from "@/assets/cloth-hangers-4.jpg";
import type { ServiceSlug } from "./business";

export const HERO_IMAGE = hero;

// Logo image
export const LOGO_IMAGE = logo;

export const SERVICE_IMAGES: Record<ServiceSlug, string> = {
  "invisible-grills": invisible1,
  "child-pet-safety-nets": safety1,
  "cricket-sports-nets": sports1,
  "ceiling-cloth-hangers": hangers1,
};

export const SERVICE_GALLERY_IMAGES: Record<ServiceSlug, string[]> = {
  "invisible-grills": [invisible1, invisible2, invisible3, invisible4],
  "child-pet-safety-nets": [safety1, safety2, safety3, safety4],
  "cricket-sports-nets": [sports1, sports2, sports3, sports4],
  "ceiling-cloth-hangers": [hangers1, hangers2, hangers3, hangers4],
};
