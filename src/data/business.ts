export const BUSINESS = {
  name: "Balaji Invisible Grills",
  shortName: "Balaji Invisible Grills",
  tagline: "Premium Invisible Grills & Safety Net Installation Across Andhra Pradesh",
  phone: "+918897799694",
  phoneDisplay: "+91 88977 99694",
  secondaryPhone: "+919573433063",
  secondaryPhoneDisplay: "+91 95734 33063",
  whatsapp: "918897799694",
  email: "balajisecuresolutions@gmail.com",
  branchName: "Main branch",
  streetAddress: "61-22/1-25A, Gulabi Rd, Satya Narayana Nagar, Krishna Lanka",
  addressLocality: "Vijayawada",
  addressRegion: "Andhra Pradesh",
  postalCode: "520013",
  address: "61-22/1-25A, Gulabi Rd, Satya Narayana Nagar, Krishna Lanka, Vijayawada, Andhra Pradesh 520013",
  yearsExperience: 12,
  projectsCompleted: 6500,
  rating: 4.9,
  reviewCount: 482,
  hours: "Mon–Sun: 8:00 AM – 9:00 PM",
} as const;

export type ServiceSlug =
  | "invisible-grills"
  | "child-pet-safety-nets"
  | "cricket-sports-nets"
  | "ceiling-cloth-hangers";

export interface Service {
  slug: ServiceSlug;
  name: string;
  /** Primary search keyword for this service — used in H1s, titles and city pages. */
  keyword: string;
  /** Secondary keyword phrase appended to city-page titles. */
  localTitleSuffix: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  /** Keyword-rich intro paragraph shown under the H1 on the service page. */
  intro: string;
  /** Sub-types people search for (balcony, windows, pigeon nets…). */
  types: { name: string; desc: string }[];
  /** What drives the price — shown in the Pricing section (no figures). */
  pricing: string;
  /** Starting price in ₹ per sq ft. Shown ONLY in FAQ answers + meta/schema, never in page body copy. */
  startingPrice?: number;
  short: string;
  hero: string;
  description: string;
  benefits: string[];
  applications: string[];
  features: string[];
  process: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  keywords: string[];
}

/** FAQ answer for "price of X" — leads with the starting price when one is set. */
export function priceFaqAnswer(s: Service, city?: string) {
  if (!s.startingPrice) return s.pricing;
  const where = city ? ` in ${city}` : "";
  return `${s.keyword}${where} start from ₹${s.startingPrice} per sq ft. ${s.pricing}`;
}

export const SERVICES: Service[] = [
  {
    slug: "invisible-grills",
    name: "Invisible Grills",
    keyword: "Invisible Grills",
    localTitleSuffix: "Balcony & Window Grills",
    seoTitle: "Invisible Grills for Balcony & Windows | SS 316 | Balaji Invisible Grills",
    seoDescription:
      "Invisible grills for balcony & windows from ₹100/sq ft. SS 316 marine-grade steel, free site visit, 10-year warranty. Vijayawada, Vizag & across AP.",
    h1: "Invisible Grills for Balconies & Windows",
    intro:
      "Looking for invisible grills near you? We install SS 316 stainless steel invisible grills for balconies, windows, staircases and duct openings in apartments and villas across Andhra Pradesh — from Vijayawada and Vizag to Guntur, Rajahmundry, Tirupati, Ongole and Anantapur. Every balcony invisible grill is measured, quoted and installed by our own team, so you get a child-safe, pet-safe barrier that keeps your view, light and breeze completely open.",
    types: [
      { name: "Invisible grills for balcony", desc: "Full-height or railing-top balcony invisible grills for high-rise flats, sit-outs and villa terraces — the most popular choice for families with children." },
      { name: "Invisible grills for windows", desc: "Slim window invisible grills for bedroom, kitchen and French windows that replace bulky MS window grills without blocking light." },
      { name: "Staircase & duct invisible grills", desc: "Fall protection for staircase voids, atriums and open duct areas where a solid grill would look heavy." },
      { name: "Sliding-door & terrace grills", desc: "Invisible grills for terrace edges and balconies with sliding doors, sized to keep access easy for cleaning." },
    ],
    startingPrice: 100,
    pricing:
      "Invisible grill price is calculated per square foot and depends on the cable grade (SS 304 vs SS 316), cable thickness, spacing between cables (2 to 3 inches), the height of the floor and the type of track. After a free site visit we share a fixed, itemised quote — no hidden charges, and the price is locked for 30 days.",
    short: "316-grade stainless steel invisible grills for balconies & windows.",
    hero: "Uninterrupted views. Uncompromising safety.",
    description:
      "Our invisible grills use 316L marine-grade stainless steel cables tensioned between high-strength aluminium tracks. The result is a near-invisible barrier that protects children, pets and elders without blocking your view, airflow or natural light.",
    benefits: [
      "Crystal-clear unobstructed view from balconies and windows",
      "316L marine-grade stainless steel — rust-proof for coastal Andhra climate",
      "Anti-corrosion aluminium tracks tested to 250+ kg load",
      "Allows full airflow and natural light into your home",
      "Child, pet and elder safe — meets BIS safety norms",
      "Maintains the aesthetics of premium apartments and villas",
    ],
    applications: [
      "Apartment balconies (T2, T3, T4 high-rise)",
      "Villa terraces & duplex balconies",
      "Bedroom and kitchen windows",
      "Staircase voids and atrium openings",
      "Pet enclosures and balcony gardens",
    ],
    features: [
      "2mm 316L stainless steel cable",
      "Aluminium 6063-T6 anodised tracks",
      "Cable spacing: 2.5\" / 3\" customisable",
      "10-year structural warranty",
      "Fire-safe — no PVC or nylon",
      "Cyclone-tested up to 180 km/h winds",
    ],
    process: [
      { title: "Free Site Visit", desc: "Our team measures your balcony/window and shares a transparent quote within 24 hours." },
      { title: "Design Approval", desc: "Choose cable spacing, track colour and finish. We share a 3D mock-up for approval." },
      { title: "Precision Installation", desc: "Certified installers fit aluminium tracks and tension stainless cables in 4–6 hours." },
      { title: "Quality Check & Handover", desc: "Tension test, safety audit, and 10-year warranty card handed over." },
    ],
    faqs: [
      { q: "Are invisible grills really safe for children?", a: "Yes. Our 316L stainless cables are tensioned to withstand over 250 kg of horizontal force at 2.5\" spacing — well beyond the impact a child could generate." },
      { q: "Will they rust in coastal cities like Vizag?", a: "No. 316L is marine-grade stainless steel, the same alloy used in shipbuilding and offshore rigs. It is corrosion-proof in salt-air environments." },
      { q: "How long does installation take?", a: "Most balconies are completed in 4–6 hours with zero damage to walls or flooring." },
      { q: "Do you provide a warranty?", a: "Yes — 10 years structural warranty on tracks and cables, plus 1 year on accessories." },
    ],
    keywords: ["invisible grills", "invisible grills near me", "invisible grills for balcony", "balcony invisible grills", "invisible grills for windows", "invisible grill price", "SS 316 invisible grills"],
  },
  {
    slug: "child-pet-safety-nets",
    name: "Balcony Safety Nets",
    keyword: "Balcony Safety Nets",
    localTitleSuffix: "Pigeon & Children Safety Nets",
    seoTitle: "Balcony Safety Nets, Pigeon Nets & Children Safety Nets | Balaji",
    seoDescription:
      "Balcony safety nets, pigeon nets, children safety nets and pet nets installed in 60–90 minutes. UV-stabilised HDPE, 5-year warranty, free site visit.",
    h1: "Balcony Safety Nets for Children, Pets & Pigeons",
    intro:
      "Our balcony safety nets protect children and pets from falls and keep pigeons out of your balcony, windows and duct areas. We install transparent, UV-stabilised HDPE safety nets in Vijayawada, Vizag, Guntur, Rajahmundry, Tirupati, Ongole and Anantapur — usually in under 90 minutes with no civil work and no mess.",
    types: [
      { name: "Pigeon nets for balcony", desc: "Anti-bird and pigeon safety nets that stop nesting and droppings on balconies, AC ledges and window sills." },
      { name: "Children safety nets", desc: "Close 25mm-mesh child safety nets for balconies, windows and staircases in high-rise apartments." },
      { name: "Pet & cat safety nets", desc: "Soft, strong 50mm pet nets that let cats and dogs enjoy the balcony without the risk of a fall." },
      { name: "Duct area & sky-light nets", desc: "Duct area safety nets and shaft nets that stop falls, birds and debris in open service ducts." },
    ],
    pricing:
      "Safety net price is per square foot and depends on the net type (pigeon net, child net or pet net), mesh size, rope thickness, colour and how many anchor points the balcony needs. We confirm a fixed quote at the free site visit — most balconies are finished the same day.",
    short: "HDPE braided safety nets for balconies, windows and pets.",
    hero: "Peace of mind, woven into every knot.",
    description:
      "Our child & pet safety nets are made from UV-stabilised HDPE braided rope, hand-knotted to 25mm or 50mm aperture. Anchored with stainless steel hooks into structural concrete, they create an invisible safety barrier that protects toddlers, pets, and elderly family members.",
    benefits: [
      "100% transparent — does not block view or sunlight",
      "UV-resistant for 5+ years of outdoor exposure",
      "Soft to touch — safe for pets and toddlers",
      "Weather-proof for monsoon and coastal humidity",
      "Quick installation with no civil work",
      "Removable & reusable when shifting homes",
    ],
    applications: [
      "Apartment balcony child safety",
      "Cat & dog balcony enclosures",
      "Bird & pigeon prevention nets",
      "Window safety nets for high-rise flats",
      "Duct & shaft fall protection",
    ],
    features: [
      "Imported HDPE braided rope",
      "316 stainless steel anchor hooks",
      "25mm aperture (child) / 50mm (pet)",
      "Available in transparent, black, green",
      "5-year UV warranty",
      "Custom shapes for any balcony",
    ],
    process: [
      { title: "Free Inspection", desc: "We visit, measure, and recommend the right aperture and anchor type." },
      { title: "Same-Day Quote", desc: "Transparent per-sqft pricing with no hidden costs." },
      { title: "1-Hour Installation", desc: "Most balconies are netted within 60–90 minutes with zero mess." },
      { title: "Safety Demonstration", desc: "We walk you through how to clean and maintain your net." },
    ],
    faqs: [
      { q: "Will the safety net block my view?", a: "No. Our transparent HDPE net is virtually invisible from 2 meters away and lets in full light and breeze." },
      { q: "Is it safe for my cat?", a: "Absolutely. The 50mm aperture pet net is hand-knotted and tested to hold over 100 kg per square meter." },
      { q: "How long does it last?", a: "Our UV-stabilised nets last 5–7 years in Andhra Pradesh's coastal and inland climates." },
      { q: "Will it damage my building?", a: "No. Anchors are fitted into the slab edge with non-intrusive stainless hooks — fully removable." },
    ],
    keywords: ["balcony safety nets", "pigeon nets", "pigeon safety nets", "children safety nets", "child safety net for balcony", "bird nets", "duct area nets", "safety nets near me"],
  },
  {
    slug: "cricket-sports-nets",
    name: "Cricket Practice Nets",
    keyword: "Cricket Practice Nets",
    localTitleSuffix: "Box Cricket & Sports Nets",
    seoTitle: "Cricket Practice Nets, Box Cricket & Sports Nets Installation | Balaji",
    seoDescription:
      "Cricket practice nets, box cricket nets and sports nets for academies, schools, apartments and terraces. Heavy-duty HDPE nets, 3-year warranty, free site survey.",
    h1: "Cricket Practice Nets & Sports Nets Installation",
    intro:
      "We design and install cricket practice nets, box cricket nets and sports nets for cricket academies, schools, gated communities and terraces across Andhra Pradesh. From a single practice lane to a full box cricket turf enclosure, every sports net is built with heavy-duty HDPE or nylon netting and galvanised poles to survive years of daily use and monsoon weather.",
    types: [
      { name: "Cricket practice nets", desc: "Single or multi-lane cricket practice nets with side and top netting for academies, schools and homes." },
      { name: "Box cricket nets", desc: "Full box cricket and turf enclosures with roof netting, galvanised frames and entry doors." },
      { name: "Terrace & rooftop cricket nets", desc: "Lightweight rooftop cricket nets fixed without damaging the slab — ideal for apartments and independent houses." },
      { name: "Football, volleyball & golf nets", desc: "Boundary nets for football grounds, volleyball courts and golf practice cages." },
    ],
    pricing:
      "Cricket net price depends on the area covered, net thickness (1.5mm to 4mm), mesh size, whether you need roof netting, and the pole and foundation work. We visit the ground, then share a detailed quote with pole spacing and net specification.",
    short: "Heavy-duty nets for cricket practice, football & community grounds.",
    hero: "Built for boundary 6s, monsoons and a decade of practice.",
    description:
      "We install high-tensile nylon and HDPE sports nets for cricket academies, gated community grounds, schools, and rooftop practice cages. Engineered to withstand high-velocity impact and harsh weather, our nets last 8–10 years with minimal maintenance.",
    benefits: [
      "Withstands 150+ km/h ball impact",
      "UV-stabilised — no fading or brittleness",
      "Hot-dip galvanised support posts",
      "Custom sizes from 10x10 to 100x40 ft",
      "Quick assembly & disassembly options",
      "Used by 200+ academies in Andhra Pradesh",
    ],
    applications: [
      "Cricket practice cages",
      "Apartment community sports grounds",
      "School & college playgrounds",
      "Football & volleyball boundaries",
      "Driving ranges & golf cages",
      "Rooftop sports nets",
    ],
    features: [
      "1.5mm – 4mm HDPE / nylon rope",
      "25mm / 40mm mesh size",
      "Hot-dip galvanised MS pipes",
      "Reinforced border rope",
      "Removable Velcro entry doors",
      "3-year material warranty",
    ],
    process: [
      { title: "Ground Inspection", desc: "We assess your space, soil and usage to recommend the right net spec." },
      { title: "Engineered Quote", desc: "Detailed BOQ with pole spacing, net GSM and foundation plan." },
      { title: "Foundation & Erection", desc: "MS poles concreted into ground, nets stretched and reinforced." },
      { title: "Test & Handover", desc: "Impact test and 3-year warranty handover." },
    ],
    faqs: [
      { q: "What net thickness is best for cricket?", a: "We recommend 2.5mm – 3mm HDPE braided rope with 40mm mesh for adult cricket. Junior cricket uses 1.5mm – 2mm." },
      { q: "Can you install on rooftops?", a: "Yes — we use lightweight aluminium poles with structural anchors for rooftop cages without damaging the slab." },
      { q: "Do you service schools and academies?", a: "Yes, we are empanelled with 200+ cricket academies and schools across Andhra Pradesh." },
    ],
    keywords: ["cricket practice nets", "cricket nets", "box cricket nets", "sports nets", "sports net installation", "terrace cricket nets"],
  },
  {
    slug: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
    keyword: "Ceiling Cloth Hangers",
    localTitleSuffix: "Pulley Cloth Drying Hangers",
    seoTitle: "Ceiling Cloth Hangers | Pulley Cloth Drying Hanger Installation | Balaji",
    seoDescription:
      "Ceiling cloth hangers and pulley cloth drying hangers for balconies and utility areas. Rust-proof aluminium rods, 12 kg load, installed in under an hour.",
    h1: "Ceiling Cloth Hangers for Balconies & Utility Areas",
    intro:
      "Our ceiling cloth hangers free up your balcony floor by drying clothes at ceiling level. Each pulley cloth drying hanger uses rust-proof aluminium rods and a smooth rope-and-pulley system you can lower and raise with one hand. We install cloth hangers for apartments and independent houses in Vijayawada, Vizag, Guntur, Rajahmundry, Tirupati, Ongole and Anantapur.",
    types: [
      { name: "Pulley ceiling cloth hangers", desc: "Classic 4–6 rod pulley cloth hangers that lower for loading and lift up to dry." },
      { name: "Balcony cloth drying hangers", desc: "Ceiling-mounted cloth drying hangers sized to your balcony width so you keep the floor free." },
      { name: "Utility & wash-area hangers", desc: "Cloth hangers for utility balconies, wash areas and indoor laundry rooms." },
      { name: "Wall-mounted & motorised hangers", desc: "Wall-mount options for tricky ceilings, and remote-operated motorised cloth hangers on request." },
    ],
    pricing:
      "Ceiling cloth hanger price depends on the number of rods, rod length (4 to 8 feet), ceiling height and whether you choose a manual pulley or motorised model. Installation is usually done in a single visit of under an hour.",
    short: "Pulley-operated ceiling cloth-drying hangers for apartments.",
    hero: "Dry more clothes. Save floor space. Indoors or balcony.",
    description:
      "Our ceiling-mounted cloth hangers use a smooth pulley-and-rope mechanism with anodised aluminium rods. Each unit holds up to 12 kg of wet laundry, freeing your balcony floor and accelerating drying using ceiling-level airflow.",
    benefits: [
      "Saves 100% balcony floor space",
      "Holds 12 kg load per unit",
      "Smooth pulley action — operates with one hand",
      "Rust-proof anodised aluminium rods",
      "Customisable rod length (4–8 ft)",
      "Lifetime support on parts",
    ],
    applications: [
      "Apartment utility balconies",
      "Villa wash areas",
      "Indoor laundry rooms",
      "Service area drying zones",
      "Compact studio apartments",
    ],
    features: [
      "6 individual rods per unit",
      "Anti-skid PVC end-caps",
      "High-tensile braided rope",
      "Ceiling-mount or wall-mount",
      "Powder-coated steel brackets",
      "Available in white, ivory, grey",
    ],
    process: [
      { title: "Measurement Visit", desc: "We measure ceiling height and balcony width to recommend rod length." },
      { title: "Same-Day Installation", desc: "Mounted in 45–60 minutes with structural fasteners." },
      { title: "Operation Demo", desc: "We demonstrate the pulley operation and load testing." },
    ],
    faqs: [
      { q: "How much weight can it hold?", a: "Each unit safely holds 12 kg of wet laundry — roughly two full machine loads." },
      { q: "Will it damage my false ceiling?", a: "We anchor into the concrete slab above the false ceiling, so the false ceiling remains untouched." },
      { q: "Do you offer remote-operated versions?", a: "Yes, motorised ceiling hangers with remote control are available on request." },
    ],
    keywords: ["ceiling cloth hanger", "cloth hanger", "cloth hanger near me", "cloth drying hanger", "pulley cloth hanger", "balcony cloth hanger"],
  },
];

export interface Location {
  slug: string;
  name: string;
  /** Official / alternate city name people also search (e.g. Visakhapatnam for Vizag). */
  altName?: string;
  /** Unique, city-specific copy per service — keeps every service × city page distinct. */
  serviceNotes: Record<ServiceSlug, string>;
  intro: string;
  landmarks: string[];
  areas: string[];
  trend: string;
  testimonial: { name: string; area: string; text: string; rating: number };
}

export const LOCATIONS: Location[] = [
  {
    slug: "vizag",
    name: "Vizag",
    altName: "Visakhapatnam",
    serviceNotes: {
      "invisible-grills": "Sea-facing flats in Vizag lose ordinary MS grills to salt corrosion within a couple of monsoons. Our SS 316 marine-grade invisible grills are made for exactly this — we install balcony invisible grills and window invisible grills for high-rise apartments along Beach Road, MVP Colony, Rushikonda, Madhurawada, Yendada and PM Palem, keeping the sea view completely open.",
      "child-pet-safety-nets": "Pigeons are the number one balcony complaint we hear in Vizag, especially in the dense apartment blocks of Dwaraka Nagar, Seethammadhara and Gajuwaka. Our UV-stabilised pigeon nets and children safety nets are tied with stainless steel hooks that will not rust in the humid sea air.",
      "cricket-sports-nets": "Vizag's cricket culture runs from school grounds in Gajuwaka to rooftop nets in MVP Colony. Our cricket practice nets use UV-treated HDPE and galvanised poles that hold up against the strong coastal winds and the heavy Vizag monsoon.",
      "ceiling-cloth-hangers": "Small utility balconies are common in Vizag apartments, and drying clothes in the humid coastal air takes time. Ceiling cloth hangers lift laundry to the warmer air near the ceiling and keep your balcony floor free — we use anodised aluminium rods that won't rust near the sea.",
    },
    intro:
      "As Andhra Pradesh's largest coastal city, Visakhapatnam (Vizag) presents a unique safety challenge — salt-laden sea breeze that corrodes ordinary grills within months. Our 316L marine-grade invisible grills and UV-stabilised safety nets are engineered specifically for Vizag's coastal high-rises.",
    landmarks: ["RK Beach", "Rushikonda", "MVP Colony", "Beach Road", "Madhurawada"],
    areas: ["MVP Colony", "Madhurawada", "Seethammadhara", "Gajuwaka", "Yendada", "PM Palem", "Asilmetta", "Dwaraka Nagar"],
    trend:
      "With Vizag's rapid skyline growth — from My Home Avatar to Aparna Sarovar — high-rise families increasingly demand invisible grills that don't spoil the sea-view from premium 15th–30th floor apartments.",
    testimonial: {
      name: "Suresh K.",
      area: "MVP Colony, Vizag",
      text: "Living on the 14th floor facing the sea, I needed grills that wouldn't block the view or rust. Balaji Invisible Grills installed in 5 hours and 2 years later — zero rust, zero issues.",
      rating: 5,
    },
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
    serviceNotes: {
      "invisible-grills": "Vijayawada is our home base — our main branch is in Krishna Lanka, so we reach Benz Circle, Patamata, Kanuru, Gunadala, Tadepalli, Currency Nagar and Bhavanipuram quickly for site visits. Most new apartments in Vijayawada now choose balcony invisible grills over MS grills, and our team installs invisible grills for balconies and windows across the city every week.",
      "child-pet-safety-nets": "With the Krishna river nearby, Vijayawada balconies attract a lot of pigeons and dust. Our pigeon safety nets, children safety nets and duct area nets are installed by our own Vijayawada team, usually within 24–48 hours of your call, in areas from Benz Circle and Patamata to Auto Nagar and Bhavanipuram.",
      "cricket-sports-nets": "From academies near Gunadala to school grounds and apartment terraces in Patamata and Kanuru, we install cricket practice nets and box cricket nets across Vijayawada. Our heavy-duty nets are built for Vijayawada's intense summer sun with UV-stabilised netting.",
      "ceiling-cloth-hangers": "Vijayawada's compact apartment balconies make floor-standing cloth stands a nuisance. Our ceiling cloth hangers are installed by our local team in under an hour, in localities including Benz Circle, Patamata, Kanuru and Currency Nagar.",
    },
    intro:
      "Vijayawada's booming real-estate corridor along NH-65 and the Benz Circle–Auto Nagar belt has seen explosive growth in high-rise apartments. Families moving into communities like My Home, Aparna and Manjeera are choosing invisible grills for the perfect blend of safety and aesthetics.",
    landmarks: ["Kanaka Durga Temple", "Prakasam Barrage", "Benz Circle", "MG Road", "Auto Nagar"],
    areas: ["Benz Circle", "Patamata", "Kanuru", "Tadepalli", "Gunadala", "Auto Nagar", "Currency Nagar", "Bhavanipuram"],
    trend:
      "Vijayawada's relentless summers and seasonal Krishna river humidity make HDPE safety nets and stainless invisible grills the only practical long-term solution for balcony safety.",
    testimonial: {
      name: "Lakshmi P.",
      area: "Patamata, Vijayawada",
      text: "We have two small kids and a dog. The safety net team was professional, neat, and finished in under 90 minutes. Now I can finally relax when they play on the balcony.",
      rating: 5,
    },
  },
  {
    slug: "rajahmundry",
    name: "Rajahmundry",
    serviceNotes: {
      "invisible-grills": "Rajahmundry's Godavari humidity makes iron grills rust fast, which is why riverfront apartments and new gated communities in Morampudi, Danavaipeta and Diwancheruvu are switching to SS 316 invisible grills. We install invisible grills for balconies and windows that keep the river view clear and stay rust-free.",
      "child-pet-safety-nets": "Riverside humidity and pigeons go together in Rajahmundry. We install pigeon nets, balcony safety nets and child safety nets in Morampudi, Danavaipeta, Kambala Cheruvu and nearby areas using UV-stabilised HDPE that won't sag in the damp Godavari climate.",
      "cricket-sports-nets": "Rajahmundry has a strong local cricket scene, from school grounds to private academies. We install cricket practice nets, box cricket enclosures and sports nets designed to handle the region's heavy monsoon rain.",
      "ceiling-cloth-hangers": "Ceiling cloth hangers are especially useful in Rajahmundry's humid months, when clothes dry slowly on the floor. We fit pulley cloth drying hangers in apartments and independent houses across Morampudi, Danavaipeta and Diwancheruvu.",
    },
    intro:
      "Rajahmundry — the cultural capital of Andhra Pradesh — is rapidly modernising along the Godavari riverfront. Premium gated communities like Hill County and riverfront apartments are adopting invisible grills as the standard for balcony safety without compromising heritage views.",
    landmarks: ["Godavari Pushkar Ghat", "Kotilingeshwara Temple", "ISKCON Temple", "Diwancheruvu"],
    areas: ["Morampudi", "Danavaipeta", "Kambala Cheruvu", "Korukonda", "Diwancheruvu", "RTC Complex"],
    trend:
      "Rajahmundry's high humidity from the Godavari basin makes 316L stainless cables essential — galvanised iron grills start rusting within 18 months in this climate.",
    testimonial: {
      name: "Ramesh B.",
      area: "Morampudi, Rajahmundry",
      text: "Compared three vendors. Balaji Invisible Grills was the only one who showed me actual 316L test certificates. Installation was spotless and the team was on time to the minute.",
      rating: 5,
    },
  },
  {
    slug: "guntur",
    name: "Guntur",
    serviceNotes: {
      "invisible-grills": "Guntur's new apartments along the Vijayawada–Guntur corridor and in Brodipet, Lakshmipuram, Pattabhipuram and Nallapadu are adopting invisible grills for balconies and windows. Being just 35 km from our Vijayawada branch, we schedule Guntur site visits quickly and install with our own team.",
      "child-pet-safety-nets": "Guntur's hot, dusty summers and large pigeon population make balcony safety nets a practical choice. We install pigeon nets, children safety nets and pet nets across Brodipet, Arundelpet, Lakshmipuram and Nallapadu with UV-grade HDPE that resists 45°C heat.",
      "cricket-sports-nets": "Cricket is huge in Guntur — we install cricket practice nets for academies, schools and colleges, as well as box cricket nets and terrace cricket nets for apartments and independent houses.",
      "ceiling-cloth-hangers": "We install ceiling cloth hangers across Guntur's apartments and independent houses in Brodipet, Lakshmipuram and Pattabhipuram. Drying clothes at ceiling level also keeps them out of Guntur's summer dust.",
    },
    intro:
      "Guntur's growing role as part of the Amaravati capital region has fuelled a wave of new residential construction along the Vijayawada–Guntur Expressway. From Brodipet's heritage homes to Nallapadu's gated communities, our invisible grills and safety nets protect Guntur's modern families.",
    landmarks: ["Amaravati Stupa", "Uppalapadu Bird Sanctuary", "Brodipet", "Lakshmipuram"],
    areas: ["Brodipet", "Lakshmipuram", "Pattabhipuram", "Nallapadu", "Arundelpet", "Gorantla"],
    trend:
      "With Guntur's intense summer temperatures crossing 45°C, our heat-resistant aluminium tracks and UV-grade HDPE nets are tested for this exact climate envelope.",
    testimonial: {
      name: "Anitha R.",
      area: "Brodipet, Guntur",
      text: "Got invisible grills for our entire 3BHK in Brodipet. Two years on, looks brand new. Worth every rupee for the peace of mind with my grandson around.",
      rating: 5,
    },
  },
  {
    slug: "ongole",
    name: "Ongole",
    serviceNotes: {
      "invisible-grills": "Ongole homes near the coast face salt air, and inland homes face harsh dry heat — SS 316 invisible grills handle both. We install balcony and window invisible grills for new apartments on Kurnool Road and homes in Mangamuru, Throvagunta and Lawyerpet.",
      "child-pet-safety-nets": "We install balcony safety nets, pigeon nets and child safety nets in Ongole's apartments and independent houses along Kurnool Road, Mangamuru and Lawyerpet — usually completed in a single visit.",
      "cricket-sports-nets": "Our cricket practice nets and sports nets serve Ongole's schools, colleges and cricket academies, with galvanised poles and HDPE netting suited to the region's coastal winds.",
      "ceiling-cloth-hangers": "Ongole families often combine ceiling cloth hangers with balcony safety nets in a single visit. Our pulley cloth hangers are installed across Kurnool Road, Mangamuru and Throvagunta.",
    },
    intro:
      "Ongole's expanding residential market along the Chennai–Kolkata highway has created strong demand for premium safety solutions. From traditional homes in Mangamuru to new apartments in Kurnool Road, we deliver Tier-1 city safety standards at Ongole.",
    landmarks: ["Ongole Bus Stand", "Chinna Ganjam Beach", "Throvagunta", "Mangamuru"],
    areas: ["Kurnool Road", "Mangamuru", "Throvagunta", "Vengamukkapalem", "Lawyerpet"],
    trend:
      "Ongole's combination of coastal proximity and dry heat means homeowners increasingly opt for stainless invisible grills over traditional MS grills that corrode and require yearly repainting.",
    testimonial: {
      name: "Venkat S.",
      area: "Kurnool Road, Ongole",
      text: "Balaji Invisible Grills drove down from Vijayawada and installed cloth hangers + safety nets in one day. Professional, fairly priced, and they cleaned up everything.",
      rating: 5,
    },
  },
  {
    slug: "tirupati",
    name: "Tirupati",
    serviceNotes: {
      "invisible-grills": "Tirupati's fast-growing apartment market around AIR Bypass Road, MR Palli, Padmavathi Nagar and Tiruchanoor has made invisible grills the standard for balcony safety. Families with elders and small children choose our balcony invisible grills because they protect without blocking the hill views.",
      "child-pet-safety-nets": "Monkeys and pigeons are both common balcony visitors in Tirupati. Our strong HDPE balcony safety nets and pigeon nets keep birds and animals out while keeping children safe, across Tiruchanoor, Alipiri, Korlagunta and MR Palli.",
      "cricket-sports-nets": "We install cricket practice nets and sports nets for Tirupati's schools, colleges and academies, plus terrace cricket nets for independent houses.",
      "ceiling-cloth-hangers": "Ceiling cloth hangers are a quick upgrade for Tirupati apartments with small utility balconies. We install pulley cloth drying hangers in Padmavathi Nagar, Tiruchanoor, MR Palli and nearby areas.",
    },
    intro:
      "As one of India's holiest cities and a fast-growing IT hub, Tirupati attracts families and professionals seeking premium homes near Sri City and Renigunta. Our invisible grills and safety nets help Tirupati homeowners protect their families without breaking the visual harmony of the temple city.",
    landmarks: ["Sri Venkateswara Temple", "Alipiri", "Tiruchanoor", "Sri City corridor"],
    areas: ["Tiruchanoor", "Alipiri", "Padmavathi Nagar", "Korlagunta", "MR Palli", "AIR Bypass Road"],
    trend:
      "Tirupati's growing high-rise market around AIR Bypass and MR Palli has driven sharp growth in invisible grill installations, especially for families with elders making pilgrimage stays.",
    testimonial: {
      name: "Padma D.",
      area: "Tiruchanoor, Tirupati",
      text: "Excellent service. The invisible grills look beautiful — guests can't even tell they're there. My elderly parents feel completely safe on the balcony now.",
      rating: 5,
    },
  },
  {
    slug: "anantapur",
    name: "Anantapur",
    serviceNotes: {
      "invisible-grills": "Anantapur's dry heat and dust are hard on painted MS grills. Our SS 316 invisible grills with anodised aluminium tracks don't fade, peel or rust, and are installed for balconies and windows in Saraswathi Nagar, Kamala Nagar and along the Anantapur bypass.",
      "child-pet-safety-nets": "We install balcony safety nets, pigeon nets and children safety nets in Anantapur with UV-stabilised HDPE that is tested for the region's strong sun and high temperatures.",
      "cricket-sports-nets": "Anantapur is one of our busiest regions for cricket practice nets — we install nets for academies, schools and sports grounds across Anantapur and Hindupur, built to handle heavy daily use.",
      "ceiling-cloth-hangers": "We install ceiling cloth hangers for homes across Saraswathi Nagar, Kamala Nagar and Subash Road. Rust-proof aluminium rods and powder-coated brackets handle Anantapur's dust and heat.",
    },
    intro:
      "Anantapur's transformation into a Rayalaseema growth hub — driven by the Kia plant and surrounding industrial corridor — has fuelled premium residential demand. Our invisible grills, cricket nets, and ceiling hangers serve homes, schools, and academies across Anantapur and Hindupur.",
    landmarks: ["Lepakshi Temple corridor", "Hindupur", "Kia Industrial Park", "Penukonda"],
    areas: ["Saraswathi Nagar", "Kamala Nagar", "Subash Road", "Anantapur Bypass", "Hindupur Road"],
    trend:
      "With Anantapur's dry heat and dust, our anodised aluminium tracks and powder-coated finishes outperform every other regional brand on lifespan.",
    testimonial: {
      name: "Krishna M.",
      area: "Saraswathi Nagar, Anantapur",
      text: "I run a cricket academy and Balaji Invisible Grills installed our entire 80x40 ft practice cage. Two years of heavy use, zero issues. Highly recommended.",
      rating: 5,
    },
  },
];

export { BLOG_POSTS, type BlogPost } from "./blog";

export const URL_ORIGIN = ""; // relative URLs; resolved by crawlers at request time
