import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WeFeeArtsNextLab',
  description: 'Next.js の実験場 — 試しに作る、試しに壊す。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
