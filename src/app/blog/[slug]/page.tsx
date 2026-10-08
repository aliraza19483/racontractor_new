import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";
import { getService } from "@/lib/services";
import { siteConfig } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.description, url: `/blog/${p.slug}`, publishedTime: p.date },
  };
}

export default async function PostPage({ params }: Props) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: `${siteConfig.url}/blog/${p.slug}`,
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
  const related = p.related.map((r) => getService(r)).filter(Boolean);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="bg-[var(--color-navy)] pt-32 pb-12">
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-4">
            <Link href="/" className="hover:text-white">Home</Link> / <Link href="/blog" className="hover:text-white">Guides</Link>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] max-w-3xl">{p.title}</h1>
        </div>
      </section>
      <article className="section section-light">
        <div className="container-luxury max-w-3xl">
          {p.sections.map((s) => (
            <div key={s.h} className="mb-8">
              <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-3">{s.h}</h2>
              {s.p.map((t) => <p key={t} className="mb-3 leading-relaxed text-[var(--color-black-soft)]">{t}</p>)}
            </div>
          ))}
          <h2 className="text-xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-3">Related services</h2>
          <ul className="space-y-2 mb-8">
            {related.map((r) => r && <li key={r.slug}><Link className="text-[var(--color-gold-dark)] hover:underline" href={`/services/${r.slug}`}>{r.h1}</Link></li>)}
          </ul>
          <a href={`tel:${siteConfig.phone}`} className="btn-luxury btn-gold">Book a consultation: {siteConfig.phone}</a>
        </div>
      </article>
    </>
  );
}
