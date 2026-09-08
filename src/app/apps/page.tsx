import { AppCard } from "@/components/AppCard";
import { MainTabs } from "@/components/MainTabs";
import { apps } from "@/data/apps";

export default function AppsPage() {
  return (
    <div>
      <MainTabs active="apps" />
      <section className="mb-10">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">
          Apps
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-[var(--muted)]">
          Official public homepages for our apps. Each page identifies the app
          and developer, describes features, explains why data is requested, and
          links to the Privacy Policy — no login required.
        </p>
      </section>

      <section aria-label="Apps" className="space-y-4">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </section>
    </div>
  );
}
