import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Create a Freelance Website in the UAE (What to Include + Tools)",
  description:
    "How to build a freelance website that converts UAE clients — what pages to include, what to write, which platform to use, and why most freelancer websites fail to generate leads.",
  alternates: { canonical: "/blog/how-to-create-freelance-website-uae" },
  openGraph: {
    title: "How to Create a Freelance Website in the UAE (What to Include + Tools)",
    description: "Build a freelance website that converts UAE clients — pages, copy, platforms, and the mistakes that lose inquiries.",
    type: "article",
    url: "/blog/how-to-create-freelance-website-uae",
  },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Create a Freelance Website in the UAE (What to Include + Tools)",
  description: "How to build a freelance website that converts UAE clients.",
  url: `${siteUrl}/blog/how-to-create-freelance-website-uae`,
  publisher: { "@type": "Organization", name: "SoloKit", url: siteUrl },
  datePublished: "2026-01-01",
  dateModified: "2026-06-16",
};

const pages = [
  {
    page: "Home",
    mustInclude: ["Headline that states exactly who you help and what you do in one sentence", "2–3 sentence description of your service and why you are different", "Social proof: client logos, testimonials, or results", "Clear CTA: 'Book a call', 'Get a proposal', or 'Contact me'"],
    mistake: "Generic headline ('I help businesses grow') with no specifics about who you work with, where, or what results you get.",
  },
  {
    page: "Services / What I Do",
    mustInclude: ["Each service named clearly (not branded jargon)", "What is included in the service", "Who it is for (UAE businesses? A specific industry?)", "Optional: starting price or price range"],
    mistake: "Long list of every capability, no prioritization. Clients cannot tell which service is your specialty.",
  },
  {
    page: "Portfolio / Work",
    mustInclude: ["Case studies with client context, what you did, and the result", "For each: the problem, your approach, and the measurable outcome", "Client logos or company names where permitted", "Range of project types if you serve different clients"],
    mistake: "Gallery of deliverables with no context. A logo or a screenshot with no story is not a case study.",
  },
  {
    page: "About",
    mustInclude: ["Your background in 3–4 sentences (relevant to the client, not a CV)", "Why you work with UAE clients specifically", "Your professional photo — UAE business culture values personal connection", "Credentials, specializations, or notable clients"],
    mistake: "Either no About page, or a 500-word autobiography that focuses on your history rather than the client's benefit.",
  },
  {
    page: "Contact / Book a Call",
    mustInclude: ["Simple contact form (name, email, project type, budget range)", "Response time commitment ('I respond within 24 hours')", "Optional: Calendly or Cal.com link for direct booking", "Your email address visible (not hidden behind a form)"],
    mistake: "Complex contact form with 15 fields, or a form that sends to an email you check weekly.",
  },
];

const platforms = [
  { name: "Webflow", cost: "From USD 14/month", bestFor: "Designers and developers who want full control over design", pros: "Beautiful results, no code needed for basic sites, great hosting", cons: "Steeper learning curve, more expensive" },
  { name: "Squarespace", cost: "From USD 16/month", bestFor: "Creatives who want a professional site quickly", pros: "Beautiful templates, includes hosting, easy to use", cons: "Less flexible than Webflow, limited customization" },
  { name: "Framer", cost: "From USD 10/month", bestFor: "Designers and tech-forward freelancers", pros: "AI-assisted design, great performance, modern aesthetic", cons: "Newer platform, less established templates" },
  { name: "WordPress.com / .org", cost: "Free to USD 25+/month", bestFor: "Freelancers who want long-term flexibility and SEO control", pros: "Most flexible, best for SEO, huge plugin ecosystem", cons: "More technical setup, security maintenance required" },
  { name: "Notion (as portfolio)", cost: "Free – USD 8/month", bestFor: "Freelancers who want to launch fast with zero cost", pros: "Zero cost to start, fast to build, easily updated", cons: "Does not look like a dedicated website, limited customization" },
];

export default function HowToCreateFreelanceWebsiteUAE() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-10">

        
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-600">How to Create a Freelance Website in the UAE (What to I</span>
        </nav>

        
        {/* Dark hero */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">How to Create a Freelance Website in the UAE (What to Include + Tools)</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">How to build a freelance website that converts UAE clients — what pages to include, what to write, which platform to use, and why most freelancer websites fail to generate leads.</p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>7 min read</span>
          </div>
        </div>


        <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-6">

          <p>
            Most freelancer websites fail to generate leads — not because they look bad, but
            because they talk about the freelancer rather than the client. A website that
            converts UAE inquiries into paid projects needs to do one thing well: make it
            immediately obvious what you do, who you do it for, and why you are the right
            choice. Here is how to build that site.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm">
            <p className="font-semibold text-amber-900 mb-1">Before you build</p>
            <p className="text-amber-800">
              A great LinkedIn profile will generate more leads for a UAE freelancer than a great
              website. If you do not yet have a LinkedIn presence, build that first. A website
              amplifies an existing reputation — it rarely creates one from scratch.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">The 5 Pages Every Freelance Website Needs</h2>
            <div className="space-y-5">
              {pages.map((item) => (
                <div key={item.page} className="border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-3">{item.page}</h3>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-green-600 mb-1.5">Must include</p>
                    <ul className="space-y-1">
                      {item.mustInclude.map((point) => <li key={point} className="text-xs text-gray-600">✓ {point}</li>)}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-xl p-3">
                    <p className="text-xs font-semibold text-red-500 mb-1">Common mistake</p>
                    <p className="text-xs text-red-700">{item.mistake}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Home Page Headline Formula</h2>
            <p>
              Your headline is the most important text on your website. Most freelancers write
              something like &ldquo;Creative design solutions for forward-thinking businesses.&rdquo; That
              tells the client nothing. Use this formula instead:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm my-4">
              <p className="font-semibold text-gray-900 mb-2">Formula: I help [specific client type] [achieve specific result] through [your service]</p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Instead of:</strong> &ldquo;Professional brand identity design&rdquo;</p>
                <p className="text-gray-700"><strong>Try:</strong> &ldquo;I help Dubai hospitality brands launch with visual identities that work across Arabic and English markets&rdquo;</p>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Specific client type + specific outcome + specific market context = instant relevance.
              UAE clients scan — give them a reason to keep reading in the first 3 seconds.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Which Platform to Build On</h2>
            <div className="space-y-3 mt-4">
              {platforms.map((p) => (
                <div key={p.name} className="border border-gray-200 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="font-semibold text-gray-900 text-sm">{p.name}</p>
                    <span className="text-xs text-gray-400 shrink-0">{p.cost}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-2"><strong>Best for:</strong> {p.bestFor}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div><p className="text-xs text-green-600">✓ {p.pros}</p></div>
                    <div><p className="text-xs text-red-500">✗ {p.cons}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">
              <strong>Recommended for most UAE freelancers:</strong> Squarespace or Framer for a
              fast, professional result. WordPress if you plan to invest in content SEO long-term.
              Notion as a temporary portfolio while you build your first clients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">UAE-Specific Website Considerations</h2>
            <ul className="space-y-2 text-sm text-gray-600 mt-3">
              <li><strong>Include your location explicitly:</strong> UAE, Dubai, or Abu Dhabi in your meta title and home page helps with local search. Many UAE clients specifically search for local freelancers.</li>
              <li><strong>Arabic translation optional but valuable:</strong> A basic Arabic version of your site or just an Arabic headline can capture Arabic-language searches. Worth doing if you serve Arabic-speaking clients.</li>
              <li><strong>WhatsApp contact button:</strong> UAE clients often prefer WhatsApp over email. A visible WhatsApp contact button increases conversion significantly.</li>
              <li><strong>Professional photo is not optional:</strong> UAE business culture is relationship-first. Clients want to see who they are hiring. A professional headshot on your About page and potentially on your Home page increases trust.</li>
              <li><strong>AED pricing where shown:</strong> If you display pricing, show it in AED for UAE clients. Seeing prices in USD or GBP creates unnecessary friction.</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="bg-gray-950 text-white rounded-2xl p-6 mt-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Before the website — your LinkedIn</p>
            <h3 className="text-lg font-bold mb-2">How to Optimize Your LinkedIn Profile as a UAE Freelancer</h3>
            <p className="text-gray-400 text-sm mb-4">
              7 profile elements that drive inbound clients, before/after headline examples,
              and the exact settings that make UAE clients find you.
            </p>
            <Link
              href="/blog/freelance-linkedin-profile-uae"
              className="inline-block bg-white text-gray-900 font-bold px-5 py-2.5 rounded-xl hover:bg-gray-100 transition-colors text-sm"
            >
              Optimize Your LinkedIn →
            </Link>
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 mt-6">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Related guides</p>
            <div className="space-y-2">
              {[
                { href: "/blog/how-to-build-freelance-portfolio-uae", title: "How to Build a Freelance Portfolio in the UAE (With No Clients Yet)" },
                { href: "/blog/freelance-linkedin-profile-uae", title: "How to Optimize Your LinkedIn Profile as a UAE Freelancer" },
                { href: "/blog/how-to-write-freelance-bio-uae", title: "How to Write a Freelance Bio That Gets You Hired in the UAE" },
                { href: "/blog/personal-brand-freelancer-uae", title: "How to Build a Personal Brand as a UAE Freelancer" },
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
