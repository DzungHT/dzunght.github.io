import '@/styles/index.scss';

import Footer from '@/app/_components/layouts/Footer';
import Header from '@/app/_components/layouts/Header';
import { Suspense } from 'react';
import ScrollHandler from '@/app/_components/layouts/ScrollHandler';
import GlobalLoader from '@/app/_components/layouts/GlobalLoader';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="DzungHT" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="stylesheet" href="/css/loader.css" />
      </head>
      <body>
        <GlobalLoader />
        <div id="page-top"></div>
        <Header />

        {children}

        <Footer />

        <Suspense fallback={null}>
          <ScrollHandler />
        </Suspense>
      </body>
    </html>
  );
}
