"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  PenTool,
  Gem,
  Receipt,
  UserCheck,
  Monitor,
  Package,
  Crown,
  Clock,
  ShieldCheck,
} from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { whyChooseUs } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PenTool,
  Gem,
  Receipt,
  UserCheck,
  Monitor,
  Package,
  Crown,
  Clock,
  ShieldCheck,
};

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-2%" });

  return (
    <section className="section" id="why-choose-us">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Standard of Turnkey Excellence"
          description="We combine structural engineering integrity with bespoke interior execution to deliver turnkey spaces that exceed expectations at every level."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || PenTool;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative p-7 md:p-8 rounded-xl border border-[var(--color-gray-light)] bg-white hover:bg-[var(--color-navy)] transition-all cursor-default"
                style={{ transitionDuration: "var(--duration-slow)" }}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-[var(--color-beige)] group-hover:bg-[var(--color-gold)]/10 flex items-center justify-center mb-5 transition-colors"
                  style={{ transitionDuration: "var(--duration-slow)" }}
                >
                  <Icon className="w-5 h-5 text-[var(--color-gold)] group-hover:text-[var(--color-gold-light)] transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[var(--color-navy)] group-hover:text-white mb-3 transition-colors font-[family-name:var(--font-playfair)]"
                  style={{ transitionDuration: "var(--duration-slow)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-gray-medium)] group-hover:text-white/60 leading-relaxed transition-colors font-[family-name:var(--font-dm-sans)]"
                  style={{ transitionDuration: "var(--duration-slow)" }}
                >
                  {item.description}
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-gold)] scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-xl"
                  style={{ transitionDuration: "var(--duration-slow)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
