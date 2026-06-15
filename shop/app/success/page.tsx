import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProduct } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Complete — DigitalTools",
};

type Props = { searchParams: Promise<{ product?: string }> };

export default async function SuccessPage({ searchParams }: Props) {
  const { product: slug } = await searchParams;
  const product = slug ? getProduct(slug) : undefined;

  return (
    <>
      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-md w-full text-center flex flex-col gap-6">
          <div className="text-6xl">🎉</div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">You&apos;re all set!</h1>
            <p className="mt-2 text-gray-500 leading-relaxed">
              {product
                ? `Your copy of "${product.name}" is on its way to your inbox.`
                : "Your order is confirmed."}
              {" "}Check your email for the download link.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-left flex flex-col gap-3">
            <p className="text-sm font-semibold text-gray-700">What happens next:</p>
            <ul className="flex flex-col gap-2 text-sm text-gray-500">
              <li className="flex items-start gap-2">
                <span className="text-green-500 shrink-0 font-bold">✓</span>
                Check your email — you&apos;ll find the download link there
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 shrink-0 font-bold">✓</span>
                For Notion templates: click &quot;Duplicate&quot; to add it to your workspace
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 shrink-0 font-bold">✓</span>
                Can&apos;t find the email? Check spam, or reply to your receipt
              </li>
            </ul>
          </div>

          <Link
            href="/"
            className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors text-sm"
          >
            ← Back to store
          </Link>

          <p className="text-xs text-gray-400">
            Questions? Email us — we respond within 24 hours.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
