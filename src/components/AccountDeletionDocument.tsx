import type { AppPolicy } from "@/data/types";

export function AccountDeletionDocument({ app }: { app: AppPolicy }) {
  const { accountDeletion } = app;

  return (
    <article>
      <header className="mb-10 border-b border-[var(--border)] pb-8">
        <p className="mb-3 text-sm font-medium tracking-wide text-[var(--muted)] uppercase">
          Account deletion
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          Delete Your Account – {app.name}
        </h1>
        <p className="mt-3 text-[var(--muted)]">
          How to request deletion of your {app.name} account and associated
          data.
        </p>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Last updated: {accountDeletion.lastUpdated}
        </p>
      </header>

      <div className="space-y-10 text-[var(--body)] leading-relaxed">
        <section>
          <h2 className="font-display mb-4 text-xl font-semibold text-[var(--ink)]">
            How to request deletion
          </h2>
          <div className="space-y-3">
            {accountDeletion.howToRequest.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-4">
            Email:{" "}
            <a
              href={`mailto:${app.contactEmail}`}
              className="font-medium text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-hover)]"
            >
              {app.contactEmail}
            </a>
          </p>
        </section>

        <section>
          <h2 className="font-display mb-4 text-xl font-semibold text-[var(--ink)]">
            What happens when you request deletion
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            {accountDeletion.whatHappens.map((item) => (
              <li key={item.slice(0, 48)}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display mb-4 text-xl font-semibold text-[var(--ink)]">
            Questions
          </h2>
          <p>{accountDeletion.questionsNote}</p>
        </section>
      </div>
    </article>
  );
}
