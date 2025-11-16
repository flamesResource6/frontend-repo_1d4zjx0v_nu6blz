export default function CTA() {
  return (
    <section id="sustainability" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-lime-600 p-8 sm:p-12 text-white shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Sustainability without compromise</h3>
              <p className="mt-3 text-white/85 max-w-2xl">We source responsibly, offset 100% of shipping emissions, and design packaging that’s recyclable and display-worthy. Because luxury should be better for your plants and the planet.</p>
            </div>
            <div className="lg:justify-self-end">
              <a href="#checkout" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-gray-900 font-medium hover:bg-white/90">Start your growth ritual</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
