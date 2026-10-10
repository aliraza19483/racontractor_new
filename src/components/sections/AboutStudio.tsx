"use client";

import Image from "next/image";
import Link from "next/link";
import SectionReveal from "@/components/animations/SectionReveal";

export default function AboutStudio() {
  return (
    <section className="section section-beige" id="about">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <SectionReveal direction="left" className="order-2 lg:order-1">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <Image
                src="/images/gallery/site-execution-51.jpg"
                alt="Living area interior with false ceiling and wall paneling by RA Contractor, Hyderabad"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </SectionReveal>

          <div className="order-1 lg:order-2">
            <SectionReveal>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold-dark)] mb-4 font-[family-name:var(--font-dm-sans)]">
                <span className="w-8 h-px bg-[var(--color-gold)]" />
                About RA Contractor
              </span>
              <h2 className="text-[var(--color-navy)] mb-6">Civil and interior work under one contractor</h2>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <p className="text-[var(--color-gray-medium)] leading-relaxed mb-6">
                RA Contractor is a Hyderabad-based contractor handling civil construction, turnkey projects, home interiors, false ceilings, painting, electrical work and commercial fit-outs.
              </p>
              <p className="text-[var(--color-gray-medium)] leading-relaxed mb-8">
                Every project starts with a site inspection and an itemised BOQ, and a site manager oversees the work through to handover.
              </p>
              <Link href="/about" className="btn-luxury btn-outline-dark">Know More About Us</Link>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
