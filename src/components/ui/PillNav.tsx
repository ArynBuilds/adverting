'use client';

import { motion } from 'framer-motion';
import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { spring } from '@/lib/motion';

export interface PillNavItem<TValue extends string = string> {
  value: TValue;
  label: ReactNode;
}

interface Props<TValue extends string> {
  items: ReadonlyArray<PillNavItem<TValue>>;
  value: TValue;
  onChange: (value: TValue) => void;
  size?: 'sm' | 'md';
  variant?: 'volt' | 'inverse';
  className?: string;
  ariaLabel?: string;
  scrollable?: boolean;
}

export function PillNav<TValue extends string>({
  items,
  value,
  onChange,
  size = 'md',
  variant = 'volt',
  className,
  ariaLabel,
  scrollable = false,
}: Props<TValue>): React.ReactElement {
  const layoutId = useId();
  const padding = size === 'sm' ? 'p-1' : 'p-1.5';
  const itemPadding = size === 'sm' ? 'px-3 py-1.5 text-[12px]' : 'px-5 py-2.5 text-[13px]';
  const containerStyle =
    variant === 'volt'
      ? 'bg-ink/60 border border-paper/10 backdrop-blur'
      : 'bg-paper/60 border border-ink/10 backdrop-blur';

  const inner = (
    <div
      role="tablist"
      aria-label={ariaLabel}
      className={cn('relative inline-flex items-center rounded-pill', containerStyle, padding, className)}
    >
      {items.map((item) => {
        const active = item.value === value;
        return (
          <button
            key={item.value}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.value)}
            className={cn(
              'relative z-10 inline-flex items-center justify-center rounded-pill font-mono uppercase tracking-ticker transition-colors duration-200',
              itemPadding,
              active
                ? variant === 'volt' ? 'text-ink' : 'text-paper'
                : variant === 'volt' ? 'text-paper/70 hover:text-paper' : 'text-ink/60 hover:text-ink',
            )}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                aria-hidden
                transition={spring}
                className={cn(
                  'absolute inset-0 -z-10 rounded-pill',
                  variant === 'volt' ? 'bg-volt' : 'bg-ink',
                )}
              />
            )}
            <span className="relative">{item.label}</span>
          </button>
        );
      })}
    </div>
  );

  if (!scrollable) return inner;

  return (
    <div className="-mx-5 overflow-x-auto px-5 no-scrollbar md:mx-0 md:overflow-visible md:px-0">
      <div className="inline-block">{inner}</div>
    </div>
  );
}
