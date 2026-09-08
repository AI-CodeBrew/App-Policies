import type { Metadata } from "next";
import { Figtree, Fraunces } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "App Homepages & Privacy Policies",
    template: "%s",
  },
  description:
    "Official app homepages, privacy policies, and account deletion pages for our published apps and websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="border-b border-[var(--border)]/80 bg-[var(--background)]/80 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4 sm:px-6">
            <Link
              href="/apps"
              className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]"
            >
              App Policies
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link
                href="/apps"
                className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                Apps
              </Link>
              <Link
                href="/websites"
                className="text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
              >
                Websites
              </Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10 sm:px-6 sm:py-14">
          {children}
        </main>
        <footer className="border-t border-[var(--border)]/80">
          <div className="mx-auto max-w-3xl px-5 py-6 text-sm text-[var(--muted)] sm:px-6">
            Official app homepages and privacy policies. Public pages — no login
            required.
          </div>
        </footer>
      </body>
    </html>
  );
}
