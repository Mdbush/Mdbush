import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Work as a Freelancer in Qatar (2026): Visa, QFC & Legal Guide — SoloKit",
  description:
    "Legal pathways to freelance in Qatar — Qatar Financial Centre licence, kafala system, business visit visa strategy, and how to invoice Qatari clients from UAE.",
  alternates: { canonical: "/blog/freelance-visa-qatar" },
  openGraph: {
    title: "How to Work as a Freelancer in Qatar (2026): Visa, QFC & Legal Guide",
    description:
      "Legal pathways to freelance in Qatar — Qatar Financial Centre licence, kafala system, business visit visa strategy, and how to invoice Qatari clients from UAE.",
    type: "article",
    url: "/blog/freelance-visa-qatar",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Work as a Freelancer in Qatar (2026): Visa, QFC & Legal Guide",
  description:
    "Legal pathways to freelance in Qatar — Qatar Financial Centre licence, kafala system, business visit visa strategy, and how to invoice Qatari clients from UAE.",
  url: `${siteUrl}/blog/freelance-visa-qatar`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const stats = [
  { value: "QAR 7K–12K", label: "QFC licence / year" },
  { value: "10%", label: "QFC corporate tax rate" },
  { value: "0%", label: "VAT in Qatar (2026)" },
];

const pathways = [
  {
    title: "Qatar Financial Centre (QFC) Licence",
    badge: "Best for service professionals",
    detail:
      "The QFC is Qatar's premier onshore financial services hub with 100% foreign ownership and a simplified regulatory framework. Consultants, financial advisors, legal professionals, and technology specialists can establish a QFC entity with no minimum capital requirement. Annual costs run approximately QAR 7,000–12,000 in licence fees, significantly less than a standard Qatar commercial company. The QFC sits within Qatari law but under its own legal system modelled on English common law.",
    pros: ["100% foreign ownership", "No minimum capital", "10% corporate tax (vs 20% standard)", "English common law framework", "Onshore status — can work with local clients"],
  },
  {
    title: "Employment Visa with NOC (Non-Objection Certificate)",
    badge: "Common approach",
    detail:
      "Many expat professionals in Qatar technically work under an employment visa tied to a Qatari employer or sponsor, with a Non-Objection Certificate from that employer allowing them to take on additional freelance work. This is the most common way expats access freelance income in Qatar. The NOC must be obtained in advance and in writing — verbal permission is not sufficient protection.",
    pros: ["No separate licence required", "Leverages existing residency", "Lower admin burden"],
  },
  {
    title: "Self-Sponsorship under Kafala System",
    badge: "Limited for foreigners",
    detail:
      "Qatar's kafala (sponsorship) system traditionally tied workers to a Qatari national sponsor. Since 2020, Qatar has introduced limited reforms allowing workers to change jobs without sponsor permission and enabling some self-sponsorship pathways. However, full self-employment for foreign nationals without a Qatari partner remains difficult for most professions. This route is most accessible to skilled professionals in specific sectors under Qatar's talent attraction programmes.",
    pros: ["Possible without employer", "Direct Qatari residency"],
  },
  {
    title: "UAE Base + Qatar Client Engagements",
    badge: "Most popular for GCC mobile consultants",
    detail:
      "The most practical route for many GCC freelancers: establish legally in the UAE (IFZA, RAKEZ, or Meydan free zone), invoice Qatari clients from your UAE entity via SWIFT in QAR or USD, and enter Qatar on a business visit visa for client meetings. Qatar's visit visa allows up to 30 days per visit for GCC residents. This approach is entirely legal for consulting, advisory, and digital work where physical presence is not required continuously.",
    pros: ["No Qatar licence required", "Full UAE legal protection", "SWIFT payments from QNB/CBQ accepted", "Avoids Qatar withholding tax complexity"],
  },
];

const qfcSteps = [
  {
    step: "01",
    title: "Determine Eligibility",
    detail:
      "The QFC is open to financial services, professional services, technology, and consulting firms. Retail businesses, manufacturing, and real estate are not permitted. Confirm your business activity is on the QFC approved list at qfc.qa before applying.",
  },
  {
    step: "02",
    title: "Prepare Your Business Plan",
    detail:
      "The QFC Authority requires a business plan as part of the application. It should cover your service offering, target clients, projected revenues, and why Qatar is your chosen location. A 2–3 page plan is typically sufficient for a solo consultant.",
  },
  {
    step: "03",
    title: "Submit QFC Application",
    detail:
      "Apply online via the QFC Authority portal. You will need passport copies, professional CV/biography, business plan, proof of professional qualifications, and the application fee. Processing typically takes 2–4 weeks.",
  },
  {
    step: "04",
    title: "Open a Business Bank Account",
    detail:
      "QFC entities can open accounts at QNB Group, CBQ (Commercial Bank of Qatar), Doha Bank, or QIIB. QNB is the most widely used and the easiest for international transfers. You will need your QFC licence, memorandum of association, and KYC documentation.",
  },
  {
    step: "05",
    title: "Register with Qatar GTA (if applicable)",
    detail:
      "Qatar's General Tax Authority (GTA) oversees corporate income tax. QFC entities are taxed at 10% on net profits above QAR 100,000. If you expect to exceed this threshold, ensure your accounting is set up from day one. GTA registration should be completed within 30 days of commencing operations.",
  },
  {
    step: "06",
    title: "Obtain Your Residence Permit (if relocating)",
    detail:
      "Your QFC entity can sponsor your Qatar residence permit. You will need a medical examination, biometrics registration, and to hold a valid QFC operating licence. Residence permits are linked to the QFC entity and are renewable annually.",
  },
];

const taxPoints = [
  "Qatar has no personal income tax, no VAT (as of 2026), and no capital gains tax for individuals. This makes it one of the most tax-friendly jurisdictions in the world for high earners.",
  "Corporate income tax in Qatar is 10% for QFC entities on net profits above QAR 100,000. Non-QFC entities face a standard 20% corporate tax rate — a significant reason why the QFC is the preferred structure for solo consultants.",
  "Withholding tax applies at 5% on payments for services made by Qatar-resident clients to non-resident service providers. If you invoice from outside Qatar, your client may deduct this at source.",
  "Qatar has double tax treaties with numerous countries. If you are a tax resident in a treaty country, you may be able to reduce or eliminate WHT. Check the Qatar GTA website or take specialist tax advice.",
  "For QFC entities, the QFC Authority handles tax compliance separately from the Qatar GTA. Your QFC accountant files your annual tax return with the QFC Regulatory Authority.",
];

export default function FreelanceVisaQatar() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Blog
        </Link>

        {/* Hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Getting Started</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
            How to Work as a Freelancer in Qatar (2026): Visa, QFC &amp; Legal Guide
          </h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            Qatar has no standalone freelance visa, but several legal pathways exist for independent professionals — from the Qatar Financial Centre licence to UAE-based invoicing. Here&apos;s how each option works and which is right for you.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 16, 2026</span>
            <span>·</span>
            <span>8 min read</span>
            <span>·</span>
            <span>Qatar</span>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
              <div className="text-lg font-bold text-gray-900">{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed mb-4">
          Qatar does not have a dedicated freelance visa equivalent to the UAE&apos;s freelance permits or Saudi Arabia&apos;s Al-Qudurat platform. However, this does not mean freelancing in Qatar is impossible — it means the legal framework requires more careful navigation. There are four main pathways, each suited to different situations.
        </p>

        <p className="text-gray-700 leading-relaxed mb-8">
          The most important distinction to understand upfront: working for Qatari clients is not the same as being licensed to work in Qatar. If you are based in the UAE and your Qatari client transfers money to your UAE bank account, you are not subject to Qatar labour law or licensing requirements. The need to be licensed in Qatar only arises when you want to have a physical presence, sign Qatar-law contracts, or access certain regulated sectors.
        </p>

        {/* Legal pathways */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Your 4 Legal Pathways to Freelance in Qatar
        </h2>

        <div className="grid gap-6 mb-8">
          {pathways.map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed mb-3">{item.detail}</p>
              <div className="flex flex-wrap gap-2">
                {item.pros.map((pro) => (
                  <span key={pro} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg">{pro}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* QFC step by step */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          How to Set Up a QFC Entity: Step by Step
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          The Qatar Financial Centre is the recommended structure for professional service providers who want to be fully licensed in Qatar. Here is the process from application to trading:
        </p>

        <div className="space-y-4 mb-8">
          {qfcSteps.map((s) => (
            <div key={s.step} className="flex gap-4 bg-gray-50 rounded-xl p-5">
              <span className="text-xl font-black text-emerald-500 shrink-0 leading-none">{s.step}</span>
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">{s.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* QFC vs Standard Qatar company */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          QFC vs Standard Qatar Commercial Company: Key Differences
        </h2>

        <div className="rounded-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gray-900 px-5 py-3">
            <p className="text-sm font-bold text-white">QFC vs Qatar Commercial Company Comparison</p>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { feature: "Foreign Ownership", qfc: "100%", standard: "49% max (51% Qatari required)" },
              { feature: "Minimum Capital", qfc: "None required", standard: "QAR 200,000 for LLC" },
              { feature: "Corporate Tax Rate", qfc: "10% on net profit >QAR 100K", standard: "20% standard rate" },
              { feature: "Legal Framework", qfc: "QFC law (English common law based)", standard: "Qatar Civil & Commercial law" },
              { feature: "Regulatory Body", qfc: "QFC Regulatory Authority (QFCRA)", standard: "Ministry of Commerce (MoCI)" },
              { feature: "Annual Licence Fee", qfc: "QAR 7,000–12,000/year", standard: "Varies by activity" },
              { feature: "Bank Account Options", qfc: "QNB, CBQ, Doha Bank, QIIB", standard: "All Qatar banks" },
              { feature: "Best For", qfc: "Consultants, finance, tech, legal", standard: "Trading, retail, manufacturing" },
            ].map((row, i) => (
              <div key={i} className={`grid grid-cols-3 gap-4 px-5 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <p className="text-xs font-semibold text-gray-700">{row.feature}</p>
                <p className="text-xs text-emerald-700 font-medium">{row.qfc}</p>
                <p className="text-xs text-gray-500">{row.standard}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 px-5 py-2 bg-gray-900 text-xs font-bold">
            <span className="text-gray-400"></span>
            <span className="text-emerald-400">QFC Entity</span>
            <span className="text-gray-400">Standard Qatar Company</span>
          </div>
        </div>

        {/* Tax section */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          Tax for Freelancers in Qatar: What You Need to Know
        </h2>

        <div className="space-y-3 mb-8">
          {taxPoints.map((p, i) => (
            <div key={i} className="flex gap-3 bg-gray-50 rounded-xl p-4">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <p className="text-sm text-gray-700 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>

        {/* Practical section: UAE base strategy */}
        <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block"></span>
          The UAE Base Strategy: Working Qatar Clients Without a Qatar Licence
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          For many GCC-based freelancers, the most practical approach to Qatar client work is to remain legally based in the UAE and treat Qatar clients like any other international engagement. Here is how to do it cleanly:
        </p>

        <div className="grid gap-4 mb-8">
          {[
            {
              title: "Invoice in QAR or USD from your UAE entity",
              badge: "Step 1",
              detail:
                "Your UAE-registered company (IFZA, RAKEZ, Meydan, or other free zone) can invoice Qatari clients in QAR or USD. Include your UAE TRN only if required under UAE VAT law — exports of services are typically zero-rated. Include SWIFT/IBAN details for your UAE business account.",
            },
            {
              title: "Receive payment via SWIFT to your UAE account",
              badge: "Step 2",
              detail:
                "Qatar banks (QNB, CBQ, Doha Bank) can send SWIFT transfers internationally without issue. The QAR-USD peg ensures no currency conversion loss. Most UAE banks receive QAR SWIFT transfers and convert to AED or USD at competitive rates.",
            },
            {
              title: "Enter Qatar on business visit visa for client meetings",
              badge: "Step 3",
              detail:
                "UAE residents can enter Qatar for business meetings on a visit visa (typically 30 days, extendable). Carry your UAE trade licence, business cards, and client correspondence. Your purpose is client meetings — not delivering work on-site for extended periods.",
            },
            {
              title: "Stay under 30 days per visit",
              badge: "Step 4",
              detail:
                "Frequent long stays in Qatar on visit visas can create tax residency questions. Keep individual visits under 30 days and maintain clear records of your UAE operational base — lease agreements, UAE utility bills, Ejari. For 3+ month Qatar-based projects, consider a short-term QFC licence instead.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full shrink-0">{item.badge}</span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
          <h3 className="text-2xl font-bold mb-3">Build a GCC Freelance Practice</h3>
          <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto">
            Templates, invoices, and systems for UAE, Saudi Arabia, Qatar, and Kuwait clients — all in one toolkit.
          </p>
          <Link
            href="/bundle"
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm"
          >
            Get SoloKit →
          </Link>
        </div>

        {/* Related links */}
        <div className="border border-gray-200 rounded-2xl p-6 mt-8">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { href: "/blog/freelance-rates-qatar", title: "Freelance Rates in Qatar (QAR)" },
              { href: "/blog/freelance-visa-uae", title: "How to Get a UAE Freelance Visa" },
              { href: "/blog/freelance-visa-saudi-arabia", title: "How to Freelance in Saudi Arabia" },
              { href: "/blog/freelance-visa-kuwait", title: "How to Freelance in Kuwait" },
              { href: "/blog/rakez-vs-ifza-freelance-license-uae", title: "Best UAE Free Zone for Freelancers" },
              { href: "/for/saudi-arabia", title: "SoloKit for GCC Freelancers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-gray-700 hover:text-emerald-700 hover:bg-gray-50 rounded-lg p-2 transition-colors group"
              >
                <span className="text-gray-300 group-hover:text-emerald-500 transition-colors">→</span>
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100">
          <Link href="/blog" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Back to Blog
          </Link>
        </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
