import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FaqList from "@/components/shared/FaqList";
import { areas, getArea } from "@/lib/areas";
import { services } from "@/lib/services";
import { projectPages } from "@/lib/projects";
import { siteConfig } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArea((await params).slug);
  if (!a) return {};
  const title = `Interior & Civil Contractors in ${a.name}, Hyderabad`;
  const description = `${a.tagline}. RA Contractor does turnkey interiors, false ceilings, painting, electrical and civil work in ${a.name}, Hyderabad. Free site inspection and itemised BOQ.`;
  return {
    title,
    description,
    alternates: { canonical: `/areas/${a.slug}` },
    openGraph: { title, description, url: `/areas/${a.slug}` },
  };
}

export default async function AreaPage({ params }: Props) {
  const a = getArea((await params).slug);
  if (!a) notFound();

  const url = `${siteConfig.url}/areas/${a.slug}`;
  const faqs = [
    a.faq,
    {
      q: `Do you offer a site inspection and BOQ in ${a.name}?`,
      a: `Yes. We visit your site in ${a.name}, take measurements, check structure, plumbing and electrical conditions, and then prepare an itemised BOQ before you commit.`,
    },
    {
      q: `Do you handle both civil work and interiors in ${a.name}?`,
      a: "Yes. Civil work, electrical and plumbing coordination, false ceilings, painting, carpentry and finishing are handled under one contract with one site manager.",
    },
  ];
  const nearby = a.nearby.map((s) => areas.find((x) => x.slug === s)).filter(Boolean);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Interior and civil contractors in ${a.name}, Hyderabad`,
      url,
      serviceType: "Interior and civil contracting",
      provider: { "@id": `${siteConfig.url}/#organization` },
      areaServed: { "@type": "Place", name: `${a.name}, Hyderabad` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Areas", item: `${siteConfig.url}/areas` },
        { "@type": "ListItem", position: 3, name: a.name, item: url },
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

  return (
    <>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <section className="bg-[var(--color-navy)] pt-32 pb-12">
        <div className="container-luxury">
          <h1 className="!text-white text-4xl md:text-5xl font-[family-name:var(--font-playfair)] max-w-3xl">
            Interior &amp; Civil Contractors in {a.name}, Hyderabad
          </h1>
          <p className="mt-6 max-w-3xl text-white/70 text-lg">{a.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn-luxury btn-gold">Call {siteConfig.phone}</a>
            <a href={`https://wa.me/${siteConfig.whatsapp.replace("+", "")}`} target="_blank" rel="noopener noreferrer" className="btn-luxury btn-outline">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Properties we work on in {a.name}</h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-gray-medium)]">
              {a.properties.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mt-10 mb-4">Work most often requested here</h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--color-gray-medium)]">
              {a.popularWork.map((w) => <li key={w}>{w}</li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">What to plan for in {a.name}</h2>
            <p className="text-[var(--color-gray-medium)] leading-relaxed">{a.siteNote}</p>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mt-10 mb-4">Services in {a.name}</h2>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link className="text-[var(--color-gold-dark)] hover:underline" href={`/services/${s.slug}`}>
                    {s.name} in {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-beige">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Recent Hyderabad projects</h2>
            <p className="text-sm text-[var(--color-gray-medium)] mb-3">Examples of our work across Hyderabad, with photographs from our own sites.</p>
            <ul className="space-y-2">
              {projectPages.map((p) => (
                <li key={p.slug}><Link className="text-[var(--color-gold-dark)] hover:underline" href={`/projects/${p.slug}`}>{p.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Also serving nearby</h2>
            <ul className="space-y-2">
              {nearby.map((n) => n && (
                <li key={n.slug}><Link className="text-[var(--color-gold-dark)] hover:underline" href={`/areas/${n.slug}`}>{n.name}</Link></li>
              ))}
              <li><Link className="text-[var(--color-gold-dark)] hover:underline" href="/areas">All areas we serve</Link></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-luxury max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6">{a.name} FAQ</h2>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  );
}
