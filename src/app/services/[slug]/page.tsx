import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqList from "@/components/shared/FaqList";
import { services, getService } from "@/lib/services";
import { serviceContent, serviceMedia } from "@/lib/serviceContent";
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
  const { hero } = serviceMedia(s.slug, s.image);
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: `/services/${s.slug}`, images: [hero] },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const url = `${siteConfig.url}/services/${s.slug}`;
  const content = serviceContent[s.slug];
  const media = serviceMedia(s.slug, s.image);
  const faqs = [...s.faqs, ...(content?.extraFaqs ?? [])].filter(
    (f, i, arr) => arr.findIndex((x) => x.q === f.q) === i
  );
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
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
        { "@type": "ListItem", position: 3, name: s.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
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
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/services" className="hover:text-white">Services</Link> / {s.name}
          </nav>
          <h1 className="!text-white text-4xl md:text-5xl font-[family-name:var(--font-playfair)] max-w-3xl">{s.h1}</h1>
          <p className="mt-6 max-w-3xl text-white/70 text-lg leading-relaxed font-[family-name:var(--font-dm-sans)]">{s.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${siteConfig.phone}`} className="btn-luxury btn-gold">Call {siteConfig.phone}</a>
            <a href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="btn-luxury btn-outline">WhatsApp</a>
            <Link href="/#contact" className="btn-luxury btn-outline">Send Enquiry</Link>
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
          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={media.hero} alt={`${s.name} work in Hyderabad`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" priority />
            </div>
            {media.illustrative && (
              <p className="mt-2 text-xs text-[var(--color-gray-medium)]">Illustrative image, not an RA Contractor project photo.</p>
            )}
          </div>
        </div>

        {media.photos.length > 0 && (
          <div className="container-luxury mt-14">
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-2">
              From our sites in Hyderabad
            </h2>
            <p className="mb-6 text-sm text-[var(--color-gray-medium)]">
              Photos taken on RA Contractor sites, some during execution. <Link href="/gallery" className="text-[var(--color-gold-dark)] hover:underline">See all site photos</Link>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {media.photos.map((g, i) => (
                <div key={g.id} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[var(--color-gray-light)]">
                  <Image src={g.src} alt={`${s.name} site photo ${i + 1}, Hyderabad`} fill loading="lazy" className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {content && (
        <>
          <section className="section section-beige">
            <div className="container-luxury max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6">
                About our {s.name.toLowerCase()} work
              </h2>
              <div className="space-y-4 font-[family-name:var(--font-dm-sans)] text-[var(--color-black-soft)] leading-relaxed">
                {content.about.map((t) => <p key={t}>{t}</p>)}
              </div>
            </div>
          </section>

          <section className="section section-light">
            <div className="container-luxury">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-8">
                How we work
              </h2>
              <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
                {content.process.map((p, i) => (
                  <li key={p.title} className="rounded-lg border border-[var(--color-gray-light)] p-5">
                    <span className="text-sm font-semibold text-[var(--color-gold-dark)]">Step {i + 1}</span>
                    <h3 className="mt-1 text-lg font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">{p.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-gray-medium)] leading-relaxed">{p.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="section section-beige">
            <div className="container-luxury">
              <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-8">
                Benefits
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {content.benefits.map((b) => (
                  <div key={b.title} className="rounded-lg bg-white p-5 border border-[var(--color-gray-light)]">
                    <h3 className="text-lg font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">{b.title}</h3>
                    <p className="mt-2 text-sm text-[var(--color-gray-medium)] leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <section className="section section-beige">
        <div className="container-luxury max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6">
            {s.name} FAQ
          </h2>
          <FaqList items={faqs} />
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

      <section className="bg-[var(--color-navy)] py-14">
        <div className="container-luxury text-center">
          <h2 className="!text-white text-2xl md:text-3xl font-[family-name:var(--font-playfair)]">Planning {s.name.toLowerCase()} in Hyderabad?</h2>
          <p className="mt-3 text-white/70 font-[family-name:var(--font-dm-sans)]">Call or message us with your requirement for a site visit and itemised BOQ.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn-luxury btn-gold">Call {siteConfig.phone}</a>
            <a href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="btn-luxury btn-outline">WhatsApp</a>
          </div>
        </div>
      </section>
    </>
  );
}
