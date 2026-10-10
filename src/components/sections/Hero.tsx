"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Word-by-word animation for headline
  const headlineWords = "Civil Construction & Interior Contractors in Hyderabad".split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <Image
          src="/images/hero/hero-hyderabad-site.jpg"
          alt="False ceiling and wall paneling work completed by RA Contractor in Hyderabad"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/95 via-[var(--color-navy)]/85 to-[var(--color-navy)]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/50 to-transparent opacity-80" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 container-luxury w-full"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          {/* Eyebrow & Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)] drop-shadow-sm">
              <span className="w-6 h-px bg-[var(--color-gold)]" />
              Borabanda, Hyderabad
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="!text-white leading-[1.05] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headlineWords.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden">
                <motion.span
                  className={`inline-block ${
                    word === "Hyderabad"
                      ? "text-gradient-gold drop-shadow-[0_2px_12px_rgba(201,169,110,0.4)]"
                      : "!text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
                  }`}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
                {i < headlineWords.length - 1 && <span>&nbsp;</span>}
              </span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl !text-white/90 mb-8 max-w-2xl leading-relaxed font-[family-name:var(--font-dm-sans)] drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            Complete construction, home interiors, renovations and commercial fit-outs tailored to your requirements.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn-luxury btn-gold shadow-lg inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <Link href="/projects" className="btn-luxury btn-outline !border-white/30 !text-white hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)]">
              View Our Projects
            </Link>
          </motion.div>
        </div>

        {/* Contact details */}
        <motion.div
          className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-x-8 gap-y-3 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium !text-white/90 hover:!text-[var(--color-gold)] transition-colors font-[family-name:var(--font-dm-sans)]"
          >
            <MessageCircle className="w-4 h-4 text-[var(--color-gold)]" /> WhatsApp {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium !text-white/90 hover:!text-[var(--color-gold)] transition-colors font-[family-name:var(--font-dm-sans)]"
          >
            <Mail className="w-4 h-4 text-[var(--color-gold)]" /> {siteConfig.email}
          </a>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium !text-white/90 hover:!text-[var(--color-gold)] transition-colors font-[family-name:var(--font-dm-sans)]"
          >
            <MapPin className="w-4 h-4 text-[var(--color-gold)]" /> Borabanda, Hyderabad
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-[family-name:var(--font-dm-sans)]">
          Scroll
        </span>
        <ChevronDown className="w-4 h-4 text-white/30 animate-scroll-indicator" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full z-[1] pointer-events-none">
        <div className="absolute top-1/4 right-12 w-px h-32 bg-gradient-to-b from-transparent via-[var(--color-gold)]/20 to-transparent hidden lg:block" />
        <div className="absolute top-1/3 right-24 w-px h-24 bg-gradient-to-b from-transparent via-[var(--color-gold)]/10 to-transparent hidden lg:block" />
      </div>
    </section>
  );
}
