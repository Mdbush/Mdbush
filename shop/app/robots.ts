import { MetadataRoute } from "next";
import { SITE_URL as base } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
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
