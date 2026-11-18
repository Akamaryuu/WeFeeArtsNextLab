import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'WeFeeArtsNextLab',
  description: 'Next.js の実験場 — 試しに作る、試しに壊す。',
  openGraph: {
    title: 'WeFeeArtsNextLab',
    description: 'Next.js の実験場 — 試しに作る、試しに壊す。',
    url: 'https://akamaryuu.github.io/WeFeeArtsNextLab/',
    type: 'website',
    images: ['https://akamaryuu.github.io/WeFeeArtsHub/assets/ogp/nextlab.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WeFeeArtsNextLab',
    description: 'Next.js の実験場 — 試しに作る、試しに壊す。',
    images: ['https://akamaryuu.github.io/WeFeeArtsHub/assets/ogp/nextlab.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem('wf-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}`}
        </Script>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0GS730LWDG"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0GS730LWDG');
          `}
        </Script>
      </body>
    </html>
  );
}
