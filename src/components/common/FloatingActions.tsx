"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/constants";

export default function FloatingActions() {
  const [hovered, setHovered] = useState<string | null>(null);

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20RA%20CONTRACTOR%2C%20I%20would%20like%20to%20enquire%20about%20a%20turnkey%20construction%20and%20interior%20project.`;
  const callUrl = `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`;

  return (
    <div className="fixed right-4 md:right-6 bottom-6 md:bottom-8 z-50 flex flex-col gap-3.5 items-end">
      {/* Phone Call Action */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setHovered("call")}
        onMouseLeave={() => setHovered(null)}
      >
        <AnimatePresence>
          {hovered === "call" && (
            <motion.span
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="absolute right-14 whitespace-nowrap bg-[var(--color-navy)] text-white text-xs font-medium px-3 py-1.5 rounded-md shadow-lg border border-white/10 font-[family-name:var(--font-dm-sans)]"
            >
              Call Us: {siteConfig.phone}
            </motion.span>
          )}
        </AnimatePresence>

        <a
          href={callUrl}
          aria-label="Call RA CONTRACTOR"
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] flex items-center justify-center shadow-lg hover:bg-[var(--color-gold-light)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6 fill-current" />
        </a>
      </div>

      {/* WhatsApp Action */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setHovered("whatsapp")}
        onMouseLeave={() => setHovered(null)}
      >
        <AnimatePresence>
          {hovered === "whatsapp" && (
            <motion.span
              initial={{ opacity: 0, x: 10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              className="absolute right-14 whitespace-nowrap bg-[#25D366] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg font-[family-name:var(--font-dm-sans)]"
            >
              Chat on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with RA CONTRACTOR"
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:bg-[#20bd5a] hover:scale-110 active:scale-95 transition-all duration-300 group"
        >
          {/* Subtle glowing ring animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
          
          {/* Official WhatsApp SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="currentColor"
            className="w-6 h-6 md:w-7 md:h-7"
          >
            <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.764.46 3.491 1.333 5.008L2 22l5.132-1.319A9.957 9.957 0 0011.999 22C17.521 22 22 17.521 22 12c0-5.523-4.478-10-10.001-10zm0 18.182a8.163 8.163 0 01-4.168-1.144l-.299-.178-3.097.796.828-3.018-.195-.311a8.167 8.167 0 01-1.251-4.327c0-4.516 3.674-8.182 8.182-8.182 4.516 0 8.182 3.666 8.182 8.182 0 4.516-3.666 8.182-8.182 8.182zm4.484-6.147c-.246-.123-1.455-.718-1.68-.8-.225-.082-.389-.123-.553.123-.164.246-.635.8-.778.964-.143.164-.287.184-.533.061-.246-.123-1.038-.383-1.978-1.221-.732-.653-1.226-1.46-1.37-1.706-.143-.246-.015-.379.108-.502.111-.11.246-.287.369-.431.123-.143.164-.246.246-.41.082-.164.041-.308-.02-.431-.061-.123-.553-1.333-.758-1.825-.199-.48-.401-.415-.553-.423-.143-.008-.308-.008-.472-.008a.91.91 0 00-.656.308c-.225.246-.861.841-.861 2.051 0 1.21.881 2.38 1.004 2.544.123.164 1.734 2.648 4.2 3.714.587.254 1.045.406 1.402.519.59.188 1.127.161 1.551.098.473-.07 1.455-.594 1.66-1.168.205-.574.205-1.066.143-1.168-.061-.102-.225-.164-.472-.287z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
