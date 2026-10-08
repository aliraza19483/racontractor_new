"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageSquare,
  MapPin,
  Palette,
  Layout,
  Monitor,
  Layers,
  Hammer,
  CheckCircle,
  Sparkles,
  Key,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { designProcess } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  MapPin,
  Palette,
  Layout,
  Monitor,
  Layers,
  Hammer,
  CheckCircle,
  Sparkles,
  Key,
};

export default function DesignProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-2%" });

  return (
    <section className="section section-beige" id="process">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Process"
          title="Our Turnkey Construction Process"
          description="A refined 10-step process that ensures every detail is considered, every decision is deliberate, and every space is extraordinary."
        />

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-gray-light)] md:-translate-x-px" />

          {designProcess.map((step, i) => {
            const Icon = iconMap[step.icon] || MessageSquare;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: isLeft ? -30 : 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative flex items-start gap-6 md:gap-0 mb-10 last:mb-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[var(--color-gold)] border-4 border-[var(--color-beige)] -translate-x-1.5 mt-5 z-10 md:-translate-x-1.5" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-0 md:text-right" : "md:pl-0 md:text-left"
                  }`}
                >
                  <div
                    className={`bg-white p-6 rounded-xl border border-[var(--color-gray-light)] shadow-sm hover:shadow-md transition-shadow group ${
                      isLeft ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isLeft ? "md:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center group-hover:bg-[var(--color-gold)]/20 transition-colors">
                        <Icon className="w-4 h-4 text-[var(--color-gold)]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)]">
                          Step {step.step}
                        </span>
                        <h3 className="text-base font-semibold text-[var(--color-navy)] font-[family-name:var(--font-playfair)]">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className={`text-sm text-[var(--color-gray-medium)] leading-relaxed font-[family-name:var(--font-dm-sans)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
