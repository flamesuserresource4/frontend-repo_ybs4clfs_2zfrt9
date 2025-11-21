import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Discover() {
  const [salons, setSalons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API}/api/salons`);
        const data = await res.json();
        setSalons(data.items || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section id="discover" className="max-w-6xl mx-auto px-6 py-14">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl font-semibold text-white">Featured salons</h2>
        <span className="text-blue-300/70 text-sm">{salons.length} results</span>
      </div>
      {loading && <p className="text-blue-200">Loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {salons.map((s) => (
          <article key={s.id} className="rounded-xl border border-white/10 bg-slate-800/50 p-4">
            <div className="aspect-video rounded-lg bg-slate-700/60 mb-4" />
            <h3 className="text-white font-medium">{s.salonName}</h3>
            <p className="text-sm text-blue-200/80 line-clamp-2">{s.description || ""}</p>
            <div className="mt-3 text-xs text-blue-300/70">{s.address?.city || ""}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
