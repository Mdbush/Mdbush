import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, formatPrice, products } from "@/lib/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — DigitalTools`,
    description: product.tagline,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: product.name,
      description: product.tagline,
      url: `/products/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.name,
      description: product.tagline,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-700 transition-colors mb-8 inline-block">
          ← Back to all products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-2">
          {/* Left — product info */}
          <div className="flex flex-col gap-5">
            <div className="text-5xl">{product.emoji}</div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                {product.category}
              </p>
              {product.badge && (
                <span className="inline-block bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-2">
                  {product.badge}
                </span>
              )}
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">{product.name}</h1>
              <p className="mt-2 text-lg text-gray-500">{product.tagline}</p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm">{product.description}</p>

            {/* What's included */}
            <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-2">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — purchase box */}
          <div className="md:sticky md:top-20 self-start">
            <div className="border border-gray-200 rounded-2xl p-6 flex flex-col gap-5 shadow-sm">
              <div>
                <p className="text-sm text-gray-400 mb-1">One-time payment</p>
                <p className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</p>
              </div>

              <ul className="flex flex-col gap-2 text-sm text-gray-500">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Instant digital delivery</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> Lifetime access</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 30-day money-back guarantee</li>
              </ul>

              <form action="/api/checkout" method="POST">
                <input type="hidden" name="productSlug" value={product.slug} />
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white font-semibold py-3.5 rounded-xl hover:bg-gray-700 transition-colors text-sm"
                >
                  Buy Now — {formatPrice(product.price)}
                </button>
              </form>

              <p className="text-xs text-gray-400 text-center">
                Secure checkout powered by Lemon Squeezy. Accepts all major cards.
              </p>
            </div>

            {/* Testimonial */}
            <div className="mt-4 border border-gray-100 rounded-2xl p-5 bg-gray-50">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                &ldquo;Saved me at least 4 hours setting up my client system. Worth every penny.&rdquo;
              </p>
              <p className="mt-2 text-xs text-gray-400 font-medium">— Alex R., freelance designer</p>
            </div>
          </div>
        </div>

        {/* More products */}
        <section className="mt-16 border-t border-gray-100 pt-12">
          <h2 className="text-lg font-bold text-gray-900 mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products
              .filter((p) => p.slug !== product.slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className="flex items-start gap-4 border border-gray-200 rounded-xl p-4 hover:border-gray-400 transition-colors"
                >
                  <span className="text-2xl shrink-0">{p.emoji}</span>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{p.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{p.tagline}</p>
                    <p className="text-sm font-bold text-gray-900 mt-1">{formatPrice(p.price)}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
