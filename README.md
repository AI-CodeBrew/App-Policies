# Privacy Policies

Next.js site hosting public privacy policies, terms, and account deletion pages for our apps and websites. Deployed to Vercel.

## Navigation

- **Apps** — `/apps`
- **Websites** — `/websites`

## Apps

| App | Hub | Privacy | Terms | Deletion |
| --- | --- | --- | --- | --- |
| Settle It | `/apps/settleit` | `/apps/settleit/privacypolicy` | `/apps/settleit/termsofservice` | `/apps/settleit/deleteaccount` |
| AI Expense Manager | `/apps/aiexpensemanager` | `/apps/aiexpensemanager/privacypolicy` | — | `/apps/aiexpensemanager/deleteaccount` |
| FairyTales AI | `/apps/fairytalesai` | `/apps/fairytalesai/privacypolicy` | — | `/apps/fairytalesai/deleteaccount` |
| The LocalBaba | `/apps/thelocalbaba` | `/apps/thelocalbaba/privacypolicy` | — | `/apps/thelocalbaba/deleteaccount` |

Live site: https://app-policies-six.vercel.app

## Develop

```bash
cd policies
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add another app

1. Create `src/data/policies/your-app.ts` with an `AppPolicy` (copy `settle-it.ts` or `the-localbaba.ts`). Use a compact `slug` (e.g. `settleit`).
2. Import and append it in `src/data/apps.ts`.
3. Deploy — pages appear at `/apps/<slug>`, `/apps/<slug>/privacypolicy`, optional `/termsofservice`, and `/deleteaccount`.

## Add a website

1. Create `src/data/websites/your-site.ts` with a `WebsitePolicy`.
2. Register it in `src/data/websites.ts`.
3. Add routes under `/websites/[slug]/…` when needed (same pattern as apps).

## Deployment

Vercel project `techsol1/app-policies`. Deploy from `policies/` with `npx vercel deploy --prod`, or connect GitHub for auto-deploy on `main`.
