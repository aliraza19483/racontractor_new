"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronLeft, ChevronRight, MessageCircle, Phone } from "lucide-react";

// ─── Category content ───
const CATEGORY_DETAILS: Record<string, { description: string; features: string[]; gallery?: string[] }> = {
  "civil-construction": {
    description: "End-to-end civil work for homes and commercial spaces, from structure to finishing, managed under one contract with a clear BOQ and site supervision.",
    features: ["Foundation & RCC Work", "Brick & Block Masonry", "Plastering & Waterproofing", "Plumbing & Electrical Rough-in", "Flooring & Tile Work", "Renovation & Remodelling"],
  },
  "false-ceiling": {
    description: "Gypsum and grid false ceilings designed around your room, with cove and concealed lighting planned together so the ceiling and electrical work fit cleanly.",
    features: ["Gypsum False Ceilings", "Grid & Mineral Fibre Ceilings", "Cove & Profile Lighting", "Peripheral & Island Designs", "Showroom & Office Ceilings", "Repair & Modification Work"],
    gallery: [
      "/images/services/false-ceiling/ceiling-1.jpg",
      "/images/services/false-ceiling/ceiling-2.jpg",
      "/images/services/false-ceiling/ceiling-3.jpg",
      "/images/services/false-ceiling/ceiling-4.jpg",
      "/images/services/false-ceiling/ceiling-5.jpg",
    ],
  },
  painting: {
    description: "Interior and exterior painting with proper surface preparation, so the finish lasts and looks even.",
    features: ["Interior & Exterior Painting", "Putty & Surface Preparation", "Texture & Accent Walls", "Waterproof Coatings", "Wood & Metal Polish", "Repainting & Touch-ups"],
    gallery: [
      "/images/services/painting/painting-1.jpg",
      "/images/services/painting/painting-2.jpg",
      "/images/services/painting/painting-3.jpg",
      "/images/services/painting/painting-4.jpg",
      "/images/services/painting/painting-5.jpg",
    ],
  },
  electrical: {
    description: "Safe, neat electrical installation for new builds and renovations, with concealed wiring and tidy panel work.",
    features: ["Concealed Conduit Wiring", "Switchboard & DB Installation", "Lighting Points & Fixtures", "Fan, AC & Appliance Points", "Load Planning & Earthing", "Fault Finding & Rewiring"],
    gallery: [
      "/images/services/electrical/electrical-1.jpg",
      "/images/services/electrical/electrical-2.jpg",
      "/images/services/electrical/electrical-3.jpg",
      "/images/services/electrical/electrical-4.jpg",
      "/images/services/electrical/electrical-5.jpg",
    ],
  },
  "kitchen-wardrobes": {
    description: "Custom modular kitchens and wardrobes made to your measurements, with quality hardware and finishes chosen to suit your budget.",
    features: ["Modular Kitchen Cabinets", "Countertops & Backsplash", "Sliding & Hinged Wardrobes", "Soft-close Hardware", "Laminate & Acrylic Finishes", "Loft & Storage Units"],
  },
  "carpentry-wardrobes": {
    description: "Custom woodwork, designer wardrobes, TV consoles, and bespoke carpentry designed to maximize your storage with premium fittings.",
    features: ["Sliding & Hinged Wardrobes", "Walk-in Closet Fit-outs", "Custom TV Consoles & Units", "Soft-close Hafele/Hettich Fittings", "Veneer, Laminate & PU Finishes", "Loft & Hidden Storage"],
  },
  "modular-kitchen": {
    description: "Ergonomic modular kitchens crafted with moisture-resistant materials, seamless quartz countertops, smart pull-out organizers, and chimney integration.",
    features: ["Modular Base & Wall Cabinets", "Quartz & Granite Countertops", "Tandem Drawers & Cutlery Trays", "Pantry Units & Corner Pull-outs", "Appliance Integration & Chimney", "Anti-scratch Acrylic & PU Shutters"],
    gallery: [
      "/images/services/kitchen/kitchen-1.jpg",
      "/images/services/kitchen/kitchen-2.jpg",
      "/images/services/kitchen/kitchen-3.jpg",
      "/images/services/kitchen/kitchen-4.jpg",
    ],
  },
  "home-interiors": {
    description: "Complete interiors for living rooms, bedrooms and dining areas, covering carpentry, ceilings, lighting and finishing in one scope.",
    features: ["TV Units & Wall Panelling", "Bedroom Furniture & Headboards", "Dining & Crockery Units", "False Ceiling & Lighting", "Painting & Wall Finishes", "Study & Work Corners"],
    gallery: [
      "/images/services/living/living-1.jpg",
      "/images/services/living/living-2.jpg",
      "/images/services/living/living-3.jpg",
      "/images/services/living/living-4.jpg",
      "/images/services/living/living-5.jpg",
    ],
  },
  "bathroom-balcony": {
    description: "Bathroom renovation and balcony makeovers with careful waterproofing, drainage and fittings, built for daily use.",
    features: ["Waterproofing & Drainage", "Tile & Flooring Work", "Sanitary Ware & Fittings", "Vanity & Mirror Units", "Balcony Flooring & Railings", "Grills, Planters & Seating"],
  },
  "commercial-fitout": {
    description: "Fit-outs for cafes, restaurants, clinics, salons, offices and retail showrooms, handled from ceiling and electrical to carpentry and painting.",
    features: ["Showroom & Retail Fit-outs", "Cafe & Restaurant Interiors", "Clinic & Salon Interiors", "Office Partitions & Cabins", "Ceiling, Lighting & Electrical", "Counters, Shelving & Signage Base"],
    gallery: [
      "/images/services/commercial/commercial-1.jpg",
      "/images/services/commercial/commercial-2.jpg",
      "/images/services/commercial/commercial-3.jpg",
      "/images/services/commercial/commercial-4.jpg",
    ],
  },
  // ─── Projects ───
  "moldtech-technologies": {
    description: "A flagship turnkey corporate office fit-out for MoldTech Technologies in HITEC City, featuring modern engineering workstations, sound-insulated glass conference rooms, acoustic timber slats, and comprehensive MEP infrastructure.",
    features: ["Open-plan Engineering Workstations", "Glass Executive Cabins & Boardrooms", "Designer Linear LED Ceilings", "Acoustic Timber Slat Panelling", "Server Room & Network Cabling", "Cafeteria & Reception Hub"],
  },
  "moldtech-packaging": {
    description: "End-to-end turnkey civil construction and administrative office execution for Moldtech Packaging Pvt Ltd, incorporating premium marble reception, packaging display galleries, executive boardrooms, and industrial civil finishing.",
    features: ["Industrial Administrative Civil Execution", "Italian Marble Reception Desk", "Display Gallery & Showcases", "Executive Boardroom & Leadership Cabins", "Heavy-duty Vitrified Flooring", "Integrated HVAC & Fire Safety"],
  },
  "prithuvi-toyota-showroom": {
    description: "Turnkey showroom civil and interior fit-out for Prithuvi Toyota Showroom, engineered to global automotive brand standards with high-gloss vehicle display arena, architectural lighting, customer lounges, and sales suites.",
    features: ["High-gloss Vehicle Display Arena", "Architectural Track & LED Lighting", "Geometric Acoustic False Ceilings", "Customer Consultation Cabins", "Luxury Hospitality Lounge & Bar", "Brand Facade & Handover Bay"],
  },
  "deloitte-delhi": {
    description: "World-class corporate interior fit-out for Deloitte in Delhi, delivering high-performance agile workspaces, bespoke acoustic suspended baffles, glass conference suites, executive dining, and state-of-the-art turnkey execution.",
    features: ["Agile Workspace Pods & Desks", "Smart AV Conference Boardrooms", "Suspended Timber Baffle Ceilings", "Custom Walnut Wall Panelling", "Comprehensive MEP & BMS Control", "Executive Wellness & Dining Suites"],
  },
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
};

// ─── Props ───
interface CategoryDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: { slug: string; title: string; image: string } | null;
}

export default function CategoryDetailModal({ isOpen, onClose, category }: CategoryDetailModalProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (category) {
      const det = CATEGORY_DETAILS[category.slug];
      const initialImg = det?.gallery && det.gallery.length > 0 ? det.gallery[0] : category.image;
      setSelectedImage(initialImg);
    }
  }, [category]);

  if (!isOpen || !category) return null;
  const details = CATEGORY_DETAILS[category.slug];
  if (!details) return null;

  const galleryImages = details.gallery && details.gallery.length > 0 ? details.gallery : [category.image];
  const currentImage = selectedImage && galleryImages.includes(selectedImage) ? selectedImage : galleryImages[0];
  const currentIndex = galleryImages.indexOf(currentImage);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[nextIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIdx]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cat-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] bg-[#060D18]/90 backdrop-blur-md overflow-y-auto overscroll-contain flex justify-center items-start p-3 sm:p-6 py-6 sm:py-12"
          onClick={onClose}
          style={{ touchAction: "pan-y" }}
        >
          <motion.div
            key="cat-modal-box"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-4xl lg:max-w-5xl w-full bg-[#0E1A2E] border border-[var(--color-gold)]/30 rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.85)] my-auto overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Header ── */}
            <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[var(--color-navy)]/90 sticky top-0 z-20 backdrop-blur-md">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[var(--color-gold)]/20 text-[var(--color-gold-light)] font-[family-name:var(--font-dm-sans)]">
                  Our Services
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-playfair)] mt-1.5">
                  {category.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] text-white flex items-center justify-center transition-colors shadow-md shrink-0 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ── Body: Single Clean Column ── */}
            <div className="p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Description */}
              <p className="text-sm sm:text-base text-white/70 leading-[1.8] font-[family-name:var(--font-dm-sans)]">
                {details.description}
              </p>

              {/* What's Included */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-playfair)] mb-4 flex items-center gap-3">
                  <span className="w-7 h-[2px] bg-[var(--color-gold)]" />
                  What&apos;s Included
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {details.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                      <span className="text-xs sm:text-sm text-white/80 font-[family-name:var(--font-dm-sans)]">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Gallery */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-playfair)] flex items-center gap-3">
                    <span className="w-7 h-[2px] bg-[var(--color-gold)]" />
                    Design Showcase ({galleryImages.length} Real Views)
                  </h4>
                  <span className="text-xs text-[var(--color-gold-light)] font-[family-name:var(--font-dm-sans)] hidden sm:inline">
                    Click arrows or thumbnails to explore
                  </span>
                </div>

                {/* Main Large Display with Next/Prev navigation */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden ring-1 ring-white/[0.1] shadow-2xl bg-black/40 group">
                  <Image
                    src={currentImage}
                    alt={`${category.title} design view`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 85vw"
                    priority
                  />

                  {galleryImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous image"
                        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-90 hover:opacity-100 shadow-xl cursor-pointer"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next image"
                        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all opacity-90 hover:opacity-100 shadow-xl cursor-pointer"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-xs font-semibold text-white/90 border border-white/10 font-[family-name:var(--font-dm-sans)]">
                        {currentIndex + 1} / {galleryImages.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Clickable Thumbnails Row */}
                {galleryImages.length > 1 && (
                  <div className="mt-3">
                    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2 sm:gap-3">
                      {galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedImage(img)}
                          className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                            currentImage === img
                              ? "border-[var(--color-gold)] scale-[1.03] shadow-[0_0_16px_rgba(200,170,110,0.5)] ring-2 ring-[var(--color-gold)]"
                              : "border-white/15 opacity-65 hover:opacity-100 hover:border-white/50"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${category.title} thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 25vw, 150px"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Clean Action Bar */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/[0.02] p-4 sm:p-5 rounded-xl border border-white/[0.05]">
                <div>
                  <h5 className="text-sm sm:text-base font-semibold text-white font-[family-name:var(--font-playfair)]">
                    Interested in {category.title}?
                  </h5>
                  <p className="text-xs text-white/50 font-[family-name:var(--font-dm-sans)]">
                    Contact directly for site visits, BOQ estimates, and design consultations.
                  </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/918374897487?text=${encodeURIComponent(`Hi, I would like to inquire about ${category.title} services.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] hover:from-[var(--color-gold-dark)] hover:to-[var(--color-gold)] text-[var(--color-navy)] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[var(--color-gold)]/20 hover:scale-[1.02] flex items-center justify-center gap-2 font-[family-name:var(--font-dm-sans)]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+918374897487"
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 font-[family-name:var(--font-dm-sans)]"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
