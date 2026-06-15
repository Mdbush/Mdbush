import { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const productUrls = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogUrls = [
    "best-notion-templates-freelancers-uae",
    "ai-prompts-for-freelancers",
    "freelance-systems-uae",
    "sop-templates-freelancers-online-business",
    "how-to-price-freelance-services-uae",
    "get-freelance-clients-uae",
    "freelance-proposal-tips-uae",
    "late-payment-freelance-uae",
    "client-onboarding-freelance-uae",
    "freelance-vs-salary-uae",
    "freelance-visa-uae",
    "freelance-tax-uae",
    "best-banks-freelancers-uae",
    "freelance-rate-calculator-uae",
    "best-freelance-platforms-uae",
    "freelance-contract-template-uae",
  ].map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/free`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/start`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/affiliates`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...productUrls,
    ...blogUrls,
  ];
}
