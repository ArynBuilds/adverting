import type { Trend } from './trends';
import { TRENDS } from './trends';

export interface BriefAction {
  format: string;
  hook: string;
  beats: ReadonlyArray<string>;
  caption: string;
  cta: string;
  hashtags: ReadonlyArray<string>;
}

export interface SampleBrief {
  date: string;
  sector: string;
  client: string;
  headline: string;
  action: BriefAction;
  why: ReadonlyArray<string>;
  evidence: ReadonlyArray<Trend>;
}

export const SAMPLE_BRIEF: SampleBrief = {
  date: '2026-05-08',
  sector: 'fitness',
  client: 'FitClub Istanbul',
  headline: '12 saniyelik kısa video. Açılış: "Yapma."',
  action: {
    format: 'Kısa video · 12 saniye · dikey 9:16',
    hook: 'İlk 1 saniyede ekrana büyük yazı: "Buz banyosu yapma. Önce bunu oku."',
    beats: [
      '00:00 · büyük yazı: "Buz banyosu yapma. Önce bunu oku."',
      '00:02 · antrenör çerçeveye girer, doğal ışık, ortam kamerası',
      '00:05 · üç kısa madde, her biri 1,8 saniye, ekranda büyük tipo',
      '00:11 · CTA: "Sen kaç saniye dayanıyorsun? yoruma yaz"',
    ],
    caption: '3 cümle. Birinci cümle iddiayı çürüt, ikinci cümle yumuşat, üçüncü cümle yoruma davet.',
    cta: 'Yorumlarda kendi sürenizi paylaşın.',
    hashtags: ['#buzbanyosu', '#fityaşam', '#stüdyofitclub'],
  },
  why: [
    'Bu format fitness sektöründe bu hafta TikTok’ta +%340 izleniyor.',
    '"Yapma" ile başlayan açılışlar, klasik tanıtım açılışlarına göre 2,4 kat daha fazla izleniyor.',
    'Stüdyonuzun eylül ayındaki buz banyosu etkinliği, organik etiket akışıyla örtüşüyor.',
  ],
  evidence: TRENDS.filter((t) => t.sector === 'fitness'),
};
