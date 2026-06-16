import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freelance Work Permit vs Trade License in the UAE: Which Do You Need?",
  description:
    "Freelance work permit vs trade license in the UAE — what each is, what it costs, who should get which, and how they compare to free zone freelance permits.",
  alternates: { canonical: "/blog/freelance-work-permit-vs-trade-license-uae" },
  openGraph: {
    title: "Freelance Work Permit vs Trade License in the UAE: Which Do You Need?",
    description: "Freelance permit vs DED trade license vs free zone license — which is right for your UAE freelance business?",
    type: "article",
    url: "/blog/freelance-work-permit-vs-trade-license-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance Work Permit vs Trade License in the UAE: Which Do You Need?",
  description: "Freelance permit vs trade license — which is right for UAE freelancers.",
  url: `${siteUrl}/blog/freelance-work-permit-vs-trade-license-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-01",
};

export default function FreelanceWorkPermitVsTradeLicenseUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-12">

        <nav className="text-xs text-gray-400 mb-6 flex gap-2 flex-wrap">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>›</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>›</span>
          <span className="text-gray-600">Freelance Permit vs Trade License UAE</span>
        </nav>

        <header className="mb-8">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Visa & Legal</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Freelance Work Permit vs Trade License in the UAE: Which Do You Need?
          </h1>
          <p className="text-gray-500 text-sm">8 min read</p>
        </header>

        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            One of the most confusing decisions for new UAE freelancers is whether they need a
            freelance work permit, a trade license, or a free zone company license — and what
            the difference actually is. This guide breaks down each option clearly, including
            costs, what each allows you to do, and who should choose which.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-900 mb-1">Regulations change</p>
            <p className="text-amber-800">
              UAE business setup rules evolve regularly. Always verify current requirements and
              fees directly with the relevant authority (DED, TECOM, RAKEZ, IFZA, etc.) before
              making a decision. The information here is current as of 2026.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Three Options Explained</h2>

            <div className="space-y-5 mt-4">
              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">1. Freelance Work Permit (also called a Freelance Permit)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Issued by specific UAE free zones (TECOM/Dubai Media City, Fujairah Creative City,
                  twofour54 in Abu Dhabi, RAKEZ, and others). Allows you to operate as an individual
                  under your own name — not as a company. You can legally invoice clients, open a
                  bank account, and apply for a UAE residency visa.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Annual cost</p>
                    <p className="text-sm font-semibold text-gray-900">AED 7,500–15,000</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Visa eligibility</p>
                    <p className="text-sm font-semibold text-gray-900">Yes (1–2 year)</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500"><strong>Best for:</strong> Individual service providers in creative, media, technology, or education sectors. Solo operators who want legal status without a company structure.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">2. Free Zone Company License (FZ-LLC)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  A company entity (not personal trading) registered in a UAE free zone. 100%
                  foreign-owned, separate legal entity from you personally, can have a company name
                  and logo, invoice under the company rather than your personal name. More professional
                  appearance for corporate clients.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Annual cost</p>
                    <p className="text-sm font-semibold text-gray-900">AED 5,500–20,000</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Visa eligibility</p>
                    <p className="text-sm font-semibold text-gray-900">Yes (typically 2–3 visas)</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500"><strong>Best for:</strong> Freelancers who want a company name, plan to hire employees or contractors, or want the liability protection of a separate legal entity.</p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">3. Mainland Trade License (DED License)</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Issued by the Department of Economic Development (DED) in Dubai, Abu Dhabi,
                  or other emirates. Allows you to operate throughout the UAE mainland, serve
                  local UAE clients directly, and open a retail location if needed. 100% foreign
                  ownership is now available for most professional services activities.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Annual cost</p>
                    <p className="text-sm font-semibold text-gray-900">AED 10,000–25,000+</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Visa eligibility</p>
                    <p className="text-sm font-semibold text-gray-900">Yes</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500"><strong>Best for:</strong> Freelancers or consultants primarily serving UAE mainland clients, operating a physical business location, or needing a prestigious Dubai/Abu Dhabi city address.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Head-to-Head Comparison</h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Factor</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Freelance Permit</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Free Zone Co.</th>
                    <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Mainland DED</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { factor: "Operate under your own name", fp: "✓ Yes", fz: "❌ Company name", dl: "❌ Company name" },
                    { factor: "Operate under company name", fp: "❌ Personal only", fz: "✓ Yes", dl: "✓ Yes" },
                    { factor: "Hire employees", fp: "Limited (1–2 visa)", fz: "✓ Multiple visas", dl: "✓ Multiple visas" },
                    { factor: "Serve mainland UAE clients", fp: "✓ Yes (as individual)", fz: "Technically restricted*", dl: "✓ Yes (fully)" },
                    { factor: "Corporate tax registration required", fp: "If >AED 1M revenue", fz: "Yes (all companies)", dl: "Yes (all companies)" },
                    { factor: "Bank account opening ease", fp: "Moderate", fz: "Moderate–Good", dl: "Good" },
                    { factor: "Annual cost (approx.)", fp: "AED 7,500–15,000", fz: "AED 5,500–20,000", dl: "AED 10,000–25,000+" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.factor}</td>
                      <td className="p-3 border border-gray-200 text-gray-700">{row.fp}</td>
                      <td className="p-3 border border-gray-200 text-gray-700">{row.fz}</td>
                      <td className="p-3 border border-gray-200 text-gray-700">{row.dl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-3">*Free zone companies can serve mainland clients through a local distributor agreement or by converting to dual licensing — rules vary by activity and emirate.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Which Should You Choose?</h2>

            <div className="space-y-3 mt-4">
              {[
                { profile: "You are a solo creative or knowledge worker (writer, designer, photographer, consultant)", recommendation: "Start with a freelance permit. Lower cost, simpler to set up, and sufficient for most solo service providers. RAKEZ and Fujairah Creative City offer competitive rates." },
                { profile: "You want a company name and brand identity", recommendation: "Free zone company license. IFZA, RAKEZ, and Meydan are popular options with good bank acceptance rates and reasonable costs." },
                { profile: "You primarily work with large UAE corporate clients or government entities", recommendation: "Either a mainland license or a well-established free zone company. Large entities sometimes prefer invoices from companies over individuals." },
                { profile: "You plan to hire staff or bring dependents on your visa", recommendation: "Free zone company or mainland license, which allow more visa allocations." },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">Profile</p>
                  <p className="text-sm font-semibold text-gray-900 mb-2">{item.profile}</p>
                  <p className="text-sm text-gray-600">→ {item.recommendation}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Once you are legal, get organized</p>
            <h3 className="text-lg font-bold mb-2">The Freelancer Client CRM tracks clients and invoices from day one</h3>
            <p className="text-gray-400 text-sm mb-4">
              Whether you are operating under a freelance permit or a company license, your
              business needs a system. Set up the CRM in 20 minutes and track every client,
              project, and invoice in one place.
            </p>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              See the Client CRM →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/how-to-become-freelancer-uae", title: "How to Become a Freelancer in the UAE" },
                { href: "/blog/rakez-vs-ifza-freelance-license-uae", title: "RAKEZ vs IFZA vs Meydan: Which Free Zone?" },
                { href: "/blog/freelance-visa-uae", title: "How to Get a Freelance Visa in the UAE" },
                { href: "/blog/how-to-start-online-business-uae", title: "How to Start an Online Business in the UAE" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-700 hover:text-gray-900 hover:underline">
                  → {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
