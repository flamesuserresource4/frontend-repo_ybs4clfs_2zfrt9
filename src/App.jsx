import { useState } from "react";
import Hero from "./components/Hero";
import Discover from "./components/Discover";

const API = import.meta.env.VITE_BACKEND_URL || "";

function App() {
  const [seedMsg, setSeedMsg] = useState("");

  const seed = async () => {
    try {
      const res = await fetch(`${API}/api/dev/seed`, { method: "POST" });
      const data = await res.json();
      setSeedMsg(data.message || "Seeded");
    } catch (e) {
      setSeedMsg("Failed to seed. Is backend running?");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Hero onSeed={seed} />
      {seedMsg && (
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-emerald-200">
            {seedMsg}
          </div>
        </div>
      )}
      <Discover />
      <footer className="py-10 text-center text-blue-300/70">Built for multi-tenant salon platforms</footer>
    </div>
  );
}

export default App;
