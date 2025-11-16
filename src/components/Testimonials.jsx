import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sofia R.",
    role: "Botanical stylist",
    quote: "My monstera turned catwalk-ready. The leaves are glossier, thicker, and the color is unreal.",
  },
  {
    name: "Noah P.",
    role: "Landscape architect",
    quote: "Clients actually ask what fertilizer I use now. It's become part of my pitch.",
  },
  {
    name: "Amara K.",
    role: "Greenhouse owner",
    quote: "We saw a measurable increase in root density within two weeks. Reliable and elegant.",
  },
]

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Loved by discerning growers</h2>
          <p className="mt-3 text-gray-600">Real results from people who obsess over plants as much as we do.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-1 text-emerald-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-800 leading-relaxed">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-600">
                <span className="font-medium text-gray-900">{t.name}</span> • {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
