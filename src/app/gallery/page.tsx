import type { Metadata } from "next";
import Link from "next/link";
import ProofGallery from "@/components/gallery/ProofGallery";

export const metadata: Metadata = {
  title: "50+ Real Site Execution Photos & Work Proof | RA Contractor",
  description:
    "Explore 50+ authentic, unedited on-site execution photos of turnkey civil construction, corporate office fit-outs, industrial structures, and luxury residential projects delivered by RA Contractor.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      {/* Header Banner */}
      <section
        style={{ paddingTop: "175px", paddingBottom: "70px" }}
        className="bg-[var(--color-navy)] border-b border-white/10 relative"
      >
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-gold)] mb-4 font-[family-name:var(--font-dm-sans)] flex items-center gap-2">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-white font-medium">Real Work Proof</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest bg-[var(--color-gold)]/20 text-[var(--color-gold-light)] border border-[var(--color-gold)]/30 mb-3">
                100% Genuine Site Execution Proof
              </span>
              <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-tight max-w-3xl">
                Real On-Site Construction &amp; Fit-out Proof
              </h1>
              <p className="mt-4 text-white/70 max-w-2xl text-base md:text-lg font-[family-name:var(--font-dm-sans)] leading-relaxed">
                Direct, unedited site photographs captured by our civil engineers and project managers across live commercial, industrial, and residential sites.
              </p>
            </div>

            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-5 text-left md:text-right shrink-0">
              <span className="text-2xl sm:text-3xl font-bold text-[var(--color-gold)] font-[family-name:var(--font-playfair)] block">
                54+ Photos
              </span>
              <span className="text-xs text-white/60 font-[family-name:var(--font-dm-sans)]">
                Live From Hyderabad &amp; Delhi Sites
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="section section-light">
        <div className="container-luxury">
          <ProofGallery />
        </div>
      </section>
    </>
  );
}
