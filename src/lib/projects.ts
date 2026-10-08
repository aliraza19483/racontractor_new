export interface ProjectPage {
  slug: string;
  title: string;
  type: string;
  category: "Residential" | "Commercial";
  location: string;
  area: string;
  image: string;
  summary: string;
  scope: string[];
  services: string[];
}

export const projectPages: ProjectPage[] = [
  {
    slug: "moldtech-technologies",
    title: "MoldTech Technologies",
    type: "Turnkey Fit-out",
    category: "Commercial",
    location: "HITEC City, Hyderabad",
    area: "approx. 8,500 sq ft",
    image: "/images/portfolio/moldtech-technologies.jpg",
    summary:
      "A flagship turnkey corporate office fit-out for MoldTech Technologies in HITEC City, featuring modern engineering workstations, sound-insulated glass conference rooms, acoustic timber slats, and comprehensive MEP infrastructure.",
    scope: [
      "Open-plan engineering workstations & ergonomic seating",
      "Sound-insulated glass executive cabins & boardrooms",
      "Designer linear LED & geometric false ceiling systems",
      "Acoustic timber slat wall panelling & brand feature wall",
      "High-density MEP, server room & structured network cabling",
      "Cafeteria, collaboration hubs & visitor reception suite",
    ],
    services: [
      "commercial-interior-contractors-hyderabad",
      "turnkey-construction-hyderabad",
      "false-ceiling-hyderabad",
      "electrical-contractors-hyderabad",
    ],
  },
  {
    slug: "moldtech-packaging",
    title: "Moldtech Packaging Pvt Ltd",
    type: "Turnkey & Civil",
    category: "Commercial",
    location: "Cherlapally, Hyderabad",
    area: "approx. 12,000 sq ft",
    image: "/images/portfolio/moldtech-packaging.jpg",
    summary:
      "End-to-end turnkey civil construction and administrative office execution for Moldtech Packaging Pvt Ltd, incorporating premium marble reception, packaging display galleries, executive boardrooms, and industrial civil finishing.",
    scope: [
      "Industrial administrative civil execution & turnkey fit-out",
      "Italian marble reception desk & illuminated product display gallery",
      "Executive boardroom, leadership cabins & meeting lounges",
      "Heavy-duty vitrified flooring & acoustic ceiling integration",
      "Integrated HVAC, fire detection & multi-phase electrical panels",
      "Client hospitality lounge & executive staircase framing",
    ],
    services: [
      "turnkey-construction-hyderabad",
      "civil-contractors-hyderabad",
      "commercial-interior-contractors-hyderabad",
      "false-ceiling-hyderabad",
    ],
  },
  {
    slug: "prithuvi-toyota-showroom",
    title: "Prithuvi Toyota Showroom",
    type: "Commercial Fit-out",
    category: "Commercial",
    location: "Kondapur, Hyderabad",
    area: "approx. 15,000 sq ft",
    image: "/images/portfolio/prithvi-toyota-showroom.jpg",
    summary:
      "Turnkey showroom civil and interior fit-out for Prithuvi Toyota Showroom, engineered to global automotive brand standards with high-gloss vehicle display arena, architectural lighting, customer lounges, and sales suites.",
    scope: [
      "Mirror-gloss vehicle display arena & architectural track lighting",
      "Geometric acoustic false ceilings with warm recessed LED troughs",
      "Glass-partitioned customer consultation pods & finance cabins",
      "Luxury customer hospitality lounge & beverage bar",
      "Commercial HVAC, centralized power distribution & sound engineering",
      "Brand facade integration, handover delivery bay & service reception",
    ],
    services: [
      "commercial-interior-contractors-hyderabad",
      "turnkey-construction-hyderabad",
      "civil-contractors-hyderabad",
      "false-ceiling-hyderabad",
    ],
  },
  {
    slug: "deloitte-delhi",
    title: "Deloitte",
    type: "Corporate Interiors",
    category: "Commercial",
    location: "Barakhamba Road, New Delhi",
    area: "approx. 18,500 sq ft",
    image: "/images/portfolio/deloitte-delhi.jpg",
    summary:
      "World-class corporate interior fit-out for Deloitte in Delhi, delivering high-performance agile workspaces, bespoke acoustic suspended baffles, glass conference suites, executive dining, and state-of-the-art turnkey execution.",
    scope: [
      "Agile workspace pods & high-density collaborative workstations",
      "State-of-the-art conference boardrooms with smart AV automation",
      "Suspended timber baffle ceilings & high-performance acoustic treatments",
      "Custom walnut veneer wall panelling & brand-themed focal elements",
      "Comprehensive MEP, BMS integration, access control & fire protection",
      "Executive dining suites & barista-style wellness break rooms",
    ],
    services: [
      "commercial-interior-contractors-hyderabad",
      "luxury-interior-design-hyderabad",
      "false-ceiling-hyderabad",
      "electrical-contractors-hyderabad",
    ],
  },
];

export const getProject = (slug: string) => projectPages.find((p) => p.slug === slug);
