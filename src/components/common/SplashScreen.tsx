"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const shown = sessionStorage.getItem("ra_splash_shown");
      if (shown) {
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
    }

    const startTime = Date.now();
    const duration = 2200; // 2.2 seconds total animation

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress === 100) {
        clearInterval(timer);
        sessionStorage.setItem("ra_splash_shown", "true");
        setTimeout(() => {
          setIsLoading(false);
        }, 350);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  const getTagline = () => {
    if (progress < 35) return "Civil Construction & Structural Integrity";
    if (progress < 75) return "Bespoke Architectural Engineering";
    return "Turnkey Luxury Interior Execution";
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash-screen"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[100] bg-[#08101E] flex flex-col items-center justify-between py-12 px-6 overflow-hidden select-none"
        >
          {/* Subtle architectural noise/glow background */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-navy)] to-[#040810] opacity-90 pointer-events-none" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[var(--color-gold)]/10 rounded-full blur-3xl pointer-events-none animate-pulse" />

          {/* Top Brand Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center"
          >
            <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--color-gold)]/80 font-[family-name:var(--font-dm-sans)] font-semibold">
              Premium Build & Design
            </span>
          </motion.div>

          {/* Centerpiece Logo & Counter */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center mb-8"
            >
              <span className="text-6xl md:text-8xl font-bold tracking-tight text-white font-[family-name:var(--font-playfair)] mb-2 drop-shadow-[0_4px_20px_rgba(201,169,110,0.3)]">
                RA
              </span>
              <div className="flex items-center gap-3 w-full justify-center">
                <span className="h-[2px] w-12 md:w-16 bg-gradient-to-r from-transparent to-[var(--color-gold)]" />
                <span className="text-sm md:text-base font-bold uppercase tracking-[0.35em] text-[var(--color-gold)] font-[family-name:var(--font-dm-sans)]">
                  CONTRACTOR
                </span>
                <span className="h-[2px] w-12 md:w-16 bg-gradient-to-l from-transparent to-[var(--color-gold)]" />
              </div>
            </motion.div>

            {/* Shifting Taglines */}
            <div className="h-6 flex items-center justify-center overflow-hidden mb-12">
              <motion.p
                key={getTagline()}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="text-xs md:text-sm text-white/60 font-[family-name:var(--font-cormorant)] italic tracking-wider text-[1.1rem]"
              >
                {getTagline()}
              </motion.p>
            </div>

            {/* Percentage Number Display */}
            <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-white/90 tracking-tighter">
              {progress}<span className="text-[var(--color-gold)] text-2xl md:text-3xl ml-0.5 font-normal">%</span>
            </div>
          </div>

          {/* Bottom Progress Bar & Info */}
          <div className="relative z-10 w-full max-w-xs md:max-w-md flex flex-col items-center gap-3">
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] rounded-full shadow-[0_0_12px_rgba(201,169,110,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.05 }}
              />
            </div>
            <div className="flex justify-between w-full text-[10px] text-white/30 uppercase tracking-[0.2em] font-[family-name:var(--font-dm-sans)]">
              <span>Hyderabad · Telangana</span>
              <span>Turnkey Standards</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
