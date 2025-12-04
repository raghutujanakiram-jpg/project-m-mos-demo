// src/CustomerView.jsx
import React from "react";
import { useHomeState } from "./homeState.jsx";

export default function CustomerView() {
  const { rooms } = useHomeState();

  // If rooms does not exist yet → show loader instead of crashing
  if (!rooms || Object.keys(rooms).length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-slate-300">
        Loading rooms…
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-6">
      <h1 className="text-2xl font-semibold">Customer View</h1>
      <p className="mt-1 text-xs text-slate-400 max-w-xl">
        This shows each room & its current appliance states.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {Object.entries(rooms).map(([key, r]) => (
          <div
            key={key}
            className="card p-4 rounded-2xl bg-black/70 border-white/10"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{r.label}</div>
                <div className="text-[11px] text-slate-400">
                  {roomDescription(key)}
                </div>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
              {"lights" in r && <CustomerPill label="Lights" active={r.lights} />}
              {r.fan && (
                <CustomerPill
                  label="Fan"
                  active={r.fan.on}
                  detail={`S${r.fan.speed}`}
                />
              )}
              {r.ac && (
                <CustomerPill
                  label="AC"
                  active={r.ac.on}
                  detail={`${r.ac.temperature}°C`}
                />
              )}
              {key === "kitchen" && (
                <CustomerPill label="Exhaust" active={r.exhaust} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function roomDescription(key) {
  switch (key) {
    case "hall":
    case "livingRoom":
      return "Main family space.";
    case "masterBedroom":
      return "Primary bedroom.";
    case "kitchen":
      return "Kitchen appliances & exhaust.";
    case "bathroom":
      return "Bathroom geyser & lights.";
    case "washArea":
      return "Laundry / utility.";
    default:
      return "Room controls.";
  }
}

function CustomerPill({ label, active, detail }) {
  return (
    <div
      className={`rounded-lg border px-2 py-2 flex flex-col bg-black/60 ${
        active
          ? "border-[#ff1a1a88] shadow-[0_0_12px_rgba(255,26,26,0.5)]"
          : "border-white/10"
      }`}
    >
      <span className="text-[11px] font-semibold text-slate-100">{label}</span>
      <span className="text-[10px] text-slate-400">
        {active ? "On" : "Off"} {detail && `• ${detail}`}
      </span>
    </div>
  );
}