import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'ink' | 'volt' | 'paper' | 'outline-paper' | 'outline-ink';

interface Props {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  dot?: boolean;
}

const tones: Record<Tone, string> = {
  ink: 'bg-ink text-paper',
  volt: 'bg-volt text-ink',
  paper: 'bg-paper text-ink',
  'outline-paper': 'border border-paper/30 text-paper',
  'outline-ink': 'border border-ink/20 text-ink',
};

export function PillTag({ children, tone = 'paper', className, dot = false }: Props): React.ReactElement {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-pill px-3 py-1 font-mono text-[11px] uppercase tracking-ticker',
        tones[tone],
        className,
      )}
    >
      {dot && <span className="size-1.5 rounded-pill bg-current animate-volt-pulse" aria-hidden />}
      {children}
    </span>
  );
}
