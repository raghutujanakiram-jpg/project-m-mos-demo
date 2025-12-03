import React from "react";
import { useHomeState } from "./homeState.jsx";

export default function EstateLighting() {
  const { outdoorState, toggleEstateLight } = useHomeState();
  const { estateLighting } = outdoorState;

  const entries = [
    ["garden", "Garden"],
    ["compound", "Compound Wall"],
    ["driveway", "Driveway"],
    ["fence", "Fence"],
  ];

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-semibold">Estate Lighting</h1>
      <p className="mt-1 text-xs text-slate-400 max-w-xl">
        Demonstrate how PROJECT-M can zone-control garden, driveway and fence
        lighting for villas, farm houses and bungalows.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {entries.map(([key, label]) => (
          <button
            key={key}
            onClick={() => toggleEstateLight(key)}
            className={`rounded-2xl border px-4 py-3 text-left text-sm bg-black/60
            ${
              estateLighting[key]
                ? "border-[#ff1a1a88] shadow-[0_0_18px_rgba(255,26,26,0.6)]"
                : "border-white/10"
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{label}</span>
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  estateLighting[key] ? "bg-[#ff1a1a]" : "bg-slate-500"
                }`}
              />
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              {estateLighting[key] ? "Active" : "Off"} • demo only
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}