'use client';

import { forwardRef, useId, useState, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  error?: string;
  variant?: 'ink' | 'paper';
}

export const PillInput = forwardRef<HTMLInputElement, Props>(function PillInput(
  { label, error, className, variant = 'ink', value, onFocus, onBlur, ...rest },
  ref,
) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  const filled = Boolean(value && String(value).length > 0);
  const float = focused || filled;
  const surface = variant === 'ink' ? 'bg-ink text-paper border-paper/15' : 'bg-paper text-ink border-ink/15';

  return (
    <label htmlFor={id} className={cn('relative block w-full', error && 'shake', className)}>
      <span
        className={cn(
          'pointer-events-none absolute left-5 font-mono uppercase tracking-ticker transition-all duration-200 ease-impeccable',
          float ? 'top-2 text-[10px] opacity-60' : 'top-1/2 -translate-y-1/2 text-[12px] opacity-80',
        )}
      >
        {label}
      </span>
      <input
        id={id}
        ref={ref}
        value={value}
        className={cn(
          'h-14 w-full rounded-pill border px-5 pt-5 pb-1 text-[15px] outline-none transition-colors duration-200',
          surface,
          focused && 'border-volt',
        )}
        onFocus={(event) => { setFocused(true); onFocus?.(event); }}
        onBlur={(event) => { setFocused(false); onBlur?.(event); }}
        {...rest}
      />
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-1 mx-5 h-px origin-left scale-x-0 bg-volt transition-transform duration-300 ease-impeccable',
          focused && 'scale-x-100',
        )}
      />
      {error && (
        <span className="mt-2 block font-mono text-[11px] uppercase tracking-ticker text-volt">
          <span className="mr-2 inline-block size-1.5 rounded-pill bg-volt align-middle" aria-hidden />
          {error}
        </span>
      )}
    </label>
  );
});
