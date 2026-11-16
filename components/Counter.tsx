'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '1px solid #2b3a2e', borderRadius: 12, padding: '16px 20px', background: '#141a16' }}>
      <p style={{ margin: '0 0 8px', color: '#9fb3a4' }}>
        クライアントコンポーネントの動作確認カウンター
      </p>
      <p style={{ margin: '0 0 12px', fontSize: '1.6rem' }}>{count}</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          background: '#57d992', color: '#0b2015', border: 'none', borderRadius: 8,
          padding: '8px 18px', fontWeight: 700, cursor: 'pointer',
        }}
      >
        +1 する
      </button>
      <button
        onClick={() => setCount(0)}
        style={{
          marginLeft: 8, background: 'transparent', color: '#9fb3a4',
          border: '1px solid #2b3a2e', borderRadius: 8, padding: '8px 14px', cursor: 'pointer',
        }}
      >
        リセット
      </button>
    </div>
  );
}
