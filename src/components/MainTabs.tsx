import Link from "next/link";

export function MainTabs({ active }: { active: "apps" | "websites" }) {
  const base =
    "rounded-lg px-4 py-2 text-sm font-medium transition-colors";
  const on = "bg-[var(--ink)] text-white";
  const off =
    "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)]";

  return (
    <nav aria-label="Section" className="mb-8 flex gap-2">
      <Link href="/apps" className={`${base} ${active === "apps" ? on : off}`}>
        Apps
      </Link>
      <Link
        href="/websites"
        className={`${base} ${active === "websites" ? on : off}`}
      >
        Websites
      </Link>
    </nav>
  );
}
