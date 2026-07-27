"use client";

import TextReveal from "@/components/animations/TextReveal";
import SectionReveal from "@/components/animations/SectionReveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"
      }`}
    >
      {eyebrow && (
        <SectionReveal>
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4 font-[family-name:var(--font-dm-sans)] ${
              dark ? "text-[var(--color-gold)]" : "text-[var(--color-gold-dark)]"
            }`}
          >
            {eyebrow}
          </span>
        </SectionReveal>
      )}

      <TextReveal
        as="h2"
        className={`${
          dark ? "text-white" : "text-[var(--color-navy)]"
        }`}
      >
        {title}
      </TextReveal>

      {description && (
        <SectionReveal delay={0.2}>
          <p
            className={`mt-4 text-base md:text-lg leading-relaxed ${
              dark
                ? "text-white/60"
                : "text-[var(--color-gray-medium)]"
            }`}
          >
            {description}
          </p>
        </SectionReveal>
      )}

      <SectionReveal delay={0.3}>
        <div
          className={`divider-gold${align === "center" ? "-center" : ""} mt-6`}
        />
      </SectionReveal>
    </div>
  );
}
