"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const brands = [
  "ULTRA TECH CEMENT",
  "SAINT-GOBAIN GLASS",
  "KOHLER LUXURY",
  "GROHE ARCHITECTURAL",
  "HAFELE HARDWARE",
  "BLUM SYSTEMS",
  "DAIKIN MEP",
  "ARMANI / CASA",
  "PHILIPS LIGHTING",
  "POLIFORM INTERIORS",
  "ROYALE ATHENA",
];

export default function MaterialPartners() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Clone for infinite scroll
    const marqueeContent = scrollRef.current.innerHTML;
    scrollRef.current.innerHTML = marqueeContent + marqueeContent;

    const ctx = gsap.context(() => {
      // Subtle reveal animation for the whole strip when it comes into view
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 95%",
            once: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-12 border-t border-[var(--color-gold)]/20 bg-[var(--color-navy)] overflow-hidden flex flex-col items-center"
    >
      <div className="mb-8 px-4 text-center">
        <h3 className="text-sm uppercase tracking-[0.2em] text-[var(--color-gold)]/80 font-[family-name:var(--font-dm-sans)] mb-2">
          Preferred Brands
        </h3>
        <p className="text-xs text-white/40 font-[family-name:var(--font-dm-sans)] max-w-lg mx-auto">
          *Brands shown are our preferred materials for premium quality. This does not imply any official partnership or agency.
        </p>
      </div>

      <div className="w-full relative flex items-center mt-2">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--color-navy)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--color-navy)] to-transparent z-10 pointer-events-none" />
        
        {/* Marquee Content */}
        <div className="flex whitespace-nowrap animate-marquee">
          <div ref={scrollRef} className="flex items-center gap-16 md:gap-24 px-8 md:px-12">
            {brands.map((brand, i) => (
              <span
                key={i}
                className="text-sm md:text-base font-[family-name:var(--font-dm-sans)] tracking-[0.2em] uppercase text-white/40 hover:text-[var(--color-gold)] transition-colors duration-300 select-none cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
