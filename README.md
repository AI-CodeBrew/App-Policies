# App Homepages & Privacy Policies

Official public app homepages, privacy policies, terms, and account deletion pages — built to meet Google Play / Google API consent-screen homepage requirements:

- Identifies the app and developer/brand
- Fully describes app functionality
- Explains why user data is requested
- Links to the Privacy Policy (public, no login)
- Hosted on your own verified domain (not a third-party site builder)

## URLs to use in Play Console / Consent screen

| App | Homepage (use this as “app homepage”) | Privacy Policy |
| --- | --- | --- |
| Settle It | `/apps/settleit` | `/apps/settleit/privacypolicy` |
| AI Expense Manager | `/apps/aiexpensemanager` | `/apps/aiexpensemanager/privacypolicy` |
| FairyTales AI | `/apps/fairytalesai` | `/apps/fairytalesai/privacypolicy` |
| The LocalBaba | `/apps/thelocalbaba` | `/apps/thelocalbaba/privacypolicy` |

Also available: `/apps/<slug>/termsofservice` (where published) and `/apps/<slug>/deleteaccount`.

## Develop

```bash
npm install
npm run dev
```

## Add another app

1. Create `src/data/policies/your-app.ts` including a full `homepage` object (`developer`, `fullDescription`, `features`, `dataRequested`, `dataUsePurpose`).
2. Register it in `src/data/apps.ts`.
3. Deploy and use `/apps/<slug>` as the homepage URL and `/apps/<slug>/privacypolicy` on the consent screen.
