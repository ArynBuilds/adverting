'use client';

import { motion } from 'framer-motion';
import { spring } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface Option<T extends string> {
  value: T;
  label: string;
}

interface Props<T extends string> {
  options: ReadonlyArray<Option<T>>;
  value: T;
  onChange: (value: T) => void;
  className?: string;
  variant?: 'volt' | 'inverse';
}

export function PillToggle<T extends string>({ options, value, onChange, className, variant = 'volt' }: Props<T>): React.ReactElement {
  const containerStyle = variant === 'volt' ? 'border-paper/15 bg-ink/40' : 'border-ink/15 bg-paper/40';

  return (
    <div className={cn('inline-flex items-center gap-1 rounded-pill border p-1 backdrop-blur', containerStyle, className)}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={cn(
              'relative rounded-pill px-4 py-1.5 font-mono text-[12px] uppercase tracking-ticker transition-colors',
              active ? (variant === 'volt' ? 'text-ink' : 'text-paper') : (variant === 'volt' ? 'text-paper/60' : 'text-ink/60'),
            )}
            aria-pressed={active}
          >
            {active && (
              <motion.span
                layoutId={`toggle-${options.map((o) => o.value).join('-')}`}
                transition={spring}
                className={cn('absolute inset-0 -z-0 rounded-pill', variant === 'volt' ? 'bg-volt' : 'bg-ink')}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
