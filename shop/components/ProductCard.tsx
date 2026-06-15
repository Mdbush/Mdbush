import Link from "next/link";
import { type Product, formatPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  const discount =
    product.originalPrice && product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-gray-900 hover:shadow-lg transition-all duration-200">
      {/* Badge */}
      {(product.badge || discount) && (
        <span className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {product.badge ?? `-${discount}% OFF`}
        </span>
      )}

      {/* Emoji + category */}
      <div>
        <div className="text-5xl mb-2">{product.emoji}</div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          {product.category}
        </p>
      </div>

      {/* Name + tagline */}
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold text-gray-900 leading-snug">{product.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{product.tagline}</p>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-2 mt-auto">
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-500 mt-0.5 shrink-0 font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      {/* Price + CTA */}
      <div className="mt-2 pt-4 border-t border-gray-100">
        <div className="flex items-end justify-between gap-3 mb-3">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through leading-tight">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-2xl font-bold text-gray-900 leading-tight">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-green-600 font-semibold mt-0.5">
                Save {formatPrice(product.originalPrice - product.price)}
              </span>
            )}
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="bg-gray-900 text-white text-sm font-bold px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            Get it →
          </Link>
        </div>
        <p className="text-xs text-gray-400 text-center">
          ⚡ Instant download · 🛡️ 30-day guarantee
        </p>
      </div>
    </div>
  );
}
