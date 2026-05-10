"use client";

import { products } from "@/lib/products";
import { useCurrency } from "@/context/CurrencyContext";
import Link from "next/link";

export default function ShopPage() {
  const { formatPrice } = useCurrency();

  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shop Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-white/10 rounded-2xl p-6 flex flex-col gap-4 bg-white/5 hover:bg-white/8 transition-all border-t-2 border-t-brand-teal hover:border-t-brand-teal-light hover:shadow-lg hover:shadow-brand-teal/20">
            <span className="text-xs text-brand-teal uppercase tracking-widest font-semibold">{product.category}</span>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-white/60 text-sm flex-1">{product.shortDesc}</p>
            <div className="flex items-center justify-between mt-2">
              <span className="text-lg font-bold text-brand-teal">{formatPrice(product.price)}</span>
              <Link
                href={`/shop/${product.id}`}
                className="bg-brand-teal text-brand-dark text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-teal-light transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
