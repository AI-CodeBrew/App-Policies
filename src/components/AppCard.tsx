import Link from "next/link";
import type { AppPolicy } from "@/data/types";

export function AppCard({ app }: { app: AppPolicy }) {
  return (
    <Link
      href={`/privacy/${app.slug}`}
      className="group block border-b border-[var(--border)] py-6 transition-colors last:border-b-0 hover:bg-[var(--surface)]/60"
    >
      <div className="flex items-start justify-between gap-4 px-1 sm:px-2">
        <div>
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
            {app.name}
          </h2>
          <p className="mt-1 max-w-xl text-[var(--muted)]">
            {app.shortDescription}
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            {app.platform} · Updated {app.lastUpdated}
          </p>
        </div>
        <span
          aria-hidden
          className="mt-1 shrink-0 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]"
        >
          →
        </span>
      </div>
    </Link>
  );
}
