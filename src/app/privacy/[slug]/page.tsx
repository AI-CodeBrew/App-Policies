import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PolicyDocument } from "@/components/PolicyDocument";
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
    return { title: "Privacy Policy Not Found" };
  }

  return {
    title: `${app.name} Privacy Policy`,
    description: `Privacy Policy for ${app.name}. ${app.shortDescription}`,
  };
}

export default async function PrivacyPolicyPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/"
        className="mb-8 inline-flex text-sm text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
      >
        ← All apps
      </Link>
      <PolicyDocument app={app} />
    </div>
  );
}
