import type { Metadata } from 'next';
import { fontVariables } from '@/lib/fonts';
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider';
import { CursorProvider } from '@/components/providers/CursorProvider';
import { ToastProvider } from '@/components/providers/ToastProvider';
import { PageReveal } from '@/components/marketing/PageReveal';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adverting. Sabahları konkret bir brief.',
  description:
    'Dijital pazarlama ajansları ve solo content yaratıcılar için günlük brief. Her sabah, sektörünüzde gerçekten patlayan içeriklerden çıkmış tek bir somut aksiyon.',
  metadataBase: new URL('https://adverting.app'),
  openGraph: {
    title: 'Adverting. Sabahları konkret bir brief.',
    description: 'Tahmin etmeyi bırak. Her sabah, müşteri başına bir spesifik script.',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <html lang="tr" data-theme="ink" className={fontVariables}>
      <body>
        <SmoothScrollProvider>
          <ToastProvider>
            <PageReveal />
            <CursorProvider />
            {children}
          </ToastProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
