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
    "freelance-invoice-uae",
    "how-to-negotiate-freelance-rates-uae",
    "best-ai-tools-uae-freelancers",
    "notion-setup-guide-freelancers",
    "how-to-get-clients-linkedin-uae",
    "freelancer-burnout-uae",
    "how-to-become-freelancer-uae",
    "best-coworking-spaces-dubai",
    "how-to-get-international-clients-uae",
    "digital-nomad-visa-vs-freelance-visa-uae",
    "emaratax-registration-freelancers-uae",
    "how-much-do-uae-freelancers-earn",
    "how-to-scale-freelance-business-uae",
    "freelance-proposal-template-uae",
    "best-tools-freelancers-uae-2026",
    "how-to-build-freelance-portfolio-uae",
    "freelance-health-insurance-uae",
    "best-accounting-software-freelancers-uae",
    "how-to-use-chatgpt-freelancers-uae",
    "freelance-passive-income-uae",
    "freelance-linkedin-profile-uae",
    "how-to-fire-a-client-uae",
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
    { url: `${base}/bundle`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/guides`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    ...productUrls,
    ...blogUrls,
  ];
}
