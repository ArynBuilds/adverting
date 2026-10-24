'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from './useReducedMotion';

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagnetic<T extends HTMLElement>({
  strength = 0.35,
  radius = 80,
}: MagneticOptions = {}): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMove = (event: PointerEvent): void => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const dist = Math.hypot(dx, dy);
      if (dist > radius * 2.5) {
        targetX = 0;
        targetY = 0;
        return;
      }
      targetX = dx * strength;
      targetY = dy * strength;
    };

    const handleLeave = (): void => {
      targetX = 0;
      targetY = 0;
    };

    const tick = (): void => {
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', handleMove, { passive: true });
    el.addEventListener('pointerleave', handleLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      el.removeEventListener('pointerleave', handleLeave);
      cancelAnimationFrame(raf);
      el.style.transform = '';
    };
  }, [strength, radius, reduced]);

  return ref;
}
