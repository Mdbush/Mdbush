export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // in fils (AED × 100)
  originalPrice?: number;
  lemonSqueezyVariantId: string;
  emoji: string;
  features: string[];
  category: string;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "1",
    slug: "freelancer-client-crm",
    name: "Freelancer Client CRM",
    tagline: "Never lose track of a lead, project, or invoice again.",
    description:
      "A complete Notion workspace for freelancers to manage clients, track projects, send proposals, and follow up on invoices — all in one place. Duplicate once and run your entire freelance business from it.",
    price: 17500,
    lemonSqueezyVariantId: process.env.LS_VARIANT_FREELANCER_CRM ?? "",
    emoji: "📋",
    features: [
      "Client database with deal stage tracking",
      "Project timeline & milestone tracker",
      "Invoice log with overdue alerts",
      "Weekly revenue dashboard",
      "10 plug-and-play email follow-up templates",
    ],
    category: "Notion Templates",
    badge: "Best Seller",
  },
  {
    id: "2",
    slug: "solopreneur-os",
    name: "Solopreneur OS",
    tagline: "Your entire business in one Notion workspace.",
    description:
      "The all-in-one operating system for solo business owners. Manage tasks, content, revenue, and 90-day goals in a single beautifully designed Notion workspace. Built for people who wear every hat.",
    price: 24900,
    lemonSqueezyVariantId: process.env.LS_VARIANT_SOLOPRENEUR_OS ?? "",
    emoji: "🚀",
    features: [
      "Revenue & expense dashboard (auto-calculates profit)",
      "90-day goal planner with weekly check-ins",
      "Content calendar (newsletter, social, YouTube)",
      "Daily & weekly planning system",
      "Idea capture → project pipeline",
    ],
    category: "Notion Templates",
  },
  {
    id: "3",
    slug: "ai-prompt-pack-pro",
    name: "AI Prompt Pack Pro",
    tagline: "200 tested prompts for freelancers, coaches & content creators.",
    description:
      "Stop wasting time on bad AI outputs. This pack gives you 200 battle-tested Claude & ChatGPT prompts for writing, marketing, client work, and content — organized by use case with example outputs included.",
    price: 10900,
    lemonSqueezyVariantId: process.env.LS_VARIANT_AI_PROMPTS ?? "",
    emoji: "🤖",
    features: [
      "200 prompts organized by category",
      "Works with Claude, ChatGPT, Gemini",
      "Writing & copywriting prompts (60)",
      "Client & proposal prompts (40)",
      "Content & social media prompts (60)",
      "Business strategy prompts (40)",
    ],
    category: "AI Tools",
    badge: "New",
  },
  {
    id: "4",
    slug: "sop-starter-pack",
    name: "SOP Starter Pack",
    tagline: "50 ready-to-use SOPs for online businesses.",
    description:
      "Stop reinventing the wheel every time you hire or delegate. 50 battle-tested Standard Operating Procedures covering client onboarding, content, finance, and team management — editable in Notion or Google Docs.",
    price: 17500,
    lemonSqueezyVariantId: process.env.LS_VARIANT_SOP_PACK ?? "",
    emoji: "📝",
    features: [
      "50 editable SOP templates",
      "Client onboarding flow (7 SOPs)",
      "Content creation workflow (12 SOPs)",
      "Finance & invoicing (8 SOPs)",
      "Hiring & team management (10 SOPs)",
      "Notion + Google Docs compatible",
    ],
    category: "SOPs & Systems",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(fils: number): string {
  return `AED ${(fils / 100).toFixed(0)}`;
}
