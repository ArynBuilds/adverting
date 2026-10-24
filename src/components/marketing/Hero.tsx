'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LetterReveal } from '@/components/ui/LetterReveal';
import { PillButton } from '@/components/ui/PillButton';
import { PillToggle } from '@/components/ui/PillToggle';
import { Shell } from '@/components/ui/Shell';
import { HeroBriefArtifact } from './HeroBriefArtifact';
import { HeroPriorityArtifact } from './HeroPriorityArtifact';
import { ease } from '@/lib/motion';

type Surface = 'solo' | 'agency';

export function Hero(): React.ReactElement {
  const [surface, setSurface] = useState<Surface>('solo');

  return (
    <section
      data-theme="ink"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink pb-12 pt-[136px] md:pb-16 md:pt-[156px] lg:pb-10 lg:pt-[120px] xl:pb-12 xl:pt-[140px]"
    >
      <Shell>
        <div className="relative grid grid-cols-12 gap-6 md:gap-8 lg:items-start lg:gap-12 xl:gap-16">
          <div className="col-span-12 lg:col-span-7">
            <p className="mono-label mb-4 text-paper/60">
              <span className="mr-2 inline-block size-1.5 rounded-pill bg-volt animate-volt-pulse align-middle" aria-hidden />
              bugün · 08 mayıs 2026 · pazartesi
            </p>

            <h1 className="display-tight text-[clamp(64px,9.5vw,144px)] font-extrabold text-paper">
              <span className="block overflow-hidden">
                <LetterReveal text="HER" />
              </span>
              <span className="block overflow-hidden">
                <LetterReveal text="SABAH" delay={0.18} />
              </span>
              <span className="block overflow-hidden text-volt">
                <LetterReveal text="BİR FİKİR." delay={0.42} />
              </span>
            </h1>

            <p className="mt-5 max-w-[58ch] font-body text-[17px] leading-snug text-paper/90 md:text-[19px] lg:mt-6">
              Adverting, dijital pazarlama ajansları ve solo içerik yaratıcıları için günlük içerik brief&apos;i.
              Sektöründe bu hafta en çok izlenen postlardan çıkmış bir post fikri.
              Hangi format. Hangi açılış. Hangi caption. Her sabah 07:00&apos;de hesabında.
            </p>

            <p className="mt-3 max-w-md font-mono text-[12px] uppercase tracking-ticker text-paper/55">
              <span className="text-volt">brief</span> · bugün ne çekeceğine dair tek sayfa, somut bir reçete
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4 lg:mt-6">
              <PillButton as="link" href="#hello" tone="volt" size="lg">
                Örnek brief&apos;i şimdi gör →
              </PillButton>
              <span className="font-mono text-[12px] uppercase tracking-ticker text-paper/60">
                5 dakika içinde kurulum yap
              </span>
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-4 lg:col-span-5 xl:gap-5">
            <div className="flex justify-end">
              <PillToggle
                value={surface}
                onChange={(v) => setSurface(v)}
                options={[
                  { value: 'solo', label: 'Solo' },
                  { value: 'agency', label: 'Ajans' },
                ]}
              />
            </div>

            <div className="relative lg:ml-auto lg:max-w-[420px] xl:max-w-[460px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={surface}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.32, ease }}
                >
                  {surface === 'solo' ? <HeroBriefArtifact /> : <HeroPriorityArtifact />}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
