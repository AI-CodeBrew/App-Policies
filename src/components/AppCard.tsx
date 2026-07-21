import Link from "next/link";
import type { AppPolicy } from "@/data/types";

export function AppCard({ app }: { app: AppPolicy }) {
  return (
    <div className="border-b border-[var(--border)] py-6 last:border-b-0">
      <div className="px-1 sm:px-2">
        <h2 className="font-display text-xl font-semibold text-[var(--ink)]">
          {app.name}
        </h2>
        <p className="mt-1 max-w-xl text-[var(--muted)]">
          {app.shortDescription}
        </p>
        <p className="mt-3 text-sm text-[var(--muted)]">
          {app.platform} · Updated {app.lastUpdated}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link
            href={`/privacy/${app.slug}`}
            className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
          >
            Privacy policy →
          </Link>
          <Link
            href={`/delete-account/${app.slug}`}
            className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
          >
            Delete account →
          </Link>
        </div>
      </div>
    </div>
  );
}
