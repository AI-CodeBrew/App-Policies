# Privacy Policies

Next.js site hosting public privacy policies and account deletion pages for our Google Play Store apps.

## Apps

| App | Privacy Policy | Account Deletion |
| --- | --- | --- |
| The LocalBaba | `/privacy/the-localbaba` | `/delete-account/the-localbaba` |

Support email: `oomerssaeed@gmail.com`

## Develop

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Add another app

1. Create `src/data/policies/your-app-slug.ts` with an `AppPolicy` object (copy `the-localbaba.ts`), including `accountDeletion`.
2. Import and add it to the `apps` array in `src/data/apps.ts`.
3. Deploy — pages are available at `/privacy/your-app-slug` and `/delete-account/your-app-slug`.

Use those full URLs in Google Play Console → App content.
