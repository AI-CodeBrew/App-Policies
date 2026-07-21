import type { AppPolicy } from "@/data/types";

function linkify(text: string) {
  const parts = text.split(/(https?:\/\/[^\s)]+)/g);

  return parts.map((part, index) => {
    if (part.startsWith("http://") || part.startsWith("https://")) {
      return (
        <a
          key={`${part}-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] underline underline-offset-2 hover:text-[var(--accent-hover)]"
        >
          {part}
        </a>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export function PolicyDocument({ app }: { app: AppPolicy }) {
  return (
    <article className="policy">
      <header className="mb-10 border-b border-[var(--border)] pb-8">
        <p className="mb-3 text-sm font-medium tracking-wide text-[var(--muted)] uppercase">
          Privacy Policy
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          {app.name}
        </h1>
        <p className="mt-3 text-[var(--muted)]">{app.shortDescription}</p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[var(--muted)]">
          <div>
            <dt className="inline font-medium text-[var(--ink)]">Effective: </dt>
            <dd className="inline">{app.effectiveDate}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-[var(--ink)]">
              Last updated:{" "}
            </dt>
            <dd className="inline">{app.lastUpdated}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-[var(--ink)]">Platform: </dt>
            <dd className="inline">{app.platform}</dd>
          </div>
        </dl>
      </header>

      <nav aria-label="Table of contents" className="mb-12 rounded-lg bg-[var(--surface)] p-5">
        <p className="mb-3 text-sm font-semibold text-[var(--ink)]">Contents</p>
        <ol className="grid gap-1.5 text-sm sm:grid-cols-2">
          {app.sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-4 text-[var(--body)] leading-relaxed">
        {app.intro.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12 space-y-12">
        {app.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="font-display mb-4 text-xl font-semibold text-[var(--ink)]">
              {section.title}
            </h2>

            <div className="space-y-3 text-[var(--body)] leading-relaxed">
              {section.content.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{linkify(paragraph)}</p>
              ))}
            </div>

            {section.subsections?.map((sub) => (
              <div key={sub.title} className="mt-5">
                <h3 className="mb-2 text-base font-semibold text-[var(--ink)]">
                  {sub.title}
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-[var(--body)] leading-relaxed">
                  {sub.items.map((item) => (
                    <li key={item.slice(0, 40)}>{linkify(item)}</li>
                  ))}
                </ul>
              </div>
            ))}

            {section.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[var(--body)] leading-relaxed">
                {section.bullets.map((item) => (
                  <li key={item.slice(0, 40)}>{linkify(item)}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
