'use client';

import { motion } from 'framer-motion';
import { PillTag } from '@/components/ui/PillTag';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Shell } from '@/components/ui/Shell';
import { NEWS, type NewsItem } from '@/data/news';
import { ease } from '@/lib/motion';

function translateCategory(c: NewsItem['category']): string {
  switch (c) {
    case 'trend alert': return 'TREND UYARISI';
    case 'feature':     return 'YENİ ÖZELLİK';
    case 'case study':  return 'MÜŞTERİ VAKASI';
  }
}

export function News(): React.ReactElement {
  return (
    <section
      data-theme="paper"
      className="flex flex-col justify-center bg-paper py-24 text-ink md:py-32 lg:min-h-[100svh] lg:py-16 xl:py-20"
    >
      <Shell>
        <div>
          <p className="font-mono text-[12px] uppercase tracking-ticker text-ink/55 xl:text-[13px]">son güncellemeler</p>
          <ScrambleText
            as="h2"
            text="Bu hafta motor ne fark etti?"
            className="mt-3 max-w-[20ch] font-display text-[clamp(36px,4.5vw,68px)] font-semibold leading-[0.98] tracking-tight"
          />
          <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-ink/70 xl:text-[18px]">
            Yeni trend uyarıları, yeni özellikler, müşteri vakaları. Buraya kayda değer her şeyi yazıyoruz.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:mt-10 lg:grid-cols-2 xl:grid-cols-3 xl:gap-5">
          {NEWS.map((n) => (
            <motion.article
              key={n.headline}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease }}
              className="rounded-card border border-ink/10 bg-paper p-6 md:p-7 xl:p-7"
            >
              <div className="flex items-center gap-3">
                <PillTag tone="outline-ink" className="text-ink/70">
                  {n.date}
                </PillTag>
                <PillTag tone={n.category === 'feature' ? 'ink' : n.category === 'case study' ? 'outline-ink' : 'volt'}>
                  {translateCategory(n.category)}
                </PillTag>
              </div>
              <h3 className="mt-4 font-display text-[clamp(22px,1.9vw,28px)] font-semibold leading-tight tracking-tight">
                {n.headline}
              </h3>
              <p className="mt-3 max-w-[55ch] text-[15px] leading-relaxed text-ink/75">{n.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </Shell>
    </section>
  );
}
