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
};

export type AppPolicy = {
  slug: string;
  name: string;
  shortDescription: string;
  platform: "Android" | "iOS" | "Android & iOS";
  effectiveDate: string;
  lastUpdated: string;
  contactEmail: string;
  website?: string;
  intro: string[];
  sections: PolicySection[];
  accountDeletion: AccountDeletionInfo;
};
