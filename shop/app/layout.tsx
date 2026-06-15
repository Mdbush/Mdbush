import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "SoloKit — Notion Templates, AI Prompts & SOPs for Solopreneurs",
  description:
    "Ready-to-use Notion templates, AI prompt packs, and SOPs built for freelancers and solopreneurs. Stop building from scratch — plug in and go.",
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <div className="bg-gray-900 text-white text-center text-xs font-medium py-2 px-4">
          🔥 Launch Week — Save up to 30% off all products.{" "}
          <a href="/#products" className="underline underline-offset-2 hover:text-gray-300 transition-colors">
            Shop now →
          </a>
        </div>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
