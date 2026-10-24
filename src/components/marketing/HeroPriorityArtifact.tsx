'use client';

import { motion } from 'framer-motion';
import { PillTag } from '@/components/ui/PillTag';
import { CLIENTS } from '@/data/clients';
import { spring } from '@/lib/motion';

export function HeroPriorityArtifact(): React.ReactElement {
  const top = CLIENTS.slice(0, 5);

  return (
    <article className="rounded-hero bg-paper p-5 text-ink shadow-[0_32px_64px_-28px_rgba(198,255,61,0.22)] md:p-6">
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div className="font-mono text-[10px] uppercase tracking-ticker text-ink/70">
          <span className="mr-2 inline-block size-1.5 rounded-pill bg-ink/80 animate-volt-pulse align-middle" aria-hidden />
          ajans görünümü · 12 müşteri · 9 brief hazır · sıraladık
        </div>
        <PillTag tone="ink">Bugün</PillTag>
      </header>

      <ul className="mt-4 space-y-2">
        {top.map((c, i) => (
          <motion.li
            layout
            key={c.id}
            transition={spring}
            className="flex items-center justify-between gap-3 rounded-card border border-ink/10 bg-ink/[0.03] p-3"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10.5px] uppercase tracking-ticker text-ink/45 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-display text-[15px] font-semibold text-ink">{c.name}</span>
                  <PillTag tone="outline-ink">{c.sectorLabel}</PillTag>
                </div>
                <p className="mt-1 line-clamp-1 font-mono text-[10.5px] uppercase tracking-ticker text-ink/55">
                  {c.briefHeadline}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span
                className={`rounded-pill px-2.5 py-0.5 font-mono text-[10.5px] uppercase tracking-ticker ${
                  c.priority >= 80 ? 'bg-volt text-ink' : c.priority >= 60 ? 'bg-ink text-paper' : 'border border-ink/15 text-ink/70'
                }`}
              >
                {c.priority}
              </span>
              <span className="font-mono text-[9.5px] uppercase tracking-ticker text-ink/45">
                {translateReason(c.reason)}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>

      <p className="mt-4 border-t border-ink/10 pt-3 font-mono text-[10.5px] uppercase tracking-ticker text-ink/55">
        sıralama: post sıklığı · etkileşim · trend uyumu · kampanya · pin
      </p>
    </article>
  );
}

function translateReason(r: 'stale' | 'trending' | 'deadline' | 'underperforming' | 'on track'): string {
  switch (r) {
    case 'trending':         return 'trend uyumu';
    case 'deadline':         return 'kampanya';
    case 'underperforming':  return 'düşüyor';
    case 'stale':            return 'sustu';
    case 'on track':         return 'yolunda';
  }
}
