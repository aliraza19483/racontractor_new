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
    title: "The Emerald Residence Turnkey",
    slug: "emerald-residence",
    category: "residential",
    style: "turnkey",
    image: "/images/portfolio/project-1.jpg",
    location: "Jubilee Hills, Hyderabad",
    area: "approx. 2,800 sq ft",
  },
  {
    id: "2",
    title: "Skyline Corporate Office Fit-out",
    slug: "skyline-corporate",
    category: "commercial",
    style: "turnkey",
    image: "/images/portfolio/project-2.jpg",
    location: "Gachibowli, Hyderabad",
    area: "approx. 4,200 sq ft",
  },
  {
    id: "3",
    title: "Serene Luxury Villa Build",
    slug: "serene-villa",
    category: "residential",
    style: "civil",
    image: "/images/portfolio/project-3.jpg",
    location: "Kondapur, Hyderabad",
    area: "approx. 3,500 sq ft",
  },
  {
    id: "4",
    title: "Artisan Cafe Fit-out",
    slug: "artisan-cafe",
    category: "commercial",
    style: "luxury",
    image: "/images/portfolio/project-4.jpg",
    location: "Banjara Hills, Hyderabad",
    area: "approx. 1,800 sq ft",
  },
  {
    id: "5",
    title: "The Ivory Penthouse Execution",
    slug: "ivory-penthouse",
    category: "residential",
    style: "luxury",
    image: "/images/portfolio/project-5.jpg",
    location: "Madhapur, Hyderabad",
    area: "approx. 5,000 sq ft",
  },
  {
    id: "6",
    title: "Bloom Wellness Spa Turnkey",
    slug: "bloom-wellness",
    category: "commercial",
    style: "turnkey",
    image: "/images/portfolio/project-6.jpg",
    location: "Kukatpally, Hyderabad",
    area: "approx. 3,200 sq ft",
  },
];

const filterTabs = [
  { label: "All Projects", value: "all" },
  { label: "Turnkey", value: "turnkey" },
  { label: "Civil Build", value: "civil" },
  { label: "Luxury Interiors", value: "luxury" },
  { label: "Residential", value: "residential" },
  { label: "Commercial", value: "commercial" },
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
    if (activeTab === "residential" || activeTab === "commercial") {
      return p.category === activeTab;
    }
    return p.style === activeTab;
  });

  return (
    <section className="section section-light" id="projects">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Execution Portfolio"
          title="Turnkey Projects Crafted to Perfection"
          description="Explore our hallmark residential and commercial turnkey projects executed across Hyderabad."
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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
                className="group block cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Turnkey execution project`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    style={{ transitionDuration: "var(--duration-slow)" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[var(--color-navy)]/0 group-hover:bg-[var(--color-navy)]/40 transition-colors flex items-center justify-center"
                    style={{ transitionDuration: "var(--duration-normal)" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all shadow-lg"
                      style={{ transitionDuration: "var(--duration-normal)" }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-[var(--color-navy)] stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/90 text-[var(--color-navy)] rounded-full backdrop-blur-sm font-[family-name:var(--font-dm-sans)] shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors font-[family-name:var(--font-playfair)]">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-[var(--color-gray-medium)] font-[family-name:var(--font-dm-sans)]">
                      {project.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]" />
                    <span className="text-xs text-[var(--color-gray-medium)] font-[family-name:var(--font-dm-sans)]">
                      {project.area}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button
            onClick={() => setActiveTab("all")}
            className="btn-luxury btn-outline-dark"
          >
            View All Projects
          </button>
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
