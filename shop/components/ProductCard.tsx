import Link from "next/link";
import { type Product, formatPrice } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-gray-400 hover:shadow-md transition-all duration-200">
      {product.badge && (
        <span className="absolute top-4 right-4 bg-gray-900 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
          {product.badge}
        </span>
      )}

      <div className="text-4xl">{product.emoji}</div>

      <div className="flex flex-col gap-1">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
          {product.category}
        </p>
        <h3 className="text-lg font-bold text-gray-900 leading-snug">{product.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{product.tagline}</p>
      </div>

      <ul className="flex flex-col gap-1.5 mt-auto">
        {product.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-green-500 mt-0.5 shrink-0">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100">
        <div className="flex flex-col">
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
          )}
          <span className="text-2xl font-bold text-gray-900">{formatPrice(product.price)}</span>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-700 transition-colors"
        >
          Get it →
        </Link>
      </div>
    </div>
  );
}
