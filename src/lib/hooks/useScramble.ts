'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

const GLYPHS = '!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

interface Options {
  duration?: number;
  trigger?: boolean;
}

export function useScramble(target: string, { duration = 480, trigger = true }: Options = {}): {
  ref: React.RefObject<HTMLSpanElement | null>;
  text: string;
} {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [text, setText] = useState(target);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !trigger) {
      setText(target);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const length = target.length;

    const tick = (now: number): void => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const resolveAt = Math.floor(progress * length);
      let next = '';
      for (let i = 0; i < length; i += 1) {
        const char = target[i];
        if (i < resolveAt || char === ' ') {
          next += char;
        } else {
          next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setText(next);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setText(target);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, trigger, reduced]);

  return { ref, text };
}
