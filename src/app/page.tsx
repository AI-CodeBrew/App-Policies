import { AppCard } from "@/components/AppCard";
import { apps } from "@/data/apps";

export default function HomePage() {
  return (
    <div>
      <section className="mb-10">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          App privacy & account deletion
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-[var(--muted)]">
          Public privacy policies and account deletion instructions for our
          Google Play apps. Use these URLs in Play Console.
        </p>
      </section>

      <section
        aria-label="Apps"
        className="rounded-xl border border-[var(--border)] bg-white/50 px-3 sm:px-4"
      >
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </section>
    </div>
  );
}
