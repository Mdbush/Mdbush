import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://solokit.cloud";

export const metadata: Metadata = {
  title: "Freelance HR Consultant Rates UAE 2026 — SoloKit",
  description:
    "Fractional HR, recruitment fees, L&D day rates, and payroll consulting rates for freelance HR professionals in the UAE and GCC in 2026. AED benchmarks by service type.",
  alternates: { canonical: "/blog/freelance-hr-consultant-rates-uae" },
  openGraph: {
    title: "Freelance HR Consultant Rates UAE 2026",
    description:
      "Fractional HR, recruitment fees, L&D day rates, and payroll consulting rates for freelance HR professionals in the UAE and GCC in 2026. AED benchmarks by service type.",
    type: "article",
    url: "/blog/freelance-hr-consultant-rates-uae",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance HR Consultant Rates UAE 2026",
    description:
      "Fractional HR, recruitment fees, L&D day rates, and payroll consulting rates for freelance HR professionals in the UAE and GCC in 2026. AED benchmarks by service type.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Freelance HR Consultant Rates UAE 2026",
  description:
    "Fractional HR, recruitment fees, L&D day rates, and payroll consulting rates for freelance HR professionals in the UAE and GCC in 2026. AED benchmarks by service type.",
  datePublished: "2026-06-16",
  dateModified: "2026-06-16",
  author: { "@type": "Organization", name: "SoloKit" },
  publisher: { "@type": "Organization", name: "SoloKit", url: "https://solokit.cloud" },
  url: `${siteUrl}/blog/freelance-hr-consultant-rates-uae`,
  mainEntityOfPage: `${siteUrl}/blog/freelance-hr-consultant-rates-uae`,
  image: `${siteUrl}/og-image.png`,
  keywords: [
    "freelance HR consultant rates UAE",
    "fractional HR UAE",
    "recruitment fees UAE",
    "L&D consultant UAE",
    "payroll consulting UAE",
    "HR consultant GCC 2026",
  ],
};

export default function FreelanceHRConsultantRatesUAEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Breadcrumb */}
        <nav className="text-xs text-gray-400 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gray-600">Blog</Link>
          <span>/</span>
          <span>Freelance HR Consultant Rates UAE</span>
        </nav>

        {/* Dark hero */}
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white px-6 py-12 rounded-2xl mb-8">
          <div className="hero-glow -z-10 animate-float w-64 h-64 bg-emerald-500/25 -top-16 -left-10" />
          <div className="hero-glow -z-10 animate-float w-56 h-56 bg-teal-400/20 -bottom-14 -right-8" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 -z-10 bg-dot-grid" />
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3 block">UAE FREELANCING · HR</span>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">Freelance HR Consultant Rates UAE 2026</h1>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed max-w-xl">
            What fractional HR professionals, recruiters, L&amp;D specialists, and payroll consultants
            charge in the UAE and GCC — with AED benchmarks by service type and how to position
            your offer in a maturing market.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <span>June 2026</span><span>·</span><span>6 min read</span>
          </div>
        </div>

        {/* Intro */}
        <p className="text-gray-700 text-sm leading-relaxed mb-6">
          The UAE freelance HR market has matured significantly since 2022. Startups that once hired
          full-time HR managers are now opting for fractional HR consultants on monthly retainers.
          Established SMEs use freelance recruiters on a placement-fee model. And the 2023 Corporate
          Tax regime, combined with tightening MOHRE and WPS enforcement, has driven demand for
          specialist payroll and compliance consulting.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed mb-10">
          Whether you are a seasoned CHRO going independent, a recruiter building a boutique desk,
          or an L&amp;D specialist selling training days, this guide gives you the AED rate benchmarks
          you need to price competitively and sustainably.
        </p>

        {/* Section 1 — Fractional HR */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Fractional HR Retainer Rates
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Monthly retainer · part-time strategic HR</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Fractional HR is the fastest-growing segment of UAE freelance HR work. A fractional HR
            consultant acts as a part-time Head of HR for a company — typically committing 2–3 days
            per week and covering everything from hiring strategy and onboarding frameworks to
            performance review cycles and labour law compliance.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Typical retainer rates in Dubai and Abu Dhabi range from <strong>AED 5,000 to AED 15,000
            per month</strong>, depending on the scope of work, the seniority of the consultant, and
            the size of the client&apos;s workforce. Consultants with CIPD Level 7, SHRM-SCP, or significant
            UAE-listed-company experience sit at the top of this band. Generalist HR professionals
            with 5–8 years of experience typically charge AED 6,000–10,000/month.
          </p>
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-4">
            <p className="text-emerald-900 text-sm font-semibold mb-1">Scope matters more than seniority</p>
            <p className="text-emerald-800 text-sm leading-relaxed">
              A client expecting you to own recruitment, onboarding, policies, payroll oversight, and
              MOHRE compliance should be paying at the top of the range. If you are advising only on
              policy or org design for a 2-day-per-month commitment, AED 5,000 is the floor. Scope
              creep is the number one pricing mistake fractional HR consultants make — define deliverables
              in writing before you start.
            </p>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Clients in free zones (DIFC, ADGM, DMCC) often have more complex people needs than mainland
            companies because they operate under different employment frameworks. Free zone fractional
            work typically commands a 10–15% premium over comparable mainland engagements.
          </p>
        </section>

        {/* Section 2 — Recruitment fees */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Recruitment Fees: Percentage vs Fixed
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Per placement · contingency or retained</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Freelance recruiters in the UAE operate under two main fee models: percentage-of-salary
            and fixed placement fee. Both are common; which to use depends on the seniority of the
            role and your relationship with the client.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            <strong>Percentage model:</strong> The UAE market standard sits at <strong>12–20% of the
            candidate&apos;s annual base salary</strong> per placement. Junior-to-mid roles (AED 10,000–25,000/month)
            typically see 12–15%. Senior roles (AED 30,000+/month) and niche skills command 18–20%.
            Executive search for C-suite mandates can reach 25–30%, especially on retained assignments.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            <strong>Fixed fee model:</strong> AED 8,000–25,000 per placement, regardless of salary.
            This model is increasingly preferred by SME clients who want pricing predictability. Fixed
            fees work well for volume hiring across a standardised role profile (e.g., sales coordinators,
            operations staff) where the recruiter can process multiple hires efficiently.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Role Level</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">% Model</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Fixed Fee</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Rebate Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Junior / Coordinator</td>
                  <td className="p-3 border border-gray-200">12–14%</td>
                  <td className="p-3 border border-gray-200">AED 8,000–12,000</td>
                  <td className="p-3 border border-gray-200">30–60 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Mid-level Manager</td>
                  <td className="p-3 border border-gray-200">14–17%</td>
                  <td className="p-3 border border-gray-200">AED 12,000–18,000</td>
                  <td className="p-3 border border-gray-200">60–90 days</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Senior / Head of</td>
                  <td className="p-3 border border-gray-200">17–20%</td>
                  <td className="p-3 border border-gray-200">AED 18,000–25,000</td>
                  <td className="p-3 border border-gray-200">90 days</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">C-Suite / Executive</td>
                  <td className="p-3 border border-gray-200">20–30%</td>
                  <td className="p-3 border border-gray-200">AED 25,000+</td>
                  <td className="p-3 border border-gray-200">90–180 days</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Always include a replacement guarantee in your contract. The UAE market standard is a
            free replacement or partial fee refund if the candidate leaves within the rebate period.
            Without this, clients in Dubai are increasingly reluctant to work with freelance recruiters
            over established agencies.
          </p>
        </section>

        {/* Section 3 — L&D */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            L&amp;D and Training Day Rates
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Per training day · design and delivery</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Learning and Development consultants in the UAE typically charge a day rate for both
            content design and facilitation, with separate pricing for each. Facilitation-only (delivering
            pre-built content) sits lower than bespoke design-and-delivery mandates.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Day rates range from <strong>AED 2,500 to AED 6,000 per day</strong>. Soft skills
            facilitators (communication, leadership, team dynamics) typically sit at AED 2,500–4,000/day.
            Technical L&amp;D specialists (compliance training, systems training, technical skills) with
            industry-specific expertise can charge AED 4,000–6,000/day. Government and semi-government
            clients in Abu Dhabi — including ADEK-regulated schools and KHDA-regulated institutions in
            Dubai — often pay towards the top of this range but require more process overhead.
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Virtual delivery (online facilitation) typically commands 15–20% less than in-person rates.
            If you are designing a course from scratch, charge a design fee of 1.5–2x your facilitation
            day rate per design day — bespoke content development is substantially more time-intensive
            than delivery.
          </p>
        </section>

        {/* Section 4 — Payroll consulting */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            Payroll Consulting Rates and WPS Compliance
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Setup · ongoing · compliance</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            Payroll consulting is a technically demanding niche with strong demand in the UAE,
            driven by MOHRE&apos;s Wages Protection System (WPS) requirements, end-of-service gratuity
            calculations, and the added complexity of the 2023 Corporate Tax regime for employers.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            <strong>Setup fees:</strong> Payroll system setup (including WPS registration, salary
            structure design, and payroll software configuration) is typically charged at
            <strong> AED 150–250 per employee</strong> as a one-off setup fee, with a minimum engagement
            of AED 3,000–5,000. For companies with fewer than 20 employees, a flat project rate of
            AED 5,000–12,000 for full payroll setup is common.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            <strong>Ongoing monthly:</strong> Monthly payroll processing and WPS compliance runs
            at <strong>AED 50–100 per employee per month</strong>, with a minimum monthly retainer of
            AED 2,000–3,000. Clients expecting you to handle MOHRE queries, employee addition/removal,
            and leave management alongside payroll should pay at the top of this range.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Service</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Rate (AED)</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Payroll setup per employee</td>
                  <td className="p-3 border border-gray-200 font-medium">150–250</td>
                  <td className="p-3 border border-gray-200">One-off, min AED 3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Monthly payroll + WPS</td>
                  <td className="p-3 border border-gray-200 font-medium">50–100/employee</td>
                  <td className="p-3 border border-gray-200">Min retainer AED 2,000/month</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">WPS compliance audit</td>
                  <td className="p-3 border border-gray-200 font-medium">3,000–8,000</td>
                  <td className="p-3 border border-gray-200">One-off project fee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">MOHRE dispute support</td>
                  <td className="p-3 border border-gray-200 font-medium">500–2,000/case</td>
                  <td className="p-3 border border-gray-200">Per matter, not per hour</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">End-of-service calculation project</td>
                  <td className="p-3 border border-gray-200 font-medium">2,000–6,000</td>
                  <td className="p-3 border border-gray-200">Complexity-based</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            WPS compliance is not optional for UAE mainland companies: MOHRE requires that all salaries
            be paid through a WPS-registered channel by the 15th of each month. Companies with
            persistent WPS violations can have their ability to issue new work permits frozen.
            Freelance payroll consultants who understand WPS intimately — including the SIF file
            format, bank submission timelines, and the Ministry portal — can command premium rates
            because the consequences of errors fall directly on the employer.
          </p>
        </section>

        {/* Section 5 — Compliance consulting */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-3">
            <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block shrink-0"></span>
            HR Compliance Consulting: MOHRE, ADEK, and KHDA
          </h2>
          <p className="text-gray-500 text-xs mb-4 ml-4">Regulatory · policy · audit readiness</p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            UAE labour law compliance consulting is a growing practice area for senior freelance HR
            professionals. Three regulatory bodies generate the most consulting demand:
          </p>
          <ul className="space-y-3 text-sm text-gray-700 mb-4">
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold shrink-0">MOHRE</span>
              <span className="leading-relaxed">Ministry of Human Resources and Emiratisation. Covers all mainland employment contracts, WPS, Emiratisation (Nafis) quotas, work permits, and labour dispute processes. Most HR compliance engagements involve MOHRE in some way.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold shrink-0">ADEK</span>
              <span className="leading-relaxed">Abu Dhabi Department of Education and Knowledge. Governs schools, nurseries, and higher education in Abu Dhabi. HR consultants working with educational institutions on teacher contracts, performance management, and staffing audits operate under ADEK rules.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-emerald-600 font-bold shrink-0">KHDA</span>
              <span className="leading-relaxed">Knowledge and Human Development Authority. The Dubai equivalent of ADEK for private schools and higher education. KHDA compliance for HR includes staff welfare standards, teacher qualifications, and inspection readiness.</span>
            </li>
          </ul>
          <p className="text-gray-700 text-sm leading-relaxed">
            Compliance consulting project fees typically range from AED 5,000 for a policy review
            to AED 25,000+ for a full HR audit and remediation programme. Day rates for compliance
            consulting work typically sit 10–20% above general HR consulting rates due to the
            regulatory risk and specialist knowledge involved.
          </p>
        </section>

        {/* Rate summary table */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Rate Summary by Service Type</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Service</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Rate Range (AED)</th>
                  <th className="text-left p-3 border border-gray-200 font-semibold">Basis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-gray-200">Fractional HR retainer</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">5,000–15,000</td>
                  <td className="p-3 border border-gray-200">Per month</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Recruitment (% of salary)</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">12–20%</td>
                  <td className="p-3 border border-gray-200">Annual base salary</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Recruitment (fixed fee)</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">8,000–25,000</td>
                  <td className="p-3 border border-gray-200">Per placement</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">L&amp;D facilitation</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">2,500–6,000</td>
                  <td className="p-3 border border-gray-200">Per training day</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">Payroll setup</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">150–250/employee</td>
                  <td className="p-3 border border-gray-200">One-off, min AED 3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border border-gray-200">Monthly payroll + WPS</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">50–100/employee</td>
                  <td className="p-3 border border-gray-200">Per month, min AED 2,000</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-200">HR compliance consulting</td>
                  <td className="p-3 border border-gray-200 font-medium text-emerald-700">5,000–25,000</td>
                  <td className="p-3 border border-gray-200">Per project</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing your services */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">How to Price Your HR Services as a UAE Freelancer</h2>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            The most common pricing mistake UAE freelance HR consultants make is charging by the hour.
            Hourly billing creates the wrong incentive structure — clients scrutinise time, and you
            are penalised for being efficient. Retainers, project fees, and placement fees align your
            pricing with value delivered rather than time spent.
          </p>
          <p className="text-gray-700 text-sm mb-4 leading-relaxed">
            When building a retainer proposal, anchor on outcomes: &quot;I will ensure your MOHRE compliance,
            reduce your time-to-hire from 6 weeks to 3 weeks, and onboard 8–10 employees over the next
            quarter.&quot; This framing justifies AED 10,000/month far more effectively than &quot;10 days at
            AED 1,000/day.&quot;
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">
            Consider packaging services: a fractional HR retainer that includes recruitment of up to
            2 roles per quarter and monthly payroll oversight is more attractive to SME clients than
            three separate engagements. Bundling also increases your revenue per client and reduces
            the time you spend on business development.
          </p>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 mb-10">
          <p className="text-sm text-gray-400 mb-2">Running your freelance HR practice?</p>
          <h2 className="text-xl font-bold mb-3">Solopreneur OS — Business OS for Independent Consultants</h2>
          <p className="text-gray-300 text-sm mb-3 leading-relaxed">
            Track retainer clients, manage placement pipelines, log invoices, and monitor your monthly
            revenue — all in one Notion workspace built for UAE freelancers. Solopreneur OS includes
            a client CRM, revenue dashboard, and project tracker designed for consultants who manage
            multiple engagements simultaneously.
          </p>
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            The <span className="text-white font-semibold">Freelancer Client CRM</span> is ideal if you
            focus on recruitment placements and need to track candidate pipelines and client relationships
            in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products/solopreneur-os"
              className="inline-block bg-emerald-500 text-white font-bold hover:bg-emerald-400 transition-colors text-sm"
            >
              Get Solopreneur OS — AED 249
            </Link>
            <Link
              href="/products/freelancer-client-crm"
              className="inline-block border border-gray-600 text-gray-300 font-semibold px-6 py-3 rounded-lg hover:border-gray-400 transition-colors text-sm"
            >
              Freelancer Client CRM — AED 175
            </Link>
          </div>
        </div>

        {/* Related guides */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Related Guides</h2>
          <div className="grid gap-3">
            {[
              { href: "/blog/freelance-rate-calculator-uae", label: "How to Calculate Your Freelance Rate in the UAE" },
              { href: "/blog/freelance-tax-uae", label: "Do Freelancers Pay Tax in the UAE? (2026)" },
              { href: "/blog/best-accounting-software-freelancers-uae", label: "Best Accounting Software for UAE Freelancers" },
              { href: "/blog/cold-email-templates-freelancers-uae", label: "5 Cold Email Templates That Get UAE Freelancers Hired" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm border border-gray-200 rounded-lg px-4 py-3 hover:border-gray-400 transition-colors"
              >
                <span className="text-gray-400">→</span>
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <div className="text-center">
          <Link
            href="/#products"
            className="inline-block text-gray-600 hover:text-gray-900 text-sm font-semibold border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-500 transition-colors"
          >
            Browse all SoloKit products →
          </Link>
        </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
