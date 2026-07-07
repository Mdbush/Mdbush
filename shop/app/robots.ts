import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Match sitemap.ts: only trust NEXT_PUBLIC_SITE_URL when it carries a scheme,
  // otherwise fall back to the canonical production origin. Prevents robots.txt
  // from advertising a localhost (or scheme-less) sitemap URL in production.
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const base = rawBase.startsWith("http") ? rawBase : "https://solokit.cloud";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/success",
        "/resources",
        "/tiktok",
        "/instagram",
        "/linkedin",
        "/facebook",
        "/email-setup",
        "/brand",
        "/api/",
      ],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
