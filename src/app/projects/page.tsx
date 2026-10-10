import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projectPages, projectCover, projectPhotos } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Our Projects: Interiors, Ceilings & Fit-outs in Hyderabad",
  description:
    "Projects by RA Contractor in Hyderabad with real site photographs: office ceiling fit-outs, large-hall commercial work, apartment interiors, false ceilings and wardrobes.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsIndex() {
  return (
    <>
      <section style={{ paddingTop: "150px", paddingBottom: "60px" }} className="bg-[var(--color-navy)] border-b border-white/10 relative">
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-gold)] mb-4 font-[family-name:var(--font-dm-sans)] flex items-center gap-2">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-white font-medium">Projects</span>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-tight">
            Our Projects in Hyderabad
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl text-base md:text-lg font-[family-name:var(--font-dm-sans)] leading-relaxed">
            Commercial fit-outs and home interiors we have executed, shown with photographs taken on our own sites.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-luxury max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            {projectPages.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-black/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-gray-100">
                  <Image
                    src={projectCover(p)}
                    alt={`${p.title}, ${p.type.toLowerCase()} project in ${p.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#0A1628]/90 text-[var(--color-gold-light)] rounded-full font-[family-name:var(--font-dm-sans)] border border-white/10">
                    {p.type}
                  </span>
                </div>
                <div className="px-1">
                  <h2 className="text-xl font-bold text-[var(--color-navy)] group-hover:text-[var(--color-gold-dark)] transition-colors font-[family-name:var(--font-playfair)] mb-1">
                    {p.title}
                  </h2>
                  <div className="flex items-center gap-2.5 text-xs text-[var(--color-gray-medium)] font-[family-name:var(--font-dm-sans)] mb-3">
                    <span className="flex items-center gap-1 font-medium text-gray-600">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      {p.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[var(--color-gold)]" />
                    <span>{projectPhotos(p).length} photos</span>
                  </div>
                  <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed font-[family-name:var(--font-dm-sans)]">{p.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-gold-dark)]">
                    View project <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[var(--color-navy)] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)]">More site photographs</h3>
              <p className="text-sm text-white/70 mt-1 max-w-xl font-[family-name:var(--font-dm-sans)]">
                Browse photos from our Hyderabad sites: ceilings, wiring, joinery and fit-out work in progress.
              </p>
            </div>
            <Link href="/gallery" className="btn-luxury btn-gold text-xs whitespace-nowrap shrink-0">View Site Photos →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
