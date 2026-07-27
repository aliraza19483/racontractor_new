"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Building2, CalendarClock, Timer, Award, ShieldCheck, MapPin } from "lucide-react";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { stats } from "@/lib/constants";

export default function Hero() {
  const statIcons: Record<string, React.ElementType> = {
    Building2,
    CalendarClock,
    Timer,
    Award,
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Word-by-word animation for headline
  const headlineWords = "Hyderabad's Trusted Turnkey Interior & Civil Contractor.".split(" ");

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
      className="relative h-screen min-h-[700px] flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/hero/hero-luxury-interior.jpg')`,
          }}
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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-[var(--color-gold)]/30 text-xs font-semibold tracking-wide text-[var(--color-gold-light)] font-[family-name:var(--font-dm-sans)] shadow-sm">
              ✨ 100+ Turnkey Projects Delivered
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)] drop-shadow-sm">
              <span className="w-6 h-px bg-[var(--color-gold)]" />
              Civil & Turnkey Contractor
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
                    word === "Contractor."
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
            className="text-lg md:text-xl !text-white/90 mb-10 max-w-2xl leading-relaxed font-[family-name:var(--font-cormorant)] italic text-[1.25rem] md:text-[1.4rem] drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            Creating timeless structures and luxury interiors for modern living. Turnkey civil execution, engineering precision, and bespoke aesthetics.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <a href="#contact" className="btn-luxury btn-gold shadow-lg">
              Book Consultation
            </a>
            <a href="#portfolio" className="btn-luxury btn-outline !border-white/30 !text-white hover:!border-[var(--color-gold)] hover:!text-[var(--color-gold)]">
              Explore Portfolio
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        >
          {stats.map((stat, i) => {
            const StatIcon = statIcons[stat.icon] || Building2;
            return (
              <div
                key={i}
                className="border-l border-[var(--color-gold)]/40 pl-4 md:pl-6"
              >
                <StatIcon className="w-5 h-5 md:w-6 md:h-6 text-[var(--color-gold)] mb-2 drop-shadow-md" />
                <div className="text-3xl md:text-4xl font-bold !text-white font-[family-name:var(--font-playfair)] drop-shadow-md">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-xs md:text-sm !text-white/75 font-medium mt-1 font-[family-name:var(--font-dm-sans)] drop-shadow-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Trust Strip */}
        <motion.div
          className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          {[
            { icon: ShieldCheck, label: "GST Registered" },
            { icon: CalendarClock, label: "6+ Years Experience" },
            { icon: Building2, label: "100+ Projects Delivered" },
            { icon: MapPin, label: "Hyderabad Based" },
          ].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium !text-white/80 font-[family-name:var(--font-dm-sans)] drop-shadow-sm"
            >
              <item.icon className="w-4 h-4 text-[var(--color-gold)]" />
              {item.label}
            </span>
          ))}
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
