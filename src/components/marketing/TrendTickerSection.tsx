'use client';

import { Marquee } from '@/components/ui/Marquee';
import { Shell } from '@/components/ui/Shell';
import { TRENDS } from '@/data/trends';

export function TrendTickerSection(): React.ReactElement {
  const items = TRENDS.map((t) => (
    <span
      key={t.id}
      className="cursor-pointer whitespace-nowrap font-display text-[clamp(56px,8vw,108px)] font-extrabold tracking-tight text-ink transition-colors duration-200"
    >
      {t.caption.toUpperCase()}
      <span className="ml-6 align-middle font-mono text-[14px] uppercase tracking-ticker text-ink/55 xl:text-[15px]">
        {t.handle} · {t.views} · +{t.delta}%
      </span>
    </span>
  ));

  return (
    <section
      data-theme="paper"
      className="flex flex-col justify-center bg-paper py-20 text-ink md:py-28 lg:min-h-[100svh] lg:py-16 xl:py-20"
    >
      <Shell>
        <div className="grid gap-6 md:grid-cols-12 xl:gap-10">
          <p className="font-mono text-[12px] uppercase tracking-ticker text-ink/55 md:col-span-3 xl:text-[13px]">
            <span className="mr-2 inline-block size-1.5 rounded-pill bg-volt animate-volt-pulse align-middle" aria-hidden />
            canlı · 14:32&apos;de güncellendi
          </p>
          <h2 className="max-w-[42ch] font-display text-[clamp(28px,3.5vw,52px)] font-semibold leading-[1.05] tracking-tight md:col-span-9">
            Bu hafta sektörlerinde patlayan postlar.{' '}
            <span className="text-ink/55">
              Adverting bunları her saat tarar. Aşağıdakiler şu anda izleniyor.
            </span>
          </h2>
        </div>
      </Shell>
      <div className="mt-10 xl:mt-16">
        <Marquee
          items={items}
          itemClassName=""
          separator={<span className="px-10">·</span>}
          speed={300}
        />
      </div>
    </section>
  );
}
