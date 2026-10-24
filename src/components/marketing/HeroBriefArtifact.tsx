'use client';

import { useEffect, useState } from 'react';
import { PillTag } from '@/components/ui/PillTag';
import { SAMPLE_BRIEF } from '@/data/sampleBrief';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

export function HeroBriefArtifact(): React.ReactElement {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState(reduced ? SAMPLE_BRIEF.headline : '');

  useEffect(() => {
    if (reduced) return;
    setTyped('');
    let i = 0;
    const target = SAMPLE_BRIEF.headline;
    const interval = window.setInterval(() => {
      i += 1;
      setTyped(target.slice(0, i));
      if (i >= target.length) window.clearInterval(interval);
    }, 14);
    return () => window.clearInterval(interval);
  }, [reduced]);

  return (
    <article className="rounded-hero bg-paper p-5 text-ink shadow-[0_32px_64px_-28px_rgba(198,255,61,0.22)] md:p-6">
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-ticker text-ink/70">
          <span className="size-1.5 rounded-pill bg-ink/80 animate-volt-pulse" aria-hidden />
          örnek brief · 08 may · 07:00&apos;de geldi
        </div>
        <PillTag tone="ink">FitClub Istanbul · Fitness</PillTag>
      </header>

      <h2 className="mt-5 font-display text-[24px] font-bold leading-tight text-ink md:text-[28px]">
        {typed}
        {!reduced && typed.length < SAMPLE_BRIEF.headline.length && (
          <span className="ml-1 inline-block h-[0.9em] w-2 -translate-y-[2px] animate-volt-pulse bg-ink align-middle" />
        )}
      </h2>

      <dl className="mt-5 grid grid-cols-1 gap-2.5 font-mono text-[11.5px] uppercase tracking-ticker text-ink/75 sm:grid-cols-2">
        <div className="rounded-card bg-ink/5 p-3.5">
          <dt className="text-ink/55">format · ne çekeceksin</dt>
          <dd className="mt-1 text-ink">{SAMPLE_BRIEF.action.format}</dd>
        </div>
        <div className="rounded-card bg-ink/5 p-3.5">
          <dt className="text-ink/55">açılış · ilk 1 saniye</dt>
          <dd className="mt-1 text-ink/85">&ldquo;Buz banyosu yapma. Önce bunu oku.&rdquo;</dd>
        </div>
      </dl>

      <ol className="mt-5 space-y-1.5 font-mono text-[12px] leading-snug text-ink/80">
        {SAMPLE_BRIEF.action.beats.map((beat, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1 size-1.5 shrink-0 rounded-pill bg-volt" aria-hidden />
            <span>{beat}</span>
          </li>
        ))}
      </ol>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-ink/10 pt-4">
        <span className="font-mono text-[10px] uppercase tracking-ticker text-ink/55">
          neden bu fikir? bu format fitness&apos;ta bu hafta +%340 · TikTok
        </span>
        <button className="rounded-pill bg-ink px-3.5 py-1.5 font-mono text-[10.5px] uppercase tracking-ticker text-paper transition-colors hover:bg-volt hover:text-ink">
          tüm brief&apos;i oku →
        </button>
      </div>
    </article>
  );
}
