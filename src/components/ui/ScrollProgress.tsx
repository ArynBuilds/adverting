'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress(): React.ReactElement {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 380, damping: 38, mass: 0.6 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: '0 50%' }}
      className="pointer-events-none fixed left-0 right-0 top-[44px] z-40 h-[3px] origin-left rounded-pill bg-volt md:top-[52px] xl:top-[60px]"
    />
  );
}
