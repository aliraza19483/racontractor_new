import type { SiteConfig, NavItem } from "@/types";

// ============================================================
// Site Configuration
// ============================================================
export const siteConfig: SiteConfig = {
  name: "RA CONTRACTOR",
  description:
    "Creating timeless structures and interiors for modern living. Premier specialists in False Ceiling, Painting, Electrical Installation, Turnkey Civil Construction, and Bespoke Interior Execution in Hyderabad and across India.",
  url: "https://racontractor.in",
  ogImage: "/images/og-image.jpg",
  phone: "+91 83748 97487",
  email: "racontractor35@gmail.com",
  whatsapp: "+918374897487",
  address: "Allapur Rd, near JK Point, Swaraj Nagar, Borabanda, Hyderabad, Telangana 500114",
  googleMapsUrl: "https://maps.app.goo.gl/Fr5AXyx2DzKuqXZN8",
  socialLinks: {
    instagram: "https://instagram.com/racontractor",
    facebook: "https://facebook.com/racontractor",
    linkedin: "https://linkedin.com/company/racontractor",
    pinterest: "https://pinterest.com/racontractor",
    youtube: "https://youtube.com/@racontractor",
  },
};

// ============================================================
// Navigation
// ============================================================
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  {
    label: "Services",
    href: "/#categories",
    children: [
      { label: "Turnkey Construction", href: "/services/turnkey-construction-hyderabad" },
      { label: "Civil Contractors", href: "/services/civil-contractors-hyderabad" },
      { label: "Luxury Interiors", href: "/services/luxury-interior-design-hyderabad" },
      { label: "Commercial Interiors", href: "/services/commercial-interior-contractors-hyderabad" },
      { label: "All Services", href: "/services" },
      { label: "Design & Build Process", href: "/#process" },
      { label: "Why Choose Us", href: "/#why-choose-us" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Guides", href: "/blog" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

// ============================================================
// Stats Counters
// ============================================================
export const stats = [
  { value: 100, suffix: "+", label: "Turnkey Projects Executed", icon: "Building2" },
  { value: 6, suffix: "+", label: "Years in Construction & Design", icon: "CalendarClock" },
  { value: 98, suffix: "%", label: "On-Time Delivery Rate", icon: "Timer" },
  { value: 15, suffix: "+", label: "Industry Excellence Awards", icon: "Award" },
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
      "Our engineering team conducts detailed structural assessment, laser measurements, and MEP evaluations on-site.",
    icon: "MapPin",
  },
  {
    step: 3,
    title: "Architectural Concept",
    description:
      "We create initial spatial layouts and architectural concepts that optimize flow, structural feasibility, and design elegance.",
    icon: "Palette",
  },
  {
    step: 4,
    title: "Mood Board & BOQ",
    description:
      "Curated selection of premium materials, finishes, and transparent Bill of Quantities (BOQ) detailing every specification.",
    icon: "Layout",
  },
  {
    step: 5,
    title: "3D & BIM Modeling",
    description:
      "Photorealistic 3D visualizations and structural models let you experience your space in complete detail before execution begins.",
    icon: "Monitor",
  },
  {
    step: 6,
    title: "Material Procurement",
    description:
      "Hand-picked Grade-A materials procured directly from leading national and global manufacturing partners.",
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
    title: "Rigorous Quality Audit",
    description:
      "Multi-stage structural, plumbing, electrical, and joinery quality checks ensure flawless execution and longevity.",
    icon: "CheckCircle",
  },
  {
    step: 9,
    title: "Final Interior Styling",
    description:
      "Custom joinery fit-out, lighting calibration, and luxury styling touches that transform the built structure into a masterpiece.",
    icon: "Sparkles",
  },
  {
    step: 10,
    title: "Turnkey Handover",
    description:
      "Your dream space is delivered on schedule with complete structural documentation, warranty certificates, and maintenance guides.",
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
      "Complete end-to-end civil construction, MEP engineering, and luxury interior fit-out under one unified contract.",
    icon: "PenTool",
  },
  {
    title: "Grade-A Certified Materials",
    description:
      "Only top-tier structural steel, cement, architectural hardware, and premium finishes from internationally recognized brands.",
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
    title: "3D & Structural Modeling",
    description:
      "Photorealistic renders and engineering layouts that let you refine every detail before construction begins.",
    icon: "Monitor",
  },
  {
    title: "Strict Timeline Management",
    description:
      "Structured contractor milestones and proactive planning ensuring your project is delivered right on schedule.",
    icon: "Clock",
  },
  {
    title: "Master Craftsmanship",
    description:
      "Every detail is crafted to perfection — from structural masonry and joinery to custom finishes and precision lighting.",
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
      "Robust structural and interior finish warranties backed by responsive after-service support for complete peace of mind.",
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
