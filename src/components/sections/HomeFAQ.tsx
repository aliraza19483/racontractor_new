import Link from "next/link";
import FaqList from "@/components/shared/FaqList";
import { homeFaqs } from "@/lib/faq";
import { services } from "@/lib/services";
import { projectPages } from "@/lib/projects";
import { areas as areaPages } from "@/lib/areas";
import { posts } from "@/lib/blog";

const areas = ["Jubilee Hills", "Banjara Hills", "Gachibowli", "Kondapur", "Madhapur", "Kokapet", "Financial District"];

export default function HomeFAQ() {
  return (
    <section className="section section-light" id="faq">
      <div className="container-luxury grid gap-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-8">
            Frequently Asked Questions
          </h2>
          <FaqList items={homeFaqs} />
        </div>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6">
              Areas We Serve in Hyderabad
            </h2>
            <p className="text-[var(--color-gray-medium)] mb-4 font-[family-name:var(--font-dm-sans)]">
              Our work covers {areas.join(", ")} and the rest of Hyderabad.
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-8">
              {areaPages.map((a) => (
                <li key={a.slug}><Link href={`/areas/${a.slug}`} className="text-[var(--color-gold-dark)] hover:underline">{a.name}</Link></li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-3">Our Services</h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-[var(--color-gold-dark)] hover:underline">
                    {s.h1}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-3">Our Projects</h3>
            <ul className="space-y-2">
              {projectPages.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="text-[var(--color-gold-dark)] hover:underline">
                    {p.title}, {p.location}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-[var(--color-navy)] mt-8 mb-3">Guides</h3>
            <ul className="space-y-2">
              {posts.map((b) => (
                <li key={b.slug}><Link href={`/blog/${b.slug}`} className="text-[var(--color-gold-dark)] hover:underline">{b.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
