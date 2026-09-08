import type { AppPolicy } from "../types";

export const settleIt: AppPolicy = {
  slug: "settleit",
  name: "Settle It",
  shortDescription: "Group expense-splitting app for tracking and settling shared costs.",
  platform: "Android & iOS",
  effectiveDate: "August 18, 2026",
  lastUpdated: "August 18, 2026",
  contactEmail: "fynktech@gmail.com",
  homepage: {
    developer: "FynkTech",
    fullDescription: [
      "Settle It is a group expense-splitting app that helps friends, roommates, and teams track shared costs and settle balances fairly.",
      "Create groups, add expenses, split amounts among members, chat within the group, and export PDF summaries when you need a clear record of who owes what.",
    ],
    features: [
      "Create and manage shared expense groups",
      "Add expenses, amounts, and notes; see balances per member",
      "Invite others with invite codes or links",
      "In-group chat for coordination",
      "Optional profile and group photos",
      "Export PDF summaries / receipts of shared expenses",
    ],
    dataRequested: [
      "Account details (name, email, password) when you register",
      "Optional profile or group photos you choose to upload",
      "Group, expense, and balance data you and members enter",
      "In-group chat messages",
      "Invite codes/links you generate",
    ],
    dataUsePurpose: [
      "To create and authenticate your account so you can use Settle It securely",
      "To operate group expense tracking, balances, invites, and chat",
      "To store and sync your groups across devices via our backend",
      "To generate PDF exports you request",
      "We do not sell your personal data or use it for advertising",
    ],
  },
  accountDeletion: {
    lastUpdated: "August 18, 2026",
    howToRequest: [
      "Send an email to fynktech@gmail.com from the email address linked to your Settle It account.",
      'Use the subject line "Delete My Account".',
      "We will verify your request and confirm once your account and data have been deleted.",
    ],
    whatHappens: [
      "Your account, profile information, and login credentials will be permanently deleted, typically within 7 days of your request.",
      "Your profile photo and chat messages sent within groups will be removed.",
      "Expense and settlement records you were part of may be retained in an anonymized or aggregated form so that other group members' balances and shared expense history remain accurate.",
      "We do not retain any data that personally identifies you after deletion, beyond what is required to comply with legal or accounting obligations, if any.",
    ],
    questionsNote:
      "If you have any questions about this process, contact us at fynktech@gmail.com.",
  },
  intro: [
    'Settle It ("the App") is a group expense-splitting app. This policy explains what information the App collects, how it is used, and your choices.',
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: [],
      bullets: [
        "Account information: name, email address, and password (stored securely via our backend provider's authentication system) when you register.",
        "Profile and group photos: if you choose to add a profile picture or a group photo, using your camera or photo library.",
        "Group and expense data: group names, members, expenses, amounts, and related notes that you and other group members enter.",
        "Chat messages: messages you send within a group's chat feature.",
        "Invite data: invite codes/links generated when you invite others to a group.",
      ],
    },
    {
      id: "how-we-use",
      title: "2. How We Use Information",
      content: [],
      bullets: [
        "To create and manage your account and authenticate you.",
        "To let you create groups, record and split expenses, and see balances with other members.",
        "To let group members communicate via in-app chat.",
        "To generate and process invite links so you can add people to a group.",
        "To generate PDF summaries/receipts that you choose to export or share.",
      ],
    },
    {
      id: "sharing",
      title: "3. Data Sharing",
      content: [
        "We do not sell your personal information. Group and expense data you enter is visible to other members of the same group, since that is the purpose of the App. We use Supabase (https://supabase.com) as our backend provider for authentication, database, and file storage; your data is processed and stored on their infrastructure under their own security and privacy practices.",
      ],
    },
    {
      id: "retention",
      title: "4. Data Retention & Deletion",
      content: [
        "Your account and associated data are retained for as long as your account is active. You can request deletion of your account and associated data at any time by contacting us at the email address below.",
      ],
    },
    {
      id: "permissions",
      title: "5. Permissions",
      content: [],
      bullets: [
        "Camera / Photo Library: only used if you choose to set a profile or group photo. Never accessed without your action.",
        "Internet: required to sync groups, expenses, and chat messages with our backend.",
      ],
    },
    {
      id: "children",
      title: "6. Children's Privacy",
      content: [
        "The App is not directed at children under 13, and we do not knowingly collect information from them.",
      ],
    },
    {
      id: "changes",
      title: "7. Changes to This Policy",
      content: [
        "We may update this policy from time to time. Changes will be posted on this page with an updated revision date.",
      ],
    },
    {
      id: "contact",
      title: "8. Contact Us",
      content: [
        "Questions about this policy or your data? Contact us at:",
      ],
      bullets: ["App Name: Settle It", "Email: fynktech@gmail.com"],
    },
  ],
  terms: {
    effectiveDate: "September 8, 2026",
    lastUpdated: "September 8, 2026",
    intro: [
      'These Terms of Service ("Terms") govern your use of Settle It ("the App"), a group expense-splitting application. By creating an account or using the App, you agree to these Terms. If you do not agree, please do not use the App.',
    ],
    sections: [
      {
        id: "accounts",
        title: "1. Accounts",
        content: [
          "You may create an account using an email address and password, or by signing in with Google. You are responsible for keeping your login credentials secure and for all activity that happens under your account. You must provide accurate information when creating an account. You may also use the App as a guest with limited functionality, without creating an account.",
        ],
      },
      {
        id: "use-of-the-app",
        title: "2. Use of the App",
        content: [
          "Settle It lets you create groups, record shared expenses, and track balances between group members. It is a bookkeeping and tracking tool only — it does not process, hold, or transfer money on your behalf. Any actual payment or settlement between group members happens outside the App, between the members themselves.",
        ],
        bullets: [
          "You agree not to use the App for any unlawful purpose, or to harass, abuse, or harm other users.",
          "You agree not to attempt to disrupt, reverse engineer, or gain unauthorized access to the App or its backend systems.",
          "You are responsible for the accuracy of the expenses, amounts, and information you enter.",
        ],
      },
      {
        id: "your-content",
        title: "3. Your Content",
        content: [
          'You retain ownership of the content you submit to the App, including group names, expense descriptions, chat messages, and photos ("User Content"). By submitting User Content, you grant us a limited license to store and display it within the App as needed to provide the service — for example, showing your expenses to other members of the same group. You are solely responsible for the User Content you submit, and you confirm you have the right to share it.',
        ],
      },
      {
        id: "groups-and-members",
        title: "4. Groups and Members",
        content: [
          "When you join or create a group, other members of that group can see the expenses, balances, names, and chat messages associated with that group. You should only share groups with people you trust. Group admins can remove members, delete the group, or manage group settings as described in the App.",
        ],
      },
      {
        id: "disclaimer",
        title: "5. Disclaimer of Warranties",
        content: [
          'The App is provided "as is" and "as available," without warranties of any kind, whether express or implied. We do not guarantee that the App will be uninterrupted, error-free, or that balance calculations will be free of mistakes arising from data you or other members enter.',
        ],
      },
      {
        id: "limitation-of-liability",
        title: "6. Limitation of Liability",
        content: [
          "To the maximum extent permitted by law, Settle It and its developers are not liable for any indirect, incidental, or consequential damages arising from your use of the App, including disputes between group members over expenses or payments made outside the App.",
        ],
      },
      {
        id: "termination",
        title: "7. Termination",
        content: [
          "You may stop using the App at any time and request account deletion as described in our Privacy Policy. We may suspend or terminate accounts that violate these Terms.",
        ],
      },
      {
        id: "changes",
        title: "8. Changes to These Terms",
        content: [
          'We may update these Terms from time to time. Continued use of the App after changes are posted means you accept the updated Terms. We will update the "Last updated" date above when changes are made.',
        ],
      },
      {
        id: "contact",
        title: "9. Contact Us",
        content: ["Questions about these Terms? Contact us at:"],
        bullets: ["App Name: Settle It", "Email: fynktech@gmail.com"],
      },
    ],
  },
};
