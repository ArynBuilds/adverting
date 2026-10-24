export const TICKER_CITY = 'ISTANBUL';
export const TICKER_TZ = 'GST';

export const TICKER_BASE_TRENDS = 127;

export interface TickerSegment {
  label: string;
  value: string;
}

export function nextBriefTime(): { hours: number; minutes: number } {
  const now = new Date();
  const target = new Date(now);
  target.setHours(7, 0, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  const diff = target.getTime() - now.getTime();
  const hours = Math.floor(diff / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  return { hours, minutes };
}

export function formatClock(date: Date): string {
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}
