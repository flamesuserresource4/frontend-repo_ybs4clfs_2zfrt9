import { Sparkles } from "lucide-react";

export default function Hero({ onSeed }) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 mb-4">
          <Sparkles className="w-4 h-4" />
          <span className="text-xs">Multi-Salon Management SaaS</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Launch your salon platform faster
        </h1>
        <p className="mt-4 text-blue-200/80 text-lg max-w-2xl mx-auto">
          Customers discover salons and book appointments. Owners manage services, staff and bookings. Admin oversees it all.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button onClick={onSeed} className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition">
            Seed demo data
          </button>
          <a href="#discover" className="px-5 py-3 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-blue-100 border border-white/10 transition">
            Explore salons
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(59,130,246,0.25),transparent_60%)]" />
    </section>
  );
}
