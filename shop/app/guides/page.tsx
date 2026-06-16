import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Freelancer Guides & Resources — SoloKit",
  description:
    "330 practical guides for freelancers and solopreneurs in the UAE. Visa, tax, rates, clients, contracts, AI tools, and more. All free.",
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "UAE Freelancer Guides & Resources — SoloKit",
    description: "330 free guides covering everything a UAE freelancer needs to know.",
    type: "website",
    url: "/guides",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "UAE Freelancer Guides & Resources",
  description: "Practical guides for freelancers and solopreneurs in the UAE.",
  url: `${siteUrl}/guides`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
};

const categories = [
  {
    name: "Getting Started",
    description: "Start freelancing in the UAE the right way — legal, banking, and first clients.",
    guides: [
      { slug: "how-to-become-freelancer-uae", title: "How to Become a Freelancer in the UAE", time: "10 min" },
      { slug: "how-to-start-online-business-uae", title: "How to Start an Online Business in the UAE", time: "9 min" },
      { slug: "freelance-visa-uae", title: "How to Get a Freelance Visa in the UAE", time: "8 min" },
      { slug: "best-banks-freelancers-uae", title: "Best Bank Accounts for UAE Freelancers", time: "7 min" },
      { slug: "freelance-health-insurance-uae", title: "Health Insurance for UAE Freelancers", time: "7 min" },
      { slug: "freelance-vs-salary-uae", title: "Freelance vs Salary in the UAE: The Real Numbers", time: "7 min" },
      { slug: "how-to-transition-employee-to-freelancer-uae", title: "How to Transition from Employee to Freelancer in the UAE (2026 Guide)", time: "7 min" },
    ],
  },
  {
    name: "Tax & Finance",
    description: "UAE tax rules, VAT, corporate tax, EmaraTax, and how to stay compliant.",
    guides: [
      { slug: "freelance-tax-uae", title: "Do Freelancers Pay Tax in the UAE?", time: "8 min" },
      { slug: "emaratax-registration-freelancers-uae", title: "How to Register on EmaraTax as a Freelancer", time: "7 min" },
      { slug: "freelance-rate-calculator-uae", title: "Freelance Rate Calculator: How Much Should You Charge?", time: "8 min" },
      { slug: "freelance-invoice-uae", title: "How to Invoice Clients in the UAE", time: "5 min" },
      { slug: "best-accounting-software-freelancers-uae", title: "Best Accounting Software for UAE Freelancers", time: "6 min" },
      { slug: "corporate-tax-uae-freelancers-2026", title: "UAE Corporate Tax 2026 for Freelancers: What You Need to Know", time: "8 min" },
      { slug: "freelance-accountant-uae", title: "Do UAE Freelancers Need an Accountant?", time: "7 min" },
      { slug: "uae-freelance-tax-registration", title: "UAE Freelance Tax Registration: VAT, Corporate Tax & EmaraTax (2026)", time: "8 min" },
      { slug: "freelance-invoice-template-uae", title: "Freelance Invoice Template for UAE Clients (What to Include + AED Format)", time: "6 min" },
      { slug: "how-to-invoice-international-clients-uae", title: "How to Invoice International Clients as a UAE Freelancer (2026)", time: "8 min" },
      { slug: "how-to-manage-freelance-finances-uae", title: "How to Manage Your Finances as a UAE Freelancer (2026): AED Budgeting & Cash Flow Guide", time: "9 min" },
      { slug: "how-to-manage-cash-flow-freelance-uae", title: "How to Manage Cash Flow as a UAE Freelancer (2026 Guide)", time: "7 min" },
      { slug: "how-to-get-paid-in-foreign-currency-uae", title: "How UAE Freelancers Get Paid in Foreign Currency (USD, EUR, GBP) — 2026", time: "7 min" },
    ],
  },
  {
    name: "Getting Clients",
    description: "LinkedIn, outreach, platforms, proposals, and referral systems that work in the UAE.",
    guides: [
      { slug: "get-freelance-clients-uae", title: "How to Get Freelance Clients in the UAE", time: "7 min" },
      { slug: "how-to-get-clients-linkedin-uae", title: "How to Get Clients on LinkedIn in the UAE", time: "7 min" },
      { slug: "freelance-linkedin-profile-uae", title: "How to Optimize Your LinkedIn Profile as a UAE Freelancer", time: "8 min" },
      { slug: "how-to-get-international-clients-uae", title: "How to Get International Clients as a UAE Freelancer", time: "7 min" },
      { slug: "best-freelance-platforms-uae", title: "Best Freelance Platforms in the UAE", time: "8 min" },
      { slug: "how-to-build-freelance-portfolio-uae", title: "How to Build a Freelance Portfolio in the UAE", time: "7 min" },
      { slug: "how-to-write-freelance-bio-uae", title: "How to Write a Freelance Bio That Gets You Hired in the UAE", time: "6 min" },
      { slug: "get-referrals-freelance-uae", title: "How to Get Referrals as a UAE Freelancer: A System That Works", time: "7 min" },
      { slug: "personal-brand-freelancer-uae", title: "How to Build a Personal Brand as a UAE Freelancer", time: "8 min" },
      { slug: "how-to-get-uae-clients-from-abroad", title: "How to Get UAE Clients from Abroad (Remote Freelancing)", time: "8 min" },
      { slug: "uae-freelance-community-groups", title: "UAE Freelance Communities & Groups (Where to Find Your Network)", time: "5 min" },
      { slug: "how-to-create-freelance-website-uae", title: "How to Create a Freelance Website in the UAE (What to Include + Tools)", time: "7 min" },
      { slug: "how-to-get-speaking-engagements-uae", title: "How to Get Speaking Engagements as a UAE Freelancer (2026 Guide)", time: "8 min" },
      { slug: "how-to-use-linkedin-ads-freelancers-uae", title: "How UAE Freelancers Can Use LinkedIn Ads to Get B2B Clients (2026)", time: "8 min" },
      { slug: "how-to-get-testimonials-uae", title: "How to Get Client Testimonials as a UAE Freelancer (Scripts & System)", time: "6 min" },
      { slug: "how-to-build-freelance-waitlist-uae", title: "How to Build a Waitlist as a UAE Freelancer (Be Booked Out in Advance)", time: "7 min" },
      { slug: "how-to-get-corporate-clients-uae", title: "How to Get Corporate Clients as a UAE Freelancer (2026 Guide)", time: "9 min" },
      { slug: "how-to-win-retainer-clients-uae", title: "How to Win Retainer Clients as a UAE Freelancer (2026 Guide)", time: "8 min" },
      { slug: "how-to-use-upwork-uae", title: "How to Use Upwork as a UAE Freelancer (2026 Guide): Getting Clients", time: "8 min" },
      { slug: "how-to-build-personal-brand-linkedin-uae", title: "How to Build a Personal Brand on LinkedIn in the UAE (2026 Guide)", time: "9 min" },
      { slug: "how-to-use-fiverr-uae", title: "How to Use Fiverr as a UAE Freelancer (2026 Guide): Getting Clients", time: "8 min" },
      { slug: "how-to-get-first-freelance-client-uae", title: "How to Get Your First Freelance Client in the UAE (2026 Guide)", time: "8 min" },
      { slug: "how-to-write-freelance-proposal-uae", title: "How to Write a Freelance Proposal That Wins Clients in the UAE (2026)", time: "9 min" },
      { slug: "how-to-manage-client-expectations-uae", title: "How to Manage Client Expectations as a UAE Freelancer (2026 Guide)", time: "8 min" },
      { slug: "how-to-negotiate-contracts-freelance-uae", title: "How to Negotiate Contracts as a UAE Freelancer (2026): Scripts & Tactics", time: "9 min" },
      { slug: "how-to-build-email-list-freelancers-uae", title: "How to Build an Email List as a UAE Freelancer (2026): From Zero to Warm Leads", time: "8 min" },
      { slug: "how-to-ask-for-referrals-uae", title: "How to Ask for Referrals as a UAE Freelancer (2026): Scripts That Work", time: "7 min" },
      { slug: "how-to-upsell-freelance-clients-uae", title: "How to Upsell Existing Freelance Clients in the UAE (2026): Expand Your Revenue", time: "7 min" },
      { slug: "how-to-get-more-freelance-reviews-uae", title: "How to Get More Reviews & Testimonials as a UAE Freelancer (2026)", time: "6 min" },
      { slug: "how-to-write-linkedin-content-uae", title: "How to Write LinkedIn Content That Gets Results as a UAE Freelancer (2026)", time: "7 min" },
      { slug: "how-to-build-freelance-authority-uae", title: "How to Build Authority as a UAE Freelancer (2026 Guide)", time: "7 min" },
      { slug: "how-to-get-clients-without-social-media-uae", title: "How to Get Freelance Clients Without Social Media in the UAE (2026)", time: "7 min" },
    ],
  },
  {
    name: "Pricing & Rates",
    description: "Set the right rates, negotiate with confidence, and stop undercharging.",
    guides: [
      { slug: "how-to-price-freelance-services-uae", title: "How to Price Your Freelance Services in the UAE", time: "6 min" },
      { slug: "how-to-negotiate-freelance-rates-uae", title: "How to Negotiate Rates Without Losing the Client", time: "6 min" },
      { slug: "how-much-do-uae-freelancers-earn", title: "How Much Do Freelancers Earn in the UAE?", time: "7 min" },
      { slug: "how-to-scale-freelance-business-uae", title: "How to Scale Your Freelance Business to AED 100K/Month", time: "9 min" },
      { slug: "how-to-raise-rates-existing-clients-uae", title: "How to Raise Your Freelance Rates With Existing Clients", time: "7 min" },
      { slug: "freelance-developer-rates-uae", title: "Freelance Developer Rates in the UAE (2026): How Much Should You Charge?", time: "8 min" },
      { slug: "freelance-designer-rates-uae", title: "Freelance Designer Rates in the UAE (2026): What to Charge", time: "8 min" },
      { slug: "freelance-marketing-rates-uae", title: "Freelance Marketing Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-copywriter-rates-uae", title: "Freelance Copywriter Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-consultant-rates-uae", title: "Freelance Consultant Rates in the UAE (2026): What to Charge", time: "8 min" },
      { slug: "freelance-photographer-rates-uae", title: "Freelance Photographer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-video-editor-rates-uae", title: "Freelance Video Editor Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-project-manager-rates-uae", title: "Freelance Project Manager Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-social-media-manager-rates-uae", title: "Freelance Social Media Manager Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-hr-consultant-uae", title: "Freelance HR Consultant in the UAE: Rates & How to Start", time: "8 min" },
      { slug: "how-to-price-yourself-as-freelancer-uae", title: "How to Price Yourself as a Freelancer in the UAE: The Complete System", time: "9 min" },
      { slug: "freelance-niche-uae", title: "How to Find Your Freelance Niche in the UAE (And Charge More for It)", time: "8 min" },
      { slug: "freelance-rates-increase-strategy-uae", title: "How to Increase Your Freelance Revenue Without More Clients", time: "8 min" },
      { slug: "freelance-writer-rates-uae", title: "Freelance Writer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-seo-consultant-rates-uae", title: "Freelance SEO Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-pr-consultant-rates-uae", title: "Freelance PR Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-data-analyst-rates-uae", title: "Freelance Data Analyst Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-ux-designer-rates-uae", title: "Freelance UX/UI Designer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "virtual-assistant-rates-uae", title: "Virtual Assistant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-trainer-rates-uae", title: "Freelance Trainer & Coach Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-translator-rates-uae", title: "Freelance Translator & Interpreter Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-architect-rates-uae", title: "Freelance Architect & Interior Designer Rates in the UAE (2026)", time: "8 min" },
      { slug: "freelance-legal-consultant-rates-uae", title: "Freelance Legal Consultant Rates in the UAE (2026): What to Charge", time: "8 min" },
      { slug: "freelance-cybersecurity-consultant-uae", title: "Freelance Cybersecurity Consultant Rates in the UAE (2026): What to Charge", time: "8 min" },
      { slug: "freelance-financial-advisor-rates-uae", title: "Freelance Financial Advisor Rates in the UAE (2026): What to Charge", time: "8 min" },
      { slug: "freelance-supply-chain-consultant-uae", title: "Freelance Supply Chain & Logistics Consultant Rates in the UAE (2026)", time: "8 min" },
      { slug: "freelance-motion-designer-rates-uae", title: "Freelance Motion Designer & Animator Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-event-planner-rates-uae", title: "Freelance Event Planner Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-brand-strategist-rates-uae", title: "Freelance Brand Strategist Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-it-consultant-rates-uae", title: "Freelance IT Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-recruitment-consultant-uae", title: "Freelance Recruitment Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-operations-consultant-uae", title: "Freelance Operations Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-medical-writer-rates-uae", title: "Freelance Medical Writer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-real-estate-consultant-uae", title: "Freelance Real Estate Consultant Rates in the UAE (2026): What to Charge", time: "8 min" },
      { slug: "freelance-elearning-developer-rates-uae", title: "Freelance eLearning Developer & Instructional Designer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-management-consultant-uae", title: "Freelance Management Consultant Rates in the UAE (2026): What to Charge", time: "8 min" },
      { slug: "how-to-price-retainer-clients-uae", title: "How to Price Retainer Clients as a UAE Freelancer (The Complete System)", time: "8 min" },
      { slug: "freelance-graphic-designer-rates-uae", title: "Freelance Graphic Designer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-digital-marketing-manager-uae", title: "Freelance Digital Marketing Manager Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-interior-design-rates-uae", title: "Freelance Interior Designer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-fashion-stylist-rates-uae", title: "Freelance Fashion Stylist Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-voiceover-artist-rates-uae", title: "Freelance Voiceover Artist Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-3d-artist-rates-uae", title: "Freelance 3D Artist Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-content-creator-rates-uae", title: "Freelance Content Creator Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-web-developer-rates-uae", title: "Freelance Web Developer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-podcast-producer-rates-uae", title: "Freelance Podcast Producer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-makeup-artist-rates-uae", title: "Freelance Makeup Artist Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-animation-rates-uae", title: "Freelance Animation Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-life-coach-rates-uae", title: "Life Coach & Executive Coach Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-music-producer-rates-uae", title: "Freelance Music Producer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-nutritionist-rates-uae", title: "Freelance Nutritionist & Dietitian Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-fitness-trainer-rates-uae", title: "Freelance Personal Trainer & Fitness Coach Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-business-coach-rates-uae", title: "Freelance Business Coach Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-photographer-videographer-package-uae", title: "Freelance Photography & Videography Package Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-set-freelance-prices-uae", title: "How to Set Your Freelance Prices in the UAE: The Complete System (2026)", time: "9 min" },
      { slug: "freelance-social-media-strategist-rates-uae", title: "Freelance Social Media Strategist Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-data-scientist-rates-uae", title: "Freelance Data Scientist Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-training-development-rates-uae", title: "Freelance Training & L&D Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-accountant-rates-uae", title: "Freelance Accountant & CFO Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-public-speaker-rates-uae", title: "Freelance Public Speaker Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-cybersecurity-rates-uae", title: "Freelance Cybersecurity Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-devops-engineer-rates-uae", title: "Freelance DevOps Engineer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-product-manager-rates-uae", title: "Freelance Product Manager Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-ai-engineer-rates-uae", title: "Freelance AI Engineer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-technical-writer-rates-uae", title: "Freelance Technical Writer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-scrum-master-rates-uae", title: "Freelance Scrum Master & Agile Coach Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-excel-consultant-rates-uae", title: "Freelance Excel & Data Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-cloud-architect-rates-uae", title: "Freelance Cloud Architect Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-erp-consultant-rates-uae", title: "Freelance ERP Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-network-engineer-rates-uae", title: "Freelance Network Engineer Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-salesforce-consultant-rates-uae", title: "Freelance Salesforce Consultant Rates in the UAE (2026): What to Charge", time: "7 min" },
      { slug: "freelance-sustainability-consultant-rates-uae", title: "Freelance Sustainability Consultant Rates in the UAE (2026): ESG & Green Business Fees", time: "8 min" },
      { slug: "freelance-tax-advisor-rates-uae", title: "Freelance Tax Advisor Rates in the UAE (2026): Corporate Tax & VAT Consulting Fees", time: "8 min" },
      { slug: "freelance-immigration-consultant-rates-uae", title: "Freelance Immigration Consultant Rates in the UAE (2026): PRO & Visa Advisory Fees", time: "7 min" },
      { slug: "freelance-wealth-manager-rates-uae", title: "Freelance Wealth Manager & Private Banker Rates in the UAE (2026)", time: "8 min" },
      { slug: "freelance-change-management-consultant-rates-uae", title: "Freelance Change Management Consultant Rates in the UAE (2026)", time: "8 min" },
      { slug: "freelance-strategy-consultant-rates-uae", title: "Freelance Strategy Consultant Rates in the UAE (2026): Corporate & Business Strategy Fees", time: "8 min" },
      { slug: "freelance-compliance-consultant-rates-uae", title: "Freelance Compliance Consultant Rates in the UAE (2026): AML, Regulatory & Risk Fees", time: "8 min" },
      { slug: "freelance-risk-management-consultant-rates-uae", title: "Freelance Risk Management Consultant Rates in the UAE (2026): ERM & Risk Advisory Fees", time: "7 min" },
      { slug: "freelance-qa-engineer-rates-uae", title: "Freelance QA Engineer Rates in the UAE (2026): Software Testing & Automation Fees", time: "7 min" },
      { slug: "freelance-ios-developer-rates-uae", title: "Freelance iOS Developer Rates in the UAE (2026): Swift & App Development Fees", time: "7 min" },
      { slug: "freelance-android-developer-rates-uae", title: "Freelance Android Developer Rates in the UAE (2026): Kotlin & App Development Fees", time: "7 min" },
      { slug: "freelance-fullstack-developer-rates-uae", title: "Freelance Full-Stack Developer Rates in the UAE (2026): What to Charge", time: "8 min" },
      { slug: "freelance-machine-learning-engineer-rates-uae", title: "Freelance Machine Learning Engineer Rates in the UAE (2026): ML & AI Development Fees", time: "8 min" },
      { slug: "freelance-frontend-developer-rates-uae", title: "Freelance Front-End Developer Rates in the UAE (2026): React, Vue & UI Engineering Fees", time: "7 min" },
      { slug: "freelance-backend-developer-rates-uae", title: "Freelance Back-End Developer Rates in the UAE (2026): Node.js, Python & API Fees", time: "7 min" },
      { slug: "freelance-database-administrator-rates-uae", title: "Freelance Database Administrator Rates in the UAE (2026): DBA & Data Engineering Fees", time: "7 min" },
      { slug: "how-to-price-software-project-uae", title: "How to Price a Software Development Project in the UAE (2026): Fixed vs Time & Materials", time: "9 min" },
      { slug: "freelance-ui-engineer-rates-uae", title: "Freelance UI Engineer Rates in the UAE (2026): Design Systems & Component Library Fees", time: "7 min" },
      { slug: "freelance-sap-consultant-rates-uae", title: "Freelance SAP Consultant Rates in the UAE (2026): FICO, MM, SD & Implementation Fees", time: "8 min" },
      { slug: "freelance-penetration-tester-rates-uae", title: "Freelance Penetration Tester Rates in the UAE (2026): Ethical Hacking & Security Testing Fees", time: "8 min" },
      { slug: "freelance-microsoft-365-consultant-rates-uae", title: "Freelance Microsoft 365 Consultant Rates in the UAE (2026): M365, Teams & Azure AD Fees", time: "7 min" },
      { slug: "how-to-create-freelance-rate-card-uae", title: "How to Create a Freelance Rate Card in the UAE (2026): Templates & Pricing Strategy", time: "7 min" },
      { slug: "freelance-sharepoint-developer-rates-uae", title: "Freelance SharePoint Developer Rates in the UAE (2026): SPFx & Intranet Fees", time: "7 min" },
      { slug: "freelance-dynamics-365-consultant-rates-uae", title: "Freelance Dynamics 365 Consultant Rates in the UAE (2026): CRM & ERP Fees", time: "7 min" },
      { slug: "freelance-power-bi-developer-rates-uae", title: "Freelance Power BI Developer Rates in the UAE (2026): Data Analytics & BI Fees", time: "7 min" },
      { slug: "freelance-business-analyst-rates-uae", title: "Freelance Business Analyst Rates in the UAE (2026): BA & Requirements Fees", time: "7 min" },
      { slug: "freelance-azure-developer-rates-uae", title: "Freelance Azure Developer Rates in the UAE (2026): Cloud Engineering Fees", time: "7 min" },
      { slug: "freelance-it-support-rates-uae", title: "Freelance IT Support Rates in the UAE (2026): Helpdesk & Systems Admin Fees", time: "7 min" },
      { slug: "freelance-aws-developer-rates-uae", title: "Freelance AWS Developer Rates in the UAE (2026): Cloud Engineering Fees", time: "7 min" },
      { slug: "how-to-productize-freelance-services-uae", title: "How to Productize Your Freelance Services in the UAE (2026): Package & Scale", time: "7 min" },
      { slug: "freelance-google-cloud-engineer-rates-uae", title: "Freelance Google Cloud Engineer Rates in the UAE (2026): GCP Consulting Fees", time: "7 min" },
      { slug: "freelance-servicenow-developer-rates-uae", title: "Freelance ServiceNow Developer Rates in the UAE (2026): ITSM & Platform Fees", time: "7 min" },
      { slug: "freelance-tableau-developer-rates-uae", title: "Freelance Tableau Developer Rates in the UAE (2026): Data Viz & BI Fees", time: "7 min" },
      { slug: "freelance-low-code-developer-rates-uae", title: "Freelance Low-Code Developer Rates in the UAE (2026): Power Platform, OutSystems & Mendix Fees", time: "7 min" },
      { slug: "freelance-oracle-consultant-rates-uae", title: "Freelance Oracle Consultant Rates in the UAE (2026): ERP & Cloud Fees", time: "7 min" },
      { slug: "how-to-price-discovery-calls-uae", title: "Should UAE Freelancers Charge for Discovery Calls? (2026 Guide)", time: "7 min" },
      { slug: "freelance-ux-researcher-rates-uae", title: "Freelance UX Researcher Rates in the UAE (2026): User Research & Usability Fees", time: "7 min" },
      { slug: "freelance-no-code-developer-rates-uae", title: "Freelance No-Code Developer Rates in the UAE (2026): Webflow, Bubble & Builder Fees", time: "7 min" },
      { slug: "freelance-content-strategist-rates-uae", title: "Freelance Content Strategist Rates in the UAE (2026): Content Strategy & Editorial Fees", time: "7 min" },
      { slug: "freelance-social-media-content-creator-rates-uae", title: "Freelance Social Media Content Creator Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-influencer-marketing-rates-uae", title: "Freelance Influencer Marketing Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-agile-coach-rates-uae", title: "Freelance Agile Coach Rates in the UAE (2026): Agile Transformation & SAFe Fees", time: "7 min" },
      { slug: "freelance-cto-rates-uae", title: "Freelance & Fractional CTO Rates in the UAE (2026): Chief Technology Officer Fees", time: "8 min" },
      { slug: "how-to-package-freelance-services-uae", title: "How to Package Your Freelance Services in the UAE (2026): Tiers & Bundles", time: "7 min" },
      { slug: "freelance-diversity-inclusion-consultant-rates-uae", title: "Freelance Diversity & Inclusion Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-corporate-communications-rates-uae", title: "Freelance Corporate Communications Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-environment-health-safety-consultant-rates-uae", title: "Freelance EHS Consultant Rates in the UAE (2026): Environment, Health & Safety Fees", time: "7 min" },
      { slug: "freelance-interim-cfo-rates-uae", title: "Freelance & Fractional CFO Rates in the UAE (2026): Interim CFO & Finance Director Fees", time: "8 min" },
      { slug: "freelance-customer-success-manager-rates-uae", title: "Freelance Customer Success Manager Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-solutions-architect-rates-uae", title: "Freelance Solutions Architect Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-price-workshops-uae", title: "How to Price Freelance Workshops & Training Sessions in the UAE (2026)", time: "7 min" },
      { slug: "freelance-ai-consultant-rates-uae", title: "Freelance AI Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-product-designer-rates-uae", title: "Freelance Product Designer Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-price-equity-over-cash-uae", title: "Should UAE Freelancers Accept Equity Instead of Cash? (2026 Guide)", time: "7 min" },
      { slug: "freelance-business-development-consultant-rates-uae", title: "Freelance Business Development Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-data-engineer-rates-uae", title: "Freelance Data Engineer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-salesforce-developer-rates-uae", title: "Freelance Salesforce Developer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-healthcare-consultant-rates-uae", title: "Freelance Healthcare Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-infrastructure-engineer-rates-uae", title: "Freelance Infrastructure Engineer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-legal-tech-consultant-rates-uae", title: "Freelance Legal Tech Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-performance-marketer-rates-uae", title: "Freelance Performance Marketer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-insurance-consultant-rates-uae", title: "Freelance Insurance Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-sustainability-reporting-consultant-rates-uae", title: "Freelance Sustainability Reporting Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-treasury-consultant-rates-uae", title: "Freelance Treasury Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-investment-analyst-rates-uae", title: "Freelance Investment Analyst Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-supply-chain-director-rates-uae", title: "Freelance Supply Chain Director Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-media-buying-consultant-rates-uae", title: "Freelance Media Buying Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-clinical-research-consultant-rates-uae", title: "Freelance Clinical Research Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-crm-consultant-rates-uae", title: "Freelance CRM Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-price-discovery-workshops-uae", title: "How to Price and Sell Discovery Workshops as a UAE Freelancer (2026)", time: "7 min" },
      { slug: "freelance-environmental-consultant-rates-uae", title: "Freelance Environmental Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-coo-rates-uae", title: "Freelance & Fractional COO Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-tax-consultant-rates-uae", title: "Freelance Tax Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-hospitality-consultant-rates-uae", title: "Freelance Hospitality Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-education-consultant-rates-uae", title: "Freelance Education Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-talent-acquisition-consultant-rates-uae", title: "Freelance Talent Acquisition Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-negotiate-equity-compensation-uae", title: "How UAE Freelancers Negotiate Equity Compensation (2026 Guide)", time: "7 min" },
      { slug: "freelance-landscape-architect-rates-uae", title: "Freelance Landscape Architect Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-urban-planner-rates-uae", title: "Freelance Urban Planner Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-wellbeing-consultant-rates-uae", title: "Freelance Wellbeing Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-packaging-designer-rates-uae", title: "Freelance Packaging Designer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-maritime-consultant-rates-uae", title: "Freelance Maritime Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-aviation-consultant-rates-uae", title: "Freelance Aviation Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-luxury-brand-consultant-rates-uae", title: "Freelance Luxury Brand Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-real-estate-valuer-rates-uae", title: "Freelance Real Estate Valuer & Property Consultant Rates UAE (2026)", time: "7 min" },
      { slug: "freelance-telecoms-consultant-rates-uae", title: "Freelance Telecoms Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-supply-chain-consultant-rates-uae", title: "Freelance Supply Chain Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-raise-your-rates-uae", title: "How to Raise Your Freelance Rates in the UAE (2026 Guide)", time: "7 min" },
      { slug: "freelance-interior-stylist-rates-uae", title: "Freelance Interior Stylist Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-procurement-consultant-rates-uae", title: "Freelance Procurement Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-esg-consultant-rates-uae", title: "Freelance ESG Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-energy-consultant-rates-uae", title: "Freelance Energy Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-healthcare-it-consultant-rates-uae", title: "Freelance Healthcare IT Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-blockchain-developer-rates-uae", title: "Freelance Blockchain Developer Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-create-freelance-packages-uae", title: "How to Create Freelance Service Packages in the UAE (2026 Guide)", time: "7 min" },
      { slug: "freelance-learning-development-consultant-rates-uae", title: "Freelance Learning & Development Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-civil-engineer-rates-uae", title: "Freelance Civil Engineer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-executive-coach-rates-uae", title: "Freelance Executive Coach Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-wedding-planner-rates-uae", title: "Freelance Wedding Planner Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-personal-trainer-rates-uae", title: "Freelance Personal Trainer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-mechanical-engineer-rates-uae", title: "Freelance Mechanical Engineer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-quantity-surveyor-rates-uae", title: "Freelance Quantity Surveyor Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-electrical-engineer-rates-uae", title: "Freelance Electrical Engineer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-food-photographer-rates-uae", title: "Freelance Food Photographer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-game-developer-rates-uae", title: "Freelance Game Developer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-organizational-development-consultant-rates-uae", title: "Freelance Organizational Development Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-payroll-consultant-rates-uae", title: "Freelance Payroll Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-negotiate-freelance-rates-uae", title: "How to Negotiate Freelance Rates as a UAE Freelancer (2026 Guide)", time: "7 min" },
      { slug: "freelance-facilities-management-consultant-rates-uae", title: "Freelance Facilities Management Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-yoga-instructor-rates-uae", title: "Freelance Yoga Instructor Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-geotechnical-engineer-rates-uae", title: "Freelance Geotechnical Engineer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-drone-pilot-rates-uae", title: "Freelance Drone Pilot Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-public-relations-consultant-rates-uae", title: "Freelance PR Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-recruitment-consultant-rates-uae", title: "Freelance Recruitment Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-interior-architect-rates-uae", title: "Freelance Interior Architect Rates in the UAE (2026)", time: "7 min" },
      { slug: "how-to-value-based-pricing-uae", title: "Value-Based Pricing for UAE Freelancers (2026 Guide)", time: "7 min" },
      { slug: "freelance-data-engineer-rates-uae", title: "Freelance Data Engineer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-environmental-consultant-rates-uae", title: "Freelance Environmental Consultant Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-investment-banker-rates-uae", title: "Freelance Investment Banker & M&A Advisor Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-clinical-psychologist-rates-uae", title: "Freelance Clinical Psychologist Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-speech-therapist-rates-uae", title: "Freelance Speech Therapist Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-structural-engineer-rates-uae", title: "Freelance Structural Engineer Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-occupational-therapist-rates-uae", title: "Freelance Occupational Therapist Rates in the UAE (2026)", time: "7 min" },
      { slug: "freelance-physiotherapist-rates-uae", title: "Freelance Physiotherapist Rates in the UAE (2026)", time: "7 min" },
    ],
  },
  {
    name: "Client Work & Proposals",
    description: "Win more projects, protect your time, and get paid on time.",
    guides: [
      { slug: "freelance-proposal-tips-uae", title: "How to Write a Proposal That Wins Clients in the UAE", time: "7 min" },
      { slug: "freelance-proposal-template-uae", title: "Freelance Proposal Template UAE (Copy-Paste)", time: "6 min" },
      { slug: "client-onboarding-freelance-uae", title: "Client Onboarding Process for UAE Freelancers", time: "6 min" },
      { slug: "late-payment-freelance-uae", title: "How to Chase Late Payments as a Freelancer in the UAE", time: "6 min" },
      { slug: "how-to-fire-a-client-uae", title: "How to Fire a Client as a UAE Freelancer (Without Burning Bridges)", time: "6 min" },
      { slug: "freelance-contract-template-uae", title: "Freelance Contract: 9 Clauses You Must Include", time: "9 min" },
      { slug: "client-communication-tips-freelancers-uae", title: "Client Communication for UAE Freelancers: Scripts That Work", time: "8 min" },
      { slug: "freelance-email-templates-uae", title: "Freelance Email Templates for UAE Clients (Copy-Paste)", time: "7 min" },
      { slug: "client-red-flags-uae", title: "10 Client Red Flags for UAE Freelancers (How to Spot Them Before You Sign)", time: "7 min" },
      { slug: "how-to-get-paid-faster-uae", title: "How to Get Paid Faster as a UAE Freelancer (7 Practical Strategies)", time: "6 min" },
      { slug: "how-to-handle-scope-creep-uae", title: "How to Handle Scope Creep as a UAE Freelancer (Scripts & Systems)", time: "7 min" },
      { slug: "how-to-write-case-studies-uae", title: "How to Write Case Studies That Win UAE Clients (With Template)", time: "7 min" },
      { slug: "how-to-deal-with-difficult-clients-uae", title: "How to Deal With Difficult Clients as a UAE Freelancer (2026): Scripts & Strategies", time: "9 min" },
      { slug: "how-to-handle-payment-disputes-uae", title: "How to Handle Payment Disputes as a Freelancer in the UAE (2026 Guide)", time: "7 min" },
      { slug: "how-to-set-payment-terms-uae", title: "How to Set Payment Terms as a UAE Freelancer (2026 Guide)", time: "7 min" },
      { slug: "how-to-run-discovery-workshops-uae", title: "How to Run Discovery Workshops with UAE Clients (2026 Guide)", time: "7 min" },
      { slug: "how-to-protect-intellectual-property-uae", title: "How UAE Freelancers Protect Their Intellectual Property (2026 Guide)", time: "7 min" },
      { slug: "how-to-manage-client-feedback-rounds-uae", title: "How UAE Freelancers Manage Client Feedback Rounds (2026)", time: "7 min" },
      { slug: "how-to-handle-slow-paying-clients-uae", title: "How to Handle Slow-Paying Clients as a UAE Freelancer (2026)", time: "7 min" },
    ],
  },
  {
    name: "Systems & Productivity",
    description: "Notion, SOPs, and systems that stop every project from starting from scratch.",
    guides: [
      { slug: "freelance-systems-uae", title: "Why UAE Freelancers Stay Stuck at AED 10K/Month", time: "6 min" },
      { slug: "notion-setup-guide-freelancers", title: "Notion Setup Guide for UAE Freelancers", time: "6 min" },
      { slug: "best-notion-templates-freelancers-uae", title: "Best Notion Templates for Freelancers in the UAE", time: "5 min" },
      { slug: "sop-templates-freelancers-online-business", title: "Best SOP Templates for Freelancers and Online Businesses", time: "5 min" },
      { slug: "best-tools-freelancers-uae-2026", title: "Best Tools for UAE Freelancers (2026): The Complete Stack", time: "8 min" },
      { slug: "best-time-tracking-apps-freelancers-uae", title: "Best Time Tracking Apps for UAE Freelancers (2026)", time: "6 min" },
      { slug: "freelance-morning-routine-uae", title: "The Freelancer Morning Routine That Works in the UAE", time: "6 min" },
      { slug: "best-project-management-tools-freelancers", title: "Best Project Management Tools for Freelancers in the UAE (2026)", time: "6 min" },
      { slug: "how-to-manage-multiple-clients-uae", title: "How to Manage Multiple Clients as a UAE Freelancer (Without Burning Out)", time: "7 min" },
      { slug: "how-to-get-government-contracts-uae", title: "How to Win Government Contracts as a UAE Freelancer (2026 Guide)", time: "9 min" },
      { slug: "how-to-use-ai-write-proposals-uae", title: "How to Use AI to Write Freelance Proposals That Win UAE Clients", time: "7 min" },
      { slug: "how-to-sell-digital-products-uae", title: "How to Create and Sell Digital Products as a UAE Freelancer (2026 Guide)", time: "8 min" },
      { slug: "how-to-build-email-list-uae", title: "How to Build an Email List as a UAE Freelancer (From Zero to 1,000 Subscribers)", time: "7 min" },
      { slug: "how-to-cold-email-clients-uae", title: "Cold Email for UAE Freelancers: Scripts That Get Replies (2026)", time: "8 min" },
      { slug: "how-to-use-notion-as-crm-uae", title: "How to Use Notion as a CRM for UAE Freelancers (2026): Client Tracking System", time: "8 min" },
      { slug: "how-to-set-up-whatsapp-business-uae", title: "How UAE Freelancers Use WhatsApp Business for Client Communication (2026)", time: "7 min" },
      { slug: "how-to-use-ai-for-client-onboarding-uae", title: "How UAE Freelancers Use AI for Client Onboarding (2026)", time: "7 min" },
      { slug: "how-to-track-freelance-time-uae", title: "How UAE Freelancers Track Time Efficiently (2026 Guide)", time: "7 min" },
    ],
  },
  {
    name: "AI Tools",
    description: "Use AI to write faster, win more clients, and spend less time on admin.",
    guides: [
      { slug: "best-ai-tools-uae-freelancers", title: "Best AI Tools for UAE Freelancers in 2026", time: "5 min" },
      { slug: "ai-prompts-for-freelancers", title: "How to Use AI to Do More Freelance Work in Less Time", time: "7 min" },
      { slug: "how-to-use-chatgpt-freelancers-uae", title: "How to Use ChatGPT as a UAE Freelancer (Practical Guide)", time: "7 min" },
      { slug: "how-to-use-claude-ai-freelancers-uae", title: "How to Use Claude AI as a UAE Freelancer: 15 Practical Use Cases", time: "8 min" },
      { slug: "how-to-use-notion-ai-freelancers-uae", title: "How to Use Notion AI as a UAE Freelancer: 12 Practical Use Cases", time: "7 min" },
      { slug: "how-to-use-gemini-ai-freelancers-uae", title: "How to Use Google Gemini as a UAE Freelancer: 12 Practical Use Cases", time: "7 min" },
      { slug: "how-to-use-ai-for-freelance-proposals-uae", title: "How to Use AI to Write Better Freelance Proposals in the UAE (2026)", time: "8 min" },
      { slug: "how-to-use-ai-freelance-productivity-uae", title: "How to Use AI to 10x Your Freelance Productivity in the UAE (2026)", time: "7 min" },
    ],
  },
  {
    name: "Visa & Legal",
    description: "Freelance permits, digital nomad visas, and staying legal in the UAE.",
    guides: [
      { slug: "digital-nomad-visa-vs-freelance-visa-uae", title: "Digital Nomad Visa vs Freelance Visa UAE", time: "6 min" },
      { slug: "best-coworking-spaces-dubai", title: "Best Coworking Spaces in Dubai for Freelancers", time: "6 min" },
      { slug: "rakez-vs-ifza-freelance-license-uae", title: "RAKEZ vs IFZA vs Meydan: Best Free Zone for UAE Freelancers", time: "9 min" },
      { slug: "uae-golden-visa-freelancers", title: "UAE Golden Visa for Freelancers: Requirements & How to Apply", time: "8 min" },
      { slug: "best-coworking-spaces-abu-dhabi", title: "Best Coworking Spaces in Abu Dhabi for Freelancers (2026)", time: "7 min" },
      { slug: "best-virtual-offices-dubai", title: "Best Virtual Offices in Dubai for Freelancers (2026)", time: "6 min" },
      { slug: "freelance-work-permit-vs-trade-license-uae", title: "Freelance Work Permit vs Trade License in the UAE", time: "8 min" },
      { slug: "dubai-free-zone-comparison-freelancers", title: "Dubai Free Zone Comparison for Freelancers (2026): Costs, Visas & Best Options", time: "9 min" },
    ],
  },
  {
    name: "Business & Mindset",
    description: "Stay sustainable, avoid burnout, and build a business that lasts.",
    guides: [
      { slug: "freelancer-burnout-uae", title: "Freelancer Burnout in Dubai: How to Recognize and Fix It", time: "6 min" },
      { slug: "freelance-vs-salary-uae", title: "Freelance vs Salary in the UAE: The Real Numbers", time: "7 min" },
      { slug: "freelance-passive-income-uae", title: "How UAE Freelancers Build Passive Income", time: "8 min" },
      { slug: "freelance-financial-planning-uae", title: "Financial Planning for UAE Freelancers: Save, Invest, and Retire", time: "8 min" },
      { slug: "freelance-work-life-balance-uae", title: "Work-Life Balance for UAE Freelancers: Protect Your Time Without Losing Clients", time: "6 min" },
      { slug: "freelance-dry-spells-uae", title: "How to Handle Dry Spells as a UAE Freelancer (When Work Goes Quiet)", time: "7 min" },
      { slug: "freelance-goals-setting-uae", title: "Goal Setting for UAE Freelancers: How to Plan a Profitable Year", time: "7 min" },
      { slug: "how-to-build-freelance-agency-uae", title: "How to Build a Freelance Agency in the UAE: From Solo to Studio", time: "9 min" },
      { slug: "how-to-set-freelance-boundaries-uae", title: "How to Set Client Boundaries as a UAE Freelancer (Without Losing Work)", time: "7 min" },
      { slug: "how-to-find-cofounder-uae", title: "How to Find a Co-Founder in the UAE (2026): A Practical Guide", time: "9 min" },
      { slug: "how-to-build-passive-income-freelancer-uae", title: "How to Build Passive Income as a UAE Freelancer (2026 Guide)", time: "8 min" },
      { slug: "how-to-build-a-freelance-team-uae", title: "How to Build a Freelance Team in the UAE (2026): Subcontracting & Scaling Guide", time: "9 min" },
      { slug: "how-to-work-from-home-uae", title: "How to Work From Home as a UAE Freelancer (2026): Setup, Productivity & Legal Guide", time: "8 min" },
      { slug: "how-to-subcontract-freelance-work-uae", title: "How to Subcontract Freelance Work in the UAE (2026 Guide)", time: "7 min" },
      { slug: "how-to-build-recurring-revenue-uae", title: "How UAE Freelancers Build Recurring Revenue (2026 Guide)", time: "8 min" },
      { slug: "how-to-grow-freelance-revenue-uae", title: "How to Grow Your Freelance Revenue in the UAE Without Working More Hours (2026)", time: "8 min" },
      { slug: "how-to-create-online-course-uae", title: "How to Create and Sell an Online Course as a UAE Freelancer (2026)", time: "7 min" },
      { slug: "how-to-manage-freelance-subcontractors-uae", title: "How to Manage Freelance Subcontractors in the UAE (2026 Guide)", time: "7 min" },
      { slug: "how-to-create-a-freelance-niche-uae", title: "How to Create a Freelance Niche in the UAE (2026 Guide)", time: "7 min" },
      { slug: "how-to-productize-freelance-services-uae", title: "How to Productize Your Freelance Services in the UAE (2026 Guide)", time: "7 min" },
      { slug: "how-to-build-freelance-team-uae", title: "How to Build a Freelance Team in the UAE (2026 Guide)", time: "7 min" },
      { slug: "how-to-win-without-being-cheapest-uae", title: "How to Win Freelance Clients Without Being the Cheapest in the UAE (2026)", time: "7 min" },
    ],
  },
];

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-14">

        {/* Hero */}
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Free Resources</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-3">UAE Freelancer Guides</h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            330 practical guides covering everything you need to know about freelancing in Dubai and Abu Dhabi.
            Written specifically for the UAE market — AED pricing, local laws, free zone context.
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`#${cat.name.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}`}
              className="text-xs font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-colors"
            >
              {cat.name}
            </a>
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-14">
          {categories.map((cat) => (
            <section
              key={cat.name}
              id={cat.name.toLowerCase().replace(/\s+/g, "-").replace(/[&]/g, "and")}
            >
              <div className="mb-5">
                <h2 className="text-xl font-bold text-gray-900">{cat.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {cat.guides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/blog/${guide.slug}`}
                    className="group flex items-start justify-between gap-3 border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all"
                  >
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 leading-snug">
                      {guide.title}
                    </p>
                    <span className="text-xs text-gray-400 shrink-0 whitespace-nowrap mt-0.5">{guide.time}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Products CTA */}
        <section className="mt-16 bg-gray-950 text-white rounded-2xl p-8 text-center">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Ready to take action?</p>
          <h2 className="text-2xl font-bold mb-3">Turn knowledge into systems</h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            The guides tell you what to do. SoloKit products give you the tools to do it in minutes — not hours.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm max-w-2xl mx-auto">
            {[
              { emoji: "📋", name: "Client CRM", slug: "freelancer-client-crm", price: "AED 175" },
              { emoji: "🚀", name: "Solopreneur OS", slug: "solopreneur-os", price: "AED 249" },
              { emoji: "🤖", name: "AI Prompts", slug: "ai-prompt-pack-pro", price: "AED 109" },
              { emoji: "📝", name: "SOP Pack", slug: "sop-starter-pack", price: "AED 175" },
            ].map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="bg-white/10 border border-white/20 rounded-xl p-3 hover:bg-white/20 transition-colors text-center"
              >
                <div className="text-2xl mb-1">{p.emoji}</div>
                <p className="text-xs text-gray-300">{p.name}</p>
                <p className="font-bold text-white">{p.price}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/#products"
            className="inline-block bg-white text-gray-900 font-bold px-7 py-3 rounded-xl hover:bg-gray-100 transition-colors text-sm"
          >
            Browse all products →
          </Link>
        </section>

        {/* Email capture */}
        <section className="mt-12 border border-gray-200 rounded-2xl p-6 text-center">
          <h3 className="font-bold text-gray-900 mb-1">Get 10 free AI prompts</h3>
          <p className="text-sm text-gray-500 mb-4">Copy-paste prompts for proposals, follow-ups, and client emails. No credit card needed.</p>
          <Link
            href="/free"
            className="inline-block bg-gray-900 text-white font-semibold px-6 py-2.5 rounded-xl hover:bg-gray-700 transition-colors text-sm"
          >
            Get free prompts →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
