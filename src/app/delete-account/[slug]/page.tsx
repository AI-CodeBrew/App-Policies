import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AccountDeletionDocument } from "@/components/AccountDeletionDocument";
import { getAllAppSlugs, getAppBySlug } from "@/data/apps";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllAppSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    return { title: "Account Deletion Not Found" };
  }

  return {
    title: `Delete Your Account – ${app.name}`,
    description: `Request deletion of your ${app.name} account and associated data.`,
  };
}

export default async function AccountDeletionPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <Link
          href="/"
          className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          ← All apps
        </Link>
        <Link
          href={`/privacy/${app.slug}`}
          className="text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
        >
          Privacy policy
        </Link>
      </div>
      <AccountDeletionDocument app={app} />
    </div>
  );
}
