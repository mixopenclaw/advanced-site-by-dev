import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pulse — Turn ideas into tiny apps",
  description: "Pulse helps developers turn ideas into tiny, deployable apps quickly.",
  openGraph: {
    title: 'Pulse — Turn ideas into tiny apps',
    description: 'Ship small prototypes and demos fast with Pulse.',
    url: 'https://example.com/',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.className}`}>
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
