import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/lib/about";
import { areas } from "@/lib/areas";
import { services } from "@/lib/services";
import { galleryItems } from "@/lib/galleryData";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Our Civil and Interior Team, Hyderabad",
  description:
    "About RA Contractor, a Hyderabad-based civil construction and interior contractor in Borabanda: who we are, who leads the work and where we work.",
  alternates: { canonical: "/about" },
};

const h2 = "text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6";

export default function AboutPage() {
  const f = about.founder;
  const hasFounderDetails = Boolean(f.bio || f.experience || f.qualifications.length);
  const photos = [49, 24, 43].map((id) => galleryItems.find((g) => g.id === id)).filter(Boolean);

  return (
    <>
      <section style={{ paddingTop: "150px", paddingBottom: "60px" }} className="bg-[var(--color-navy)] border-b border-white/10">
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-gold)] mb-4 flex items-center gap-2 font-[family-name:var(--font-dm-sans)]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-white font-medium">About</span>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold leading-tight">About RA Contractor</h1>
          <p className="mt-4 max-w-2xl text-white/70 text-base md:text-lg font-[family-name:var(--font-dm-sans)] leading-relaxed">
            A Hyderabad-based civil construction and interior contractor handling homes, offices and commercial spaces.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-luxury grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-4 font-[family-name:var(--font-dm-sans)] text-[var(--color-black-soft)] leading-relaxed">
            <h2 className={h2}>Who we are</h2>
            {about.story && <p>{about.story}</p>}
            <p>
              RA Contractor is based in Borabanda, Hyderabad. We take up civil construction, turnkey projects, home interiors, modular kitchens, false ceilings, painting, electrical work and commercial fit-outs.
            </p>
            <p>
              We work from an itemised BOQ prepared after a site inspection, and a site manager oversees the work so you know what is included and who is responsible.
            </p>
            {about.established && <p>Established in {about.established}.</p>}
            <p>
              <Link href="/projects" className="text-[var(--color-gold-dark)] hover:underline">See our projects</Link> or{" "}
              <Link href="/services" className="text-[var(--color-gold-dark)] hover:underline">browse our services</Link>.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {photos.map((g, i) => g && (
              <div key={g.id} className={`relative overflow-hidden rounded-lg bg-[var(--color-gray-light)] ${i === 0 ? "col-span-3 aspect-[16/10]" : "col-span-1 aspect-[3/4] sm:col-span-1"}`}>
                <Image src={g.src} alt={`${g.title} by RA Contractor, ${g.location}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            ))}
            <p className="col-span-3 text-xs text-[var(--color-gray-medium)]">Photos from our Hyderabad sites.</p>
          </div>
        </div>
      </section>

      <section className="section section-beige">
        <div className="container-luxury grid gap-10 md:grid-cols-[auto_1fr] items-start max-w-4xl">
          <div className="relative h-40 w-40 overflow-hidden rounded-lg border border-[var(--color-gold)]/40">
            <Image src={f.photo} alt={`${f.name}, ${f.title}, RA Contractor`} fill className="object-cover object-top" sizes="160px" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">{f.name}</h2>
            <p className="text-sm font-semibold text-[var(--color-gold-dark)] mb-4">{f.title}</p>
            {f.bio && <p className="font-[family-name:var(--font-dm-sans)] leading-relaxed mb-4">{f.bio}</p>}
            {f.experience && <p className="font-[family-name:var(--font-dm-sans)] mb-2"><strong>Experience:</strong> {f.experience}</p>}
            {f.qualifications.length > 0 && (
              <div className="font-[family-name:var(--font-dm-sans)]">
                <strong>Qualifications:</strong>
                <ul className="mt-1 list-disc pl-5">{f.qualifications.map((q) => <li key={q}>{q}</li>)}</ul>
              </div>
            )}
            {!hasFounderDetails && (
              <p className="font-[family-name:var(--font-dm-sans)] text-[var(--color-gray-medium)]">Speak to {f.name.split(" ")[0]} directly about your project on {siteConfig.phone}.</p>
            )}
          </div>
        </div>
      </section>

      {about.team.length > 0 && (
        <section className="section section-light">
          <div className="container-luxury">
            <h2 className={h2}>Our team</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {about.team.map((m) => (
                <div key={m.name} className="rounded-lg border border-[var(--color-gray-light)] p-5">
                  {m.photo && (
                    <div className="relative mb-4 aspect-square overflow-hidden rounded-lg">
                      <Image src={m.photo} alt={`${m.name}, ${m.role}`} fill className="object-cover object-top" sizes="25vw" />
                    </div>
                  )}
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--color-navy)]">{m.name}</h3>
                  <p className="text-sm text-[var(--color-gray-medium)]">{m.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-light">
        <div className="container-luxury grid gap-12 md:grid-cols-2">
          <div>
            <h2 className={h2}>Where we work</h2>
            <p className="mb-4 font-[family-name:var(--font-dm-sans)] leading-relaxed">
              We work across Hyderabad, including Jubilee Hills, Banjara Hills, Gachibowli, Kondapur, Madhapur, Kokapet and the Financial District. Call us to confirm availability for your location.
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1">
              {areas.map((a) => (
                <li key={a.slug}><Link href={`/areas/${a.slug}`} className="text-[var(--color-gold-dark)] hover:underline">{a.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={h2}>What we do</h2>
            <ul className="space-y-2 font-[family-name:var(--font-dm-sans)]">
              {services.map((s) => (
                <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-[var(--color-gold-dark)] hover:underline">{s.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {about.registrations.length > 0 && (
        <section className="section section-beige">
          <div className="container-luxury">
            <h2 className={h2}>Registrations</h2>
            <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 font-[family-name:var(--font-dm-sans)]">
              {about.registrations.map((r) => (
                <div key={r.label}>
                  <dt className="text-xs uppercase tracking-wider text-[var(--color-gray-medium)]">{r.label}</dt>
                  <dd className="font-semibold text-[var(--color-navy)]">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      <section className="bg-[var(--color-navy)] py-14">
        <div className="container-luxury text-center">
          <h2 className="!text-white text-2xl md:text-3xl font-[family-name:var(--font-playfair)]">Planning a project in Hyderabad?</h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-luxury btn-gold">Send Enquiry</Link>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="btn-luxury btn-outline">Call {siteConfig.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
