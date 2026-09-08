export type PolicySection = {
  id: string;
  title: string;
  content: string[];
  subsections?: {
    title: string;
    items: string[];
  }[];
  bullets?: string[];
};

export type AccountDeletionInfo = {
  lastUpdated: string;
  howToRequest: string[];
  whatHappens: string[];
  questionsNote: string;
  /** Set for apps with no login/account system, so pages read "Data Deletion Request" instead of "Delete Your Account". */
  noAccountSystem?: boolean;
};

export type TermsOfService = {
  effectiveDate: string;
  lastUpdated: string;
  intro: string[];
  sections: PolicySection[];
};

export type AppHomepage = {
  /** Developer / brand that publishes the app. */
  developer: string;
  /** Full description of what the app does (visible without login). */
  fullDescription: string[];
  /** Key features users can perform in the app. */
  features: string[];
  /** Transparent explanation of why the app requests user data. */
  dataUsePurpose: string[];
  /** Short list of the main data categories requested (for transparency). */
  dataRequested: string[];
};

export type AppPolicy = {
  slug: string;
  name: string;
  shortDescription: string;
  platform: "Android" | "iOS" | "Android & iOS";
  effectiveDate: string;
  lastUpdated: string;
  contactEmail: string;
  /** Public product / marketing site URL (optional). */
  website?: string;
  /** Google / Play Console–ready app homepage content (public, no login). */
  homepage: AppHomepage;
  intro: string[];
  sections: PolicySection[];
  accountDeletion: AccountDeletionInfo;
  /** Optional — only apps that have published Terms of Service get a termsofservice page. */
  terms?: TermsOfService;
};

/** Website product policies (separate from mobile apps). */
export type WebsitePolicy = {
  slug: string;
  name: string;
  shortDescription: string;
  effectiveDate: string;
  lastUpdated: string;
  contactEmail: string;
  url?: string;
  intro: string[];
  sections: PolicySection[];
  accountDeletion?: AccountDeletionInfo;
  terms?: TermsOfService;
};
