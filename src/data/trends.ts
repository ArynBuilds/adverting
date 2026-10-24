export interface Trend {
  id: string;
  platform: 'tiktok' | 'reels' | 'youtube' | 'x';
  handle: string;
  caption: string;
  views: string;
  postedDays: number;
  format: string;
  whyItBlewUp: string;
  sector: string;
  delta: number;
}

export const TRENDS: ReadonlyArray<Trend> = [
  {
    id: 'tk-cold-plunge',
    platform: 'tiktok',
    handle: '@coachmaya',
    caption: 'Cold plunge yapmadan önce bunu izle',
    views: '4.2M',
    postedDays: 3,
    format: '12s reel · debunk hook',
    whyItBlewUp: 'Hook 0.8 saniyede counter-claim başlatıyor, izleme süresi %92.',
    sector: 'fitness',
    delta: 340,
  },
  {
    id: 'tk-coffee-rev',
    platform: 'tiktok',
    handle: '@brewslowly',
    caption: 'Bu makinenin reklamına inanmayın',
    views: '2.8M',
    postedDays: 1,
    format: '18s reel · POV reveal',
    whyItBlewUp: 'POV açılış shot\'ı + 4. saniyede ürün karşılaştırması.',
    sector: 'food-bev',
    delta: 215,
  },
  {
    id: 'rl-skin-toner',
    platform: 'reels',
    handle: '@dermdaily',
    caption: '3 yanlış toner uygulaması',
    views: '6.4M',
    postedDays: 4,
    format: 'Carousel · 7 slide',
    whyItBlewUp: 'Slide 1 yanlış-doğru kontrastı ile %78 swipe oranı.',
    sector: 'beauty',
    delta: 240,
  },
  {
    id: 'yt-finance',
    platform: 'youtube',
    handle: '@onevalueguy',
    caption: '3 dakikada ETF temizliği',
    views: '912K',
    postedDays: 2,
    format: 'YT Short · 58s',
    whyItBlewUp: 'Açılışta sayı ile söz veriyor, 4 net beat ile sonuç.',
    sector: 'fintech',
    delta: 188,
  },
  {
    id: 'tk-property',
    platform: 'tiktok',
    handle: '@kadıkoyhomes',
    caption: '38m² stüdyoda gerçek yaşam',
    views: '1.6M',
    postedDays: 5,
    format: '60s walkthrough · sabit kamera',
    whyItBlewUp: 'Sabit kamera + zaman damgalı caption, %71 finish oranı.',
    sector: 'real-estate',
    delta: 162,
  },
  {
    id: 'tk-fitness-form',
    platform: 'tiktok',
    handle: '@formfix',
    caption: 'Squat form check ama sade',
    views: '3.1M',
    postedDays: 2,
    format: '14s reel · jump cut',
    whyItBlewUp: 'Jump-cut form check yapıyor, kullanıcı duet\'leri x4.2.',
    sector: 'fitness',
    delta: 295,
  },
];

export function trendsBySector(sector: string): ReadonlyArray<Trend> {
  return TRENDS.filter((t) => t.sector === sector);
}
