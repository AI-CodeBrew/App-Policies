import type { WebsitePolicy } from "./types";

/** Register website policies here. Add new sites by importing and appending. */
export const websites: WebsitePolicy[] = [];

export function getWebsiteBySlug(slug: string): WebsitePolicy | undefined {
  return websites.find((site) => site.slug === slug);
}

export function getAllWebsiteSlugs(): string[] {
  return websites.map((site) => site.slug);
}
