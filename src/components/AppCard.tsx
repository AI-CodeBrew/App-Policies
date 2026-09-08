import Link from "next/link";
import type { AppPolicy } from "@/data/types";

export function AppCard({ app }: { app: AppPolicy }) {
  return (
    <Link
      href={`/apps/${app.slug}`}
      className="group block rounded-xl border border-[var(--border)] bg-white/50 px-4 py-6 transition-colors hover:border-[var(--accent)]/40 hover:bg-white/80 sm:px-6"
    >
      <div className="flex items-start justify-between gap-4">
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
