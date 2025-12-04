// src/HomeTypes.jsx
import React from "react";
import { useHomeState } from "./homeState.jsx";

const types = [
  { id: "1bhk", label: "1 BHK", desc: "Hall + Master + Kitchen + Bath + Wash." },
  { id: "2bhk", label: "2 BHK", desc: "Small family apartment." },
  { id: "3bhk", label: "3 BHK", desc: "Premium apartment layout." },
  { id: "4bhk", label: "4 BHK", desc: "Large flat / duplex." },
  { id: "villa", label: "Villa", desc: "Gated community villa." },
  { id: "bungalow", label: "Bungalow", desc: "Independent city house." },
  { id: "farm", label: "Farmhouse", desc: "Weekend / resort property." },
  {
    id: "vintage",
    label: "Vintage Home",
    desc: "Older independent home with retrofitted wiring.",
  },
  {
    id: "custom",
    label: "Custom Home",
    desc: "Start with full layout, then configure rooms & appliances.",
  },
];

export default function HomeTypes() {
  const { currentHomeType, setHomeType } = useHomeState();

  return (
    <div className="max-w-6xl mx-auto py-6">
      <h1 className="text-2xl font-semibold">Select Home Type</h1>
      <p className="mt-1 text-xs text-slate-400 max-w-xl">
        This decides how many rooms appear in the Rooms and Customer views.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {types.map((t) => {
          const active = currentHomeType === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setHomeType(t.id)}
              className={`rounded-2xl border px-4 py-3 text-left text-sm bg-black/70
              ${
                active
                  ? "border-[#ff1a1a88] shadow-[0_0_20px_rgba(255,26,26,0.65)]"
                  : "border-white/10 hover:border-[#ff1a1a55]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{t.label}</span>
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    active ? "bg-[#ff1a1a]" : "bg-slate-500"
                  }`}
                />
              </div>
              <div className="text-[11px] text-slate-400 mt-1">{t.desc}</div>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-[11px] text-slate-500">
        Later we will connect this to backend templates and real hardware
        mapping per home.
      </p>
    </div>
  );
}