"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Maximize2, CheckCircle2 } from "lucide-react";

export interface ModalProjectData {
  id: string;
  title: string;
  category: string;
  style?: string;
  location?: string;
  area?: string;
  afterImage: string; // Keeps compatibility with existing props
  gallery: string[];
  description?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ModalProjectData | null;
}

export default function ProjectModal({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setActiveImageIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, project]);

  if (!isOpen || !project) return null;

  // Ensure we have 3-4 relevant images in the gallery
  const galleryImages = (project.gallery && project.gallery.length >= 4)
    ? project.gallery.slice(0, 4)
    : [
        project.afterImage,
        ...(project.gallery && project.gallery.length > 0 ? project.gallery : [
          "/images/portfolio/project-1.jpg",
          "/images/portfolio/project-2.jpg",
          "/images/portfolio/project-4.jpg",
          "/images/portfolio/project-6.jpg"
        ])
      ].slice(0, 4);

  const currentImage = galleryImages[activeImageIndex] || galleryImages[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[120] bg-[#060D18]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-5xl w-full bg-[#0E1A2E] border border-[var(--color-gold)]/40 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[var(--color-navy)]/80">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-[var(--color-gold)]/20 text-[var(--color-gold-light)] font-[family-name:var(--font-dm-sans)]">
                  {project.category || "Project"}
                </span>
                {project.location && (
                  <span className="text-xs sm:text-sm text-white/60 flex items-center gap-1 font-[family-name:var(--font-dm-sans)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                    {project.location} {project.area ? `· ${project.area}` : ""}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-playfair)]">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] text-white flex items-center justify-center transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Image Area */}
          <div className="relative h-[320px] sm:h-[420px] md:h-[480px] w-full bg-black select-none overflow-hidden flex items-center justify-center group">
            <Image
              src={currentImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            
            {/* Navigation Arrows */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
                  }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[var(--color-gold)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md backdrop-blur-sm"
                  aria-label="Previous image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
                  }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[var(--color-gold)] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md backdrop-blur-sm"
                  aria-label="Next image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </>
            )}
          </div>

          {/* Bottom Gallery & Details Strip */}
          <div className="p-4 sm:p-6 bg-[var(--color-navy)]/95 flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Gallery Thumbnails */}
            <div className="w-full md:w-auto">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-2.5 font-[family-name:var(--font-dm-sans)] flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5" />
                Gallery Views
              </p>
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                      activeImageIndex === i
                        ? "border-[var(--color-gold)] scale-105 shadow-md"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Gallery view ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 64px, 80px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Scope Summary & Action */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col items-start sm:items-center md:items-end gap-3 justify-between">
              <div className="text-left md:text-right">
                <div className="text-xs font-medium text-white/80 flex items-center gap-1.5 md:justify-end mb-1 font-[family-name:var(--font-dm-sans)]">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-gold)]" />
                  Premium Execution
                </div>
                <p className="text-xs text-white/50 max-w-xs font-[family-name:var(--font-dm-sans)]">
                  {project.description || "Bespoke design, premium finishings, and excellent structural implementation delivered strictly on schedule."}
                </p>
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="btn-luxury btn-gold !py-2.5 !px-5 text-xs font-bold whitespace-nowrap shadow-md"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
