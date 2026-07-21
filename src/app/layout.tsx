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
    default: "Privacy Policies",
    template: "%s · Privacy Policies",
  },
  description:
    "Privacy policies for our mobile apps published on Google Play Store.",
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
              href="/"
              className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]"
            >
              Privacy Policies
            </Link>
            <span className="text-sm text-[var(--muted)]">Play Store apps</span>
          </div>
        </header>
        <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-10 sm:px-6 sm:py-14">
          {children}
        </main>
        <footer className="border-t border-[var(--border)]/80">
          <div className="mx-auto max-w-3xl px-5 py-6 text-sm text-[var(--muted)] sm:px-6">
            Privacy policies for our published mobile applications.
          </div>
        </footer>
      </body>
    </html>
  );
}
