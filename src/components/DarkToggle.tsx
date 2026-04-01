'use client';
import React from 'react';
import { useTheme } from '../lib/useTheme';

export default function DarkToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button aria-label="Toggle dark mode" onClick={toggle} className="ml-4 px-2 py-1 border rounded">
      {theme === 'dark' ? '🌙 Dark' : theme === 'light' ? '☀️ Light' : 'Theme'}
    </button>
  );
}
