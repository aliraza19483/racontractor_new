import type { SiteConfig, NavItem } from "@/types";

// ============================================================
// Site Configuration
// ============================================================
export const siteConfig: SiteConfig = {
  name: "RA CONTRACTOR",
  description:
    "Hyderabad-based civil construction and interior contractor: turnkey construction, home interiors, false ceilings, painting, electrical work and commercial fit-outs.",
  url: "https://racontractor.in",
  ogImage: "/images/og-image.jpg",
  phone: "+91 83748 97487",
  email: "racontractor35@gmail.com",
  whatsapp: "+918374897487",
  address: "Allapur Rd, near JK Point, Swaraj Nagar, Borabanda, Hyderabad, Telangana 500114",
  googleMapsUrl: "https://maps.app.goo.gl/Fr5AXyx2DzKuqXZN8",
  socialLinks: {
    instagram: "https://www.instagram.com/ra.interior.contractor?xtok=dGdkN2psa2lod3lk",
    facebook: "https://www.facebook.com/share/19vQ2LWx58/",
  },
};

// ============================================================
// Navigation
// ============================================================
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Civil Construction", href: "/services/civil-contractors-hyderabad" },
      { label: "Turnkey Construction", href: "/services/turnkey-construction-hyderabad" },
      { label: "Home Interior Design", href: "/services/luxury-interior-design-hyderabad" },
      { label: "Modular Kitchens", href: "/services/modular-kitchen-hyderabad" },
      { label: "False Ceiling & Lighting", href: "/services/false-ceiling-hyderabad" },
      { label: "Painting & Wall Finishes", href: "/services/painting-contractors-hyderabad" },
      { label: "Electrical Work", href: "/services/electrical-contractors-hyderabad" },
      { label: "Commercial Interior Fit-outs", href: "/services/commercial-interior-contractors-hyderabad" },
      { label: "Carpentry & Wardrobes", href: "/services/carpentry-wardrobes-hyderabad" },
      { label: "All Services", href: "/services" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Site Photos", href: "/gallery" },
  { label: "Guides", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

// ============================================================
// Design & Execution Process Steps
// ============================================================
export const designProcess = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We begin with a comprehensive discussion to align on civil construction requirements, structural goals, and your aesthetic vision.",
    icon: "MessageSquare",
  },
  {
    step: 2,
    title: "Site Inspection",
    description:
      "We inspect the site, take measurements and check structure, plumbing and electrical conditions.",
    icon: "MapPin",
  },
  {
    step: 3,
    title: "Layout Planning",
    description:
      "We plan layouts that suit how you use the space and what is structurally feasible.",
    icon: "Palette",
  },
  {
    step: 4,
    title: "Materials & BOQ",
    description:
      "Materials and finishes are selected with you and listed in a transparent, itemised Bill of Quantities (BOQ).",
    icon: "Layout",
  },
  {
    step: 5,
    title: "Design Finalisation",
    description:
      "Layouts, finishes and materials are confirmed with you before execution begins.",
    icon: "Monitor",
  },
  {
    step: 6,
    title: "Material Procurement",
    description:
      "Materials are procured from reliable suppliers as listed in your BOQ.",
    icon: "Layers",
  },
  {
    step: 7,
    title: "Civil & Turnkey Execution",
    description:
      "Our skilled civil engineers and master craftsmen bring the structure and interior to life with exacting precision and safety standards.",
    icon: "Hammer",
  },
  {
    step: 8,
    title: "Quality Checks",
    description:
      "Structural, plumbing, electrical and joinery work is checked at each stage.",
    icon: "CheckCircle",
  },
  {
    step: 9,
    title: "Final Finishing",
    description:
      "Joinery fit-out, lighting and final finishing touches complete the space.",
    icon: "Sparkles",
  },
  {
    step: 10,
    title: "Turnkey Handover",
    description:
      "Your space is handed over with documentation and warranty support as agreed in your proposal.",
    icon: "Key",
  },
];

// ============================================================
// Why Choose Us
// ============================================================
export const whyChooseUs = [
  {
    title: "Turnkey Contractor Expertise",
    description:
      "Civil construction, plumbing and electrical coordination and interior fit-out under one contract.",
    icon: "PenTool",
  },
  {
    title: "Quality Materials",
    description:
      "Branded materials and fittings as specified in your BOQ.",
    icon: "Gem",
  },
  {
    title: "Transparent & Fixed Pricing",
    description:
      "Clear, detailed BOQ quotations with zero hidden costs. You know exactly what you are investing in from day one.",
    icon: "Receipt",
  },
  {
    title: "Dedicated Civil Project Manager",
    description:
      "A dedicated engineering site manager overseeing daily progress, site safety, and quality standards on your project.",
    icon: "UserCheck",
  },
  {
    title: "Design Reviewed With You",
    description:
      "Layouts and finishes are discussed and agreed with you before work starts.",
    icon: "Monitor",
  },
  {
    title: "Strict Timeline Management",
    description:
      "Structured contractor milestones and proactive planning ensuring your project is delivered right on schedule.",
    icon: "Clock",
  },
  {
    title: "Skilled Workmanship",
    description:
      "Experienced crews for masonry, joinery, finishes and lighting.",
    icon: "Crown",
  },
  {
    title: "Turnkey Accountability",
    description:
      "Single-point responsibility eliminates vendor friction, ensuring seamless coordination across all technical teams.",
    icon: "Package",
  },
  {
    title: "Comprehensive Warranty Support",
    description:
      "Warranty terms are confirmed in your proposal, with after-service support.",
    icon: "ShieldCheck",
  },
];

// ============================================================
// Interior Categories
// ============================================================
export const interiorCategories = [
  { title: "False Ceiling & Lighting", slug: "false-ceiling", image: "/images/services/false-ceiling/ceiling-1.jpg" },
  { title: "Painting & Wall Finishes", slug: "painting", image: "/images/services/painting/painting-1.jpg" },
  { title: "Electrical & Concealed Wiring", slug: "electrical", image: "/images/services/electrical/electrical-1.jpg" },
  { title: "Carpentry & Custom Wardrobes", slug: "carpentry-wardrobes", image: "/images/categories/carpentry.jpg" },
  { title: "Modular Kitchen Design", slug: "modular-kitchen", image: "/images/services/kitchen/kitchen-1.jpg" },
  { title: "Living, Bedroom & Dining", slug: "home-interiors", image: "/images/services/living/living-1.jpg" },
  { title: "Bathroom & Balcony", slug: "bathroom-balcony", image: "/images/categories/bathroom.jpg" },
  { title: "Commercial & Showroom Fit-outs", slug: "commercial-fitout", image: "/images/services/commercial/commercial-1.jpg" },
];

// ============================================================
// Animation Defaults
// ============================================================
export const ANIMATION = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1] as const,
  stagger: 0.1,
  delay: 0.2,
} as const;
