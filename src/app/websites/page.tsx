import { MainTabs } from "@/components/MainTabs";
import { WebsiteCard } from "@/components/WebsiteCard";
import { websites } from "@/data/websites";

export default function WebsitesPage() {
  return (
    <div>
      <MainTabs active="websites" />
      <section className="mb-10">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          Websites
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-[var(--muted)]">
          Privacy policies and related legal pages for our websites.
        </p>
      </section>

      {websites.length === 0 ? (
        <p className="rounded-xl border border-dashed border-[var(--border)] px-5 py-10 text-center text-[var(--muted)]">
          No websites yet. Website policies will appear here when added.
        </p>
      ) : (
        <section aria-label="Websites" className="space-y-4">
          {websites.map((site) => (
            <WebsiteCard key={site.slug} site={site} />
          ))}
        </section>
      )}
    </div>
  );
}
