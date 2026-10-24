'use client';

import { motion } from 'framer-motion';
import { PillTag } from '@/components/ui/PillTag';
import { PillButton } from '@/components/ui/PillButton';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Shell } from '@/components/ui/Shell';
import { ease } from '@/lib/motion';

export function SplitFlow(): React.ReactElement {
  return (
    <section
      data-theme="ink"
      className="flex flex-col justify-center bg-ink py-24 text-paper md:py-36 lg:min-h-[100svh] lg:py-20 xl:py-24"
    >
      <Shell>
        <div>
          <ScrambleText
            as="h2"
            text="Sen kim için çekiyorsun?"
            className="max-w-[18ch] font-display text-[clamp(40px,5.5vw,80px)] font-semibold leading-[0.95] tracking-tight text-paper"
          />
          <p className="mt-5 max-w-[58ch] text-[17px] leading-relaxed text-paper/75 xl:mt-6 xl:text-[18px]">
            Aynı motor, iki farklı yüzey. Tek kanal yönetiyorsan solo plana, üç ila on beş müşteriye bakıyorsan ajans planına geç.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-2 lg:gap-8 xl:gap-10">
          <FlowCard
            tone="paper"
            headline="Solo. Tek kanal."
            subhead="Senin hesabın için tek bir post fikri. Sabah aç, beş dakikada oku, kameraya geç."
            frame="solo"
            tag="99 ₺/ay · 1 sektör"
            cta="Solo planı görüntüle"
            href="#hello"
          />
          <FlowCard
            tone="volt"
            headline="Ajans. 3-15 müşteri."
            subhead="Bugün hangi müşteriye odaklanmalısın? Sistem söyler. Sıralamayı sen değil motor yapar."
            frame="agency"
            tag="259 ₺/ay · 5 sektör"
            cta="Ajans planını görüntüle"
            href="#hello"
          />
        </div>
      </Shell>
    </section>
  );
}

interface FlowCardProps {
  tone: 'paper' | 'volt';
  headline: string;
  subhead: string;
  frame: 'solo' | 'agency';
  tag: string;
  cta: string;
  href: string;
}

function FlowCard(p: FlowCardProps): React.ReactElement {
  const bg = p.tone === 'paper' ? 'bg-paper text-ink' : 'bg-volt text-ink';
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease }}
      className={`group relative overflow-hidden rounded-hero p-8 md:p-10 lg:p-8 xl:p-10 ${bg}`}
    >
      <PillTag tone={p.tone === 'paper' ? 'ink' : 'ink'} className="bg-ink text-paper">
        {p.tag}
      </PillTag>
      <h3 className="mt-6 font-display text-[clamp(36px,4vw,56px)] font-semibold leading-[1.0] tracking-tight">
        {p.headline}
      </h3>
      <p className="mt-3 max-w-md text-[16px] leading-relaxed text-current/85">
        {p.subhead}
      </p>

      <div className="mt-6 flex justify-center lg:mt-8">
        <DeviceFrame frame={p.frame} />
      </div>

      <div className="mt-6 flex justify-end">
        <PillButton as="link" href={p.href} tone="ink" size="md">
          {p.cta} →
        </PillButton>
      </div>
    </motion.div>
  );
}

function DeviceFrame({ frame }: { frame: 'solo' | 'agency' }): React.ReactElement {
  return (
    <div className="rounded-hero bg-ink p-3 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
      <div className="rounded-[28px] bg-paper p-5 text-ink lg:p-4" style={{ width: 260, height: 380 }}>
        <div className="mb-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-ticker text-ink/55">08 may · 07:00</span>
          <span className="rounded-pill bg-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-ticker text-paper">
            {frame === 'solo' ? 'solo' : 'agency'}
          </span>
        </div>
        {frame === 'solo' ? <SoloDeviceContent /> : <AgencyDeviceContent />}
      </div>
    </div>
  );
}

function SoloDeviceContent(): React.ReactElement {
  return (
    <>
      <p className="font-display text-[20px] font-semibold leading-tight">
        12 sn kısa video. Açılış: &ldquo;Yapma.&rdquo;
      </p>
      <ul className="mt-3 space-y-1 font-mono text-[10.5px] uppercase tracking-ticker text-ink/65">
        <li>· iddiayı çürüten açılış</li>
        <li>· 4 kesim · 1,8 sn</li>
        <li>· CTA · yoruma davet</li>
      </ul>
      <div className="mt-4 grid grid-cols-3 gap-1.5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-soft bg-ink/10" />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="rounded-pill bg-volt px-2 py-0.5 font-mono text-[10px] uppercase tracking-ticker text-ink">
          +%340
        </span>
        <span className="font-mono text-[10px] uppercase tracking-ticker text-ink/45">
          fitness · 7gün
        </span>
      </div>
    </>
  );
}

function AgencyDeviceContent(): React.ReactElement {
  const rows = [
    { name: 'FitClub', score: 92, reason: 'trend uyumu' },
    { name: 'BeautyCo', score: 88, reason: 'kampanya' },
    { name: 'Kasap', score: 81, reason: 'trend uyumu' },
    { name: 'Nile', score: 64, reason: 'düşüyor' },
    { name: 'Kadıköy', score: 51, reason: 'sustu' },
  ];
  return (
    <ul className="space-y-2">
      {rows.map((r, i) => (
        <li key={i} className="flex items-center justify-between rounded-pill border border-ink/10 px-3 py-2 text-[12px]">
          <span className="font-display font-semibold">{r.name}</span>
          <span className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-ticker text-ink/55">{r.reason}</span>
            <span
              className={`rounded-pill px-2 py-0.5 font-mono text-[10px] uppercase tracking-ticker ${
                r.score >= 80 ? 'bg-volt text-ink' : 'border border-ink/15 text-ink/70'
              }`}
            >
              {r.score}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}
