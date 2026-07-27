"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { interiorCategories } from "@/lib/constants";
import CategoryDetailModal from "@/components/common/CategoryDetailModal";

export default function InteriorCategories() {
  const [selectedCategory, setSelectedCategory] = useState<{
    slug: string;
    title: string;
    image: string;
  } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-2%" });

  return (
    <section className="section section-dark" id="categories">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Spaces We Construct & Design"
          title="Construction & Interior Categories"
          description="From turnkey residential villas to sophisticated commercial spaces, we execute every project with structural excellence and bespoke design."
          dark
        />

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          {interiorCategories.map((category, i) => (
            <motion.div
              key={category.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                onClick={() =>
                  setSelectedCategory({
                    slug: category.slug,
                    title: category.title,
                    image: category.image,
                  })
                }
                className={`group relative block overflow-hidden rounded-lg cursor-pointer ${
                  i === 0 || i === 5
                    ? "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full"
                    : "aspect-[4/3]"
                }`}
              >
                {/* Image */}
                <Image
                  src={category.image}
                  alt={`${category.title} execution by RA CONTRACTOR`}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  style={{ transitionDuration: "var(--duration-slow)" }}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)] via-[var(--color-navy)]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
                  style={{ transitionDuration: "var(--duration-normal)" }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                  <div className="flex items-end justify-between">
                    <h3 className="text-sm md:text-base font-semibold text-white font-[family-name:var(--font-playfair)]">
                      {category.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-[var(--color-gold)] flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-md"
                      style={{ transitionDuration: "var(--duration-normal)" }}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-navy)] stroke-[2.5]" />
                    </div>
                  </div>
                </div>

                {/* Gold border on hover */}
                <div className="absolute inset-0 border-2 border-[var(--color-gold)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ transitionDuration: "var(--duration-normal)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CategoryDetailModal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        category={selectedCategory}
      />
    </section>
  );
}
