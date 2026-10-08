"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import CategoryDetailModal from "@/components/common/CategoryDetailModal";

const projects = [
  {
    id: "1",
    title: "MoldTech Technologies",
    slug: "moldtech-technologies",
    category: "commercial",
    style: "turnkey",
    image: "/images/portfolio/moldtech-technologies.jpg",
    location: "HITEC City, Hyderabad",
    area: "approx. 8,500 sq ft",
  },
  {
    id: "2",
    title: "Moldtech Packaging Pvt Ltd",
    slug: "moldtech-packaging",
    category: "commercial",
    style: "civil",
    image: "/images/portfolio/moldtech-packaging.jpg",
    location: "Cherlapally, Hyderabad",
    area: "approx. 12,000 sq ft",
  },
  {
    id: "3",
    title: "Prithuvi Toyota Showroom",
    slug: "prithuvi-toyota-showroom",
    category: "commercial",
    style: "luxury",
    image: "/images/portfolio/prithvi-toyota-showroom.jpg",
    location: "Kondapur, Hyderabad",
    area: "approx. 15,000 sq ft",
  },
  {
    id: "4",
    title: "Deloitte, Delhi",
    slug: "deloitte-delhi",
    category: "commercial",
    style: "turnkey",
    image: "/images/portfolio/deloitte-delhi.jpg",
    location: "Barakhamba Rd, New Delhi",
    area: "approx. 18,500 sq ft",
  },
];

const filterTabs = [
  { label: "All Projects", value: "all" },
  { label: "Turnkey Fit-out", value: "turnkey" },
  { label: "Civil & Industrial", value: "civil" },
  { label: "Commercial Showroom", value: "luxury" },
];

export default function FeaturedProjects() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState<{
    slug: string;
    title: string;
    image: string;
  } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const filteredProjects = projects.filter((p) => {
    if (activeTab === "all") return true;
    return p.style === activeTab;
  });

  return (
    <section className="section section-light scroll-mt-28" id="projects">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Execution Portfolio"
          title="Our Landmark Turnkey & Commercial Projects"
          description="Explore our hallmark corporate fit-outs, industrial facilities, and premium commercial showrooms delivered across Hyderabad and Delhi."
        />

        {/* Filter Tabs */}
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

        {/* Projects Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto"
        >
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                onClick={() =>
                  setSelectedProject({
                    slug: project.slug,
                    title: project.title,
                    image: project.image,
                  })
                }
                className="group block cursor-pointer bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-gray-100">
                  <Image
                    src={project.image}
                    alt={`${project.title}, ${project.style} project in ${project.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 bg-[var(--color-navy)]/0 group-hover:bg-[var(--color-navy)]/40 transition-colors flex items-center justify-center"
                    style={{ transitionDuration: "var(--duration-normal)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all shadow-lg"
                      style={{ transitionDuration: "var(--duration-normal)" }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[var(--color-navy)] stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#0A1628]/90 text-[var(--color-gold-light)] rounded-full backdrop-blur-md font-[family-name:var(--font-dm-sans)] shadow-sm border border-white/10">
                      Commercial Turnkey
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="px-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-xl font-bold text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors font-[family-name:var(--font-playfair)]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-[var(--color-gray-medium)] font-[family-name:var(--font-dm-sans)]">
                    <span className="font-medium text-gray-600">{project.location}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]" />
                    <span className="text-[var(--color-gold-dark)] font-semibold">{project.area}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="btn-luxury btn-outline-dark"
          >
            View All Projects
          </Link>
        </div>
      </div>

      <CategoryDetailModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        category={selectedProject}
      />
    </section>
  );
}
