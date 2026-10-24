'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { LiveTicker } from './LiveTicker';
import { StrikeLink } from '@/components/ui/StrikeLink';
import { Shell } from '@/components/ui/Shell';

const NAV_ITEMS = [
  { href: '#explainer', primary: 'Nasıl', secondary: '3 adım' },
  { href: '#priority', primary: 'Yöntem', secondary: 'sıralama' },
  { href: '#pricing', primary: 'Fiyat', secondary: '99 ₺/ay' },
  { href: '#hello', primary: 'Selam', secondary: 'konuşalım' },
] as const;

export function Header(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = (): void => setScrolled(window.scrollY > 12);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-colors duration-200 ease-impeccable ${
          scrolled ? 'bg-ink/85 backdrop-blur-md' : 'bg-ink/40 backdrop-blur-sm'
        }`}
      >
        <Shell>
          <div className="flex items-center justify-between py-3 xl:py-4">
            <Link
              href="/"
              aria-label="Adverting"
              className="font-display text-[18px] font-extrabold tracking-tight text-volt md:text-[20px] xl:text-[22px]"
              style={{ viewTransitionName: 'wordmark' }}
            >
              adverting<span className="text-paper">.</span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex xl:gap-12">
              {NAV_ITEMS.map((item) => (
                <StrikeLink
                  key={item.href}
                  href={item.href}
                  primary={item.primary}
                  secondary={item.secondary}
                  className="font-mono text-[12px] uppercase tracking-ticker text-paper xl:text-[13px]"
                />
              ))}
            </nav>

            <Link
              href="#hello"
              className="hidden rounded-pill border border-paper/20 px-4 py-2 font-mono text-[12px] uppercase tracking-ticker text-paper transition-colors hover:border-volt hover:text-volt md:inline-block xl:px-5 xl:py-2.5 xl:text-[13px]"
            >
              giriş
            </Link>
          </div>
        </Shell>
      </div>
      <LiveTicker />
    </header>
  );
}
