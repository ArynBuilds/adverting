import { cn } from '@/lib/cn';

interface Props {
  className?: string;
}

export function SectionDivider({ className }: Props): React.ReactElement {
  return (
    <span
      aria-hidden
      className={cn('block h-1 w-20 rounded-pill bg-volt', className)}
    />
  );
}
