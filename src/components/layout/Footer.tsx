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
  Linkedin: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Youtube: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
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
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold tracking-tight font-[family-name:var(--font-playfair)]">
                RA
              </span>
              <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] mt-1 font-[family-name:var(--font-dm-sans)]">
                CONTRACTOR
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 font-[family-name:var(--font-dm-sans)]">
              Creating timeless structures and interiors for modern living. We deliver turnkey civil construction and bespoke interior execution built to last generations.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: SocialIcons.Instagram, href: siteConfig.socialLinks.instagram, label: "Instagram" },
                { icon: SocialIcons.Facebook, href: siteConfig.socialLinks.facebook, label: "Facebook" },
                { icon: SocialIcons.Linkedin, href: siteConfig.socialLinks.linkedin, label: "LinkedIn" },
                { icon: SocialIcons.Youtube, href: siteConfig.socialLinks.youtube, label: "YouTube" },
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
                href={`tel:${siteConfig.phone}`}
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

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 mb-3 font-[family-name:var(--font-dm-sans)]">
                Newsletter
              </h5>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors font-[family-name:var(--font-dm-sans)]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-10 h-10 bg-[var(--color-gold)] text-[var(--color-navy)] flex items-center justify-center rounded-sm hover:bg-[var(--color-gold-light)] transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            </div>
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
