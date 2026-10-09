import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { projectPages } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Commercial & Turnkey Projects in Hyderabad & Delhi",
  description:
    "Explore premier turnkey civil, commercial fit-out, and industrial interior projects executed by RA Contractor including MoldTech Technologies, Moldtech Packaging, Prithuvi Toyota Showroom, and Deloitte.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsIndex() {
  return (
    <>
      <section
        style={{ paddingTop: "150px", paddingBottom: "60px" }}
        className="bg-[var(--color-navy)] border-b border-white/10 relative"
      >
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-gold)] mb-4 font-[family-name:var(--font-dm-sans)] flex items-center gap-2">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-white font-medium">Projects</span>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-tight">
            Our Landmark Turnkey &amp; Commercial Projects
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl text-base md:text-lg font-[family-name:var(--font-dm-sans)] leading-relaxed">
            Explore our signature corporate fit-outs, industrial headquarters, and luxury commercial showrooms delivered across Hyderabad and Delhi NCR.
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
                    src={p.image}
                    alt={`${p.title}, ${p.type.toLowerCase()} project in ${p.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-[#0A1628]/90 text-[var(--color-gold-light)] rounded-full backdrop-blur-md font-[family-name:var(--font-dm-sans)] shadow-sm border border-white/10">
                      {p.type}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-[var(--color-navy)]/0 group-hover:bg-[var(--color-navy)]/30 transition-colors flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-[var(--color-gold)] flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-[var(--color-navy)] stroke-[2.5]" />
                    </div>
                  </div>
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
                    <span className="text-[var(--color-gold-dark)] font-semibold">{p.area}</span>
                  </div>
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed font-[family-name:var(--font-dm-sans)]">
                    {p.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Proof Gallery Callout */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[var(--color-navy)] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
            <div>
              <span className="px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-[var(--color-gold)]/20 text-[var(--color-gold-light)] border border-[var(--color-gold)]/30 mb-2 inline-block">
                Authentic Verification
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-[family-name:var(--font-playfair)]">
                Want to see raw, unedited on-site photos?
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl font-[family-name:var(--font-dm-sans)]">
                Browse through 54+ direct site execution photographs of civil framing, false ceilings, MEP rough-ins, and luxury joinery.
              </p>
            </div>
            <Link
              href="/gallery"
              className="btn-luxury btn-gold text-xs whitespace-nowrap shrink-0 shadow-lg"
            >
              View 54+ Site Proofs →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
