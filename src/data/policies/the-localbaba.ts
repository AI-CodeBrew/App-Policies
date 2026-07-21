import type { AppPolicy } from "../types";

export const theLocalBaba: AppPolicy = {
  slug: "the-localbaba",
  name: "The LocalBaba",
  shortDescription: "Wholesale shopping app for businesses and shop owners.",
  platform: "Android",
  effectiveDate: "July 21, 2026",
  lastUpdated: "July 21, 2026",
  contactEmail: "support@thelocalbaba.com",
  website: "https://thelocalbaba.com",
  intro: [
    'Welcome to The LocalBaba ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (The LocalBaba).',
    "Please read this Privacy Policy carefully. If you do not agree with the terms of this privacy policy, please do not access or use the application.",
  ],
  sections: [
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: [
        "We collect personal information that you voluntarily provide to us when you register on the app, place wholesale orders, send product inquiries, or contact us.",
      ],
      subsections: [
        {
          title: "A. Personal Information Provided by You",
          items: [
            "Account & Identity Data: Name, email address, phone number, business/shop name, and authentication credentials.",
            "Location & Delivery Data: Delivery address, shipping details, city, state, and postal code.",
            "Order & Transaction Information: Purchase history, wholesale product inquiries, cart items, and order preferences.",
            "Communications: Support messages, feedback, and customer service inquiries.",
          ],
        },
        {
          title: "B. Information Collected Automatically",
          items: [
            "Device Information: Mobile device model, operating system version, unique device identifiers, and network status.",
            "Usage Data: App interactions, pages viewed, features accessed, and error/crash reports.",
          ],
        },
      ],
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: [
        "We use the collected information for specific business purposes, including:",
      ],
      bullets: [
        "Account Creation & Management: Setting up, maintaining, and authenticating user accounts.",
        "Order Fulfillment & Inquiries: Processing wholesale product requests, orders, and delivery logistics.",
        "Customer Support: Responding to questions, resolving issues, and sending transactional updates.",
        "App Maintenance & Improvement: Analyzing app usage to optimize performance, layout, and user experience.",
        "Security & Protection: Safeguarding against fraud, unauthorized activities, and security threats.",
      ],
    },
    {
      id: "sharing",
      title: "3. Sharing Your Information",
      content: [
        "We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following situations:",
      ],
      bullets: [
        "Service Providers: We engage trusted third-party providers (such as Supabase for database storage and backend services) necessary for operating the mobile app.",
        "Legal Compliance: We may disclose your information if required to do so by law or in response to valid legal requests by public authorities.",
        "Business Transfers: In the event of a merger, acquisition, or asset sale, your personal information may be transferred as part of business assets.",
      ],
    },
    {
      id: "third-party",
      title: "4. Third-Party Services & Backend",
      content: [
        "Our application integrates third-party services for backend and UI components:",
      ],
      bullets: [
        "Supabase: Cloud database and authentication services. Please refer to the Supabase Privacy Policy (https://supabase.com/privacy) for details on their data handling.",
        "Google Fonts: Used to provide consistent typography within the application interface.",
      ],
    },
    {
      id: "security",
      title: "5. Data Security",
      content: [
        "We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, please be aware that no transmission method over the internet or method of electronic storage can be guaranteed 100% secure.",
      ],
    },
    {
      id: "retention",
      title: "6. Data Retention and Account Deletion",
      content: [
        "We retain your personal information only as long as necessary to fulfill the purposes set out in this Privacy Policy, unless a longer retention period is required by law.",
      ],
      bullets: [
        "Requesting Data Deletion: You can request the deletion of your account and personal data at any time by contacting us at our support email or using the in-app deletion option.",
      ],
    },
    {
      id: "children",
      title: "7. Children's Privacy",
      content: [
        "Our application is designed for general audiences and wholesale business users. We do not knowingly collect personal information from children under the age of 13. If you become aware that a child has provided us with personal data, please contact us immediately.",
      ],
    },
    {
      id: "rights",
      title: "8. Your Rights",
      content: [
        "Depending on your jurisdiction, you may have the following rights:",
      ],
      bullets: [
        "Access, review, or request a copy of your personal data.",
        "Correct or update inaccurate information.",
        "Request erasure/deletion of your data.",
        "Withdraw consent for optional data processing.",
      ],
    },
    {
      id: "changes",
      title: "9. Changes to This Privacy Policy",
      content: [
        'We may update this Privacy Policy periodically. Any updates will be reflected in this document with a revised "Last Updated" date.',
      ],
    },
    {
      id: "contact",
      title: "10. Contact Us",
      content: [
        "If you have questions or concerns regarding this Privacy Policy, please contact us at:",
      ],
      bullets: [
        "App Name: The LocalBaba",
        "Email: support@thelocalbaba.com",
        "Website: https://thelocalbaba.com",
      ],
    },
  ],
};
