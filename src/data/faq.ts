export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: ReadonlyArray<FaqItem> = [
  {
    q: 'Brief\'ler nasıl ve ne zaman geliyor?',
    a: 'Her sabah 07:00\'de hesabınıza yerleşmiş halde duruyor. Beklemeniz gerekmiyor, açtığınızda zaten orada.',
  },
  {
    q: 'Sektörümde yeterince trend yoksa ne oluyor?',
    a: 'Veri yeterli değilse durumu açıkça söylüyoruz. 12\'den az trend tespit edilmişse, ilgili komşu sektörden alıntı yapıyoruz ve uyumu yüzdesel gösteriyoruz. Asla uydurmuyoruz.',
  },
  {
    q: 'Birden fazla müşteri için sıralama nasıl çalışıyor?',
    a: 'Her müşteri günün başında 0-100 arası bir öncelik puanı alıyor. Cadence, engagement, trend ilgisi, kampanya tarihi ve manuel pin. Beş giriş, hepsi açık ve düzenlenebilir.',
  },
  {
    q: 'Öğrenme döngüsü ne kadar zamanda etki ediyor?',
    a: '5-7 brief sonrası ses parmak izi görünür şekilde değişiyor. Format ağırlıkları 8-12 outcome sonrası şekilleniyor. Her zaman göreceğiniz, geri çevirebileceğiniz açık değerler.',
  },
  {
    q: 'iOS, Android ve web hepsi senkron mu?',
    a: 'Evet. Mobilde işaretledikleriniz saniyeler içinde web\'e yansıyor. Mobil ana yüzey, web ince eşlik. Faturalama ve toplu içe aktarım web\'de.',
  },
  {
    q: 'Veriler nerede saklanıyor?',
    a: 'Frankfurt. EU bölgesi. KVKK uyumlu. Veriler dışarı çıkmıyor.',
  },
  {
    q: 'Faturalama nasıl?',
    a: 'Aylık. Iyzico veya Stripe. Mobilde başlatıp web checkout\'una giriyorsunuz, hemen aktif. Kart bilgisi olmadan örnek brief alabilirsiniz.',
  },
];
