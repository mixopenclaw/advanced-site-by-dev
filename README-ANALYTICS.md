Analytics placeholder

Set NEXT_PUBLIC_ANALYTICS_ID in your environment (or in Vercel/GitHub Actions secrets) to enable the lightweight analytics loader in src/app/layout.tsx. Example:

- NEXT_PUBLIC_ANALYTICS_ID=YOUR_PLAUSIBLE_SITE_ID

The layout will load a script from https://example-analytics.local/analytics.js?id=... — replace with your provider (Plausible, GA, etc.) or point it to your own collector.
