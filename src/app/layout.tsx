import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/normalize.css';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Aytch Software',
  description: 'Software by H fans, for H Fans',
  metadataBase: new URL('https://h-projects.pages.dev'),
  openGraph: {
    siteName: 'Aytch Software',
    title: 'Aytch Software | Software by H fans, for H Fans',
    url: '/',
    images: '/logo.png'
  }
};

export const viewport: Viewport = {
  themeColor: '#00ff00'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
