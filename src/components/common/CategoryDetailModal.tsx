"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send } from "lucide-react";

// ─── Category content ───
const CATEGORY_DETAILS: Record<string, { description: string; features: string[] }> = {
  "living-room": {
    description: "Transform your living space into a stunning showcase of comfort and elegance with premium finishes, custom furniture layouts, accent walls, and ambient lighting.",
    features: ["Custom TV Unit & Wall Panels", "Accent Walls & Textures", "Ambient & Cove Lighting", "Premium Sofa Layouts", "Designer Ceiling Treatments", "Curated Décor & Accessories"],
  },
  bedroom: {
    description: "Create your personal sanctuary with bespoke bedroom designs focusing on calming aesthetics, ergonomic layouts, smart storage, and premium bedding arrangements.",
    features: ["Custom Headboard Designs", "Walk-in & Built-in Wardrobes", "Mood & Ambient Lighting", "Premium Flooring Options", "Dressing Area Integration", "Blackout & Sheer Curtain Systems"],
  },
  "modular-kitchen": {
    description: "Experience the perfect blend of functionality and aesthetics with our modular kitchen solutions — smart layouts, premium hardware, and durable finishes.",
    features: ["Modular Cabinets & Drawers", "Granite & Quartz Countertops", "Premium Hardware & Fittings", "Chimney & Appliance Integration", "Backsplash & Tile Work", "Pantry & Storage Solutions"],
  },
  wardrobes: {
    description: "Maximize storage with custom-designed wardrobes. From walk-in closets to sliding-door systems, we create organized and elegant solutions tailored to your needs.",
    features: ["Sliding & Hinged Door Options", "Internal Organization Systems", "LED Strip Lighting", "Mirror Integration", "Premium Laminates & Finishes", "Shoe Racks & Accessory Trays"],
  },
  "luxury-bathroom": {
    description: "Elevate your daily routine with luxury bathroom designs combining premium fixtures, elegant tilework, and spa-inspired elements for a personal retreat.",
    features: ["Premium Sanitary Fittings", "Designer Tile Work & Patterns", "Rain Shower & Jacuzzi Options", "Vanity & Mirror Units", "Heated Flooring Systems", "Waterproofing & Drainage"],
  },
  balcony: {
    description: "Convert your balcony into a beautiful outdoor living space with cozy seating, vertical gardens, and aesthetic railings for the perfect relaxation spot.",
    features: ["Outdoor Seating Arrangements", "Vertical Garden & Planters", "Weather-resistant Flooring", "Decorative Railings & Glass", "Ambient Outdoor Lighting", "Privacy Screens & Blinds"],
  },
  "dining-room": {
    description: "Create memorable dining experiences with thoughtfully designed spaces — elegant arrangements, statement lighting, and warm atmospheres that bring families together.",
    features: ["Custom Dining Table Designs", "Statement Chandelier & Lighting", "Crockery Unit & Display Shelves", "Accent Wall Treatments", "Premium Flooring Solutions", "Bar Counter Integration"],
  },
  "home-office": {
    description: "Design a productive workspace at home with ergonomic layouts, stylish aesthetics, smart storage, proper lighting, and cable management for the modern professional.",
    features: ["Ergonomic Desk & Chair Setup", "Built-in Bookshelves & Storage", "Cable Management Systems", "Task & Ambient Lighting", "Acoustic Panels & Soundproofing", "Video Call Background Design"],
  },
  "cafe-interior": {
    description: "Bring your café vision to life with unique themes, comfortable seating, and Instagram-worthy aesthetics that keep customers coming back.",
    features: ["Theme-based Interior Concepts", "Custom Counter & Bar Design", "Ambient & Accent Lighting", "Comfortable Seating Layouts", "Wall Art & Murals", "Menu Board & Signage Design"],
  },
  restaurants: {
    description: "Create unforgettable dining atmospheres — from fine dining to casual eateries, we craft spaces that complement your cuisine and brand identity.",
    features: ["Kitchen Layout & Design", "Private Dining Cabins", "Mood Lighting Systems", "Custom Furniture & Upholstery", "Soundproofing Solutions", "Branding & Signage Integration"],
  },
  hotels: {
    description: "Deliver five-star experiences with hotel interior solutions. We design lobbies, rooms, and common areas that create lasting impressions and ensure guest comfort.",
    features: ["Lobby & Reception Design", "Room Interior & Layouts", "Corridor & Common Area Design", "Banquet Hall Interiors", "Premium Bathroom Fit-outs", "Lighting & Ambiance Systems"],
  },
  clinics: {
    description: "Design professional, welcoming clinic spaces that put patients at ease — balancing clinical functionality with modern aesthetics that inspire trust.",
    features: ["Reception & Waiting Area Design", "Consultation Room Layouts", "Sterilization-friendly Materials", "Calming Color Palettes", "Privacy Partitions & Screens", "Accessible & Compliant Design"],
  },
  salons: {
    description: "Create stunning salon interiors with premium styling stations, perfect lighting, and an ambiance that reflects your brand and keeps clients returning.",
    features: ["Custom Styling Stations", "Vanity Mirror & Lighting Setup", "Wash Basin Area Design", "Product Display Shelves", "Waiting Lounge Interiors", "Premium Flooring & Wall Panels"],
  },
  "retail-shops": {
    description: "Maximize retail potential with store designs that guide customers, highlight products, and reinforce your brand through smart spatial planning.",
    features: ["Window Display Design", "Product Shelving & Racks", "Checkout Counter Design", "Signage & Branding Elements", "Spot & Track Lighting", "Storage & Backroom Planning"],
  },
  // ─── Projects ───
  "emerald-residence": {
    description: "A comprehensive turnkey execution of The Emerald Residence in Jubilee Hills — covering civil construction, interior design, modular kitchens, custom wardrobes, and premium finishing across 2,800 sq ft.",
    features: ["Full Turnkey Civil & Interior", "Modular Kitchen & Wardrobes", "False Ceiling & Lighting Design", "Premium Flooring & Wall Finishes", "Bathroom Fit-outs", "Landscape & Balcony Design"],
  },
  "skyline-corporate": {
    description: "End-to-end corporate office fit-out for Skyline at Gachibowli — designed for productivity with ergonomic workstations, conference rooms, reception areas, and modern aesthetics across 4,200 sq ft.",
    features: ["Open-plan Workstation Design", "Executive Cabin Interiors", "Conference & Meeting Rooms", "Reception & Lobby Design", "Server Room & Electrical", "Pantry & Breakout Zones"],
  },
  "serene-villa": {
    description: "Premium civil construction and structural execution of Serene Villa in Kondapur — a 3,500 sq ft luxury residence built from foundation to finishing with top-grade materials.",
    features: ["Structural & Civil Construction", "RCC Framework & Foundation", "Plumbing & Electrical Rough-in", "Exterior Elevation Design", "Terrace & Garden Landscaping", "Boundary Wall & Gate Design"],
  },
  "artisan-cafe": {
    description: "A bespoke café interior fit-out at Banjara Hills — crafted with an artisan theme, custom counter design, mood lighting, and Instagram-worthy décor across 1,800 sq ft.",
    features: ["Theme-based Café Interiors", "Custom Counter & Bar Setup", "Mood & Pendant Lighting", "Seating Layout & Upholstery", "Wall Art & Murals", "Branding & Signage Integration"],
  },
  "ivory-penthouse": {
    description: "Luxury interior execution of The Ivory Penthouse in Madhapur — spanning 5,000 sq ft with bespoke furnishings, designer ceilings, smart home integration, and premium materials.",
    features: ["Luxury Living & Dining Interiors", "Master Suite & Guest Rooms", "Smart Home Automation", "Designer False Ceilings", "Premium Marble & Wood Flooring", "Custom Furniture & Art Curation"],
  },
  "bloom-wellness": {
    description: "Complete turnkey execution for Bloom Wellness Spa at Kukatpally — a 3,200 sq ft wellness center with calming interiors, treatment rooms, reception design, and spa-grade finishes.",
    features: ["Spa Treatment Room Design", "Reception & Waiting Lounge", "Calming Colour & Lighting", "Waterproof & Anti-slip Flooring", "Steam & Sauna Room Fit-out", "Product Display & Storage"],
  },
};

// ─── Props ───
interface CategoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: { slug: string; title: string; image: string } | null;
}

export default function CategoryDetailModal({ isOpen, onClose, category }: CategoryDetailModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", city: "", propertyType: "", budget: "", message: "" });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen, category]);

  if (!isOpen || !category) return null;
  const details = CATEGORY_DETAILS[category.slug];
  if (!details) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, I'm interested in ${category.title} services.\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/918374897487?text=${encodeURIComponent(text)}`, "_blank");
  };

  const inputClass = "w-full px-4 py-3 rounded-[10px] bg-white/[0.05] border border-white/[0.1] text-white text-[13px] placeholder:text-white/30 focus:outline-none focus:border-[var(--color-gold)]/50 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(200,170,110,0.08)] transition-all duration-200 font-[family-name:var(--font-dm-sans)]";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cat-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-[#060D18]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            key="cat-modal-box"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-7xl w-full bg-[#0E1A2E] border border-[var(--color-gold)]/30 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.85)] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Header ── */}
            <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[var(--color-navy)]/80">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[var(--color-gold)]/20 text-[var(--color-gold-light)] font-[family-name:var(--font-dm-sans)]">
                  Interior Design & Execution
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-playfair)] mt-1.5">
                  {category.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] text-white flex items-center justify-center transition-colors shadow-md shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ── Body: Two Columns ── */}
            <div className="flex flex-col lg:flex-row items-stretch">
              {/* LEFT — 60% */}
              <div className="flex-[60] p-6 sm:p-8 lg:p-10 overflow-y-auto max-h-[70vh] lg:max-h-[75vh] border-r-0 lg:border-r border-white/[0.08]">
                {/* Description */}
                <p className="text-sm sm:text-[15px] text-white/65 leading-[1.8] font-[family-name:var(--font-dm-sans)] mb-8">
                  {details.description}
                </p>

                {/* What's Included */}
                <h4 className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-playfair)] mb-5 flex items-center gap-3">
                  <span className="w-7 h-[2px] bg-[var(--color-gold)]" />
                  What&apos;s Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {details.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                      <span className="text-xs sm:text-sm text-white/75 font-[family-name:var(--font-dm-sans)]">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Single Image */}
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden ring-1 ring-white/[0.08] shadow-lg">
                  <Image
                    src={category.image}
                    alt={`${category.title} interior`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              </div>

              {/* RIGHT — 40% Quote Form */}
              <div className="flex-[40] p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#0c1828] to-[#091320] flex flex-col justify-start overflow-y-auto max-h-[70vh] lg:max-h-[75vh]">
                <h4 className="text-xl sm:text-2xl font-bold text-white font-[family-name:var(--font-playfair)] mb-1.5">
                  Get a Free Quote
                </h4>
                <p className="text-xs text-white/40 font-[family-name:var(--font-dm-sans)] mb-2">
                  Tell us about your {category.title.toLowerCase()} project
                </p>
                <div className="w-10 h-[2px] bg-[var(--color-gold)]/60 mb-6" />

                <form onSubmit={handleSubmit} className="space-y-3.5 flex-1">
                  <div className="grid grid-cols-2 gap-2.5">
                    <input name="name" type="text" placeholder="Your Name *" required value={formData.name} onChange={handleChange} className={inputClass} />
                    <input name="phone" type="tel" placeholder="Phone *" required value={formData.phone} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className={inputClass} />
                    <input name="city" type="text" placeholder="City *" required value={formData.city} onChange={handleChange} className={inputClass} />
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <select name="propertyType" value={formData.propertyType} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="" className="bg-[#0a1525]">Property Type *</option>
                      <option value="apartment" className="bg-[#0a1525]">Apartment</option>
                      <option value="villa" className="bg-[#0a1525]">Villa / House</option>
                      <option value="commercial" className="bg-[#0a1525]">Commercial</option>
                      <option value="office" className="bg-[#0a1525]">Office</option>
                    </select>
                    <input name="budget" type="text" placeholder="Budget" value={formData.budget} onChange={handleChange} className={inputClass} />
                  </div>
                  <textarea name="message" rows={3} placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} />
                  <button
                    type="submit"
                    className="w-full h-[50px] rounded-[10px] bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] hover:from-[var(--color-gold-dark)] hover:to-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[var(--color-gold)]/15 hover:shadow-[var(--color-gold)]/30 hover:scale-[1.01] flex items-center justify-center gap-2 font-[family-name:var(--font-dm-sans)] mt-1"
                  >
                    <Send className="w-3.5 h-3.5" />
                    GET FREE QUOTE
                  </button>
                </form>
                <p className="text-[10px] text-white/20 text-center mt-4 font-[family-name:var(--font-dm-sans)]">
                  100% secure · We never share your data
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
