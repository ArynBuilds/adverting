export interface Sector {
  slug: string;
  name: string;
  trendCount: number;
  topFormat: string;
  blurb: string;
}

export const SECTORS: ReadonlyArray<Sector> = [
  { slug: 'fitness', name: 'Fitness & Wellness', trendCount: 142, topFormat: 'Reels', blurb: '12-saniyelik debunk hook\'ları bu hafta öne çıkıyor.' },
  { slug: 'food-bev', name: 'Yiyecek & İçecek', trendCount: 187, topFormat: 'Reels', blurb: 'POV mutfak çekimleri normal porsiyon paylaşımlarının önüne geçti.' },
  { slug: 'beauty', name: 'Güzellik', trendCount: 219, topFormat: 'Carousel', blurb: 'Tone-stick cilt rutini carousel\'leri ortalama %240 üzerinde.' },
  { slug: 'fintech', name: 'Fintech', trendCount: 76, topFormat: 'Static', blurb: 'Carousel finansal ipuçları yeniden lider format.' },
  { slug: 'real-estate', name: 'Gayrimenkul', trendCount: 64, topFormat: 'Reels', blurb: '60-saniyelik daire turları beklenmedik bir geri dönüş yapıyor.' },
  { slug: 'fashion', name: 'Moda', trendCount: 198, topFormat: 'Reels', blurb: 'Slow-fashion karşılaştırma kombinleri TikTok\'ta zirve yapıyor.' },
  { slug: 'saas', name: 'SaaS', trendCount: 91, topFormat: 'Carousel', blurb: 'Workflow mini-case study\'leri build-in-public tweet\'lerini geçiyor.' },
  { slug: 'travel', name: 'Seyahat', trendCount: 168, topFormat: 'Reels', blurb: 'Mikro destinasyon serileri micro-bursa\'larda öne çıkıyor.' },
  { slug: 'auto', name: 'Otomotiv', trendCount: 58, topFormat: 'Static', blurb: 'EV-vs-ICE karşılaştırma carousel\'leri test sürüşü reels\'lerinin önüne geçti.' },
  { slug: 'crypto', name: 'Kripto', trendCount: 112, topFormat: 'Carousel', blurb: 'On-chain veri görselleri post tarzlarına geri döndü.' },
  { slug: 'gaming', name: 'Oyun', trendCount: 244, topFormat: 'Reels', blurb: 'Bossfight POV kesimleri build-up reels\'lerinin önünde.' },
  { slug: 'home', name: 'Ev & Yaşam', trendCount: 131, topFormat: 'Reels', blurb: 'Kahve istasyonu reveal\'ları yatak odası turlarını solladı.' },
  { slug: 'parenting', name: 'Ebeveynlik', trendCount: 87, topFormat: 'Carousel', blurb: 'Gerçekçi sabah rutinleri sergilenmiş günlüklerden öne çıktı.' },
  { slug: 'pets', name: 'Evcil Hayvan', trendCount: 156, topFormat: 'Reels', blurb: 'Trick-tutorial reels\'leri saf cute içeriği geçiyor.' },
  { slug: 'edu', name: 'Eğitim', trendCount: 102, topFormat: 'Carousel', blurb: 'Yanlış-doğru notes carousel\'leri ders parçacık reels\'lerini geçiyor.' },
  { slug: 'b2b', name: 'B2B Hizmet', trendCount: 47, topFormat: 'Static', blurb: 'Vaka çalışması postları workflow video\'larını solladı.' },
  { slug: 'jewelry', name: 'Mücevher', trendCount: 71, topFormat: 'Reels', blurb: 'Yumuşak ışık mücevher reels\'leri studio shoot\'ları ezdi.' },
  { slug: 'media', name: 'Medya & Yayıncılık', trendCount: 89, topFormat: 'Static', blurb: 'Köşe yazısı snippet\'leri tam yayın paylaşımlarını geçti.' },
  { slug: 'health', name: 'Sağlık & Klinik', trendCount: 53, topFormat: 'Carousel', blurb: 'Doktor-explains carousel\'leri tedavi reels\'lerinin önünde.' },
  { slug: 'agency', name: 'Ajans & Stüdyo', trendCount: 39, topFormat: 'Reels', blurb: 'Behind-the-scenes proje kesitleri vaka çalışmalarını solladı.' },
];

export const TOP_SECTORS: ReadonlyArray<Sector> = SECTORS.slice(0, 5);
