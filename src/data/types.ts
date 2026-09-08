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
