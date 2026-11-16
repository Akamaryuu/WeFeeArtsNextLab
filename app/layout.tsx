import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'WeFeeArtsNextLab',
  description: 'Next.js の実験場 — 試しに作る、試しに壊す。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
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
