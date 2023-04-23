import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/base.css';
import '../styles/normalize.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aytch Software</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00ff00" />
        <meta property="og:site_name" content="Aytch Software" />
        <meta property="og:title" content="Aytch Software | Software by H fans, for H Fans" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/logo.png" />
      </Head>
      <ThemeProvider attribute="class">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}
