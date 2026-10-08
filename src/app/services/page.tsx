import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Civil & Interior Contractor Services in Hyderabad",
  description: "Turnkey construction, civil work, luxury and commercial interiors, kitchens, ceilings, painting and electrical by RA Contractor in Hyderabad.",
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
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded-lg border border-[var(--color-gray-light)] p-6 hover:border-[var(--color-gold)]">
              <h2 className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">{s.h1}</h2>
              <p className="mt-2 text-sm text-[var(--color-gray-medium)]">{s.metaDescription}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
