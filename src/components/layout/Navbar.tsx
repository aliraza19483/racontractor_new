"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navItems, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all",
          scrolled
            ? "bg-[var(--color-navy)]/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-5"
        )}
        style={{
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--ease-luxury)",
        }}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <span className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-playfair)]">
              RA
            </span>
            <span className="hidden sm:inline-block h-6 w-px bg-[var(--color-gold)] opacity-60" />
            <span className="hidden sm:block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)]">
              CONTRACTOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white/80 hover:text-[var(--color-gold)] transition-colors flex items-center gap-1"
                  style={{ transitionDuration: "var(--duration-fast)" }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3 h-3 opacity-60" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-2"
                      >
                        <div className="glass rounded-lg py-2 min-w-[220px] border border-white/10">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-white/70 hover:text-[var(--color-gold)] hover:bg-white/5 transition-colors font-[family-name:var(--font-dm-sans)]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden md:flex items-center gap-2 text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors font-[family-name:var(--font-dm-sans)]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{siteConfig.phone}</span>
            </a>

            <Link
              href="/contact"
              className="hidden lg:inline-flex btn-luxury btn-gold text-xs py-2.5 px-5"
            >
              Book Consultation
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-[var(--color-navy)]/98 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[var(--color-navy)] border-l border-white/5 flex flex-col pt-24 px-8 pb-8"
            >
              <div className="flex-1 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-2xl font-[family-name:var(--font-playfair)] text-white/90 hover:text-[var(--color-gold)] transition-colors border-b border-white/5"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-6 border-t border-white/10 space-y-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-luxury btn-gold w-full text-center"
                >
                  Book Consultation
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)]"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
