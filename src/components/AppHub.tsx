import Link from "next/link";
import type { AppPolicy } from "@/data/types";

export function AppHub({ app }: { app: AppPolicy }) {
  const { homepage } = app;
  const privacyHref = `/apps/${app.slug}/privacypolicy`;
  const deletionHref = `/apps/${app.slug}/deleteaccount`;
  const termsHref = app.terms
    ? `/apps/${app.slug}/termsofservice`
    : undefined;

  return (
    <article>
      <header className="mb-10 border-b border-[var(--border)] pb-8">
        <p className="mb-2 text-sm font-medium tracking-wide text-[var(--muted)] uppercase">
          Official app homepage
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          {app.name}
        </h1>
        <p className="mt-2 text-lg text-[var(--body)]">
          {app.shortDescription}
        </p>
        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--muted)]">
          <div>
            <dt className="inline font-medium text-[var(--ink)]">Developer: </dt>
            <dd className="inline">{homepage.developer}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-[var(--ink)]">Platform: </dt>
            <dd className="inline">{app.platform}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-[var(--ink)]">Contact: </dt>
            <dd className="inline">
              <a
                href={`mailto:${app.contactEmail}`}
                className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-hover)]"
              >
                {app.contactEmail}
              </a>
            </dd>
          </div>
        </dl>
        {app.website && (
          <p className="mt-3 text-sm">
            Website:{" "}
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

      <section className="mb-10">
        <h2 className="font-display mb-3 text-xl font-semibold text-[var(--ink)]">
          What {app.name} does
        </h2>
        <div className="space-y-3 text-[var(--body)] leading-relaxed">
          {homepage.fullDescription.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-display mb-3 text-xl font-semibold text-[var(--ink)]">
          Key features
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-[var(--body)] leading-relaxed">
          {homepage.features.map((feature) => (
            <li key={feature.slice(0, 48)}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10 rounded-xl border border-[var(--border)] bg-white/60 p-5 sm:p-6">
        <h2 className="font-display mb-3 text-xl font-semibold text-[var(--ink)]">
          Why we request user data
        </h2>
        <p className="mb-4 text-[var(--body)] leading-relaxed">
          We only request data needed to run {app.name}. Below is a clear
          summary of what we ask for and why — full details are in the Privacy
          Policy.
        </p>
        <h3 className="mb-2 text-sm font-semibold tracking-wide text-[var(--ink)] uppercase">
          Data we may request
        </h3>
        <ul className="mb-5 list-disc space-y-1.5 pl-5 text-[var(--body)]">
          {homepage.dataRequested.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
        <h3 className="mb-2 text-sm font-semibold tracking-wide text-[var(--ink)] uppercase">
          Purpose
        </h3>
        <ul className="list-disc space-y-1.5 pl-5 text-[var(--body)]">
          {homepage.dataUsePurpose.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-display mb-3 text-xl font-semibold text-[var(--ink)]">
          Privacy Policy
        </h2>
        <p className="mb-4 text-[var(--body)] leading-relaxed">
          Our Privacy Policy explains how we collect, use, share, and protect
          information when you use {app.name}. This page is public and does not
          require signing in.
        </p>
        <Link
          href={privacyHref}
          className="inline-flex items-center rounded-lg bg-[var(--ink)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent)]"
        >
          Read the Privacy Policy →
        </Link>
        <p className="mt-3 font-mono text-xs text-[var(--muted)]">
          {privacyHref}
        </p>
      </section>

      <section aria-label="Related links">
        <h2 className="font-display mb-3 text-xl font-semibold text-[var(--ink)]">
          Related links
        </h2>
        <ul className="space-y-2 text-[var(--body)]">
          {termsHref && (
            <li>
              <Link
                href={termsHref}
                className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
              >
                Terms of Service
              </Link>
            </li>
          )}
          <li>
            <Link
              href={deletionHref}
              className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
            >
              {app.accountDeletion.noAccountSystem
                ? "Data deletion request"
                : "Delete your account"}
            </Link>
          </li>
          <li>
            <a
              href={`mailto:${app.contactEmail}`}
              className="font-medium text-[var(--accent)] underline-offset-2 hover:underline"
            >
              Contact support
            </a>
          </li>
        </ul>
      </section>

      <p className="mt-12 border-t border-[var(--border)] pt-6 text-sm text-[var(--muted)]">
        This homepage is hosted on our own domain, identifies {app.name} and{" "}
        {homepage.developer}, and is available without logging in — for use
        with Google Play / Google API consent screen configuration.
      </p>
    </article>
  );
}
