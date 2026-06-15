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

      <main className="flex-1 max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="text-6xl mb-6">🎉</div>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">You&apos;re all set!</h1>

        <p className="text-lg text-gray-500 mb-2">
          {product ? (
            <>
              <strong className="text-gray-900">{product.name}</strong> is on its way to your inbox.
            </>
          ) : (
            "Your purchase is confirmed."
          )}
        </p>

        <p className="text-gray-400 text-sm mb-10">
          Check your email — the download link from Lemon Squeezy arrives within a few minutes.
          Can&apos;t find it? Check spam or reply to the receipt.
        </p>

        {/* Steps */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left mb-10">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">What happens next</p>
          <ol className="flex flex-col gap-4">
            {[
              "Check your email for a receipt from Lemon Squeezy.",
              "Click the download link in the email to access your product.",
              product?.category === "Notion Templates"
                ? "Open Notion, click the link in your download, and hit Duplicate to add it to your workspace."
                : "Open the file and start using your templates and prompts right away.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-6 h-6 bg-gray-900 text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-600">{text}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Upsell */}
        {upsells.length > 0 && (
          <div className="text-left mb-10">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 text-center">
              Complete your toolkit
            </p>
            <div className="flex flex-col gap-3">
              {upsells.map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="flex items-center gap-4 border border-gray-200 rounded-xl p-4 hover:border-gray-400 hover:shadow-sm transition-all"
                >
                  <span className="text-3xl shrink-0">{p.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{p.tagline}</p>
                  </div>
                  <span className="text-sm font-bold text-gray-900 shrink-0 whitespace-nowrap">
                    {formatPrice(p.price)} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs text-gray-400 mb-4">
          Questions?{" "}
          <a href="mailto:md.a.bushara@gmail.com" className="underline hover:text-gray-600">
            Email us
          </a>{" "}
          — we respond within 24 hours.
        </p>

        <Link href="/" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
          ← Back to store
        </Link>
      </main>

      <Footer />
    </>
  );
}
