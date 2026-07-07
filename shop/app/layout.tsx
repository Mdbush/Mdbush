import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SoloKit — Notion Templates, AI Prompts & SOPs for UAE Freelancers",
  description:
    "Ready-to-use Notion templates, AI prompt packs, and SOPs built for UAE freelancers. AED pricing. Instant download. 30-day guarantee.",
  openGraph: {
    title: "SoloKit",
    description: "Notion templates, AI prompts & SOPs for freelancers and solopreneurs.",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoloKit",
    description: "Notion templates, AI prompts & SOPs for freelancers and solopreneurs.",
  },
  verification: { google: "1WaNUPezAWlG0bqkFi4gn9YLZAZsA3mOjjBWtGSs_z0" },
  alternates: {
    types: { "application/rss+xml": "/feed.xml" },
  },
};

export const viewport: Viewport = {
  // Matches the dark announcement bar / header so mobile browser chrome blends in.
  themeColor: "#111827",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <div className="bg-gray-900 text-white text-center text-xs font-medium py-2 px-4">
          ✦ Limited launch pricing — save up to 30% on all products.{" "}
          <Link href="/#products" className="underline underline-offset-2 hover:text-gray-300 transition-colors">
            Browse products →
          </Link>
          <span className="mx-2 text-gray-500">·</span>
          <Link href="/free" className="underline underline-offset-2 hover:text-gray-300 transition-colors">
            10 free prompts
          </Link>
        </div>
        {children}
        <WhatsAppButton />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
