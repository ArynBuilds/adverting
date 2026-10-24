'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

type CursorMode = 'dot' | 'ring' | 'beam';

export function CursorProvider(): React.ReactElement | null {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [mode, setMode] = useState<CursorMode>('dot');
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return;

    document.documentElement.classList.add('has-custom-cursor');

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    const handleMove = (event: PointerEvent): void => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!visible) setVisible(true);

      const target = event.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest('a, button, [data-cursor="ring"], [role="button"]');
      const text = target.closest('p, h1, h2, h3, h4, h5, h6, span[data-cursor="beam"]');
      if (interactive) setMode('ring');
      else if (text && (text as HTMLElement).dataset.cursor === 'beam') setMode('beam');
      else setMode('dot');
    };

    const handleClick = (): void => {
      setPulse(true);
      window.setTimeout(() => setPulse(false), 380);
    };

    const handleLeave = (): void => setVisible(false);

    let raf = 0;
    const tick = (): void => {
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerdown', handleClick);
    window.addEventListener('pointerleave', handleLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', handleMove);
      window.removeEventListener('pointerdown', handleClick);
      window.removeEventListener('pointerleave', handleLeave);
      document.documentElement.classList.remove('has-custom-cursor');
    };
  }, [reduced, visible]);

  if (reduced) return null;

  const size = mode === 'ring' ? 40 : mode === 'beam' ? 4 : 6;
  const height = mode === 'beam' ? 28 : size;
  const border = mode === 'ring' ? '1px solid var(--volt)' : 'none';
  const background = mode === 'ring' ? 'transparent' : 'var(--volt)';
  const radius = mode === 'beam' ? '2px' : '999px';

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
      style={{
        width: size,
        height,
        borderRadius: radius,
        background,
        border,
        opacity: visible ? 1 : 0,
        transition: 'width 220ms var(--ease), height 220ms var(--ease), background 220ms var(--ease), opacity 240ms var(--ease)',
        transform: 'translate(-50%, -50%)',
        boxShadow: pulse ? '0 0 0 12px rgba(198,255,61,0.18)' : 'none',
        mixBlendMode: 'difference',
      }}
    />
  );
}
