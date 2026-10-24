'use client';

import { useEffect, useState } from 'react';
import { TICKER_BASE_TRENDS, TICKER_CITY, formatClock, nextBriefTime } from '@/data/liveTicker';
import { Shell } from '@/components/ui/Shell';

export function LiveTicker(): React.ReactElement {
  const [now, setNow] = useState<Date | null>(null);
  const [trendCount, setTrendCount] = useState(TICKER_BASE_TRENDS);
  const [next, setNext] = useState({ hours: 16, minutes: 28 });

  useEffect(() => {
    setNow(new Date());
    setNext(nextBriefTime());
    const tick = window.setInterval(() => {
      setNow(new Date());
      setNext(nextBriefTime());
    }, 1000);

    const drift = window.setInterval(() => {
      setTrendCount((c) => c + (Math.random() < 0.5 ? 1 : 0));
    }, 12_000);

    return () => {
      window.clearInterval(tick);
      window.clearInterval(drift);
    };
  }, []);

  return (
    <div className="border-b border-paper/10 bg-ink">
      <Shell>
        <div className="flex items-center gap-4 overflow-hidden whitespace-nowrap py-1.5 font-mono text-[11px] uppercase tracking-ticker text-paper/85 xl:gap-6 xl:py-2 xl:text-[12px]">
          <span className="flex items-center gap-2 shrink-0 text-paper/55">
            <span className="size-1.5 rounded-pill bg-volt animate-volt-pulse" aria-hidden />
            motor canlı
          </span>
          <span className="shrink-0 text-paper/40">·</span>
          <span className="shrink-0 tabular-nums">{now ? `${TICKER_CITY} ${formatClock(now)}` : `${TICKER_CITY} 00:00:00`}</span>
          <span className="shrink-0 text-paper/40">·</span>
          <span className="shrink-0">
            son 24 saatte <span className="text-volt">{trendCount}</span> patlayan post
          </span>
          <span className="hidden shrink-0 text-paper/40 sm:inline">·</span>
          <span className="hidden shrink-0 sm:inline">
            yeni brief <span className="text-volt tabular-nums">{`${next.hours}s ${String(next.minutes).padStart(2, '0')}dk`}</span>
          </span>
          <span className="hidden shrink-0 text-paper/40 xl:inline">·</span>
          <span className="hidden shrink-0 xl:inline">
            frankfurt veri merkezi
          </span>
        </div>
      </Shell>
    </div>
  );
}
