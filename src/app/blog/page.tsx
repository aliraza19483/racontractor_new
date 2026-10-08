import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Construction & Interior Guides for Hyderabad",
  description: "Practical guides on turnkey construction, choosing contractors and interior costs in Hyderabad from RA Contractor.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
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
            <span className="text-white font-medium">Guides</span>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold tracking-tight leading-tight">
            Construction &amp; Interior Guides for Hyderabad
          </h1>
        </div>
      </section>
      <section className="section section-light">
        <div className="container-luxury max-w-3xl space-y-8">
          {posts.map((p) => (
            <article key={p.slug}>
              <h2 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)]"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
              <p className="mt-2 text-[var(--color-gray-medium)]">{p.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
