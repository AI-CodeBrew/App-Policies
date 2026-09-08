import Link from "next/link";
import type { WebsitePolicy } from "@/data/types";

export function WebsiteCard({ site }: { site: WebsitePolicy }) {
  return (
    <Link
      href={`/websites/${site.slug}`}
      className="group block rounded-xl border border-[var(--border)] bg-white/50 px-4 py-6 transition-colors hover:border-[var(--accent)]/40 hover:bg-white/80 sm:px-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
            {site.name}
          </h2>
          <p className="mt-1 max-w-xl text-[var(--muted)]">
            {site.shortDescription}
          </p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Updated {site.lastUpdated}
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
