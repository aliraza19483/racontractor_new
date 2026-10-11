import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/lib/areas";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Areas We Serve in Hyderabad",
  description:
    "RA Contractor serves Jubilee Hills, Banjara Hills, Gachibowli, Kondapur, Madhapur, Kokapet, Financial District, HITEC City, Kukatpally and more across Hyderabad.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-32 pb-12">
        <div className="container-luxury">
          <h1 className="!text-white text-4xl md:text-5xl font-[family-name:var(--font-playfair)] max-w-3xl">
            Areas We Serve in Hyderabad
          </h1>
          <p className="mt-6 max-w-3xl text-white/70 text-lg">
            Civil, interior and fit-out work across Hyderabad from our Borabanda office. Choose your locality, or call {siteConfig.phone} to confirm availability.
          </p>
        </div>
      </section>
      <section className="section section-light">
        <div className="container-luxury grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <Link key={a.slug} href={`/areas/${a.slug}`} className="rounded-lg border border-[var(--color-gray-light)] p-6 hover:border-[var(--color-gold)] transition-colors">
              <h2 className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">{a.name}</h2>
              <p className="mt-2 text-sm text-[var(--color-gray-medium)] leading-relaxed">{a.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
