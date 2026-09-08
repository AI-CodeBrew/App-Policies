import type { AppPolicy } from "../types";

export const aiExpenseManager: AppPolicy = {
  slug: "aiexpensemanager",
  name: "AI Expense Manager",
  shortDescription:
    "Personal finance app for tracking expenses, budgets, and savings goals with an AI assistant.",
  platform: "Android",
  effectiveDate: "August 21, 2026",
  lastUpdated: "August 21, 2026",
  contactEmail: "fynktech@gmail.com",
  accountDeletion: {
    lastUpdated: "August 21, 2026",
    howToRequest: [
      "Send an email to fynktech@gmail.com from the email address linked to your AI Expense Manager account.",
      'Use the subject line "Delete My Account".',
      "We will verify your request and confirm once your account and data have been deleted.",
    ],
    whatHappens: [
      "Your account, profile information, and login credentials will be permanently deleted, typically within 30 days of your request.",
      "All financial data you entered — transactions, budget categories, and savings goals — will be permanently deleted.",
      "Your AI assistant chat history and any feedback you gave on AI responses will be permanently deleted.",
      "We do not retain any data that personally identifies you after deletion, beyond what is required to comply with legal or accounting obligations, if any.",
    ],
    questionsNote:
      "If you have any questions about this process, contact us at fynktech@gmail.com.",
  },
  intro: [
    'AI Expense Manager ("the App") helps you track income and expenses, set budget categories, set savings goals, and chat with an AI assistant for spending insights. This policy explains what information the App collects, how it is used, where it is stored, and your choices.',
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: [],
      bullets: [
        "Account information: name, email address, and password (stored as a salted bcrypt hash, never in plain text) when you register.",
        "Financial data you enter: transactions (amount, category, date, notes), budget categories (name, allocated/spent amounts), and savings goals (title, target/current amount, deadline).",
        "AI assistant data: the messages you send to the in-app AI assistant and its responses, stored as chat history tied to your account.",
        "Feedback: an optional thumbs up/down rating, plus an optional written reason, that you give on an AI response.",
        "We do not collect location data, contacts, camera/photos, a device advertising ID, or any data for advertising purposes. The App does not use any advertising SDKs.",
      ],
    },
    {
      id: "how-we-use",
      title: "2. How We Use Information",
      content: [],
      bullets: [
        "To create, maintain, and authenticate your account.",
        "To let you record transactions, manage budget categories, and track savings goals.",
        "To power the AI assistant and maintain your chat history.",
        "To use your feedback on AI responses to understand and improve the quality of the assistant's answers.",
        "To keep the App secure and reliable.",
      ],
    },
    {
      id: "storage-third-parties",
      title: "3. Where Your Data Is Stored & Third Parties",
      content: [
        "All app data — account, transactions, budgets, goals, chat history, and feedback — is stored in a MongoDB Atlas database, accessed only through our own backend API, hosted on Render.",
        "When you use the AI assistant, the text of your message is sent to Google's Gemini API (Google Generative AI) to generate a response. That request is processed under Google's own privacy practices — see the Google Privacy Policy (https://policies.google.com/privacy) for details.",
      ],
    },
    {
      id: "sharing",
      title: "4. Data Sharing",
      content: [
        "We do not sell your personal or financial data, and we do not use it for advertising. We only share your data with the infrastructure providers named above, strictly to operate the App's core features, or where required by law.",
      ],
    },
    {
      id: "retention",
      title: "5. Data Retention & Deletion",
      content: [
        "Your account and financial data are retained for as long as your account is active. You can request deletion of your account and associated data at any time by contacting us at the email address below.",
      ],
    },
    {
      id: "security",
      title: "6. Data Security",
      content: [
        "We use reasonable administrative and technical safeguards to protect your information, including password hashing (bcrypt) and token-based session authentication (JWT). However, no method of transmission over the internet or electronic storage is 100% secure.",
      ],
    },
    {
      id: "children",
      title: "7. Children's Privacy",
      content: [
        "The App is not directed at children under 13, and we do not knowingly collect information from them.",
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
      bullets: ["App Name: AI Expense Manager", "Email: fynktech@gmail.com"],
    },
  ],
};
