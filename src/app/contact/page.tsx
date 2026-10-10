import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us: Interior Contractors Hyderabad",
  description:
    "Call, WhatsApp or send an enquiry to RA Contractor in Borabanda, Hyderabad for civil construction, interiors, false ceilings, painting and electrical work.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const tel = siteConfig.phone.replace(/\s/g, "");
  const wa = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address)}&output=embed`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact RA Contractor",
      url: `${siteConfig.url}/contact`,
      about: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.url}/contact` },
      ],
    },
  ];

  const details = [
    { icon: Phone, label: "Call", value: siteConfig.phone, href: `tel:${tel}` },
    { icon: MessageCircle, label: "WhatsApp", value: siteConfig.phone, href: wa, external: true },
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: MapPin, label: "Address", value: siteConfig.address, href: siteConfig.googleMapsUrl, external: true },
  ];

  return (
    <>
      {jsonLd.map((d, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }} />
      ))}
      <section style={{ paddingTop: "150px", paddingBottom: "60px" }} className="bg-[var(--color-navy)] border-b border-white/10">
        <div className="container-luxury">
          <nav aria-label="Breadcrumb" className="text-xs text-[var(--color-gold)] mb-4 flex items-center gap-2 font-[family-name:var(--font-dm-sans)]">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-white font-medium">Contact</span>
          </nav>
          <h1 className="!text-white text-3xl md:text-5xl font-[family-name:var(--font-playfair)] font-bold leading-tight">
            Contact RA Contractor
          </h1>
          <p className="mt-4 max-w-2xl text-white/70 text-base md:text-lg font-[family-name:var(--font-dm-sans)] leading-relaxed">
            Tell us about your project in Hyderabad. We will get back to you to arrange a site visit and an itemised BOQ.
          </p>
        </div>
      </section>

      <section className="section section-beige">
        <div className="container-luxury grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <EnquiryForm />
          <div className="flex flex-col gap-4">
            {details.map((d) => (
              <a
                key={d.label}
                href={d.href}
                {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-start gap-4 rounded-lg border border-[var(--color-gray-light)] bg-white !p-5 hover:border-[var(--color-gold)] transition-colors"
              >
                <d.icon className="w-5 h-5 mt-0.5 text-[var(--color-gold-dark)] shrink-0" />
                <span>
                  <span className="block text-xs uppercase tracking-wider text-[var(--color-gray-medium)]">{d.label}</span>
                  <span className="block text-[var(--color-navy)] font-medium font-[family-name:var(--font-dm-sans)]">{d.value}</span>
                </span>
              </a>
            ))}

            <div className="rounded-lg border border-[var(--color-gray-light)] bg-white !p-5">
              <h2 className="text-lg font-[family-name:var(--font-playfair)] text-[var(--color-navy)]">What happens next</h2>
              <ol className="!mt-3 flex flex-col gap-3 text-sm text-[var(--color-black-soft)] font-[family-name:var(--font-dm-sans)]">
                {[
                  "We review your enquiry and call you.",
                  "We visit your site and take measurements.",
                  "You receive an itemised BOQ.",
                ].map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-gold)]/20 text-xs font-semibold text-[var(--color-gold-dark)]">
                      {i + 1}
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-luxury">
          <h2 className="text-2xl md:text-3xl font-[family-name:var(--font-playfair)] text-[var(--color-navy)] mb-6">Find us</h2>
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg border border-[var(--color-gray-light)]">
            <iframe
              title="RA Contractor location on Google Maps"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
          <p className="mt-3 text-sm text-[var(--color-gray-medium)]">
            {siteConfig.address}.{" "}
            <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-[var(--color-gold-dark)] hover:underline">
              Open in Google Maps
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
