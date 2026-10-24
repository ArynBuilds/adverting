'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Marquee } from '@/components/ui/Marquee';
import { PillToggle } from '@/components/ui/PillToggle';
import { PillButton } from '@/components/ui/PillButton';
import { Shell } from '@/components/ui/Shell';
import { SECTORS } from '@/data/sectors';
import { useToast } from '@/components/providers/ToastProvider';

export function Footer(): React.ReactElement {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');
  const { push } = useToast();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    push(lang === 'tr' ? 'Yarın 07:00\'de senin de hesabında.' : 'Tomorrow 7:00 in your account too.', 'success');
    (e.currentTarget.querySelector('input') as HTMLInputElement | null)?.blur();
    e.currentTarget.reset();
  };

  return (
    <footer id="hello" className="bg-ink pb-0 pt-24 text-paper md:pt-32 lg:pt-0">
      <div className="flex flex-col justify-end lg:min-h-[100svh] lg:py-16 xl:py-16">
        <Shell>
          <p className="font-mono text-[12px] uppercase tracking-ticker text-paper/55 xl:text-[13px]">
            adverting şu sektörlerde çalışır · 20 ve fazlası · sayı bu hafta tespit edilen post sayısı
          </p>

          <ul className="mt-5 flex flex-wrap gap-2 xl:gap-2.5">
            {SECTORS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-pill border border-paper/15 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-ticker text-paper/85 transition-colors duration-200 hover:border-volt hover:bg-volt hover:text-ink xl:text-[12px]"
                >
                  {s.name}
                  <span className="opacity-60">{s.trendCount}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="lg:col-span-7">
              <h3 className="max-w-[16ch] font-display text-[clamp(36px,5vw,80px)] font-semibold leading-[0.95] tracking-tight">
                {lang === 'tr' ? 'Beğendin mi? Yarınki brief\'i al.' : 'Like what you see? Get tomorrow\'s brief.'}
              </h3>
              <form onSubmit={handleSubscribe} className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <input
                  type="email"
                  required
                  placeholder={lang === 'tr' ? 'Mail adresin' : 'Your email'}
                  className="h-14 w-full rounded-pill border border-paper/20 bg-ink px-6 font-body text-[15px] text-paper placeholder:text-paper/40 focus:border-volt focus:outline-none sm:max-w-md"
                />
                <PillButton tone="volt" size="md">
                  {lang === 'tr' ? 'Yarın 07:00\'de gelsin' : 'Send me tomorrow\'s'}
                </PillButton>
              </form>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-ticker text-paper/45">
                kart yok · kvkk · istediğinde dur
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 font-mono text-[12px] uppercase tracking-ticker text-paper/70 sm:grid-cols-3 lg:col-span-5 lg:gap-8">
              <FooterCol
                title="Ürün"
                links={[
                  { label: 'Nasıl çalışır', href: '#explainer' },
                  { label: 'Yöntem', href: '#priority' },
                  { label: 'Fiyat', href: '#pricing' },
                  { label: 'Geliştirici API', href: '#hello' },
                ]}
              />
              <FooterCol
                title="Şirket"
                links={[
                  { label: 'Hakkımızda', href: '#hello' },
                  { label: 'Kariyer', href: '#hello' },
                  { label: 'Basın', href: '#hello' },
                  { label: 'KVKK', href: '#hello' },
                ]}
              />
              <FooterCol
                title="İletişim"
                links={[
                  { label: 'hello@adverting.app', href: 'mailto:hello@adverting.app' },
                  { label: 'Twitter', href: 'https://twitter.com' },
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'Instagram', href: 'https://instagram.com' },
                ]}
              />
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-paper/10 pt-6 font-mono text-[11px] uppercase tracking-ticker text-paper/55 lg:mt-16">
            <div>© 2026 Adverting · made in Istanbul</div>
            <div className="flex items-center gap-3">
              <PillToggle
                options={[
                  { value: 'tr' as const, label: 'TR' },
                  { value: 'en' as const, label: 'EN' },
                ]}
                value={lang}
                onChange={setLang}
              />
              <span>frankfurt veri merkezi</span>
            </div>
          </div>
        </Shell>
      </div>

      <Marquee
        items={[
          <span key="m1" className="font-display text-[12vw] font-extrabold tracking-tight text-paper">MADE IN ISTANBUL</span>,
          <span key="m2" className="font-display text-[12vw] font-extrabold tracking-tight text-volt">BUILT FOR THE PEOPLE WHO ACTUALLY DO THE WORK</span>,
          <span key="m3" className="font-display text-[12vw] font-extrabold tracking-tight text-paper">07:00 EVERY MORNING</span>,
        ]}
        separator={<span className="px-8 text-paper/40">·</span>}
        className="border-t border-paper/10 py-6"
        speed={270}
      />
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}): React.ReactElement {
  return (
    <div>
      <p className="text-paper">{title}</p>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-paper/55 transition-colors hover:text-volt">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
