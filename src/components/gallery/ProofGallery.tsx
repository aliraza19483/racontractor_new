"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, CheckCircle2, MessageCircle, Phone, Maximize2 } from "lucide-react";
import { galleryItems, galleryCategories, GalleryItem } from "@/lib/galleryData";
import { siteConfig } from "@/lib/constants";

export default function ProofGallery() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredItems.length]);

  // Lock body scroll on modal open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 md:gap-3 justify-center mb-10 md:mb-14">
        {galleryCategories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => {
              setActiveTab(cat.value);
              setSelectedIndex(null);
            }}
            className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
              activeTab === cat.value
                ? "bg-[var(--color-navy)] text-white shadow-lg shadow-[var(--color-navy)]/30 ring-2 ring-[var(--color-gold)]/40"
                : "bg-white text-[var(--color-navy)] hover:bg-[var(--color-gold)]/15 border border-black/5"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid of Real Photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: (index % 12) * 0.03 }}
            onClick={() => setSelectedIndex(index)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-black/10"
          >
            <Image
              src={item.src}
              alt={`${item.title} — On-site proof by RA CONTRACTOR`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-108"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />

            {/* Subtle Gradient & Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 sm:p-4">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-[var(--color-gold-light)] border border-white/10">
                  <CheckCircle2 className="w-3 h-3 text-[var(--color-gold)]" />
                  Site Proof
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div>
                <p className="text-white text-xs sm:text-sm font-bold line-clamp-1 font-[family-name:var(--font-playfair)]">
                  {item.title}
                </p>
                <p className="text-white/70 text-[10px] font-[family-name:var(--font-dm-sans)]">
                  {item.location} · RA Contractor
                </p>
              </div>
            </div>

            {/* Permanent small verified corner badge */}
            <div className="absolute top-2 left-2 group-hover:opacity-0 transition-opacity">
              <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[9px] font-medium text-white/90">
                #{item.id}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Top Bar */}
            <div
              className="flex items-center justify-between z-20 pb-3 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[var(--color-gold)]/20 text-[var(--color-gold-light)] border border-[var(--color-gold)]/30">
                    Real Site Execution Proof
                  </span>
                  <span className="text-xs text-white/60">
                    {selectedIndex + 1} of {filteredItems.length}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-playfair)] mt-1">
                  {activeItem.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Center Image Display */}
            <div
              className="relative flex-1 w-full flex items-center justify-center py-4 my-auto select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative max-w-5xl max-h-[75vh] w-full h-[65vh] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Prev Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
                  }}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {filteredItems.length > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all shadow-xl cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div
              className="z-20 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-black/40 px-4 py-3 rounded-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs text-white/60 font-[family-name:var(--font-dm-sans)] text-center sm:text-left">
                Direct on-site execution photograph by RA CONTRACTOR site engineering team.
              </p>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Hi, I saw photo #${activeItem.id} (${activeItem.title}) on your website. I want to discuss a similar project execution.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-[var(--color-navy)] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Enquire on WhatsApp
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-white/15"
                >
                  <Phone className="w-4 h-4" />
                  Call Site Engineer
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
