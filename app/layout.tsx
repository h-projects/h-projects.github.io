import type { ReactNode } from 'react';

import { Providers } from './providers';
import Header from '#components/Header';
import Footer from '#components/Footer';
import './globals.css';
import '#styles/normalize.css';

export const metadata = {
  title: 'Aytch Software',
  description: 'Software by H fans, for H Fans',
  themeColor: '#00ff00',
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  metadataBase: new URL('https://h-projects.pages.dev'),
  openGraph: {
    siteName: 'Aytch Software',
    title: 'Aytch Software | Software by H fans, for H Fans',
    url: '/',
    images: '/logo.png'
  }
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
