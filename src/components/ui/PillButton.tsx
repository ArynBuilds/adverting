'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { useMagnetic } from '@/lib/hooks/useMagnetic';

type Tone = 'volt' | 'ink' | 'paper' | 'ghost';

interface CommonProps {
  tone?: Tone;
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  className?: string;
  magnetic?: boolean;
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never };
type LinkProps = CommonProps & { as: 'link'; href: string; onClick?: () => void };

type Props = ButtonProps | LinkProps;

const toneStyle: Record<Tone, string> = {
  volt: 'bg-volt text-ink hover:bg-ink hover:text-volt',
  ink: 'bg-ink text-paper hover:bg-volt hover:text-ink',
  paper: 'bg-paper text-ink hover:bg-ink hover:text-paper',
  ghost: 'border border-current text-current hover:bg-current/10',
};

const sizeStyle: Record<NonNullable<CommonProps['size']>, string> = {
  sm: 'h-9 px-4 text-[13px]',
  md: 'h-12 px-6 text-[14px]',
  lg: 'h-14 px-8 text-[15px]',
};

export const PillButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  function PillButton(props, _ref) {
    const { tone = 'volt', size = 'md', children, className, magnetic = true } = props;
    const magneticRef = useMagnetic<HTMLDivElement>({ strength: magnetic ? 0.35 : 0, radius: 110 });

    const inner = (
      <span
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-pill font-mono uppercase tracking-ticker transition-colors duration-200 ease-impeccable',
          toneStyle[tone],
          sizeStyle[size],
          className,
        )}
      >
        {children}
      </span>
    );

    if (props.as === 'link') {
      return (
        <div ref={magneticRef as React.RefObject<HTMLDivElement>} className="inline-block will-change-transform">
          <Link href={props.href} className="inline-block" onClick={props.onClick}>
            {inner}
          </Link>
        </div>
      );
    }

    const buttonProps = props as ButtonProps;
    const {
      tone: _tone,
      size: _size,
      magnetic: _magnetic,
      className: _className,
      children: _children,
      as: _as,
      ...rest
    } = buttonProps;
    void _tone; void _size; void _magnetic; void _className; void _children; void _as;
    return (
      <div ref={magneticRef as React.RefObject<HTMLDivElement>} className="inline-block will-change-transform">
        <button {...rest} className="inline-block">
          {inner}
        </button>
      </div>
    );
  },
);
