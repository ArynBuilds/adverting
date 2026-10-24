'use client';

import { useId, type ChangeEvent } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  format?: (n: number) => string;
  className?: string;
}

export function PillSlider({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
  format,
  className,
}: Props): React.ReactElement {
  const id = useId();
  const percent = ((value - min) / (max - min)) * 100;

  const handle = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(Number(event.target.value));
  };

  return (
    <div className={cn('flex w-full flex-col gap-3', className)}>
      <div className="flex items-baseline justify-between font-mono text-[12px] uppercase tracking-ticker text-paper/70">
        <label htmlFor={id}>{label}</label>
        <span className="text-paper">{format ? format(value) : value.toLocaleString('tr-TR')}</span>
      </div>
      <div className="relative h-3 w-full rounded-pill bg-paper/10">
        <div
          className="absolute inset-y-0 left-0 rounded-pill bg-volt transition-[width] duration-150 ease-impeccable"
          style={{ width: `${percent}%` }}
          aria-hidden
        />
        <input
          id={id}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handle}
          aria-valuetext={format ? format(value) : String(value)}
          className="absolute inset-0 h-full w-full cursor-grab appearance-none bg-transparent opacity-0"
        />
        <span
          className="pointer-events-none absolute top-1/2 size-6 -translate-y-1/2 rounded-pill bg-volt shadow-[0_8px_20px_-6px_rgba(198,255,61,0.6)] ring-2 ring-ink"
          style={{ left: `calc(${percent}% - 12px)` }}
          aria-hidden
        />
      </div>
    </div>
  );
}
