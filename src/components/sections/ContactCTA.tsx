"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function ContactCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/cta/luxury-living-room.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-navy)]/85" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] mb-6 font-[family-name:var(--font-dm-sans)]">
          Start Your Project
        </span>

        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] max-w-4xl mx-auto mb-6 leading-[1.1]">
          Ready to Build or Transform<br />
          <span className="text-gradient-gold">Your Dream Space?</span>
        </h2>

        <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto mb-10 font-[family-name:var(--font-dm-sans)]">
          Let&apos;s build something extraordinary together. Book a turnkey construction and bespoke interior consultation with RA CONTRACTOR today.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=Hello%20RA%20CONTRACTOR%20team,%20I%20would%20like%20to%20book%20a%20free%20turnkey%20consultation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury btn-gold group"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury btn-outline group"
          >
            <MessageCircle className="w-4 h-4" />
            Chat on WhatsApp
          </a>
          <a
            href={siteConfig.googleMapsUrl || "https://maps.app.goo.gl/Fr5AXyx2DzKuqXZN8"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-luxury btn-outline group !border-white/30 !text-white hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)]"
          >
            <MapPin className="w-4 h-4" />
            View Google Maps (Hyderabad)
          </a>
        </div>
      </div>
    </section>
  );
}
