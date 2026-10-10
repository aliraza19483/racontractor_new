export interface ServicePage {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  features: string[];
  image: string;
  gallery: string[];
  faqs: { q: string; a: string }[];
  related: string[];
}

const BOQ_FAQ = {
  q: "Do you provide a BOQ before starting work?",
  a: "Yes. After the initial brief and a site inspection, we prepare an itemised Bill of Quantities (BOQ) so you can see what is included before work begins.",
};
const COST_FAQ = {
  q: "How is the cost calculated?",
  a: "Cost depends on the scope, the size of the space, the materials and finishes you choose, and site conditions. We quote against an itemised BOQ after inspecting the site, rather than giving a flat figure without seeing the space.",
};
const AREA_FAQ = {
  q: "Which areas of Hyderabad do you serve?",
  a: "We work across Hyderabad, including Jubilee Hills, Banjara Hills, Gachibowli, Kondapur, Madhapur, Kokapet and the Financial District. Call us to confirm availability for your location.",
};

export const services: ServicePage[] = [
  {
    slug: "turnkey-construction-hyderabad",
    name: "Turnkey Construction",
    h1: "Turnkey Construction Contractor in Hyderabad",
    metaTitle: "Turnkey Construction Contractor in Hyderabad",
    metaDescription:
      "End-to-end turnkey construction in Hyderabad: civil work, MEP and interior fit-out under one contract with an itemised BOQ and site supervision.",
    intro:
      "Turnkey means one contractor is responsible for the whole project: civil construction, MEP, interior fit-out and handover. RA Contractor coordinates every trade under a single contract, with an itemised BOQ and a dedicated site manager, so you deal with one team instead of many vendors.",
    features: [
      "Civil construction and structural work",
      "Plumbing and electrical (MEP) coordination",
      "Interior fit-out and finishing",
      "Itemised BOQ before work starts",
      "Dedicated site manager",
      "Handover with documentation and warranty support",
    ],
    image: "/images/gallery/site-execution-24.jpg",
    gallery: [],
    faqs: [
      {
        q: "What is included in turnkey construction?",
        a: "Scope varies by project, but typically covers civil work, plumbing and electrical rough-in, flooring, ceilings, painting, carpentry and final handover. The exact inclusions and exclusions are listed in your BOQ.",
      },
      BOQ_FAQ,
      COST_FAQ,
      {
        q: "Who manages the project on site?",
        a: "A dedicated site manager oversees daily progress, quality and safety, and is your point of contact during execution.",
      },
      AREA_FAQ,
    ],
    related: ["civil-contractors-hyderabad", "luxury-interior-design-hyderabad", "commercial-interior-contractors-hyderabad"],
  },
  {
    slug: "civil-contractors-hyderabad",
    name: "Civil Construction",
    h1: "Civil Contractors in Hyderabad",
    metaTitle: "Civil Contractors in Hyderabad",
    metaDescription:
      "Civil construction contractors in Hyderabad for homes and commercial spaces: RCC, masonry, plastering, waterproofing, flooring and renovation.",
    intro:
      "End-to-end civil work for homes and commercial spaces, from structure to finishing, managed under one contract with a clear BOQ and site supervision.",
    features: [
      "Foundation and RCC work",
      "Brick and block masonry",
      "Plastering and waterproofing",
      "Plumbing and electrical rough-in",
      "Flooring and tile work",
      "Renovation and remodelling",
    ],
    image: "/images/gallery/site-execution-11.jpg",
    gallery: [],
    faqs: [BOQ_FAQ, COST_FAQ, AREA_FAQ],
    related: ["turnkey-construction-hyderabad", "painting-contractors-hyderabad", "electrical-contractors-hyderabad"],
  },
  {
    slug: "luxury-interior-design-hyderabad",
    name: "Home Interior Design",
    h1: "Home Interior Design & Execution in Hyderabad",
    metaTitle: "Home Interior Design & Execution in Hyderabad",
    metaDescription:
      "Home interiors in Hyderabad covering living rooms, bedrooms, dining, wardrobes, ceilings, lighting and finishing in one scope.",
    intro:
      "Complete interiors for living rooms, bedrooms and dining areas, covering carpentry, ceilings, lighting and finishing in one scope, executed by one team.",
    features: [
      "TV units and wall panelling",
      "Bedroom furniture and headboards",
      "Dining and crockery units",
      "False ceiling and lighting",
      "Painting and wall finishes",
      "Study and work corners",
    ],
    image: "/images/services/living/living-1.jpg",
    gallery: [1, 2, 3, 4, 5].map((n) => `/images/services/living/living-${n}.jpg`),
    faqs: [BOQ_FAQ, COST_FAQ, AREA_FAQ],
    related: ["modular-kitchen-hyderabad", "false-ceiling-hyderabad", "carpentry-wardrobes-hyderabad"],
  },
  {
    slug: "commercial-interior-contractors-hyderabad",
    name: "Commercial Interiors",
    h1: "Commercial Interior Contractors in Hyderabad",
    metaTitle: "Commercial Interior Contractors in Hyderabad",
    metaDescription:
      "Commercial fit-outs in Hyderabad for offices, showrooms, cafes, restaurants, clinics and salons, from ceiling and electrical to carpentry and painting.",
    intro:
      "Fit-outs for cafes, restaurants, clinics, salons, offices and retail showrooms, handled from ceiling and electrical to carpentry and painting by a single contractor.",
    features: [
      "Showroom and retail fit-outs",
      "Cafe and restaurant interiors",
      "Clinic and salon interiors",
      "Office partitions and cabins",
      "Ceiling, lighting and electrical",
      "Counters, shelving and signage base",
    ],
    image: "/images/services/commercial/commercial-1.jpg",
    gallery: [1, 2, 3, 4].map((n) => `/images/services/commercial/commercial-${n}.jpg`),
    faqs: [
      {
        q: "Do you work with architects and interior designers?",
        a: "Yes. A good part of our commercial work is executed alongside architects, designers and project managers, following their drawings and specifications.",
      },
      BOQ_FAQ,
      COST_FAQ,
      AREA_FAQ,
    ],
    related: ["false-ceiling-hyderabad", "electrical-contractors-hyderabad", "turnkey-construction-hyderabad"],
  },
  {
    slug: "modular-kitchen-hyderabad",
    name: "Modular Kitchens",
    h1: "Modular Kitchen Contractors in Hyderabad",
    metaTitle: "Modular Kitchen Contractors in Hyderabad",
    metaDescription:
      "Custom modular kitchens in Hyderabad made to your measurements, with moisture-resistant materials, quartz countertops and smart storage.",
    intro:
      "Ergonomic modular kitchens crafted with moisture-resistant materials, seamless countertops, pull-out organisers and chimney integration, made to your measurements.",
    features: [
      "Modular base and wall cabinets",
      "Quartz and granite countertops",
      "Tandem drawers and cutlery trays",
      "Pantry units and corner pull-outs",
      "Appliance integration and chimney",
      "Acrylic and PU shutters",
    ],
    image: "/images/services/kitchen/kitchen-1.jpg",
    gallery: [1, 2, 3, 4].map((n) => `/images/services/kitchen/kitchen-${n}.jpg`),
    faqs: [COST_FAQ, BOQ_FAQ, AREA_FAQ],
    related: ["luxury-interior-design-hyderabad", "carpentry-wardrobes-hyderabad", "electrical-contractors-hyderabad"],
  },
  {
    slug: "false-ceiling-hyderabad",
    name: "False Ceiling",
    h1: "False Ceiling Contractors in Hyderabad",
    metaTitle: "False Ceiling Contractors in Hyderabad",
    metaDescription:
      "Gypsum and grid false ceilings in Hyderabad with cove and concealed lighting planned together with the electrical work.",
    intro:
      "Gypsum and grid false ceilings designed around your room, with cove and concealed lighting planned together so the ceiling and electrical work fit cleanly.",
    features: [
      "Gypsum false ceilings",
      "Grid and mineral fibre ceilings",
      "Cove and profile lighting",
      "Peripheral and island designs",
      "Showroom and office ceilings",
      "Repair and modification work",
    ],
    image: "/images/services/false-ceiling/ceiling-1.jpg",
    gallery: [1, 2, 3, 4, 5].map((n) => `/images/services/false-ceiling/ceiling-${n}.jpg`),
    faqs: [COST_FAQ, AREA_FAQ],
    related: ["electrical-contractors-hyderabad", "painting-contractors-hyderabad", "luxury-interior-design-hyderabad"],
  },
  {
    slug: "painting-contractors-hyderabad",
    name: "Painting",
    h1: "Painting Contractors in Hyderabad",
    metaTitle: "Painting Contractors in Hyderabad",
    metaDescription:
      "Interior and exterior painting in Hyderabad with proper surface preparation, texture finishes, waterproof coatings and wood polish.",
    intro:
      "Interior and exterior painting with proper surface preparation, so the finish lasts and looks even.",
    features: [
      "Interior and exterior painting",
      "Putty and surface preparation",
      "Texture and accent walls",
      "Waterproof coatings",
      "Wood and metal polish",
      "Repainting and touch-ups",
    ],
    image: "/images/services/painting/painting-1.jpg",
    gallery: [1, 2, 3, 4, 5].map((n) => `/images/services/painting/painting-${n}.jpg`),
    faqs: [COST_FAQ, AREA_FAQ],
    related: ["false-ceiling-hyderabad", "civil-contractors-hyderabad", "luxury-interior-design-hyderabad"],
  },
  {
    slug: "electrical-contractors-hyderabad",
    name: "Electrical Works",
    h1: "Electrical Contractors in Hyderabad",
    metaTitle: "Electrical Contractors in Hyderabad",
    metaDescription:
      "Electrical installation in Hyderabad for new builds and renovations: concealed wiring, DB and switchboard work, lighting points and rewiring.",
    intro:
      "Safe, neat electrical installation for new builds and renovations, with concealed wiring and tidy panel work.",
    features: [
      "Concealed conduit wiring",
      "Switchboard and DB installation",
      "Lighting points and fixtures",
      "Fan, AC and appliance points",
      "Load planning and earthing",
      "Fault finding and rewiring",
    ],
    image: "/images/services/electrical/electrical-1.jpg",
    gallery: [1, 2, 3, 4, 5].map((n) => `/images/services/electrical/electrical-${n}.jpg`),
    faqs: [COST_FAQ, AREA_FAQ],
    related: ["false-ceiling-hyderabad", "civil-contractors-hyderabad", "commercial-interior-contractors-hyderabad"],
  },
  {
    slug: "carpentry-wardrobes-hyderabad",
    name: "Carpentry & Wardrobes",
    h1: "Custom Carpentry & Wardrobe Contractors in Hyderabad",
    metaTitle: "Custom Carpentry & Wardrobes in Hyderabad",
    metaDescription:
      "Custom woodwork, wardrobes, TV units and custom carpentry in Hyderabad, designed to maximise storage with quality fittings.",
    intro:
      "Custom woodwork, wardrobes, TV consoles and custom carpentry designed to maximise your storage, with quality fittings and finishes chosen to suit your budget.",
    features: [
      "Sliding and hinged wardrobes",
      "Walk-in closet fit-outs",
      "Custom TV consoles and units",
      "Soft-close fittings",
      "Veneer, laminate and PU finishes",
      "Loft and hidden storage",
    ],
    image: "/images/categories/carpentry.jpg",
    gallery: [],
    faqs: [COST_FAQ, AREA_FAQ],
    related: ["modular-kitchen-hyderabad", "luxury-interior-design-hyderabad", "painting-contractors-hyderabad"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
