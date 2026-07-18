export const BUSINESS = {
  name: "Balaji Invisible Grills",
  shortName: "Balaji Invisible Grills",
  tagline: "Premium Invisible Grills & Safety Net Installation Across Andhra Pradesh",
  phone: "+918897799694",
  phoneDisplay: "+91 88977 99694",
  secondaryPhone: "+919110323811",
  secondaryPhoneDisplay: "+91 91103 23811",
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

export const SERVICES: Service[] = [
  {
    slug: "invisible-grills",
    name: "Invisible Grills",
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
      { q: "Will they rust in coastal cities like Visakhapatnam?", a: "No. 316L is marine-grade stainless steel, the same alloy used in shipbuilding and offshore rigs. It is corrosion-proof in salt-air environments." },
      { q: "How long does installation take?", a: "Most balconies are completed in 4–6 hours with zero damage to walls or flooring." },
      { q: "Do you provide a warranty?", a: "Yes — 10 years structural warranty on tracks and cables, plus 1 year on accessories." },
    ],
    keywords: ["invisible grills", "stainless steel invisible grill", "balcony invisible grill", "window invisible grill"],
  },
  {
    slug: "child-pet-safety-nets",
    name: "Child & Pet Safety Nets",
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
    keywords: ["child safety nets", "pet safety nets", "balcony safety net", "bird net"],
  },
  {
    slug: "cricket-sports-nets",
    name: "Cricket & Sports Nets",
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
    keywords: ["cricket nets", "sports nets", "practice net installation", "cricket cage"],
  },
  {
    slug: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Hangers",
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
    keywords: ["ceiling cloth hanger", "pulley cloth hanger", "balcony cloth drying"],
  },
];

export interface Location {
  slug: string;
  name: string;
  intro: string;
  landmarks: string[];
  areas: string[];
  trend: string;
  testimonial: { name: string; area: string; text: string; rating: number };
}

export const LOCATIONS: Location[] = [
  {
    slug: "visakhapatnam",
    name: "Visakhapatnam",
    intro:
      "As Andhra Pradesh's largest coastal city, Visakhapatnam (Vizag) presents a unique safety challenge — salt-laden sea breeze that corrodes ordinary grills within months. Our 316L marine-grade invisible grills and UV-stabilised safety nets are engineered specifically for Vizag's coastal high-rises.",
    landmarks: ["RK Beach", "Rushikonda", "MVP Colony", "Beach Road", "Madhurawada"],
    areas: ["MVP Colony", "Madhurawada", "Seethammadhara", "Gajuwaka", "Yendada", "PM Palem", "Asilmetta", "Dwaraka Nagar"],
    trend:
      "With Vizag's rapid skyline growth — from My Home Avatar to Aparna Sarovar — high-rise families increasingly demand invisible grills that don't spoil the sea-view from premium 15th–30th floor apartments.",
    testimonial: {
      name: "Suresh K.",
      area: "MVP Colony, Visakhapatnam",
      text: "Living on the 14th floor facing the sea, I needed grills that wouldn't block the view or rust. Balaji Invisible Grills installed in 5 hours and 2 years later — zero rust, zero issues.",
      rating: 5,
    },
  },
  {
    slug: "vijayawada",
    name: "Vijayawada",
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

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  body: { heading: string; paragraphs: string[] }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "benefits-of-invisible-grills-for-apartments",
    title: "Benefits of Invisible Grills for Apartments",
    excerpt: "Why over 70% of new apartment owners in Andhra Pradesh are choosing invisible grills over traditional MS grills.",
    date: "2025-02-12",
    readTime: "6 min read",
    body: [
      { heading: "The shift from steel grills to invisible cables", paragraphs: [
        "Traditional mild-steel grills block your view, trap dust, rust within 2–3 years in coastal cities like Visakhapatnam, and add visual weight to your apartment.",
        "Invisible grills made from 316L marine-grade stainless steel solve all four problems while passing the same load tests as conventional grills.",
      ]},
      { heading: "Safety meets aesthetics", paragraphs: [
        "Invisible grills create a barrier strong enough to stop a child from accidentally falling, while remaining nearly invisible from 2 meters away.",
        "This is why premium gated communities across Vijayawada, Vizag and Tirupati now specify invisible grills in their balcony fit-out guidelines.",
      ]},
      { heading: "Long-term cost advantage", paragraphs: [
        "An invisible grill costs slightly more upfront but eliminates 10+ years of repainting, rust treatment and replacement that traditional grills demand.",
        "Over a 10-year horizon, invisible grills are 35–40% cheaper than MS grills when total cost of ownership is calculated.",
      ]},
    ],
  },
  {
    slug: "child-safety-solutions-high-rise",
    title: "Child Safety Solutions for High-Rise Homes",
    excerpt: "From safety nets to invisible grills — a complete playbook for parents living above the 5th floor.",
    date: "2025-02-02",
    readTime: "7 min read",
    body: [
      { heading: "Why high-rise balconies need active safety", paragraphs: [
        "Over 80% of accidental falls from balconies involve children under 6. A standard balcony railing at 3.5 ft simply does not protect a curious toddler.",
        "High-rise families need either invisible grills or HDPE safety nets — both create an unclimbable, transparent barrier.",
      ]},
      { heading: "Choosing between nets and grills", paragraphs: [
        "Choose invisible grills if you want a permanent premium-look solution with a 10-year warranty.",
        "Choose safety nets if you want a faster, removable solution that costs 60% less upfront.",
      ]},
    ],
  },
  {
    slug: "why-safety-nets-essential-for-families",
    title: "Why Safety Nets Are Essential for Families",
    excerpt: "An honest look at when safety nets matter most — and where they fall short.",
    date: "2025-01-22",
    readTime: "5 min read",
    body: [
      { heading: "Safety nets are the fastest balcony safety upgrade", paragraphs: [
        "Most balconies can be netted in 60–90 minutes with zero civil work, zero drilling damage, and zero mess.",
        "This makes nets the right choice for rented apartments, urgent installations and budget-conscious families.",
      ]},
    ],
  },
  {
    slug: "balcony-safety-options-andhra-pradesh",
    title: "Best Balcony Safety Options in Andhra Pradesh",
    excerpt: "A climate-aware buyer's guide for Vizag, Vijayawada, Guntur and beyond.",
    date: "2025-01-10",
    readTime: "8 min read",
    body: [
      { heading: "Coastal vs inland cities", paragraphs: [
        "Coastal cities (Vizag, Ongole) demand 316L stainless to resist salt corrosion.",
        "Inland cities (Anantapur, Guntur) prioritise UV resistance — our anodised tracks are tested at 55°C continuous exposure.",
      ]},
    ],
  },
  {
    slug: "invisible-grills-vs-traditional-grills",
    title: "Invisible Grills vs Traditional Grills",
    excerpt: "Strength, lifespan, aesthetics and cost — a side-by-side comparison.",
    date: "2024-12-28",
    readTime: "6 min read",
    body: [
      { heading: "Strength comparison", paragraphs: [
        "Tested under static load, 316L stainless cables at 2.5\" spacing match the impact resistance of 12mm MS bars at 4\" spacing.",
        "In dynamic impact tests, invisible grills out-perform MS grills because the cable flexes and absorbs energy instead of transferring shock to the anchor.",
      ]},
    ],
  },
  {
    slug: "ceiling-cloth-hangers-save-space",
    title: "How Ceiling Cloth Hangers Save Space",
    excerpt: "Recover 100% of your utility balcony floor with a simple pulley upgrade.",
    date: "2024-12-15",
    readTime: "4 min read",
    body: [
      { heading: "The space math", paragraphs: [
        "A typical floor-standing cloth stand occupies 8–10 sq ft. Ceiling hangers reclaim every inch of that.",
        "Drying is also 20% faster at ceiling level due to better airflow and warmer air pockets.",
      ]},
    ],
  },
  {
    slug: "cricket-nets-schools-sports-grounds",
    title: "Cricket Nets for Schools and Sports Grounds",
    excerpt: "What headmasters and academy coaches need to know before installing.",
    date: "2024-12-02",
    readTime: "7 min read",
    body: [
      { heading: "Spec guide for institutional installs", paragraphs: [
        "For schools, we recommend 2mm HDPE rope with 40mm mesh — the right balance of cost and durability for 8+ hour daily use.",
        "Academies should specify 3mm braided rope and hot-dip galvanised poles for 10-year service life.",
      ]},
    ],
  },
  {
    slug: "complete-guide-home-safety-solutions",
    title: "Complete Guide to Home Safety Solutions",
    excerpt: "Everything from balcony grills to pet enclosures, in one place.",
    date: "2024-11-20",
    readTime: "10 min read",
    body: [
      { heading: "Map your risk first", paragraphs: [
        "Walk every balcony, window and staircase void. Anywhere a child or pet could fall 3 ft or more needs an active safety solution.",
        "Then choose between invisible grills (premium), safety nets (fast & affordable), or a hybrid solution per opening.",
      ]},
    ],
  },
];

export const URL_ORIGIN = ""; // relative URLs; resolved by crawlers at request time
