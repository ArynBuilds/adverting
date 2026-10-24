'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { ease } from '@/lib/motion';
import { cn } from '@/lib/cn';

interface Props {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function LetterReveal({ text, className, stagger = 0.03, delay = 0 }: Props): React.ReactElement {
  const reduced = useReducedMotion();
  const words = text.split(' ');

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={cn('inline-block', className)} aria-label={text}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {Array.from(word).map((char, charIndex) => {
            const overallIndex = words.slice(0, wordIndex).reduce((sum, w) => sum + w.length, 0) + charIndex;
            return (
              <motion.span
                key={charIndex}
                aria-hidden
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: delay + overallIndex * stagger,
                  duration: 0.6,
                  ease,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  );
}
