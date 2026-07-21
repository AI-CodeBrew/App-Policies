import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="font-display text-2xl font-semibold text-[var(--ink)]">
        Policy not found
      </h1>
      <p className="mt-2 text-[var(--muted)]">
        That app does not have a privacy policy on this site yet.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block text-[var(--accent)] hover:underline"
      >
        ← Back to all apps
      </Link>
    </div>
  );
}
