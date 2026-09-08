import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AccountDeletionDocument } from "@/components/AccountDeletionDocument";
import { AppDocNav } from "@/components/AppDocNav";
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

  const noAccount = app.accountDeletion.noAccountSystem ?? false;

  return {
    title: noAccount
      ? `Data Deletion Request – ${app.name}`
      : `Delete Your Account – ${app.name}`,
    description: noAccount
      ? `Request deletion of any data tied to your use of ${app.name}, which has no account system.`
      : `Request deletion of your ${app.name} account and associated data.`,
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
      <AppDocNav app={app} current="deletion" />
      <AccountDeletionDocument app={app} />
    </div>
  );
}
