import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // Old flat routes → nested app routes (compact slugs)
      {
        source: "/privacy/settle-it",
        destination: "/apps/settleit/privacypolicy",
        permanent: true,
      },
      {
        source: "/privacy/ai-expense-manager",
        destination: "/apps/aiexpensemanager/privacypolicy",
        permanent: true,
      },
      {
        source: "/privacy/fairytales-ai",
        destination: "/apps/fairytaleai/privacypolicy",
        permanent: true,
      },
      {
        source: "/apps/fairytalesai/privacypolicy",
        destination: "/apps/fairytaleai/privacypolicy",
        permanent: true,
      },
      {
        source: "/privacy/the-localbaba",
        destination: "/apps/thelocalbaba/privacypolicy",
        permanent: true,
      },
      {
        source: "/terms/settle-it",
        destination: "/apps/settleit/termsofservice",
        permanent: true,
      },
      {
        source: "/delete-account/settle-it",
        destination: "/apps/settleit/deleteaccount",
        permanent: true,
      },
      {
        source: "/delete-account/ai-expense-manager",
        destination: "/apps/aiexpensemanager/deleteaccount",
        permanent: true,
      },
      {
        source: "/delete-account/fairytales-ai",
        destination: "/apps/fairytaleai/deleteaccount",
        permanent: true,
      },
      {
        source: "/apps/fairytalesai/deleteaccount",
        destination: "/apps/fairytaleai/deleteaccount",
        permanent: true,
      },
      {
        source: "/delete-account/the-localbaba",
        destination: "/apps/thelocalbaba/deleteaccount",
        permanent: true,
      },
      // Generic old patterns for any remaining kebab slugs that match new compact ones
      {
        source: "/privacy/:slug",
        destination: "/apps/:slug/privacypolicy",
        permanent: true,
      },
      {
        source: "/terms/:slug",
        destination: "/apps/:slug/termsofservice",
        permanent: true,
      },
      {
        source: "/delete-account/:slug",
        destination: "/apps/:slug/deleteaccount",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
