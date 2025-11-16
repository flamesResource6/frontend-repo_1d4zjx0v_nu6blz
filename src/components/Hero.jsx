import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Luxe ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-48 right-[12%] h-[36rem] w-[36rem] rounded-full bg-emerald-300/25 blur-3xl" />
        <div className="absolute -bottom-64 left-[8%] h-[42rem] w-[42rem] rounded-full bg-lime-300/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.7),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-white/70 px-3 py-1 text-xs text-emerald-700 shadow-sm backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Soil-first nutrition, lab-verified
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900">
              Fertilizer reimagined for a luxury garden ritual
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Bioactive, residue‑free, precision‑released. A calmer way to grow deeper roots, richer color and lasting vitality.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-full bg-gray-900 px-6 py-3 text-white font-medium shadow-lg shadow-gray-900/10 hover:bg-gray-800 transition-colors">
                Shop the collection
              </a>
              <a href="#science" className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 text-gray-900 font-medium hover:bg-black/5 transition-colors">
                Why it works
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <img key={i} src={`https://images.unsplash.com/photo-15${80 + i}5${20 + i}4-?auto=format&fit=facearea&facepad=2&w=64&h=64&q=60`} alt="" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" />
                ))}
              </div>
              <span>Trusted by 25,000+ growers</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1974&auto=format&fit=crop" alt="Premium fertilizer" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1 text-xs text-gray-800 backdrop-blur">
                  Award-winning design, 2025
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] opacity-70 blur-2xl gradient-border" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
