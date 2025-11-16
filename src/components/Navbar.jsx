import { Menu, Leaf, ShoppingBag } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="inline-flex items-center gap-2">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 text-white shadow-lg shadow-emerald-500/30">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">Aurea Grow</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#science" className="hover:text-gray-900 transition-colors">Science</a>
            <a href="#products" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#reviews" className="hover:text-gray-900 transition-colors">Reviews</a>
            <a href="#sustainability" className="hover:text-gray-900 transition-colors">Sustainability</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#products" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-gray-800 transition-colors">
              <ShoppingBag className="h-4 w-4" /> Shop now
            </a>
            <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-gray-700">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm text-gray-700">
              <a href="#science" className="rounded-md px-3 py-2 hover:bg-black/5">Science</a>
              <a href="#products" className="rounded-md px-3 py-2 hover:bg-black/5">Products</a>
              <a href="#reviews" className="rounded-md px-3 py-2 hover:bg-black/5">Reviews</a>
              <a href="#sustainability" className="rounded-md px-3 py-2 hover:bg-black/5">Sustainability</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
