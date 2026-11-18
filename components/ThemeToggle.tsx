'use client';

import { useEffect, useState } from 'react';

function themeNow(): string {
  const t = document.documentElement.getAttribute('data-theme');
  if (t) return t;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [icon, setIcon] = useState('🌙');

  useEffect(() => {
    setIcon(themeNow() === 'dark' ? '☀️' : '🌙');
  }, []);

  const toggle = () => {
    const next = themeNow() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('wf-theme', next);
    } catch (e) {}
    setIcon(next === 'dark' ? '☀️' : '🌙');
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="テーマ切り替え">
      {icon}
    </button>
  );
}
