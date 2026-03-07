import type { Variants } from "framer-motion";

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.21, 0.61, 0.35, 1],
    },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.21, 0.61, 0.35, 1],
    },
  },
};

export const hoverLift = {
  rest: {
    y: 0,
    scale: 1,
    transition: { duration: 0.2 },
  },
  hover: {
    y: -6,
    scale: 1.02,
    transition: { duration: 0.2 },
  },
};
