export interface AgencyClient {
  id: string;
  name: string;
  sector: string;
  sectorLabel: string;
  priority: number;
  reason: 'stale' | 'trending' | 'deadline' | 'underperforming' | 'on track';
  briefHeadline: string;
  lastPublishedDays: number;
  sparkline: ReadonlyArray<number>;
  cadenceGap: number;
  engagementDelta: number;
  trendRelevance: number;
  campaignDays: number | null;
  pinned: boolean;
}

export const CLIENTS: ReadonlyArray<AgencyClient> = [
  {
    id: 'fitclub',
    name: 'FitClub Istanbul',
    sector: 'fitness',
    sectorLabel: 'Fitness',
    priority: 92,
    reason: 'trending',
    briefHeadline: '12 saniyelik cold plunge debunk reel\'i çek.',
    lastPublishedDays: 1,
    sparkline: [12, 18, 14, 20, 24, 22, 28, 31, 29, 33, 38, 42, 48, 52],
    cadenceGap: 0,
    engagementDelta: 18,
    trendRelevance: 92,
    campaignDays: null,
    pinned: false,
  },
  {
    id: 'beautyco',
    name: 'BeautyCo',
    sector: 'beauty',
    sectorLabel: 'Güzellik',
    priority: 88,
    reason: 'deadline',
    briefHeadline: 'Toner yanlış-doğru carousel\'i 7 slide.',
    lastPublishedDays: 2,
    sparkline: [22, 24, 28, 26, 30, 28, 34, 32, 36, 38, 36, 39, 41, 44],
    cadenceGap: 1,
    engagementDelta: 6,
    trendRelevance: 88,
    campaignDays: 6,
    pinned: false,
  },
  {
    id: 'kasap',
    name: 'Kasap Sokak',
    sector: 'food-bev',
    sectorLabel: 'Yiyecek',
    priority: 81,
    reason: 'trending',
    briefHeadline: 'POV mutfak shot\'ı, açılışta tencere sesi.',
    lastPublishedDays: 0,
    sparkline: [40, 42, 44, 46, 44, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    cadenceGap: 0,
    engagementDelta: 22,
    trendRelevance: 81,
    campaignDays: null,
    pinned: true,
  },
  {
    id: 'nile',
    name: 'Nile Studio',
    sector: 'fashion',
    sectorLabel: 'Moda',
    priority: 64,
    reason: 'underperforming',
    briefHeadline: 'Slow-fashion karşılaştırma reels\'i 18s.',
    lastPublishedDays: 4,
    sparkline: [54, 50, 48, 46, 44, 42, 40, 38, 36, 35, 34, 33, 32, 31],
    cadenceGap: 2,
    engagementDelta: -14,
    trendRelevance: 70,
    campaignDays: null,
    pinned: false,
  },
  {
    id: 'kadıkoyhomes',
    name: 'Kadıköy Homes',
    sector: 'real-estate',
    sectorLabel: 'Gayrimenkul',
    priority: 51,
    reason: 'stale',
    briefHeadline: '38m² stüdyo turu sabit kamera, 60 saniye.',
    lastPublishedDays: 8,
    sparkline: [16, 14, 14, 12, 10, 12, 10, 11, 10, 9, 9, 8, 9, 8],
    cadenceGap: 5,
    engagementDelta: -8,
    trendRelevance: 58,
    campaignDays: null,
    pinned: false,
  },
  {
    id: 'meridian',
    name: 'Meridian Bank',
    sector: 'fintech',
    sectorLabel: 'Fintech',
    priority: 38,
    reason: 'on track',
    briefHeadline: '3 dakikada ETF temizliği YT Short.',
    lastPublishedDays: 0,
    sparkline: [30, 32, 31, 33, 34, 33, 35, 36, 35, 37, 36, 38, 39, 40],
    cadenceGap: 0,
    engagementDelta: 4,
    trendRelevance: 28,
    campaignDays: null,
    pinned: false,
  },
];

export const SECTOR_BY_SLUG: Record<string, string> = CLIENTS.reduce<Record<string, string>>((acc, c) => {
  acc[c.id] = c.name;
  return acc;
}, {});
