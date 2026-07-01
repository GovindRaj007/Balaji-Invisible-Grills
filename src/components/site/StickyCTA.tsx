import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { BUSINESS } from "@/data/business";

export function StickyCTA() {
  return (
    <>
      <a
        href={`https://wa.me/${BUSINESS.whatsapp}?text=Hi%20${encodeURIComponent(BUSINESS.shortName)}%2C%20I%27d%20like%20a%20free%20quote.`}
        target="_blank" rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center size-14 rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-xl hover:scale-105 transition"
      >
        <WhatsAppIcon className="size-7" />
      </a>
      <a
        href={`tel:${BUSINESS.phone}`}
        aria-label="Call us"
        className="fixed bottom-5 left-5 z-50 md:hidden inline-flex items-center justify-center size-14 rounded-full bg-accent text-accent-foreground shadow-xl hover:scale-105 transition"
      >
        <Phone className="size-7" />
      </a>
    </>
  );
}
