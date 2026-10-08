import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqList from "@/components/shared/FaqList";
import { services, getService } from "@/lib/services";
import { projectPages } from "@/lib/projects";
import { siteConfig } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}`, images: [s.image] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const url = `${siteConfig.url}/services/${s.slug}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.h1,
      description: s.metaDescription,
      url,
      serviceType: s.name,
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: { "@type": "City", name: "Hyderabad" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#categories` },
        { "@type": "ListItem", position: 3, name: s.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const related = s.related.map((r) => getService(r)).filter(Boolean);
  const relatedProjects = projectPages.filter((p) => p.services.includes(s.slug));

  return (
    <>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <section className="bg-[var(--color-navy)] pt-32 pb-16">
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/#categories" className="hover:text-white">Services</Link> / {s.name}
          </nav>
          <h1 className="!text-white text-4xl md:text-5xl font-[family-name:var(--font-playfair)] max-w-3xl">{s.h1}</h1>
          <p className="mt-6 max-w-3xl text-white/70 text-lg leading-relaxed font-[family-name:var(--font-dm-sans)]">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${siteConfig.phone}`} className="btn-luxury btn-gold">Call {siteConfig.phone}</a>
            <a href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`} className="btn-luxury btn-outline">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-luxury grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6">
              What&apos;s included in {s.name.toLowerCase()}
            </h2>
            <ul className="space-y-3 font-[family-name:var(--font-dm-sans)] text-[var(--color-black-soft)]">
              {s.features.map((f) => (
                <li key={f} className="flex gap-3"><span className="text-[var(--color-gold-dark)]">✓</span>{f}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-[var(--color-gray-medium)]">
              Exact scope, materials and exclusions are confirmed in an itemised BOQ after a site inspection.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={s.image} alt={`${s.name} work by RA Contractor in Hyderabad`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
          </div>
        </div>

        {s.gallery.length > 0 && (
          <div className="container-luxury mt-14">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6">
              {s.name} work gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {s.gallery.map((g, i) => (
                <div key={g} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image src={g} alt={`${s.name} project ${i + 1}, Hyderabad`} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="section section-beige">
        <div className="container-luxury max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6">
            {s.name} FAQ
          </h2>
          <FaqList items={s.faqs} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Related services</h2>
            <ul className="space-y-2">
              {related.map((r) => r && (
                <li key={r.slug}><Link className="text-[var(--color-gold-dark)] hover:underline" href={`/services/${r.slug}`}>{r.h1}</Link></li>
              ))}
            </ul>
          </div>
          {relatedProjects.length > 0 && (
            <div>
              <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Related projects</h2>
              <ul className="space-y-2">
                {relatedProjects.map((p) => (
                  <li key={p.slug}><Link className="text-[var(--color-gold-dark)] hover:underline" href={`/projects/${p.slug}`}>{p.title}, {p.location}</Link></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
