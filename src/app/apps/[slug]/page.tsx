import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppDocNav } from "@/components/AppDocNav";
import { AppHub } from "@/components/AppHub";
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
    return { title: "App Not Found" };
  }

  return {
    title: app.name,
    description: app.shortDescription,
  };
}

export default async function AppHomePage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app) {
    notFound();
  }

  return (
    <div>
      <AppDocNav app={app} current="hub" />
      <AppHub app={app} />
    </div>
  );
}
