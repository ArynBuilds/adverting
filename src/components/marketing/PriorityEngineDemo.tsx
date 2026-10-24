'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { CLIENTS, type AgencyClient } from '@/data/clients';
import { PillNav } from '@/components/ui/PillNav';
import { PillTag } from '@/components/ui/PillTag';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Shell } from '@/components/ui/Shell';
import { spring } from '@/lib/motion';

type SortBy = 'overall' | 'cadence' | 'engagement' | 'trend';

const SORT_ITEMS = [
  { value: 'overall' as const, label: 'Genel' },
  { value: 'cadence' as const, label: 'Post sıklığı' },
  { value: 'engagement' as const, label: 'Etkileşim' },
  { value: 'trend' as const, label: 'Trend uyumu' },
];

function scoreFor(c: AgencyClient, by: SortBy): number {
  switch (by) {
    case 'cadence':    return c.cadenceGap * 14 + 30;
    case 'engagement': return 60 - c.engagementDelta * 1.4;
    case 'trend':      return c.trendRelevance;
    default:           return c.priority;
  }
}

export function PriorityEngineDemo(): React.ReactElement {
  const [sortBy, setSortBy] = useState<SortBy>('overall');

  const sorted = useMemo(
    () => [...CLIENTS].sort((a, b) => scoreFor(b, sortBy) - scoreFor(a, sortBy)),
    [sortBy],
  );

  return (
    <section
      id="priority"
      data-theme="paper"
      className="flex flex-col justify-center bg-paper py-24 text-ink md:py-36 lg:min-h-[100svh] lg:py-16 xl:py-20"
    >
      <Shell>
        <div>
          <p className="font-mono text-[12px] uppercase tracking-ticker text-ink/55 xl:text-[13px]">
            öncelik motoru · canlı demo · aşağı kaydır, sıralama değişir
          </p>
          <ScrambleText
            as="h2"
            text="Hangi müşteri bugün sana ihtiyaç duyuyor?"
            className="mt-3 max-w-[20ch] font-display text-[clamp(40px,5vw,72px)] font-semibold leading-[0.95] tracking-tight"
          />
          <p className="mt-4 max-w-[65ch] text-[16px] leading-relaxed text-ink/75 xl:text-[17px]">
            On iki müşterin var. Hangisine bugün öncelik vermelisin? Adverting her müşteriye 0-100 arası bir puan verir.
            Sıralamayı oluşturan beş giriş aşağıda.
          </p>
        </div>

        <div className="mt-6 lg:mt-8">
          <PillNav
            variant="inverse"
            items={SORT_ITEMS}
            value={sortBy}
            onChange={setSortBy}
            ariaLabel="Sıralama kriteri"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-4 lg:gap-3 2xl:grid-cols-6">
          {sorted.map((client, idx) => (
            <ClientPriorityCard key={client.id} client={client} index={idx} sortBy={sortBy} />
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-2 font-mono text-[11px] uppercase tracking-ticker text-ink/65 md:grid-cols-5 lg:mt-10">
          {[
            { name: 'Post sıklığı', meaning: 'son posttan beri kaç gün' },
            { name: 'Etkileşim farkı', meaning: '30 günlük ortalamaya kıyasla' },
            { name: 'Trend uyumu', meaning: 'bugünün trendi müşteriye uyuyor mu' },
            { name: 'Kampanya tarihi', meaning: 'son teslim yaklaştıkça artar' },
            { name: 'Manuel pin', meaning: 'sen sabitlersin · gece sıfırlanır' },
          ].map((s) => (
            <div key={s.name} className="rounded-card border border-ink/10 bg-ink/[0.04] p-3 lg:p-3.5">
              <div className="text-ink">{s.name}</div>
              <div className="mt-1 text-ink/55">{s.meaning}</div>
            </div>
          ))}
        </div>
      </Shell>
    </section>
  );
}

function ClientPriorityCard({
  client,
  index,
  sortBy,
}: {
  client: AgencyClient;
  index: number;
  sortBy: SortBy;
}): React.ReactElement {
  const score = Math.round(scoreFor(client, sortBy));
  return (
    <motion.div
      layout
      transition={spring}
      className="flex flex-col gap-3 rounded-card border border-ink/10 bg-paper p-4 lg:gap-2.5 lg:p-3.5"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] uppercase tracking-ticker text-ink/55 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <PillTag tone={score >= 80 ? 'volt' : 'outline-ink'}>{score}</PillTag>
      </div>

      <div>
        <h3 className="font-display text-[18px] font-semibold leading-tight text-ink lg:text-[16px]">{client.name}</h3>
        <p className="mt-1 font-mono text-[10.5px] uppercase tracking-ticker text-ink/55">
          {client.sectorLabel} · {translateReason(client.reason)}
        </p>
      </div>

      <p className="line-clamp-2 text-[13px] leading-snug text-ink/85 lg:hidden">{client.briefHeadline}</p>

      <Sparkline values={client.sparkline} />
    </motion.div>
  );
}

function translateReason(r: AgencyClient['reason']): string {
  switch (r) {
    case 'trending':         return 'trend uyumu yüksek';
    case 'deadline':         return 'kampanya yaklaşıyor';
    case 'underperforming':  return 'düşüyor';
    case 'stale':            return 'günlerdir post yok';
    case 'on track':         return 'yolunda';
  }
}

function Sparkline({ values }: { values: ReadonlyArray<number> }): React.ReactElement {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = Math.max(1, max - min);
  const points = values
    .map((v, i) => {
      const x = (i / (values.length - 1)) * 100;
      const y = 100 - ((v - min) / range) * 100;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(' ');

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-12 w-full">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink"
      />
      <circle
        cx={100}
        cy={100 - ((values[values.length - 1] ?? 0) - min) / range * 100}
        r={2}
        className="fill-volt"
      />
    </svg>
  );
}
