import type { AppPolicy } from "../types";

export const fairyTalesAi: AppPolicy = {
  slug: "fairytalesai",
  name: "FairyTales AI",
  shortDescription:
    "AI-illustrated storybook generator — pick a theme and prompt, get an illustrated, narrated story.",
  platform: "Android & iOS",
  effectiveDate: "August 21, 2026",
  lastUpdated: "August 21, 2026",
  contactEmail: "fynktech@gmail.com",
  accountDeletion: {
    lastUpdated: "August 21, 2026",
    noAccountSystem: true,
    howToRequest: [
      "FairyTales AI does not require or use an account/login of any kind, so there is no account to delete.",
      "You can still request deletion of any data that could be tied to you — specifically, feedback/report submissions stored in our Firestore database, and Firebase Analytics device-level data.",
      "Email fynktech@gmail.com with: (a) the approximate date/time you used the App, (b) a description of the feedback you submitted, if applicable, and (c) your device platform (Android or iOS) — this helps us locate and delete matching records.",
    ],
    whatHappens: [
      "Any matching feedback/report entries in our Firestore database are permanently deleted.",
      "Analytics data linked to your device, to the extent Firebase's own tools let us identify it, is deleted or disassociated.",
      "Since there is no account or persistent identity, there is nothing else tied to you to remove.",
      "Expected turnaround time: within 30 days of your request.",
    ],
    questionsNote:
      "This page satisfies Google Play's Data Deletion requirement for apps without user accounts. If you have any questions, contact us at fynktech@gmail.com.",
  },
  intro: [
    'FairyTales AI ("the App") lets you generate AI-illustrated storybooks: pick a theme and enter a prompt, and the App creates story text and matching illustrations, narrates the story aloud, and lets you export or share the finished storybook. This policy explains what information the App processes, how it is used, and — because the App has no accounts — how you can request deletion of any data that could be tied to you.',
  ],
  sections: [
    {
      id: "no-accounts",
      title: "1. No Accounts, No Sign-In",
      content: [
        "FairyTales AI has no user accounts, sign-up, or login of any kind — no email/password, and no sign-in with Google, Apple, or Facebook. There is no user profile system, and we do not maintain a persistent identity for you across sessions.",
      ],
    },
    {
      id: "information-we-collect",
      title: "2. Information We Collect & How It's Used",
      content: [],
      subsections: [
        {
          title: "A. Story prompts and generated content",
          items: [
            "When you enter a prompt and pick a theme (Adventure, Fantasy, Space, Nature, Friendship, or Science), that text is sent to our backend server, which forwards it to Google's Gemini AI API to generate story text and illustrations.",
            "The generated story text, images, and your original prompt/theme are returned to the App for display, narration, PDF export, and sharing. This content is not linked to a user account or persistent identity, since there is no login, but it does pass through our backend server and Google's Gemini API to be generated.",
          ],
        },
        {
          title: "B. Feedback and story reports",
          items: [
            "If you submit feedback or report a generated story (marking it Positive/Negative with a reason), we store the reason text, feedback type, and a timestamp in our Firebase Firestore database.",
            "We do not collect your name, email, or any other personal identifier alongside this feedback. Please avoid including personal information in the free-text reason field.",
          ],
        },
        {
          title: "C. Analytics",
          items: [
            "We use Firebase Analytics (Google) to collect standard app usage/analytics events — such as screens viewed, feature usage, and device/platform info — to understand how the App is used.",
            "We use Firebase Remote Config to remotely control app configuration and feature flags. This does not involve personal data.",
          ],
        },
        {
          title: "D. Text-to-speech narration",
          items: [
            "Story narration uses your device's built-in text-to-speech engine. Audio is generated and played entirely on your device; no audio is sent to us or stored.",
          ],
        },
        {
          title: "E. Export & sharing",
          items: [
            "You can export a generated story as a PDF or share it through your device's native share sheet to any app of your choosing. We do not receive or store where you share it.",
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
        "No Crashlytics or other third-party crash-reporting tools.",
      ],
    },
    {
      id: "third-party",
      title: "4. Third-Party Services",
      content: [],
      bullets: [
        "Google Firebase (Analytics, Remote Config, Firestore database, Cloud Storage) — see the Google Privacy Policy (https://policies.google.com/privacy).",
        "Google Gemini API — used to generate story text and images from your prompts. Governed by the Google Privacy Policy (https://policies.google.com/privacy).",
        "Our own backend API: a Flask app we operate, hosted on Vercel, which relays prompts to Gemini and stores feedback in Firestore.",
        "Vercel — hosting provider for our backend. See the Vercel Privacy Policy (https://vercel.com/legal/privacy-policy).",
      ],
    },
    {
      id: "retention",
      title: "5. Data Retention",
      content: [
        "Story prompts, generated text, and images are used only to fulfill your immediate generation request and are not retained long-term.",
        "Feedback/report submissions are retained until you request deletion, or for up to 12 months on a rolling basis, whichever comes first.",
      ],
    },
    {
      id: "your-rights",
      title: "6. Your Rights & Requesting Deletion",
      content: [
        "Because FairyTales AI has no accounts, there is no \"delete my account\" flow — there is no account to delete.",
        "You can still request deletion of data that could be tied to you: (a) any feedback/report you submitted, identified by its approximate date/time and content, and (b) analytics data, to the extent it's linked to your device via Firebase's own tools.",
        "Send deletion requests to fynktech@gmail.com. We will respond and delete the identified data within a reasonable time, typically within 30 days. See our Data Deletion Request page for full instructions.",
      ],
    },
    {
      id: "children",
      title: "7. Children's Privacy",
      content: [
        "FairyTales AI generates storybooks that may appeal to children. The App has no account system and does not knowingly collect personal information from anyone, including children under 13 (or under 16 where applicable).",
        "If we learn that a child has provided personal information — for example, in the free-text feedback/report field — we will delete it upon request. We recommend not including personal information in any free-text field.",
        "Parents or guardians can contact us at fynktech@gmail.com to request deletion of any such data.",
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
      content: [
        "Questions about this policy or your data? Contact us at:",
      ],
      bullets: ["App Name: FairyTales AI", "Email: fynktech@gmail.com"],
    },
  ],
};
