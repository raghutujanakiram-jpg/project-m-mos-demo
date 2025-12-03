import React from "react";
import { useHomeState } from "./homeState.jsx";

export default function GateGarage() {
  const {
    outdoorState,
    toggleGate,
    toggleGateAutoMode,
    toggleGateLight,
    toggleGarage,
    toggleGarageLights,
  } = useHomeState();
  const { gate, garage } = outdoorState;

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-semibold">Gate & Garage</h1>
      <p className="mt-1 text-xs text-slate-400">
        Simulated main gate and garage automation. Ideal to show car-based flows.
      </p>

      <div className="grid md:grid-cols-2 gap-5 mt-6">
        <div className="card p-4">
          <h2 className="text-sm font-semibold">Main Gate</h2>
          <ControlRow
            label="Gate"
            value={gate.isOpen ? "Open" : "Closed"}
            onToggle={toggleGate}
          />
          <ControlRow
            label="Auto Mode"
            value={gate.autoMode ? "Enabled" : "Manual"}
            onToggle={toggleGateAutoMode}
          />
          <ControlRow
            label="Gate Light"
            value={gate.light ? "On" : "Off"}
            onToggle={toggleGateLight}
          />
        </div>

        <div className="card p-4">
          <h2 className="text-sm font-semibold">Garage</h2>
          <ControlRow
            label="Door"
            value={garage.isOpen ? "Open" : "Closed"}
            onToggle={toggleGarage}
          />
          <ControlRow
            label="Lights"
            value={garage.lights ? "On" : "Off"}
            onToggle={toggleGarageLights}
          />
        </div>
      </div>
    </div>
  );
}

function ControlRow({ label, value, onToggle }) {
  return (
    <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2.5">
      <div>
        <div className="text-xs font-semibold">{label}</div>
        <div className="text-[11px] text-slate-400">{value}</div>
      </div>
      <button
        onClick={onToggle}
        className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.14em] border border-white/20 bg-white/5 hover:bg-[#ff1a1a22]"
      >
        Toggle
      </button>
    </div>
  );
}