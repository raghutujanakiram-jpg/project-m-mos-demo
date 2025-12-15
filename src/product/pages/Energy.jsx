import React, { useEffect, useState } from "react";

export default function Energy() {
  const [load, setLoad] = useState(1200);

  useEffect(() => {
    const id = setInterval(() => {
      setLoad((v) => {
        const n = v + (Math.random() * 200 - 100);
        return Math.max(800, Math.min(1800, Math.round(n)));
      });
    }, 1200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Energy</h1>
      <p className="text-sm text-slate-400 mt-1">
        Edge-processed load simulation
      </p>

      <div className="mt-8 p-6 rounded-xl bg-black/50 border border-white/10">
        <div className="text-4xl font-bold text-[#ff3b3b]">
          {load} W
        </div>
        <div className="mt-3 h-2 w-full bg-white/10 rounded">
          <div
            className="h-2 bg-[#ff1a1a] rounded transition-all"
            style={{ width: `${(load / 1800) * 100}%` }}
          />
        </div>
        <div className="mt-2 text-[11px] text-slate-500">
          Live demo • No cloud
        </div>
      </div>
    </div>
  );
}