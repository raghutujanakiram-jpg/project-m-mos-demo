import React from "react";
import { useHomeState } from "./homeState.jsx";

export default function OutdoorPool() {
  const {
    outdoorState,
    togglePoolPump,
    togglePoolLights,
    togglePoolHeater,
    changePoolTemperature,
  } = useHomeState();
  const { pool } = outdoorState;

  return (
    <div className="max-w-4xl mx-auto py-6">
      <h1 className="text-2xl font-semibold">Outdoor & Pool</h1>
      <p className="mt-1 text-xs text-slate-400">
        Demo of pool automation: pump, lights, and temperature.
      </p>

      <div className="card mt-6 p-4">
        <h2 className="text-sm font-semibold">Pool Controls</h2>

        <ControlRow
          label="Pump"
          value={pool.pump ? "Running" : "Stopped"}
          onToggle={togglePoolPump}
        />
        <ControlRow
          label="Lights"
          value={pool.lights ? "On" : "Off"}
          onToggle={togglePoolLights}
        />
        <ControlRow
          label="Heater"
          value={pool.heater ? "On" : "Off"}
          onToggle={togglePoolHeater}
        />
        <ControlRow
          label="Temperature"
          value={`${pool.temperature}°C`}
          extra={
            <div className="flex items-center gap-1 text-[11px]">
              <button
                onClick={() => changePoolTemperature(pool.temperature - 1)}
                className="h-6 w-6 rounded-full border border-white/15 flex items-center justify-center"
              >
                –
              </button>
              <span className="w-10 text-center">{pool.temperature}°</span>
              <button
                onClick={() => changePoolTemperature(pool.temperature + 1)}
                className="h-6 w-6 rounded-full border border-white/15 flex items-center justify-center"
              >
                +
              </button>
            </div>
          }
        />
      </div>
    </div>
  );
}

function ControlRow({ label, value, onToggle, extra }) {
  return (
    <div className="mt-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-3 py-2.5">
      <div>
        <div className="text-xs font-semibold">{label}</div>
        <div className="text-[11px] text-slate-400">{value}</div>
      </div>
      <div className="flex items-center gap-2">
        {extra}
        {onToggle && (
          <button
            onClick={onToggle}
            className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-[0.14em] border border-white/20 bg-white/5 hover:bg-[#ff1a1a22]"
          >
            Toggle
          </button>
        )}
      </div>
    </div>
  );
}