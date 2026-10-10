import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import TrackEvent from "@/components/common/TrackEvent";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We have received your enquiry.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  const wa = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hello RA Contractor, I just sent an enquiry from your website."
  )}`;

  return (
    <section className="bg-[var(--color-navy)] min-h-[70vh] flex items-center pt-32 pb-16">
      <TrackEvent name="generate_lead" params={{ form: "enquiry" }} />
      <div className="container-luxury text-center">
        <CheckCircle2 className="mx-auto mb-5 h-12 w-12 text-[var(--color-gold)]" aria-hidden="true" />
        <h1 className="!text-white text-4xl md:text-5xl font-[family-name:var(--font-playfair)]">
          Thank you, we have received your enquiry
        </h1>
        <p className="mt-4 text-white/70 font-[family-name:var(--font-dm-sans)]">
          Our team will contact you on the mobile number you shared. For anything urgent, call {siteConfig.phone}.
        </p>
        <p className="mt-2 text-white/60 text-sm font-[family-name:var(--font-dm-sans)]">
          Have photos or a floor plan? Send them on WhatsApp to speed up your BOQ.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-luxury btn-gold">
            <MessageCircle className="w-4 h-4" /> Continue on WhatsApp
          </a>
          <a href={`tel:${siteConfig.whatsapp}`} className="btn-luxury btn-outline">
            <Phone className="w-4 h-4" /> Call us
          </a>
          <Link href="/projects" className="btn-luxury btn-outline">
            See our projects
          </Link>
          <Link href="/" className="btn-luxury btn-outline">
            Home
          </Link>
        </div>
      </div>
    </section>
  );
}
