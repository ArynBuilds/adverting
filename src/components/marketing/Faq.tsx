'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from '@phosphor-icons/react';
import { ScrambleText } from '@/components/ui/ScrambleText';
import { Shell } from '@/components/ui/Shell';
import { FAQ } from '@/data/faq';
import { ease } from '@/lib/motion';

export function Faq(): React.ReactElement {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      data-theme="ink"
      className="flex flex-col justify-center bg-ink py-24 text-paper md:py-32 lg:min-h-[100svh] lg:py-16 xl:py-20"
    >
      <Shell>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-[12px] uppercase tracking-ticker text-paper/55 xl:text-[13px]">soru-cevap</p>
            <ScrambleText
              as="h2"
              text="Cevaplar net. Pazarlama dili yok."
              className="mt-3 font-display text-[clamp(34px,4.4vw,64px)] font-semibold leading-[0.98] tracking-tight"
            />
          </div>

          <div className="lg:col-span-8">
            <ul className="grid grid-cols-1 gap-2.5 xl:grid-cols-2 xl:gap-3">
              {FAQ.map((item, i) => {
                const isOpen = open === i;
                return (
                  <li key={item.q} className="overflow-hidden rounded-soft border border-paper/10 bg-paper/[0.03]">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left lg:px-5 lg:py-4"
                    >
                      <span className="font-display text-[16px] font-semibold leading-tight text-paper md:text-[17px] xl:text-[16px]">
                        {item.q}
                      </span>
                      <span
                        aria-hidden
                        className={`grid size-8 shrink-0 place-items-center rounded-pill border border-paper/15 transition-colors ${
                          isOpen ? 'bg-volt text-ink' : 'text-paper/70'
                        }`}
                      >
                        {isOpen ? <Minus weight="bold" size={14} /> : <Plus weight="bold" size={14} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease }}
                        >
                          <p className="max-w-[68ch] px-5 pb-5 text-[14px] leading-relaxed text-paper/80">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Shell>
    </section>
  );
}
