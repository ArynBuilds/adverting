'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Shell } from '@/components/ui/Shell';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

const STEPS = [
  {
    num: '01',
    label: 'biz izleriz',
    title: 'Sektörünü her saat tararız.',
    body: 'TikTok, Instagram, YouTube ve X. Son 24 saatte sektörüne ait tüm postlar. İzlenme hızı, kaç saniye izlenmiş, yorum oranı, paylaşım oranı. Hepsi otomatik.',
    visual: <PullVisual />,
  },
  {
    num: '02',
    label: 'biz çözeriz',
    title: 'Neden patladıklarını çıkartırız.',
    body: 'Açılış cümlesi, kurgunun yapısı, caption ritmi. Hangi karede ne oluyor, izleyici ilk 1 saniyede neden kalıyor. Karmaşık değil, insan dili.',
    visual: <UnderstandVisual />,
  },
  {
    num: '03',
    label: 'sen çekersin',
    title: 'Sana tek bir reçete yazarız.',
    body: 'Bugün için tek bir post fikri. Format, açılış cümlesi, kareler, caption, CTA. Müşteri başına bir tane. Yoruma açık değil, kameraya hazır.',
    visual: <ScriptVisual />,
  },
] as const;

export function ThreeStepExplainer(): React.ReactElement {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const x = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['0%', '-66.6%']);

  return (
    <section
      ref={ref}
      data-theme="ink"
      id="explainer"
      className="relative bg-ink"
      style={{ height: reduced ? 'auto' : '300vh' }}
    >
      <div className={reduced ? 'py-24' : 'sticky top-0 flex h-[100svh] flex-col overflow-hidden'}>
        {reduced ? (
          <Shell>
            <div className="flex flex-col gap-16">
              {STEPS.map((step) => (
                <article key={step.num} className="flex flex-col gap-6 border-t border-paper/15 pt-10">
                  <div className="max-w-xl">
                    <div className="font-display text-[clamp(120px,18vw,260px)] font-extrabold leading-none text-volt">
                      {step.num}
                    </div>
                    <p className="mt-4 font-mono text-[12px] uppercase tracking-ticker text-paper/55">{step.label}</p>
                    <h3 className="mt-3 font-display text-[clamp(34px,5vw,72px)] font-semibold leading-tight text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-6 max-w-[60ch] text-[17px] leading-relaxed text-paper/75">{step.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </Shell>
        ) : (
          <>
            <header className="z-10 shrink-0 px-5 pt-[120px] md:px-8 md:pt-[136px] xl:px-14 xl:pt-[120px] 2xl:px-20">
              <ScrambleText
                as="h2"
                text="3 adımda nasıl çalışıyor"
                className="font-display text-[clamp(28px,3.4vw,48px)] font-semibold tracking-tight text-paper"
              />
              <p className="mt-2 font-mono text-[12px] uppercase tracking-ticker text-paper/55">
                aşağı kaydır →
              </p>
            </header>

            <motion.div style={{ x }} className="flex w-[300vw] flex-1 min-h-0">
              {STEPS.map((step) => (
                <article
                  key={step.num}
                  className="flex w-screen shrink-0 items-center justify-between gap-10 px-5 pb-10 md:px-16 md:pb-12 xl:px-24 2xl:px-32"
                >
                  <div className="max-w-xl xl:max-w-2xl">
                    <div className="font-display text-[clamp(96px,13vw,200px)] font-extrabold leading-none text-volt">
                      {step.num}
                    </div>
                    <p className="mt-3 font-mono text-[12px] uppercase tracking-ticker text-paper/55 xl:text-[13px]">{step.label}</p>
                    <h3 className="mt-2 font-display text-[clamp(30px,4vw,64px)] font-semibold leading-tight text-paper">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-[55ch] text-[16px] leading-relaxed text-paper/75 xl:text-[18px]">{step.body}</p>
                  </div>
                  <div className="hidden shrink-0 lg:block">{step.visual}</div>
                </article>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

function PullVisual(): React.ReactElement {
  return (
    <div className="relative size-[340px] xl:size-[400px] rounded-hero border border-paper/10 bg-ink/40 p-8">
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i / 24) * Math.PI * 2;
        const radius = 130 + (i % 3) * 18;
        const x = 50 + (Math.cos(angle) * radius) / 4;
        const y = 50 + (Math.sin(angle) * radius) / 4;
        return (
          <span
            key={i}
            aria-hidden
            className="absolute size-2 rounded-pill bg-volt"
            style={{ left: `${x}%`, top: `${y}%`, opacity: 0.2 + (i % 4) * 0.18 }}
          />
        );
      })}
      <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-pill bg-volt" />
      <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 -translate-y-1/2 rounded-pill border border-volt/40" />
      <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-pill border border-volt/15" />
    </div>
  );
}

function UnderstandVisual(): React.ReactElement {
  return (
    <div className="relative size-[340px] xl:size-[400px] rounded-hero border border-paper/10 bg-ink/40 p-6 font-mono text-[12px] uppercase tracking-ticker text-paper/85">
      {[
        { t: '00:00', x: 18, y: 20, label: 'iddiayı çürüten açılış' },
        { t: '00:02', x: 60, y: 32, label: 'kamera ortası, doğal ışık' },
        { t: '00:05', x: 24, y: 56, label: '3 madde · 1,8 sn' },
        { t: '00:11', x: 56, y: 72, label: 'CTA · yoruma davet' },
      ].map((p, i) => (
        <div key={i} className="absolute flex items-center gap-3" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
          <span className="size-3 rounded-pill bg-volt" />
          <div>
            <div className="text-volt">{p.t}</div>
            <div className="text-paper/70">{p.label}</div>
          </div>
        </div>
      ))}
      <span className="absolute left-6 right-6 top-1/2 h-px bg-paper/15" />
    </div>
  );
}

function ScriptVisual(): React.ReactElement {
  return (
    <div className="relative size-[340px] xl:size-[400px] rounded-hero bg-paper p-6 text-ink shadow-[0_40px_80px_-32px_rgba(198,255,61,0.3)]">
      <div className="font-mono text-[10.5px] uppercase tracking-ticker text-ink/55">brief · 08 may</div>
      <p className="mt-3 font-display text-[26px] font-semibold leading-tight">
        12 saniyelik kısa video. Açılış: &ldquo;Yapma.&rdquo;
      </p>
      <ul className="mt-4 space-y-1.5 font-mono text-[12px] uppercase tracking-ticker text-ink/65">
        <li>· format · 12 sn kısa video</li>
        <li>· açılış · &ldquo;yapma. önce bunu oku.&rdquo;</li>
        <li>· kareler · 4 kesim · 1,8 sn</li>
        <li>· CTA · yoruma davet</li>
      </ul>
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
        <span className="rounded-pill bg-ink px-3 py-1 font-mono text-[10px] uppercase tracking-ticker text-paper">
          hazır
        </span>
        <span className="rounded-pill bg-volt px-3 py-1 font-mono text-[10px] uppercase tracking-ticker text-ink">
          07:00
        </span>
      </div>
    </div>
  );
}
