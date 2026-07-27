// ============================================================
// RA CONTRACTOR — GSAP Animation Presets
// ============================================================

import gsap from "gsap";

// Standard luxury easing
export const LUXURY_EASE = "power3.out";
export const SMOOTH_EASE = "power2.inOut";
export const SNAP_EASE = "power4.out";

// ============================================================
// Fade Animations
// ============================================================

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, duration: 0.9, ease: LUXURY_EASE },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { opacity: 1, y: 0, duration: 0.9, ease: LUXURY_EASE },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0, duration: 0.9, ease: LUXURY_EASE },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0, duration: 0.9, ease: LUXURY_EASE },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, duration: 0.8, ease: LUXURY_EASE },
};

// ============================================================
// Scale Animations
// ============================================================

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, duration: 0.8, ease: LUXURY_EASE },
};

// ============================================================
// Clip-path reveal
// ============================================================

export const clipRevealUp = {
  initial: { clipPath: "inset(100% 0 0 0)" },
  animate: {
    clipPath: "inset(0% 0 0 0)",
    duration: 1.2,
    ease: SMOOTH_EASE,
  },
};

export const clipRevealLeft = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: {
    clipPath: "inset(0 0% 0 0)",
    duration: 1.2,
    ease: SMOOTH_EASE,
  },
};

// ============================================================
// Stagger helper
// ============================================================

export function staggerChildren(
  container: HTMLElement,
  selector: string,
  animation: Record<string, unknown> = fadeInUp.animate,
  stagger: number = 0.1
) {
  const children = container.querySelectorAll(selector);
  gsap.fromTo(
    children,
    fadeInUp.initial,
    {
      ...animation,
      stagger,
    }
  );
}

// ============================================================
// Parallax helper
// ============================================================

export function createParallax(
  element: HTMLElement,
  speed: number = 0.3,
  scrollTriggerConfig?: Record<string, unknown>
) {
  return gsap.to(element, {
    y: () => window.innerHeight * speed * -1,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      ...scrollTriggerConfig,
    },
  });
}

// ============================================================
// Framer Motion Variants
// ============================================================

export const framerFadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const framerFadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const framerScaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const framerStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const framerSlideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const framerSlideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
