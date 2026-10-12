import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/lib/about";
import { areas } from "@/lib/areas";
import { galleryItems } from "@/lib/galleryData";
import { siteConfig } from "@/lib/constants";

const TITLE = "Civil & Interior Contractors in Hyderabad | RA Contractor";
const DESCRIPTION =
  "Looking for civil and interior contractors in Hyderabad? RA Contractor offers turnkey construction, home interiors, office fit-outs, renovation, and false ceiling services.";

export const metadata: Metadata = {
  title: { absolute: TITLE }, // absolute: layout template would add the brand twice
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// ---------------------------------------------------------------
// Content (from the approved About Us copy)
// ---------------------------------------------------------------
const services = [
  {
    title: "Turnkey Construction Contractors in Hyderabad",
    href: "/services/turnkey-construction-hyderabad",
    text: "We provide coordinated construction and finishing services for residential and commercial properties. Our turnkey solutions can include civil work, electrical and plumbing coordination, interior installations, finishing, and project handover, depending on the agreed scope.",
  },
  {
    title: "Residential Interior Contractors in Hyderabad",
    href: "/services/home-interior-design-hyderabad",
    text: "Transform your house or apartment with practical and well-planned interior solutions. Our residential interior services include living room interiors, bedroom interiors, wall panelling, wardrobes, carpentry, lighting, and interior finishing.",
  },
  {
    title: "Commercial Interior Contractors in Hyderabad",
    href: "/services/commercial-interior-contractors-hyderabad",
    text: "We undertake commercial interior fit-outs for offices, showrooms, retail spaces, and other business premises. Our services focus on practical layouts, efficient space utilisation, ceiling installations, lighting, carpentry, and finishing work.",
  },
  {
    title: "Modular Kitchen and Wardrobe Installation",
    href: "/services/modular-kitchen-hyderabad",
    text: "We provide modular kitchen and custom wardrobe solutions designed around your available space, storage requirements, preferred finishes, and budget.",
  },
  {
    title: "False Ceiling Contractors in Hyderabad",
    href: "/services/false-ceiling-hyderabad",
    text: "Our false ceiling services include gypsum board ceilings, ceiling frameworks, grid ceilings, decorative ceiling designs, and coordinated lighting installations, based on project requirements.",
  },
  {
    title: "Painting and Wall Finishing Services",
    href: "/services/painting-contractors-hyderabad",
    text: "We undertake interior painting, wall finishing, surface preparation, and selected decorative wall treatments to give residential and commercial spaces a clean, finished appearance.",
  },
  {
    title: "Electrical Installation and Concealed Wiring",
    href: "/services/electrical-contractors-hyderabad",
    text: "We provide electrical installation and concealed wiring services as part of construction and interior projects, with work planned according to site requirements and applicable safety standards.",
  },
  {
    title: "Renovation and Refurbishment Contractors in Hyderabad",
    href: "/services/civil-contractors-hyderabad",
    text: "We help upgrade existing residential and commercial spaces through selected civil repairs, interior modifications, painting, ceiling replacement, carpentry, and finishing work.",
  },
];

const reasons = [
  {
    title: "Clear Project Scope and BOQ",
    text: "We prepare itemised quotations based on the assessed project scope, specified materials, and site conditions so clients can review the proposed work before it begins.",
  },
  {
    title: "Coordinated Construction and Interior Work",
    text: "Civil construction and interior finishing can be managed under one coordinated contract, depending on the agreed project scope.",
  },
  {
    title: "Site Supervision and Quality Checks",
    text: "Our site management process focuses on monitoring progress, coordinating work teams, and checking workmanship at different stages of the project.",
  },
  {
    title: "Materials Based on Project Requirements",
    text: "Materials, fittings, and finishes are selected according to the agreed BOQ, project specifications, and client preferences.",
  },
  {
    title: "Residential and Commercial Expertise",
    text: "We work on a range of residential and commercial requirements, from home interiors and renovations to office and showroom fit-outs.",
  },
  {
    title: "Communication Throughout the Project",
    text: "We aim to keep clients informed about work progress, project requirements, material selections, and execution milestones.",
  },
];

const steps = [
  { title: "Initial Consultation", text: "We discuss your construction or interior requirements, preferred design, budget, and expected project scope." },
  { title: "Site Inspection", text: "We assess the property, take measurements, and identify relevant site conditions." },
  { title: "Scope and BOQ Preparation", text: "We prepare an itemised Bill of Quantities based on the agreed requirements and specified materials." },
  { title: "Planning and Material Selection", text: "Layouts, finishes, fittings, and other specifications are reviewed and finalised before execution." },
  { title: "Project Execution", text: "Our team coordinates the agreed civil construction, interior installations, and finishing work." },
  { title: "Quality Checks and Handover", text: "We review completed work and arrange project handover according to the agreed scope and documentation." },
];

// Order follows the About Us document. Names with no matching /areas page
// (currently Nanakramguda) are shown as plain text until a page exists.
const areaOrder = [
  "Gachibowli", "Financial District", "HITEC City", "Madhapur", "Kondapur",
  "Kokapet", "Nanakramguda", "Jubilee Hills", "Banjara Hills", "Manikonda",
  "Kukatpally", "Miyapur", "Borabanda", "Yousufguda", "Ameerpet",
];

const h2 = "text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6";
const body = "font-[family-name:var(--font-dm-sans)] text-[var(--color-black-soft)] leading-relaxed";
const link = "text-[var(--color-gold-dark)] hover:underline";

export default function AboutPage() {
  const f = about.founder;
  const photos = [49, 24, 43].map((id) => galleryItems.find((g) => g.id === id)).filter(Boolean);
  const url = `${siteConfig.url}/about`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${url}#webpage`,
      url,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-IN",
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      about: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "About", item: url },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}

      {/* Hero */}
      <section style={{ paddingTop: "150px", paddingBottom: "60px" }} className="bg-[var(--color-navy)] border-b border-white/10">
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-gold)] mb-4 flex items-center gap-2 font-[family-name:var(--font-dm-sans)]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-white font-medium">About</span>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold leading-tight">
            Trusted Civil Construction &amp; Interior Contractors in Hyderabad
          </h1>
        </div>
      </section>

      {/* Introduction + photos */}
      <section className="section section-light">
        <div className="container-luxury grid gap-12 lg:grid-cols-2 items-start">
          <div className={`space-y-4 ${body}`}>
            <h2 className={h2}>Introduction – About RA Contractor</h2>
            {about.story && <p>{about.story}</p>}
            <p>
              RA Contractor is a civil construction and interior contracting company in Hyderabad, Telangana, providing construction, renovation, and interior fit-out solutions for residential and commercial properties.
            </p>
            <p>
              We specialize in turnkey construction projects, home interior work, office interiors, modular kitchens, false ceilings, painting, electrical installations, carpentry, and commercial fit-outs. Our goal is to deliver functional, well-finished spaces through careful planning, skilled workmanship, and professional project management.
            </p>
            <p>
              Whether you are planning a new construction project, renovating your home, or developing a commercial workspace, RA Contractor provides coordinated construction and interior services tailored to your requirements.
            </p>
            {about.established && <p>Established in {about.established}.</p>}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {photos.map((g, i) => g && (
              <div key={g.id} className={`relative overflow-hidden rounded-lg bg-[var(--color-gray-light)] ${i === 0 ? "col-span-3 aspect-[16/10]" : "col-span-1 aspect-[3/4]"}`}>
                <Image src={g.src} alt={`${g.title} by RA Contractor, ${g.location}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
              </div>
            ))}
            <p className="col-span-3 text-xs text-[var(--color-gray-medium)]">Photos from our Hyderabad sites.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section section-beige">
        <div className="container-luxury">
          <h2 className={h2}>Our Construction and Interior Services</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-[var(--color-gray-light)] bg-white p-6">
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-3 font-[family-name:var(--font-playfair)]">
                  <Link href={s.href} className="hover:text-[var(--color-gold-dark)] transition-colors">{s.title}</Link>
                </h3>
                <p className={`text-sm ${body}`}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section section-light">
        <div className="container-luxury">
          <h2 className={h2}>Why Choose RA Contractor?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-xl border border-[var(--color-gray-light)] p-6">
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-3 font-[family-name:var(--font-playfair)]">{r.title}</h3>
                <p className={`text-sm ${body}`}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section section-beige">
        <div className="container-luxury max-w-4xl">
          <h2 className={h2}>Meet Our Founder</h2>
        </div>
        <div className="container-luxury grid gap-10 md:grid-cols-[auto_1fr] items-start max-w-4xl">
          <div className="relative h-40 w-40 overflow-hidden rounded-lg border border-[var(--color-gold)]/40">
            <Image src={f.photo} alt={`${f.name}, ${f.title}, RA Contractor`} fill className="object-cover object-top" sizes="160px" />
          </div>
          <div className={body}>
            <h3 className="text-2xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">{f.name} – {f.title}</h3>
            <div className="mb-4" />
            <p className="mb-4">
              {f.name} leads RA Contractor, working with clients to understand their construction and interior requirements and coordinate project execution.
            </p>
            <p className="mb-4">His focus is on clear communication, practical planning, and delivering work according to the agreed project scope.</p>
            {f.bio && <p className="mb-4">{f.bio}</p>}
            {f.experience && <p className="mb-2"><strong>Experience:</strong> {f.experience}</p>}
            {f.qualifications.length > 0 && (
              <div className="mb-4">
                <strong>Qualifications:</strong>
                <ul className="mt-1 list-disc pl-5">{f.qualifications.map((q) => <li key={q}>{q}</li>)}</ul>
              </div>
            )}
            <p>
              For enquiries about civil construction, home interiors, commercial fit-outs, or renovation projects in Hyderabad, contact our team to discuss your requirements.
            </p>
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

      {/* Areas */}
      <section className="section section-light">
        <div className="container-luxury max-w-4xl">
          <h2 className={h2}>Areas We Serve in Hyderabad</h2>
          <h3 className="text-xl font-semibold text-[var(--color-navy)] mb-3 font-[family-name:var(--font-playfair)]">Construction and Interior Services Across Hyderabad</h3>
          <p className={`mb-2 ${body}`}>
            RA Contractor serves clients across Hyderabad, subject to project requirements and availability. Our service areas include:
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 mb-4">
            {areaOrder.map((n) => {
              const a = areas.find((x) => x.name === n);
              return a ? (
                <li key={n}><Link href={`/areas/${a.slug}`} className={link}>{n}</Link></li>
              ) : (
                <li key={n} className={body}>{n}</li>
              );
            })}
          </ul>
          <p className={body}>Contact us to confirm service availability in your area.</p>
        </div>
      </section>

      {/* Process */}
      <section className="section section-beige">
        <div className="container-luxury">
          <h2 className={h2}>Our Approach to Every Project</h2>
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-[var(--color-gray-light)] bg-white p-6">
                <h3 className="text-lg font-semibold text-[var(--color-navy)] mb-3 font-[family-name:var(--font-playfair)]">Step {i + 1}: {s.title}</h3>
                <p className={`text-sm ${body}`}>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {about.registrations.length > 0 && (
        <section className="section section-light">
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

      {/* CTA */}
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