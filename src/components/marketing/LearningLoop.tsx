'use client';

import { useState } from 'react';
import { PillSlider } from '@/components/ui/PillSlider';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Shell } from '@/components/ui/Shell';

export function LearningLoop(): React.ReactElement {
  const [format, setFormat] = useState(72);
  const [trend, setTrend] = useState(58);
  const [voice, setVoice] = useState(81);

  return (
    <section
      data-theme="ink"
      className="flex flex-col justify-center bg-ink py-24 text-paper md:py-32 lg:min-h-[100svh] lg:py-20 xl:py-24"
    >
      <Shell>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-ticker text-paper/55 xl:text-[13px]">öğrenme döngüsü</p>
            <ScrambleText
              as="h2"
              text="Her brief, müşterini biraz daha tanır."
              className="mt-3 max-w-[18ch] font-display text-[clamp(34px,4.5vw,68px)] font-semibold leading-[0.98] tracking-tight"
            />
            <p className="mt-5 max-w-[55ch] text-[16px] leading-relaxed text-paper/75 xl:text-[18px]">
              Bir brief&apos;i yayınladığında performansı bize geri gelir. Hangi format işe yaradı, hangi açılış işe yaramadı.
              Adverting bir sonraki brief&apos;te bu bilgiyi kullanır. Caption tarzı, sesin parmak izine işlenir.
            </p>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-ticker text-paper/45">
              son 30 günde 17 brief kullanıldı · 11 sonuç raporu geldi
            </p>
          </div>

          <div className="rounded-hero border border-paper/10 bg-paper/[0.03] p-6 md:p-8 xl:p-10">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-[18px] font-semibold">Öğrendiklerimiz</h3>
            <button className="rounded-pill border border-paper/20 px-3 py-1 font-mono text-[10.5px] uppercase tracking-ticker text-paper/70 transition-colors hover:border-volt hover:text-volt">
              sıfırla
            </button>
          </div>

          <div className="mt-6 space-y-7">
            <PillSlider
              label="Format eğilimi · kısa video"
              value={format}
              min={0}
              max={100}
              onChange={setFormat}
              format={(n) => `${n}/100`}
            />
            <PillSlider
              label="Açılış tarzı · iddia çürüten"
              value={trend}
              min={0}
              max={100}
              onChange={setTrend}
              format={(n) => `${n}/100`}
            />
            <PillSlider
              label="Ses parmak izi · doğruluk"
              value={voice}
              min={0}
              max={100}
              onChange={setVoice}
              format={(n) => `%${n}`}
            />
          </div>

            <p className="mt-7 border-t border-paper/10 pt-5 font-mono text-[11.5px] uppercase tracking-ticker text-paper/55">
              tanıdığımız ses: &ldquo;konuşkan, sen dili, sık retorik soru, argo yok.&rdquo;
            </p>
          </div>
        </div>
      </Shell>
    </section>
  );
}
