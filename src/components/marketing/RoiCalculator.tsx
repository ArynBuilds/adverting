'use client';

import { useMemo, useState } from 'react';
import { PillSlider } from '@/components/ui/PillSlider';
import { SpringCounter } from '@/components/ui/SpringCounter';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Shell } from '@/components/ui/Shell';

export function RoiCalculator(): React.ReactElement {
  const [clients, setClients] = useState(8);
  const [hoursPerClient, setHoursPerClient] = useState(2.5);
  const [hourly, setHourly] = useState(900);

  const { saved, value, ratio } = useMemo(() => {
    const totalHours = clients * hoursPerClient;
    const savedHours = totalHours * 0.62;
    const value = savedHours * hourly * 4;
    const ratio = Math.max(1, Math.round(value / 259 / 4));
    return { saved: savedHours * 4, value, ratio };
  }, [clients, hoursPerClient, hourly]);

  return (
    <section
      data-theme="ink"
      className="flex flex-col justify-center bg-ink py-24 text-paper md:py-36 lg:min-h-[100svh] lg:py-16 xl:py-20"
    >
      <Shell>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-ticker text-paper/55 xl:text-[13px]">kaç saat geri kazanırsın</p>
            <ScrambleText
              as="h2"
              text="Trend taraması, brief yazımı, müşteri triajı. Sen kaç saatini buna veriyorsun?"
              className="mt-3 max-w-[22ch] font-display text-[clamp(30px,3.6vw,56px)] font-semibold leading-[1.02] tracking-tight"
            />
            <p className="mt-4 max-w-[55ch] text-[16px] leading-relaxed text-paper/75 xl:text-[18px]">
              Her ajansın sabahı trend taraması ve brief yazımı ile geçer. Adverting bu işi otomatize eder. Kaydırıcıları kendi ekibine göre ayarla.
            </p>

            <div className="mt-6 space-y-6 rounded-hero border border-paper/10 bg-paper/[0.03] p-6 xl:p-7">
              <PillSlider label="Kaç müşterin var?" value={clients} min={1} max={30} onChange={setClients} format={(n) => `${n} müşteri`} />
              <PillSlider
                label="Müşteri başı günlük emek"
                value={hoursPerClient}
                min={0.5}
                max={6}
                step={0.5}
                onChange={setHoursPerClient}
                format={(n) => `${n.toFixed(1)} sa / gün`}
              />
              <PillSlider label="Bu saatin firmaya maliyeti" value={hourly} min={300} max={3000} step={50} onChange={setHourly} format={(n) => `${n} ₺ / sa`} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:content-center xl:gap-5">
            <ResultCard label="Aylık geri kazanılan saat" value={saved} suffix=" sa" big />
            <ResultCard
              label="Aylık değer · TL"
              value={value}
              prefix="₺ "
              big
              format={(n) => n.toLocaleString('tr-TR')}
            />
            <ResultCard label="Adverting kendini kaç katlar" value={ratio} suffix="x" />
            <ResultCard
              label="Aboneliği geri kazanma süresi"
              value={Math.max(1, Math.round(259 / Math.max(1, value / 30)))}
              suffix=" gün"
            />
          </div>
        </div>
      </Shell>
    </section>
  );
}

interface ResultCardProps {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  big?: boolean;
  format?: (n: number) => string;
}

function ResultCard({ label, value, prefix, suffix, big, format }: ResultCardProps): React.ReactElement {
  return (
    <div className="rounded-card border border-paper/10 bg-paper/[0.03] p-5 xl:p-6">
      <p className="font-mono text-[11px] uppercase tracking-ticker text-paper/55 xl:text-[12px]">{label}</p>
      <p
        className={`mt-3 font-display font-extrabold leading-none tracking-tight text-volt ${
          big ? 'text-[clamp(40px,4.2vw,64px)]' : 'text-[clamp(28px,2.6vw,40px)]'
        }`}
      >
        <SpringCounter value={value} prefix={prefix} suffix={suffix} format={format} />
      </p>
    </div>
  );
}
