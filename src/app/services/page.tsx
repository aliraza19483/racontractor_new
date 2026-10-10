import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/services";
import { serviceMedia } from "@/lib/serviceContent";

export const metadata: Metadata = {
  title: "Civil and Interior Services in Hyderabad",
  description: "Turnkey construction, civil work, home and commercial interiors, kitchens, ceilings, painting and electrical by RA Contractor in Hyderabad.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
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
            <span className="text-white font-medium">Services</span>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-tight">
            Civil &amp; Interior Contractor Services in Hyderabad
          </h1>
        </div>
      </section>
      <section className="section section-light">
        <div className="container-luxury grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const m = serviceMedia(s.slug, s.image);
            return (
              <Link key={s.slug} href={`/services/${s.slug}`} className="block overflow-hidden rounded-lg border border-[var(--color-gray-light)] hover:border-[var(--color-gold)]">
                <div className="relative aspect-[16/10] bg-[var(--color-gray-light)]">
                  <Image src={m.hero} alt={`${s.name} in Hyderabad`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">{s.h1}</h2>
                  <p className="mt-2 text-sm text-[var(--color-gray-medium)]">{s.metaDescription}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-gold-dark)]">View service →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
