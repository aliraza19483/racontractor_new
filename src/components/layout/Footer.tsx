import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig, navItems } from "@/lib/constants";

// Inline SVG social icons (lucide-react removed brand icons)
const SocialIcons = {
  Instagram: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  Facebook: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  ),
};

const footerServices = [
  { label: "Civil & Construction", href: "/services/civil-contractors-hyderabad" },
  { label: "Turnkey Construction", href: "/services/turnkey-construction-hyderabad" },
  { label: "False Ceiling & Lighting", href: "/services/false-ceiling-hyderabad" },
  { label: "Painting & Wall Finishes", href: "/services/painting-contractors-hyderabad" },
  { label: "Electrical & Wiring", href: "/services/electrical-contractors-hyderabad" },
  { label: "Modular Kitchens", href: "/services/modular-kitchen-hyderabad" },
  { label: "Commercial Fit-outs", href: "/services/commercial-interior-contractors-hyderabad" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-navy)] text-white relative overflow-hidden">
      {/* Gold accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-40" />

      {/* Main Footer Content */}
      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <span className="text-3xl font-bold tracking-tight font-[family-name:var(--font-playfair)] block leading-none group-hover:text-[var(--color-gold-light)] transition-colors">
                RA
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] mt-1 font-[family-name:var(--font-dm-sans)]">
                CONTRACTOR
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 font-[family-name:var(--font-dm-sans)]">
              Civil construction and interior contractors in Hyderabad: turnkey projects, home interiors, false ceilings, painting, electrical work and commercial fit-outs.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: SocialIcons.Instagram, href: siteConfig.socialLinks.instagram, label: "Instagram" },
                { icon: SocialIcons.Facebook, href: siteConfig.socialLinks.facebook, label: "Facebook" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]/30 transition-all"
                  style={{ transitionDuration: "var(--duration-fast)" }}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-6 font-[family-name:var(--font-dm-sans)]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/50 hover:text-[var(--color-gold)] transition-colors inline-flex items-center gap-1 font-[family-name:var(--font-dm-sans)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-6 font-[family-name:var(--font-dm-sans)]">
              Our Services
            </h4>
            <ul className="space-y-3">
              {footerServices.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/50 hover:text-[var(--color-gold)] transition-colors inline-flex items-center gap-1 font-[family-name:var(--font-dm-sans)]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-white mb-6 font-[family-name:var(--font-dm-sans)]">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-start gap-3 text-sm text-white/50 hover:text-[var(--color-gold)] transition-colors group font-[family-name:var(--font-dm-sans)]"
              >
                <Phone className="w-4 h-4 mt-0.5 text-[var(--color-gold)]/60 group-hover:text-[var(--color-gold)]" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-sm text-white/50 hover:text-[var(--color-gold)] transition-colors group font-[family-name:var(--font-dm-sans)]"
              >
                <Mail className="w-4 h-4 mt-0.5 text-[var(--color-gold)]/60 group-hover:text-[var(--color-gold)]" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.googleMapsUrl || "https://maps.app.goo.gl/Fr5AXyx2DzKuqXZN8"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm text-white/50 hover:text-[var(--color-gold)] transition-colors group font-[family-name:var(--font-dm-sans)]"
              >
                <MapPin className="w-4 h-4 mt-0.5 text-[var(--color-gold)]/60 group-hover:text-[var(--color-gold)] shrink-0" />
                <span>{siteConfig.address}</span>
              </a>
            </div>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-gold)] hover:text-[var(--color-gold-light)] font-[family-name:var(--font-dm-sans)]"
            >
              Send an enquiry <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-luxury py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-[family-name:var(--font-dm-sans)]">
            © {currentYear} RA CONTRACTOR. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-white/30 hover:text-white/60 transition-colors font-[family-name:var(--font-dm-sans)]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-white/30 hover:text-white/60 transition-colors font-[family-name:var(--font-dm-sans)]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
