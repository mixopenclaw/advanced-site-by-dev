import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkToggle from "../components/DarkToggle";

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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="preload" href="/illustrations/hero-blob.svg" as="image" />
      </head>
      <body className="min-h-full">
        <header className="p-4 flex items-center justify-between">
          <div className="text-xl font-bold">Pulse — Turn ideas into tiny apps</div>
          <div className="flex items-center">
            <DarkToggle />
          </div>
        </header>
        {children}

        {/* lightweight analytics placeholder */}
        {process.env.NEXT_PUBLIC_ANALYTICS_ID ? (
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: `
            (function(){
              var id="${process.env.NEXT_PUBLIC_ANALYTICS_ID}";
              var s=document.createElement('script');
              s.async=true; s.src='https://example-analytics.local/analytics.js?id='+id;
              document.head.appendChild(s);
            })();
          ` }}
          />
        ) : null}
      </body>
    </html>
  );
}
