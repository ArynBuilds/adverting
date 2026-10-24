'use client';

import Link from 'next/link';
import { useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  href: string;
  primary: string;
  secondary: string;
  children?: ReactNode;
  className?: string;
}

export function StrikeLink({ href, primary, secondary, className }: Props): React.ReactElement {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      className={cn('relative inline-flex items-center', className)}
    >
      <span className="relative inline-block overflow-hidden">
        <span
          className={cn(
            'block transition-transform duration-300 ease-impeccable',
            hovered ? '-translate-y-full' : 'translate-y-0',
          )}
        >
          {primary}
          <span
            aria-hidden
            className={cn(
              'absolute left-0 right-0 top-1/2 h-px origin-left scale-x-0 bg-current transition-transform duration-200 ease-impeccable',
              hovered && 'scale-x-100',
            )}
          />
        </span>
        <span
          aria-hidden
          className={cn(
            'absolute inset-x-0 top-full block text-volt transition-transform duration-300 ease-impeccable',
            hovered ? '-translate-y-full' : 'translate-y-0',
          )}
        >
          {secondary}
        </span>
      </span>
    </Link>
  );
}
