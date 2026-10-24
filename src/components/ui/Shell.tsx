import { type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  children: ReactNode;
  className?: string;
  width?: 'default' | 'wide' | 'narrow';
  bleed?: boolean;
}

const widthMap: Record<NonNullable<Props['width']>, string> = {
  narrow: 'max-w-[1120px]',
  default: 'max-w-[1440px]',
  wide: 'max-w-[1680px]',
};

export function Shell({ children, className, width = 'default', bleed = false }: Props): React.ReactElement {
  return (
    <div
      className={cn(
        'mx-auto w-full',
        widthMap[width],
        bleed ? '' : 'px-5 md:px-8 xl:px-14 2xl:px-20',
        className,
      )}
    >
      {children}
    </div>
  );
}
