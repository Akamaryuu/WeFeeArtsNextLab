import Counter from '../components/Counter';

const experiments = [
  { date: '2026-11-17', title: '実験場の開設', note: 'Next.js 16 + React 19 + TypeScript、静的書き出しで GitHub Pages へ。' },
];

export default function Home() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '40px 20px 64px' }}>
      <h1 style={{ fontSize: '2rem', margin: '0 0 4px' }}>⚗️ WeFeeArtsNextLab</h1>
      <p style={{ color: '#9fb3a4', margin: '0 0 28px' }}>
        Next.js の実験場 — 試しに作る、試しに壊す。
      </p>

      <Counter />

      <h2 style={{ marginTop: 40, fontSize: '1.25rem' }}>実験リスト</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {experiments.map((e) => (
          <li key={e.title} style={{ borderLeft: '4px solid #57d992', padding: '4px 0 4px 14px', marginBottom: 14 }}>
            <div style={{ color: '#9fb3a4', fontSize: '.85rem' }}>{e.date}</div>
            <div style={{ fontWeight: 700 }}>{e.title}</div>
            <div>{e.note}</div>
          </li>
        ))}
      </ul>

      <footer style={{ marginTop: 48, color: '#9fb3a4', fontSize: '.85rem' }}>
        <a href="https://akamaryuu.github.io/WeFeeArtsHub/" style={{ color: '#57d992' }}>
          WeFeeArts ポータル
        </a>
      </footer>
    </main>
  );
}
