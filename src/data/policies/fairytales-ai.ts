import type { AppPolicy } from "../types";

export const fairyTalesAi: AppPolicy = {
  slug: "fairytaleai",
  name: "FairyTales AI",
  shortDescription:
    "AI-illustrated storybook generator — pick a theme and prompt, get an illustrated, narrated story.",
  platform: "Android & iOS",
  effectiveDate: "August 21, 2026",
  lastUpdated: "September 11, 2026",
  contactEmail: "fynktech@gmail.com",
  homepage: {
    developer: "FynkTech",
    fullDescription: [
      "FairyTales AI generates AI-illustrated storybooks. Choose a theme, enter a prompt, and the app creates story text with matching illustrations, narrates the story aloud on your device, and lets you export or share the finished book.",
      "An account is optional — you can generate one-off stories and browse the public Library without signing in. Creating an account (email/password or Google Sign-In) lets you save your story history and revisit or favorite past stories.",
    ],
    features: [
      "Pick a theme (Adventure, Fantasy, Space, Nature, Friendship, Science) and write a prompt",
      "Generate illustrated story text with AI",
      "Listen to on-device text-to-speech narration",
      "Export stories as PDF or share via your device share sheet",
      "Optional feedback or report on a generated story",
      "Optional account (email/password or Google Sign-In) to save and revisit your story history",
    ],
    dataRequested: [
      "Story prompts and theme selections you submit for generation",
      "Account information if you sign up: email address, display name, and (for password accounts) a hashed password",
      "Optional feedback/report text if you choose to submit it",
      "Basic usage/visit events (randomly generated visitor identifier and timestamp) recorded by our own backend",
    ],
    dataUsePurpose: [
      "To generate story text and illustrations from your prompt via our backend and Google Gemini",
      "To create and manage your account and let you save, revisit, or favorite stories, if you choose to sign up",
      "To improve the app using optional feedback and our own basic usage tracking",
      "Narration runs on-device; we do not receive microphone or audio recordings",
      "We do not sell data or use advertising SDKs, and we do not use any third-party analytics SDK",
    ],
  },
  accountDeletion: {
    lastUpdated: "September 11, 2026",
    noAccountSystem: false,
    howToRequest: [
      "If you have a FairyTales AI account, deleting it is the fastest way to remove your data: open the App and go to Profile → Settings → Delete Account, then type DELETE to confirm. Your account, your saved stories, and everything tied to your account are permanently deleted immediately — no waiting, no email required.",
      "Some data isn't tied to an account, so it can't be deleted from within the App: feedback/report submissions (these aren't linked to your account, even if you were logged in when you submitted them), and basic usage/visit data (a randomly generated visitor identifier and timestamp, not linked to an account).",
      "To request deletion of either of these, email fynktech@gmail.com with: (a) the approximate date/time you used the App, (b) a description of the feedback you submitted, if applicable, and (c) your device platform (Android or iOS) — this helps us locate and delete matching records.",
    ],
    whatHappens: [
      "In-app account deletion: your account, saved stories, and favorites are permanently deleted immediately.",
      "Emailed requests: matching feedback/report entries and any identifiable visit data are permanently deleted within 30 days of your request.",
      "We do not use Firebase or any third-party analytics/crash-reporting service, so there's no separate third-party data store to clear.",
    ],
    questionsNote:
      "This page satisfies Google Play's Data Deletion requirement. If you have any questions, contact us at fynktech@gmail.com.",
  },
  intro: [
    'FairyTales AI ("the App") lets you generate AI-illustrated storybooks: pick a theme and enter a prompt, and the App creates story text and matching illustrations, narrates the story aloud, and lets you export or share the finished storybook. Creating an account lets you save your story history and revisit or favorite past stories. This policy explains what information the App processes, how it is used, and how you can access or delete it.',
  ],
  sections: [
    {
      id: "accounts",
      title: "1. Accounts & Sign-In",
      content: [
        "FairyTales AI offers an optional account so you can save your story history, favorite stories, and access them across sessions. You can create an account with an email address and password, or sign in with your Google account. Browsing publicly curated stories in the Library and generating one-off stories does not require an account.",
        "If you sign up with email and password, your password is stored only as a one-way cryptographic hash — we never store or can retrieve your actual password. If you sign in with Google, we receive your name, email address, and a Google account identifier from Google to create or match your account; we do not receive your Google password.",
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect & How It's Used",
      content: [],
      subsections: [
        {
          title: "A. Account information",
          items: [
            "If you create an account, we store your email address, display name, and (for password accounts) a hashed password. This is used solely to identify your account, save your stories, and let you log back in.",
          ],
        },
        {
          title: "B. Story prompts and generated content",
          items: [
            "When you enter a prompt and pick a theme (Adventure, Fantasy, Space, Nature, Friendship, or Science), that text is sent to our backend server, which forwards it to Google's Gemini AI API to generate story text and illustrations.",
            'If you\'re logged in and save a story, the story text, illustrations, and your original prompt/theme are stored in our database, associated with your account, so you can revisit it later from "My Stories" or mark it as a favorite. You can delete any story you\'ve saved at any time from within the App.',
            "Illustrations are stored via our CDN storage provider (Bunny.net) to keep the App fast; images are served over standard CDN URLs.",
          ],
        },
        {
          title: "C. Feedback and story reports",
          items: [
            "If you submit feedback or report a generated story (marking it Positive/Negative with a reason), we store the reason text, feedback type, and a timestamp in our database. This is not linked to your account, even if you're logged in when you submit it. Please avoid including personal information in the free-text reason field.",
          ],
        },
        {
          title: "D. Basic usage tracking",
          items: [
            "Our backend records basic visit events (a randomly generated visitor identifier and timestamp) to understand overall App usage. This is handled entirely by our own backend — we do not use any third-party analytics SDK (no Firebase Analytics, no Google Analytics, no ad-tracking libraries).",
          ],
        },
        {
          title: "E. Text-to-speech narration",
          items: [
            "Story narration uses your device's built-in text-to-speech engine. Audio is generated and played entirely on your device; no audio is sent to us or stored.",
          ],
        },
        {
          title: "F. Export & sharing",
          items: [
            "You can export a generated story as a PDF or share it through your device's native share sheet to any app of your choosing. We do not receive or store where you share it.",
          ],
        },
        {
          title: "G. On-device error log",
          items: [
            "The App keeps a small local log of recent app errors, viewable under Settings → Error Log, to help with troubleshooting. This log stays on your device only — it is never transmitted to us or any third party, and you can clear it at any time.",
          ],
        },
      ],
    },
    {
      id: "what-we-dont-collect",
      title: "3. What We Do NOT Collect or Use",
      content: [],
      bullets: [
        "No camera, photo library, microphone, contacts, or location data — the App only requests the INTERNET permission.",
        "No advertising SDKs, no in-app purchases or subscriptions, no push notifications.",
        "No third-party crash-reporting or analytics SDKs (Firebase, Crashlytics, etc.) — the only analytics is our own basic visit counter described above, and the only error log is the on-device one described above.",
      ],
    },
    {
      id: "third-party",
      title: "4. Third-Party Services",
      content: [],
      bullets: [
        "Google Gemini API — used to generate story text and images from your prompts. Governed by the Google Privacy Policy (https://policies.google.com/privacy).",
        "Google Sign-In — optional authentication method. Governed by the Google Privacy Policy (https://policies.google.com/privacy).",
        "Our own backend API — a Flask application we operate, hosted on Fly.io, which relays prompts to Gemini, manages accounts and story storage, and stores feedback.",
        "Fly.io — hosting provider for our backend. See the Fly.io Privacy Policy (https://fly.io/legal/privacy-policy/).",
        "MongoDB Atlas — our database provider, storing accounts, stories, and feedback. See the MongoDB Privacy Policy (https://www.mongodb.com/legal/privacy-policy).",
        "Bunny.net — our CDN/storage provider for generated illustrations. See the Bunny.net Privacy Policy (https://bunny.net/privacy-policy/).",
      ],
    },
    {
      id: "retention",
      title: "5. Data Retention",
      content: [
        "If you're not logged in, story prompts, generated text, and images are used only to fulfill your immediate generation request and are not retained long-term.",
        "If you're logged in and save a story, it is retained until you delete it yourself, or until you delete your account (which deletes all your stories automatically).",
        "Feedback/report submissions are retained until you request deletion, or for up to 12 months on a rolling basis, whichever comes first.",
      ],
    },
    {
      id: "your-rights",
      title: "6. Your Rights & Deleting Your Data",
      content: [
        'Delete a story: Open "My Stories" in your Profile and tap the delete icon on any story.',
        "Delete your account: Open Settings → Delete Account. This permanently deletes your account and every story you've saved, immediately. This cannot be undone.",
        "Delete feedback you've submitted, or anything else: Since feedback isn't linked to your account, email us at fynktech@gmail.com with its approximate date/time and content, and we'll delete it within a reasonable time, typically within 30 days.",
      ],
    },
    {
      id: "children",
      title: "7. Children's Privacy",
      content: [
        "FairyTales AI generates storybooks that may appeal to children. Creating an account requires an email address; we do not knowingly collect personal information from children under 13 (or under 16 where applicable) without verifiable parental consent.",
        "If we learn that a child has created an account or provided personal information without appropriate consent, we will delete it upon request. Parents or guardians can contact us at fynktech@gmail.com to request deletion of a child's account or data.",
      ],
    },
    {
      id: "changes",
      title: "8. Changes to This Policy",
      content: [
        "We may update this policy from time to time. Changes will be posted on this page with an updated revision date.",
      ],
    },
    {
      id: "contact",
      title: "9. Contact Us",
      content: ["Questions about this policy or your data? Contact us at:"],
      bullets: ["App Name: FairyTales AI", "Email: fynktech@gmail.com"],
    },
  ],
};
