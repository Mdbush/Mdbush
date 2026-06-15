import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: "Digital Tools Store — Templates, Prompts & Systems for Solopreneurs",
  description:
    "Ready-to-use Notion templates, AI prompt packs, and SOPs built for freelancers and solopreneurs. Stop building from scratch — plug in and go.",
  openGraph: {
    title: "Digital Tools Store",
    description: "Templates, prompts & systems for freelancers and solopreneurs.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
