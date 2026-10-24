export const ease = [0.32, 0.72, 0, 1] as const;

export const spring = {
  type: 'spring' as const,
  stiffness: 480,
  damping: 42,
  mass: 0.6,
};

export const slowSpring = {
  type: 'spring' as const,
  stiffness: 220,
  damping: 28,
  mass: 0.9,
};

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.18, ease },
};

export const tabContent = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.18, delay: 0.08, ease } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease } },
};

export const briefArrival = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease },
};
