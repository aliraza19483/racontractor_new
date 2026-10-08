import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projectPages, getProject } from "@/lib/projects";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectPages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const title = `${p.title} – ${p.location}`;
  return {
    title,
    description: p.summary,
    alternates: { canonical: `/projects/${p.slug}` },
    openGraph: { title, description: p.summary, url: `/projects/${p.slug}`, images: [p.image] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const url = `${siteConfig.url}/projects/${p.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${siteConfig.url}/#projects` },
      { "@type": "ListItem", position: 3, name: p.title, item: url },
    ],
  };
  const svc = p.services.map((s) => getService(s)).filter(Boolean);
  const facts = [
    ["Project type", p.type],
    ["Category", p.category],
    ["Location", p.location],
    ["Approx. area", p.area.replace("approx. ", "")],
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section
        style={{ paddingTop: "150px", paddingBottom: "60px" }}
        className="bg-[var(--color-navy)] border-b border-white/10 relative"
      >
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4 flex items-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/projects" className="hover:text-white">Projects</Link>
            <span>/</span>
            <span className="text-[var(--color-gold)] font-medium">{p.title}</span>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] max-w-3xl font-bold leading-tight">
            {p.title} in {p.location}
          </h1>
          <p className="mt-4 max-w-3xl text-white/70 text-base md:text-lg leading-relaxed font-[family-name:var(--font-dm-sans)]">{p.summary}</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-luxury grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={p.image} alt={`${p.title}, ${p.type.toLowerCase()} project in ${p.location}`} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div>
            <dl className="grid grid-cols-2 gap-4 mb-10">
              {facts.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-xs uppercase tracking-wider text-[var(--color-gray-medium)]">{k}</dt>
                  <dd className="text-[var(--color-navy)] font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
            <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Scope of work</h2>
            <ul className="space-y-2 font-[family-name:var(--font-dm-sans)]">
              {p.scope.map((s) => (
                <li key={s} className="flex gap-3"><span className="text-[var(--color-gold-dark)]">✓</span>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-beige">
        <div className="container-luxury">
          <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-4">Services used on this project</h2>
          <ul className="space-y-2 mb-10">
            {svc.map((s) => s && (
              <li key={s.slug}><Link className="text-[var(--color-gold-dark)] hover:underline" href={`/services/${s.slug}`}>{s.h1}</Link></li>
            ))}
          </ul>
          <a href={`tel:${siteConfig.phone}`} className="btn-luxury btn-gold">Discuss your project: {siteConfig.phone}</a>
        </div>
      </section>
    </>
  );
}
