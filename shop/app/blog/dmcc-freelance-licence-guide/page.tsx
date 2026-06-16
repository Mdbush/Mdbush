import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCC Freelance Licence 2026 — Setup Guide, Costs & Pros/Cons",
  description:
    "Complete guide to the DMCC freelance licence in Dubai 2026: setup costs, visa eligibility, pros vs SHAMS and RAKEZ, and step-by-step registration process.",
  alternates: { canonical: "/blog/dmcc-freelance-licence-guide" },
  openGraph: {
    title: "DMCC Freelance Licence 2026 — Setup Guide, Costs & Pros/Cons",
    description:
      "Complete guide to the DMCC freelance licence in Dubai 2026: setup costs, visa eligibility, pros vs SHAMS and RAKEZ, and step-by-step registration process.",
    type: "article",
    url: "/blog/dmcc-freelance-licence-guide",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "DMCC Freelance Licence 2026 — Setup Guide, Costs & Pros/Cons",
  description: "Complete guide to the DMCC freelance licence in Dubai 2026.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: "https://solokit.cloud/blog/dmcc-freelance-licence-guide",
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-gray-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-600">DMCC Freelance Licence Guide 2026</span>
          </nav>

          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">Legal & Admin</span>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              DMCC Freelance Licence 2026 — Complete Setup Guide
            </h1>
            <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
              DMCC is Dubai's largest and most prestigious free zone, home to 22,000+ companies. Their freelance licence
              gives you a professional address in JLT, a UAE residence visa, and access to a global business community.
              Here's exactly what it costs and how to set it up.
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-gray-400">
              <span>June 2026</span><span>·</span><span>10 min read</span>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            The Dubai Multi Commodities Centre (DMCC) free zone is consistently ranked the world's top free zone and
            is the preferred address for finance, commodities, and professional services firms in Dubai. While most
            people associate DMCC with corporate licences, they also offer a Freelance Permit that gives you access
            to the zone's infrastructure — and the prestige that comes with a JLT business address.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Who Is the DMCC Freelance Licence For?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            DMCC's freelance permit is designed for professionals in approved activities. The zone focuses on:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Commodities trading advisory (metals, energy, agri)",
              "Finance and investment consulting",
              "Technology and IT services",
              "Media, marketing, and PR consultancy",
              "Management and business consulting",
              "Legal consulting (non-litigious advisory only)",
              "Education and training",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gray-700">
                <span className="text-emerald-500 font-bold mt-0.5 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            DMCC Freelance Licence Costs 2026
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-4 py-3 font-semibold text-gray-700">Cost Item</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Amount (AED)</th>
                  <th className="px-4 py-3 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Registration fee", "AED 2,000", "One-time"],
                  ["Freelance permit (annual)", "AED 7,500–9,500", "Depends on activity"],
                  ["Flexi-desk or shared office", "AED 6,000–14,000/yr", "Required for most permits"],
                  ["Residence visa (if needed)", "AED 3,000–4,500", "Medical + Emirates ID included"],
                  ["PRO services", "AED 1,500–2,500", "Optional but recommended"],
                  ["Total Year 1 (with visa)", "AED 20,000–32,500", "Estimate"],
                  ["Annual renewal (Year 2+)", "AED 7,500–12,000", "Permit + flexi-desk"],
                ].map(([item, amount, note]) => (
                  <tr key={item}>
                    <td className="px-4 py-3 text-gray-800 font-medium">{item}</td>
                    <td className="px-4 py-3 text-gray-700 font-semibold">{amount}</td>
                    <td className="px-4 py-3 text-gray-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
            <p className="text-sm font-bold text-amber-800 mb-1">DMCC vs SHAMS vs RAKEZ — Quick Cost Comparison</p>
            <p className="text-sm text-amber-800">
              DMCC is more expensive than SHAMS (~AED 5,750) and RAKEZ (~AED 6,500–9,000) but offers a higher-prestige address,
              larger business network, and better positioning for finance/consulting clients. If you're targeting commodities,
              fintech, or corporate advisory clients, the premium is often worth it.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            How to Set Up a DMCC Freelance Permit — Step by Step
          </h2>

          <ol className="space-y-4 mb-6">
            {[
              { step: "1", title: "Choose your activity", detail: "Go to dmcc.ae → Business Setup → Freelance Permit → select your professional activity from the approved list. Each activity has a different fee band." },
              { step: "2", title: "Submit initial application online", detail: "Create an account on DMCC's member portal. Upload your passport, CV/professional profile, and any professional certifications relevant to your activity." },
              { step: "3", title: "Pay registration and permit fees", detail: "Registration (AED 2,000) + annual permit fee. DMCC accepts credit cards and bank transfers. Payment confirms your application slot." },
              { step: "4", title: "Select your workspace", detail: "DMCC requires a physical or flexi-desk address within the free zone. Options include DMCC's own flexi-desks (AED 6,000–14,000/yr) or rented desks at co-working spaces in JLT." },
              { step: "5", title: "Apply for your residence visa (if needed)", detail: "Once your permit is issued, apply for your UAE residence visa through DMCC's GDRFA-linked portal. Medical test, Emirates ID biometrics, and entry permit are all managed through the zone." },
              { step: "6", title: "Open a business bank account", detail: "With your permit and visa, open a UAE business bank account. Emirates NBD, Mashreq, and FAB all have DMCC-affiliated programmes. Expect 2–4 weeks for account opening." },
            ].map(({ step, title, detail }) => (
              <li key={step} className="flex gap-4 border border-gray-200 rounded-xl p-4">
                <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shrink-0 font-bold text-sm">{step}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            DMCC Pros and Cons for Freelancers
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-bold text-emerald-800 mb-3 text-sm">Advantages</p>
              <ul className="space-y-2">
                {[
                  "World's #1 free zone ranking (FDI Magazine)",
                  "JLT address — premium for finance and consulting clients",
                  "22,000+ member companies = strong networking",
                  "Comprehensive regulatory framework",
                  "Strong banking relationships for account opening",
                  "Commodities and fintech ecosystem access",
                ].map((item) => (
                  <li key={item} className="text-sm text-emerald-800 flex gap-2">
                    <span className="text-emerald-600 shrink-0">✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-bold text-red-800 mb-3 text-sm">Disadvantages</p>
              <ul className="space-y-2">
                {[
                  "Significantly more expensive than SHAMS or RAKEZ",
                  "Flexi-desk cost is mandatory and high",
                  "Narrower activity list than some zones",
                  "Processing can take 3–5 weeks",
                  "Overkill for simple creative or content freelancers",
                  "Less flexible if you want to add dependant visas",
                ].map((item) => (
                  <li key={item} className="text-sm text-red-800 flex gap-2">
                    <span className="text-red-500 shrink-0">✗</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Is DMCC the Right Licence for You?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choose DMCC if you are a finance consultant, commodities advisor, fintech specialist, or senior management
            consultant targeting DIFC firms and tier-1 corporate clients. The address and network justify the premium.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Choose SHAMS or RAKEZ if you are a designer, developer, copywriter, content creator, or marketing
            consultant without a specific need for the DMCC ecosystem. You will pay significantly less and get the same
            legal right to live and work in the UAE.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you are in any doubt, consult a UAE business setup specialist (PRO UAE, Virtuzone, or Committez) before
            committing — most offer free initial consultations.
          </p>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-8 mt-12 text-center">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3">SoloKit</span>
            <h3 className="text-2xl font-bold mb-3">Tools Built for UAE Freelancers</h3>
            <p className="text-gray-300 text-sm mb-6 max-w-sm mx-auto">Notion templates, AI prompts, and SOPs — everything to run a professional freelance business in the UAE.</p>
            <Link href="/" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3 rounded-xl transition-colors text-sm">
              Explore SoloKit →
            </Link>
          </div>

          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Related Guides</h3>
            <div className="space-y-1.5">
              <Link href="/blog/freelance-visa-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ UAE Freelance Visa — SHAMS vs RAKEZ vs Free Zone Options</Link>
              <Link href="/blog/uae-free-zone-comparison-freelancers" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ UAE Free Zone Comparison for Freelancers</Link>
              <Link href="/blog/best-banks-for-freelancers-uae" className="block text-emerald-700 hover:text-emerald-900 text-sm">→ Best Banks for Freelancers in the UAE</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
