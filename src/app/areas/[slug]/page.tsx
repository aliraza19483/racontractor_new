import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, getArea } from "@/lib/areas";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArea((await params).slug);
  if (!a) return {};
  const title = `Civil & Interior Contractors in ${a.name}, Hyderabad`;
  const description = `RA Contractor delivers turnkey civil and interior work in ${a.name}, Hyderabad. See our projects there and request a site inspection.`;
  return { title, description, alternates: { canonical: `/areas/${a.slug}` }, openGraph: { title, description, url: `/areas/${a.slug}` } };
}

export default async function AreaPage({ params }: Props) {
  const a = getArea((await params).slug);
  if (!a) notFound();
  return (
    <>
      <section className="bg-[var(--color-navy)] pt-32 pb-12">
        <div className="container-luxury">
          <h1 className="!text-white text-4xl md:text-5xl font-[family-name:var(--font-playfair)] max-w-3xl">
            Civil &amp; Interior Contractors in {a.name}, Hyderabad
          </h1>
          <p className="mt-6 max-w-3xl text-white/70 text-lg">
            RA Contractor handles turnkey construction, interiors and fit-outs in {a.name}. Call us to arrange a site inspection and an itemised BOQ.
          </p>
          <a href={`tel:${siteConfig.phone}`} className="btn-luxury btn-gold mt-8 inline-block">Call {siteConfig.phone}</a>
        </div>
      </section>
      <section className="section section-light">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Our projects in {a.name}</h2>
            <ul className="space-y-2">
              {a.projects.map((p) => (
                <li key={p.slug}><Link className="text-[var(--color-gold-dark)] hover:underline" href={`/projects/${p.slug}`}>{p.title}, {p.area}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Services in {a.name}</h2>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}><Link className="text-[var(--color-gold-dark)] hover:underline" href={`/services/${s.slug}`}>{s.h1}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
