import type { AppPolicy } from "./types";
import { theLocalBaba } from "./policies/the-localbaba";

/** Register each app's privacy policy here. Add new apps by importing and appending. */
export const apps: AppPolicy[] = [theLocalBaba];

export function getAppBySlug(slug: string): AppPolicy | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllAppSlugs(): string[] {
  return apps.map((app) => app.slug);
}
