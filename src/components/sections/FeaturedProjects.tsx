"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import { projectPages, projectCover } from "@/lib/projects";

const filterTabs = [
  { label: "All Projects", value: "all" },
  { label: "Commercial", value: "Commercial" },
  { label: "Residential", value: "Residential" },
];

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const filtered = projectPages.filter((p) => activeTab === "all" || p.category === activeTab);

  return (
    <section className="section section-light scroll-mt-28" id="projects">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Projects"
          title="Recent Projects in Hyderabad"
          description="Commercial fit-outs and home interiors we have executed, with photographs from our own sites."
        />

        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-10 md:mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all cursor-pointer ${
                activeTab === tab.value
                  ? "bg-[var(--color-navy)] text-white shadow-md"
                  : "bg-[var(--color-gray-light)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-gray-100">
                  <Image
                    src={projectCover(project)}
                    alt={`${project.title}, ${project.type.toLowerCase()} project in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#0A1628]/90 text-[var(--color-gold-light)] rounded-full font-[family-name:var(--font-dm-sans)] border border-white/10">
                    {project.type}
                  </span>
                </div>
                <div className="px-1">
                  <h3 className="text-xl font-bold text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors font-[family-name:var(--font-playfair)] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--color-gray-medium)] font-[family-name:var(--font-dm-sans)]">{project.location}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link href="/projects" className="btn-luxury btn-outline-dark">View All Projects</Link>
          <Link href="/gallery" className="btn-luxury bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-dark)] shadow-md flex items-center gap-2">
            <span>Site Photos</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
