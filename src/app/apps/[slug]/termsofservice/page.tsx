import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppDocNav } from "@/components/AppDocNav";
import { TermsDocument } from "@/components/TermsDocument";
import { apps, getAppBySlug } from "@/data/apps";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return apps.filter((app) => app.terms).map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app?.terms) {
    return { title: "Terms of Service Not Found" };
  }

  return {
    title: `${app.name} Terms of Service`,
    description: `Terms of Service for ${app.name}.`,
  };
}

export default async function TermsOfServicePage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app?.terms) {
    notFound();
  }

  return (
    <div>
      <AppDocNav app={app} current="terms" />
      <TermsDocument app={app} />
    </div>
  );
}
