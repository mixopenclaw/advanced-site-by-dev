This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deployment (Vercel)

This project includes a GitHub Actions workflow that will build and deploy the site to Vercel on push to `main`.

Before the workflow can successfully deploy, add a repository secret named `VERCEL_TOKEN` (a Vercel personal token).

To deploy manually from your machine using the Vercel CLI:

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. From the project root: `vercel --prod`

If you prefer automatic CI deploys via GitHub Actions, create a Vercel personal token at https://vercel.com/account/tokens and set it in your repository Secrets (Settings → Secrets → Actions → New repository secret → `VERCEL_TOKEN`). The workflow will use that token to run `npx vercel --prod` during CI.

If you want a more integrated deployment (with `VERCEL_ORG_ID` / `VERCEL_PROJECT_ID`), add those as repository secrets as well and modify the Action to pass them to the `vercel` command.
