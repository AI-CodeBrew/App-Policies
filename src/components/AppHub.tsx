import Link from "next/link";
import type { AppPolicy } from "@/data/types";

export function AppHub({ app }: { app: AppPolicy }) {
  const links = [
    {
      href: `/apps/${app.slug}/privacypolicy`,
      title: "Privacy Policy",
      description: "How we collect, use, and protect your information.",
    },
    ...(app.terms
      ? [
          {
            href: `/apps/${app.slug}/termsofservice`,
            title: "Terms of Service",
            description: "Rules and conditions for using this app.",
          },
        ]
      : []),
    {
      href: `/apps/${app.slug}/deleteaccount`,
      title: app.accountDeletion.noAccountSystem
        ? "Data Deletion"
        : "Delete Account",
      description: app.accountDeletion.noAccountSystem
        ? "Request deletion of data tied to your use of this app."
        : "Request deletion of your account and associated data.",
    },
  ];

  return (
    <div>
      <header className="mb-10 border-b border-[var(--border)] pb-8">
        <p className="mb-3 text-sm font-medium tracking-wide text-[var(--muted)] uppercase">
          App
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          {app.name}
        </h1>
        <p className="mt-3 text-lg text-[var(--muted)]">
          {app.shortDescription}
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">
          {app.platform} · Updated {app.lastUpdated}
        </p>
        {app.website && (
          <p className="mt-2 text-sm">
            <a
              href={app.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-hover)]"
            >
              {app.website}
            </a>
          </p>
        )}
      </header>

      <section aria-label="Legal documents" className="space-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex items-start justify-between gap-4 rounded-xl border border-[var(--border)] bg-white/50 px-4 py-5 transition-colors hover:border-[var(--accent)]/40 hover:bg-white/80 sm:px-5"
          >
            <div>
              <h2 className="font-display text-lg font-semibold text-[var(--ink)] group-hover:text-[var(--accent)]">
                {link.title}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {link.description}
              </p>
              <p className="mt-2 font-mono text-xs text-[var(--muted)]">
                {link.href}
              </p>
            </div>
            <span
              aria-hidden
              className="mt-1 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent)]"
            >
              →
            </span>
          </Link>
        ))}
      </section>
    </div>
  );
}
