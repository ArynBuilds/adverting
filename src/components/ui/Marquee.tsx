'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface Props {
  items: ReadonlyArray<ReactNode>;
  speed?: number;
  className?: string;
  itemClassName?: string;
  separator?: ReactNode;
  pauseOnHover?: boolean;
}

export function Marquee({
  items,
  speed = 40,
  className,
  itemClassName,
  separator,
  pauseOnHover = true,
}: Props): React.ReactElement {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number): void => {
      const delta = (now - last) / 1000;
      last = now;
      if (!paused) {
        offsetRef.current -= speed * delta;
        const half = track.scrollWidth / 2;
        if (-offsetRef.current >= half) offsetRef.current += half;
        track.style.transform = `translate3d(${offsetRef.current.toFixed(2)}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, speed, reduced]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        ref={trackRef}
        className="flex w-max gap-0 will-change-transform"
        onPointerEnter={pauseOnHover ? () => setPaused(true) : undefined}
        onPointerLeave={pauseOnHover ? () => { setPaused(false); setHoverIndex(null); } : undefined}
      >
        {[...items, ...items].map((item, index) => {
          const realIndex = index % items.length;
          const isHovered = hoverIndex === realIndex;
          return (
            <span
              key={index}
              className={cn(
                'inline-flex shrink-0 items-center transition-colors duration-200',
                isHovered ? 'text-volt' : '',
                itemClassName,
              )}
              onPointerEnter={() => setHoverIndex(realIndex)}
            >
              {item}
              {separator && <span className="px-6 opacity-30">{separator}</span>}
            </span>
          );
        })}
      </div>
    </div>
  );
}
