'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from '@/lib/hooks/useInView';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface Props {
  text: string;
  duration?: number;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3';
}

const GLYPHS = '!@#$%&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function ScrambleText({ text, duration = 600, className, as: Tag = 'span' }: Props): React.ReactElement {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.3 });
  const [output, setOutput] = useState(text);
  const reduced = useReducedMotion();
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    if (reduced) {
      setOutput(text);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number): void => {
      const progress = Math.min(1, (now - start) / duration);
      const resolveAt = Math.floor(progress * text.length);
      let next = '';
      for (let i = 0; i < text.length; i += 1) {
        const ch = text[i];
        if (i < resolveAt || ch === ' ' || ch === '\n') {
          next += ch;
        } else {
          next += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setOutput(next);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setOutput(text);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, text, duration, reduced]);

  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref as never} className={className}>
      {output}
    </Component>
  );
}
