import { Menu, Leaf, ShoppingBag, X, Search } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex h-14 items-center justify-between rounded-full border border-black/10 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,.04)] pl-2 pr-2">
          <a href="/" className="inline-flex items-center gap-2 pl-2">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-lime-500 text-white shadow-lg shadow-emerald-500/30">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-gray-900">Aurea Grow</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#science" className="hover:text-gray-900 transition-colors">Science</a>
            <a href="#products" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#reviews" className="hover:text-gray-900 transition-colors">Reviews</a>
            <a href="#sustainability" className="hover:text-gray-900 transition-colors">Sustainability</a>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-gray-700">
              <Search className="h-4 w-4 text-gray-500" />
              <input placeholder="Search products" className="w-40 bg-transparent placeholder:text-gray-400 focus:outline-none" />
            </div>
            <a href="#products" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-gray-800 transition-colors">
              <ShoppingBag className="h-4 w-4" /> Shop
            </a>
            <button aria-label="Menu" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700">
              {open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-black/10 bg-white/90 backdrop-blur p-2 shadow-lg animate-in">
            <div className="grid gap-1 text-sm text-gray-700">
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
