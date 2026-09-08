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
    title: `${app.name} — Official Homepage`,
    description: `${app.shortDescription} Official homepage for ${app.name} by ${app.homepage.developer}. Includes app description, data use transparency, and Privacy Policy link.`,
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
