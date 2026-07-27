// ============================================================
// RA CONTRACTOR — Type Definitions
// ============================================================

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: ServiceCategory;
  features: string[];
  image: string;
  icon: string;
}

export type ServiceCategory =
  | "residential"
  | "room-wise"
  | "commercial";

export interface ServiceGroup {
  category: ServiceCategory;
  label: string;
  description: string;
  services: Service[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  style: DesignStyle;
  images: string[];
  heroImage: string;
  beforeImage?: string;
  afterImage?: string;
  budget: string;
  timeline: string;
  location: string;
  area: string;
  materials: string[];
  clientReview?: Testimonial;
  featured: boolean;
}

export type ProjectCategory = "residential" | "commercial";

export type DesignStyle =
  | "modern"
  | "luxury"
  | "minimal"
  | "scandinavian"
  | "japandi"
  | "industrial"
  | "classic"
  | "contemporary";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  experience: string;
  bio: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientImage?: string;
  projectType: string;
  location: string;
  rating: number;
  review: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  googleMapsUrl?: string;
  socialLinks: {
    instagram: string;
    facebook: string;
    linkedin: string;
    pinterest: string;
    youtube: string;
  };
}
