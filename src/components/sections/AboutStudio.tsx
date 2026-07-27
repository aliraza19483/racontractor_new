"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/animations/SectionReveal";
import TextReveal from "@/components/animations/TextReveal";

export default function AboutStudio() {
  return (
    <section className="section section-beige" id="about">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <SectionReveal direction="left" className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/about/studio-interior.jpg"
                  alt="RA CONTRACTOR - Luxury construction and design workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-[var(--color-navy)] text-white p-6 md:p-8 rounded-lg shadow-xl max-w-[200px]">
                <span className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-playfair)] text-[var(--color-gold)]">
                  6+
                </span>
                <p className="text-xs uppercase tracking-wider mt-1 text-white/60 font-[family-name:var(--font-dm-sans)]">
                  Years of Crafting Luxury Spaces
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <SectionReveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-dark)] mb-4 font-[family-name:var(--font-dm-sans)]">
                <span className="w-8 h-px bg-[var(--color-gold)]" />
                About RA CONTRACTOR
              </span>
            </SectionReveal>

            <TextReveal
              as="h2"
              className="text-[var(--color-navy)] mb-6"
            >
              Where Engineering Precision Meets Timeless Design
            </TextReveal>

            <SectionReveal delay={0.2}>
              <p className="text-[var(--color-gray-medium)] leading-relaxed mb-6">
                Founded with a passion for transforming structures and interiors, RA CONTRACTOR has evolved 
                into one of the most sought-after civil construction and turnkey execution firms. We believe that every building 
                tells a story — and our job is to execute that story with structural excellence and bespoke luxury.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-[var(--color-gray-medium)] leading-relaxed mb-8">
                From luxury residential villas to sophisticated corporate offices, we bring together 
                civil engineering precision, master craftsmanship, and cutting-edge BIM modeling to deliver spaces that 
                are built to endure generations.
              </p>
            </SectionReveal>

            {/* Values */}
            <SectionReveal delay={0.4}>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Vision", text: "Redefining luxury living through structural & design perfection" },
                  { label: "Mission", text: "Delivering turnkey spaces that inspire, comfort, and stand the test of time" },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-[var(--color-gold)] pl-4">
                    <h4 className="text-sm font-semibold text-[var(--color-navy)] mb-1 font-[family-name:var(--font-dm-sans)] uppercase tracking-wider">
                      {item.label}
                    </h4>
                    <p className="text-xs text-[var(--color-gray-medium)] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>

            {/* Founder Quote */}
            <SectionReveal delay={0.5}>
              <blockquote className="border-l-2 border-[var(--color-gold)]/40 pl-6 py-2 mb-8">
                <p className="text-[var(--color-navy)] font-[family-name:var(--font-cormorant)] italic text-lg md:text-xl leading-relaxed">
                  &ldquo;Great construction and design is not about following fleeting trends — it&apos;s about building 
                  spaces of uncompromising quality that feel extraordinary from the very first moment.&rdquo;
                </p>
                <cite className="flex items-center gap-3 mt-4 not-italic font-[family-name:var(--font-dm-sans)]">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[var(--color-gold)]/50 shrink-0">
                    <Image
                      src="/images/team/farhan-ahmed.jpg"
                      alt="Farhan Ahmed — Founder, RA CONTRACTOR"
                      width={44}
                      height={44}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[var(--color-navy)]">Farhan Ahmed</span>
                    <span className="block text-xs text-[var(--color-gray-medium)] mt-0.5">Founder &amp; Director — RA CONTRACTOR</span>
                  </div>
                </cite>
              </blockquote>
            </SectionReveal>

            <SectionReveal delay={0.6}>
              <a href="#process" className="btn-luxury btn-outline-dark">
                Discover Our Process
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
