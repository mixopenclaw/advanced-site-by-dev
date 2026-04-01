'use client';
import React from 'react';
import { useTheme } from '../lib/useTheme';

export default function DarkToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button aria-label="Toggle dark mode" onClick={toggle} className="ml-4 px-2 py-1 rounded-md bg-gray-100 dark:bg-slate-700 focus-ring">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
