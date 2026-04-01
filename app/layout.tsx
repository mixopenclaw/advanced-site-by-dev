import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulse — Turn ideas into tiny apps",
  description: "Pulse helps developers turn ideas into tiny, deployable apps quickly.",
  openGraph: {
    title: 'Pulse — Turn ideas into tiny apps',
    description: 'Ship small prototypes and demos fast with Pulse.',
    url: 'https://example.com/',
  },
};

import DarkToggle from '../src/components/DarkToggle'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <script async src="/analytics.js"></script>
      </head>
      <body className="min-h-full">
        <header className="border-b bg-white dark:bg-slate-900">
          <div className="container flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <a href="/" className="text-lg font-semibold text-slate-900 dark:text-white">Pulse</a>
              <span className="text-sm text-slate-500 dark:text-slate-300">Turn ideas into tiny apps</span>
            </div>
            <nav>
              <DarkToggle />
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t py-6 mt-12 bg-white dark:bg-slate-900">
          <div className="container flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
            <div>© {new Date().getFullYear()} Pulse</div>
            <div className="flex gap-4">
              <a href="#" aria-label="twitter">Twitter</a>
              <a href="#" aria-label="github">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
