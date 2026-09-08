import Link from "next/link";
import type { AppPolicy } from "@/data/types";

export function AppDocNav({
  app,
  current,
}: {
  app: AppPolicy;
  current: "hub" | "privacy" | "terms" | "deletion";
}) {
  const muted =
    "text-[var(--muted)] transition-colors hover:text-[var(--accent)]";
  const active = "font-medium text-[var(--accent)]";

  return (
    <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      <Link href="/apps" className={muted}>
        ← All apps
      </Link>
      {current !== "hub" && (
        <Link href={`/apps/${app.slug}`} className={muted}>
          {app.name}
        </Link>
      )}
      <Link
        href={`/apps/${app.slug}/privacypolicy`}
        className={current === "privacy" ? active : muted}
      >
        Privacy policy
      </Link>
      {app.terms && (
        <Link
          href={`/apps/${app.slug}/termsofservice`}
          className={current === "terms" ? active : muted}
        >
          Terms of Service
        </Link>
      )}
      <Link
        href={`/apps/${app.slug}/deleteaccount`}
        className={current === "deletion" ? active : muted}
      >
        {app.accountDeletion.noAccountSystem
          ? "Data deletion"
          : "Delete account"}
      </Link>
    </div>
  );
}
