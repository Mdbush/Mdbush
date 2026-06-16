import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProduct, products, formatPrice } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank you! — SoloKit",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ product?: string }> };

export default async function SuccessPage({ searchParams }: Props) {
  const { product: slug } = await searchParams;
  const product = slug ? getProduct(slug) : undefined;

  const upsells = products.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <Header />

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-10">

        {/* Hero confirmation */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-2xl mb-8 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold mb-3">You&apos;re all set!</h1>
          <p className="text-gray-300 text-sm mb-2">
            {product ? (
              <>
                <strong className="text-white">{product.name}</strong> is on its way to your inbox.
              </>
            ) : (
              "Your purchase is confirmed."
            )}
          </p>
          <p className="text-gray-400 text-xs">
            Check your email — the download link from Lemon Squeezy arrives within a few minutes.
            Can&apos;t find it? Check spam or reply to the receipt.
          </p>
        </div>

        {/* Steps */}
        <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-6 mb-8">
          <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">What happens next</p>
          <ol className="flex flex-col gap-4">
            {[
              "Check your email for a receipt from Lemon Squeezy.",
              "Click the download link in the email to access your product.",
              product?.category === "Notion Templates"
                ? "Open Notion, click the link in your download, and hit Duplicate to add it to your workspace."
                : "Open the file and start using your templates and prompts right away.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700">{text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Referral nudge */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 mb-8">
          <p className="font-bold text-sm mb-1">Know someone who freelances in the UAE?</p>
          <p className="text-gray-400 text-xs mb-3">
            Forward them solokit.cloud — or earn 30% commission for every sale you refer through our affiliate program.
          </p>
          <Link
            href="/affiliates"
            className="inline-block text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Join affiliate program →
          </Link>
        </div>

        {/* Upsell */}
        {upsells.length > 0 && (
          <div className="mb-10">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 text-center">
              Complete your toolkit
            </p>
            <div className="flex flex-col gap-3">
              {upsells.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 hover:border-emerald-400 hover:shadow-sm transition-all"
                >
                  <span className="text-3xl shrink-0">{p.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{p.tagline}</p>
                  </div>
                  <span className="text-sm font-bold text-emerald-600 shrink-0 whitespace-nowrap">
                    {formatPrice(p.price)} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Free blog resources */}
        <div className="mb-10 border border-gray-100 rounded-2xl p-5 bg-gray-50">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">While you wait for the email</p>
          <div className="space-y-2">
            {[
              { href: "/blog/freelance-rate-calculator-uae", label: "Calculate your minimum freelance rate" },
              { href: "/blog/freelance-tax-uae", label: "UAE tax guide for freelancers" },
              { href: "/blog/how-to-get-clients-linkedin-uae", label: "Get clients on LinkedIn in the UAE" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                <span className="text-emerald-400">→</span>
                {label}
              </Link>
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mb-4 text-center">
          Questions?{" "}
          <a href="mailto:md.a.bushara@gmail.com" className="underline hover:text-gray-600">
            Email us
          </a>{" "}
          — we respond within 24 hours.
        </p>

        <div className="text-center">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
            ← Back to store
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
