import { FlaskConical, Sparkles, Droplets, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: FlaskConical,
    title: "Bioactive formula",
    desc: "Chelated micronutrients with organic carbon for maximal uptake.",
  },
  {
    icon: Droplets,
    title: "Precision release",
    desc: "Smart slow-release profile prevents burn and supports steady growth.",
  },
  {
    icon: ShieldCheck,
    title: "Residue-free",
    desc: "Ultra-clean processing leaves no salts or build-up in soil.",
  },
  {
    icon: Sparkles,
    title: "Visible in 7 days",
    desc: "Richer greens, stronger stems, deeper roots — fast.",
  },
]

export default function Features() {
  return (
    <section id="science" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-gray-900">Engineered for extraordinary growth</h2>
          <p className="mt-4 text-lg text-gray-600">Premium inputs, pharmaceutical-level quality control, and data-driven agronomy.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-700 ring-1 ring-emerald-500/20 group-hover:scale-110 transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
