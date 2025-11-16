import { motion } from "framer-motion"

const products = [
  {
    id: "elite",
    name: "Aurea Grow Elite",
    tagline: "Flagship bioactive fertilizer",
    price: 48,
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop",
    notes: ["Indoor & outdoor", "All-purpose", "7-1-5 + micros"],
  },
  {
    id: "bloom",
    name: "Aurea Bloom",
    tagline: "Flowering accelerator",
    price: 52,
    img: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1974&auto=format&fit=crop",
    notes: ["High K for blooms", "Chelated Fe/Mn/B", "Fragrance-safe"],
  },
  {
    id: "root",
    name: "Aurea Root",
    tagline: "Root development",
    price: 44,
    img: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?q=80&w=1974&auto=format&fit=crop",
    notes: ["Humic + fulvic", "Myco synergy", "Transplant aid"],
  },
]

export default function Products() {
  return (
    <section id="products" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">The Collection</h2>
            <p className="mt-3 text-gray-600">Three precision formulas. One seamless ritual.</p>
          </div>
          <a href="#checkout" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-white font-medium hover:bg-gray-800">Proceed to checkout</a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group relative overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-black/5 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                    <p className="text-sm text-gray-600">{p.tagline}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">${p.price}</p>
                    <p className="text-xs text-gray-500">250ml</p>
                  </div>
                </div>
                <ul className="mt-4 grid gap-1 text-sm text-gray-600">
                  {p.notes.map(n => (
                    <li key={n}>• {n}</li>
                  ))}
                </ul>
                <div className="mt-5">
                  <a href="#checkout" className="inline-flex w-full items-center justify-center rounded-xl border border-black/10 bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100">Add to cart</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
