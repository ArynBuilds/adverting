export interface NewsItem {
  date: string;
  category: 'trend alert' | 'feature' | 'case study';
  headline: string;
  excerpt: string;
}

export const NEWS: ReadonlyArray<NewsItem> = [
  {
    date: '2026-05-06',
    category: 'trend alert',
    headline: 'Beauty: toner yanlış-doğru carousel\'leri ortalama 2.4x',
    excerpt: 'Slide 1 yanlış-doğru kontrastı + 5 slide explanation. Swipe oranı %78\'e çıkıyor.',
  },
  {
    date: '2026-05-04',
    category: 'feature',
    headline: 'Voice fingerprint artık taranan caption\'ları otomatik öğreniyor',
    excerpt: 'Yayınlanan içerikteki dil özellikleri, sonraki brief\'lerde otomatik referans alınıyor.',
  },
  {
    date: '2026-05-01',
    category: 'feature',
    headline: 'Ekip koltukları: paylaşılan müşteri panosu canlıda',
    excerpt: 'Aynı pano, üç editör. Pin değişiklikleri ve okundu durumu gerçek zamanlı.',
  },
  {
    date: '2026-04-29',
    category: 'case study',
    headline: 'Bir 14-müşteri ajans, 31 dakikadan 11 dakikaya indi',
    excerpt: 'Sabah rutinini Adverting’e alan ajans, içerik direktörünün gününü 90 dakika geri kazandı.',
  },
  {
    date: '2026-04-25',
    category: 'trend alert',
    headline: 'Yemek-içecek: "tarif değil" açılışı 6 günde +185%',
    excerpt: 'Klasik tarif videoları yerine "yapma" hook\'u, yorum oranını %62 yukarı çekiyor.',
  },
  {
    date: '2026-04-22',
    category: 'trend alert',
    headline: 'Fitness: counter-claim hook\'lar +340% TikTok',
    excerpt: 'İlk 0.8 saniyede counter-claim altyazısı, izleme süresi %92.',
  },
];
