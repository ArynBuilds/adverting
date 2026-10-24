'use client';

import { motion } from 'framer-motion';
import { PillButton } from '@/components/ui/PillButton';
import { PillTag } from '@/components/ui/PillTag';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Shell } from '@/components/ui/Shell';
import { ease } from '@/lib/motion';

interface Tier {
  badge: string;
  name: string;
  price: string;
  unit: string;
  bullets: ReadonlyArray<string>;
  cta: string;
  href: string;
  tone: 'paper' | 'volt' | 'ink';
}

const TIERS: ReadonlyArray<Tier> = [
  {
    badge: 'Solo',
    name: 'Solo. Tek kanal.',
    price: '99',
    unit: '₺/ay',
    bullets: [
      '1 sektör · her sabah 1 brief',
      'Ses parmak izi öğrenir',
      'iOS, Android, web',
      'kart yok · istediğinde iptal',
    ],
    cta: 'Solo plana başla',
    href: '#hello',
    tone: 'paper',
  },
  {
    badge: 'Ajans',
    name: 'Ajans. 3 ila 15 müşteri.',
    price: '259',
    unit: '₺/ay',
    bullets: [
      'En çok 5 sektör paralel',
      'En çok 15 müşteri için öncelik sıralaması',
      'CSV ile müşteri içe aktarımı, PDF dışa aktarım',
      'Ekip koltukları · paylaşılan müşteri panosu',
    ],
    cta: 'Ajans planını başlat',
    href: '#hello',
    tone: 'volt',
  },
  {
    badge: 'Kurumsal',
    name: '15’ten fazla marka.',
    price: 'Konuş',
    unit: 'fiyat görüşmeli',
    bullets: [
      'Sınırsız sektör, sınırsız müşteri',
      'Özel veri kaynakları, KVKK işleme sözleşmesi',
      'Tek oturum açma, self-hosted seçeneği',
      'Müşterine özel öncelik motoru',
    ],
    cta: 'Konuşalım →',
    href: '#hello',
    tone: 'ink',
  },
];

export function Pricing(): React.ReactElement {
  return (
    <section
      id="pricing"
      data-theme="paper"
      className="flex flex-col justify-center bg-paper py-24 text-ink md:py-36 lg:min-h-[100svh] lg:py-16 xl:py-20"
    >
      <Shell>
        <div>
          <p className="font-mono text-[12px] uppercase tracking-ticker text-ink/55 xl:text-[13px]">fiyat · 3 plan · TL</p>
          <ScrambleText
            as="h2"
            text="Tek bir seçim. Karşılaştırma tablosu yok."
            className="mt-3 max-w-[20ch] font-display text-[clamp(40px,5vw,76px)] font-semibold leading-[0.95] tracking-tight"
          />
          <p className="mt-4 max-w-[60ch] text-[16px] leading-relaxed text-ink/70 xl:text-[18px]">
            Tek kanal yönetiyorsan solo. Üç ila on beş müşteriye bakıyorsan ajans. Daha büyüksen konuş.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:mt-10 lg:grid-cols-3 xl:gap-8">
          {TIERS.map((tier) => (
            <PricingCard key={tier.name} tier={tier} />
          ))}
        </div>
      </Shell>
    </section>
  );
}

function PricingCard({ tier }: { tier: Tier }): React.ReactElement {
  const surface =
    tier.tone === 'volt' ? 'bg-volt text-ink' : tier.tone === 'ink' ? 'bg-ink text-paper' : 'bg-paper text-ink border border-ink/10';

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease }}
      className={`flex flex-col gap-5 rounded-hero p-7 lg:gap-4 lg:p-7 xl:p-8 ${surface}`}
    >
      <div className="flex items-center justify-between">
        <PillTag tone={tier.tone === 'ink' ? 'paper' : 'ink'}>{tier.badge}</PillTag>
        {tier.tone === 'volt' && <span className="font-mono text-[11px] uppercase tracking-ticker">en çok seçilen plan</span>}
      </div>

      <h3 className="font-display text-[clamp(28px,2.6vw,36px)] font-semibold leading-tight tracking-tight">
        {tier.name}
      </h3>

      <div className="flex items-baseline gap-2">
        <span className="font-display text-[clamp(56px,5.4vw,80px)] font-extrabold leading-none tracking-tight">
          {tier.price}
        </span>
        <span className="font-mono text-[12px] uppercase tracking-ticker">{tier.unit}</span>
      </div>

      <ul className="space-y-1.5 font-mono text-[12px] uppercase tracking-ticker">
        {tier.bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-pill bg-current" />
            <span className="opacity-85">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-2">
        <PillButton
          as="link"
          href={tier.href}
          tone={tier.tone === 'volt' ? 'ink' : tier.tone === 'ink' ? 'volt' : 'ink'}
          size="md"
        >
          {tier.cta}
        </PillButton>
      </div>
    </motion.article>
  );
}
