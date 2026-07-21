# Privacy Policies

Next.js site hosting public privacy policies for our Google Play Store apps.

## Apps

| App | Privacy Policy URL path |
| --- | --- |
| The LocalBaba | `/privacy/the-localbaba` |

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add another app

1. Create `src/data/policies/your-app-slug.ts` with an `AppPolicy` object (copy `the-localbaba.ts`).
2. Import and add it to the `apps` array in `src/data/apps.ts`.
3. Deploy — the new page is available at `/privacy/your-app-slug`.

Use that full URL in Google Play Console → App content → Privacy policy.
