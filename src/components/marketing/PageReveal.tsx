'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ease } from '@/lib/motion';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

export function PageReveal(): React.ReactElement | null {
  const [show, setShow] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setShow(false);
      return;
    }
    const t = window.setTimeout(() => setShow(false), 900);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease }}
          className="pointer-events-none fixed inset-0 z-[10000] flex items-center justify-center bg-ink"
        >
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="font-display text-[7vw] font-extrabold tracking-tight text-volt"
          >
            adverting.
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
