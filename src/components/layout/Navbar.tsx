"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown, ChevronRight } from "lucide-react";
import { navItems, siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
          !isHome || scrolled
            ? "bg-[#0A1628] backdrop-blur-xl shadow-xl border-b border-white/10 py-3.5"
            : "bg-transparent py-5"
        )}
        style={{
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--ease-luxury)",
        }}
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10 group">
            <span className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-playfair)] group-hover:text-[var(--color-gold-light)] transition-colors">
              RA
            </span>
            <span className="hidden sm:inline-block h-6 w-px bg-[var(--color-gold)] opacity-60" />
            <span className="hidden sm:block text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)]">
              CONTRACTOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
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
                  className="text-sm font-[family-name:var(--font-dm-sans)] font-medium text-white/90 hover:text-[var(--color-gold)] transition-colors flex items-center gap-1.5 py-1 whitespace-nowrap"
                  style={{ transitionDuration: "var(--duration-fast)" }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        activeDropdown === item.label
                          ? "rotate-180 text-[var(--color-gold)]"
                          : "opacity-70"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 pt-3 z-[60]"
                      >
                        <div className="bg-[#0B1528] rounded-2xl py-3 px-2 min-w-[270px] border border-[var(--color-gold)]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] ring-1 ring-black/50">
                          <div className="px-3 pb-2 mb-1.5 border-b border-white/10 flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)]">
                              Core Specializations
                            </span>
                          </div>
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="group flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-white/90 hover:text-[var(--color-gold-light)] hover:bg-white/[0.08] transition-all font-[family-name:var(--font-dm-sans)]"
                            >
                              <span className="group-hover:translate-x-1 transition-transform">
                                {child.label}
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-[var(--color-gold)] transition-all -translate-x-1 group-hover:translate-x-0" />
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
              className="hidden md:flex items-center gap-2 text-sm text-[var(--color-gold)] hover:text-[var(--color-gold-light)] transition-colors font-[family-name:var(--font-dm-sans)] font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{siteConfig.phone}</span>
            </a>

            <Link
              href="/contact"
              className="hidden lg:inline-flex btn-luxury btn-gold text-xs py-2.5 px-5 font-semibold"
            >
              Book Consultation
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center text-white"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="absolute inset-0 bg-[#0A1628]/98 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0A1628] border-l border-white/10 flex flex-col pt-24 px-8 pb-8 overflow-y-auto"
            >
              <div className="flex-1 flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    {item.children ? (
                      <div>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="w-full flex items-center justify-between py-3 text-2xl font-[family-name:var(--font-playfair)] text-white/90 hover:text-[var(--color-gold)] transition-colors border-b border-white/5 cursor-pointer text-left"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-[var(--color-gold)] transition-transform",
                              mobileServicesOpen ? "rotate-180" : ""
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 py-2 space-y-1.5 border-l-2 border-[var(--color-gold)]/40 ml-2 my-2 bg-white/[0.02] rounded-r-lg"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  onClick={() => setIsOpen(false)}
                                  className="block py-2 text-sm text-white/80 hover:text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)]"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-2xl font-[family-name:var(--font-playfair)] text-white/90 hover:text-[var(--color-gold)] transition-colors border-b border-white/5"
                      >
                        {item.label}
                      </Link>
                    )}
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
                  className="flex items-center justify-center gap-2 text-sm text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)] font-medium"
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
