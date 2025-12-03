// src/CustomerView.jsx
import React from "react";
import { useHomeState } from "./homeState.jsx";

export default function CustomerView() {
  const { rooms, currentHomeType, getVisibleRoomKeys, applianceConfig } =
    useHomeState();

  const visibleRoomKeys = getVisibleRoomKeys();

  return (
    <div className="max-w-5xl mx-auto py-6">
      <h1 className="text-2xl font-semibold">
        Customer View
        <span className="text-xs text-slate-500 ml-2">
          ({currentHomeType.toUpperCase()} layout)
        </span>
      </h1>
      <p className="mt-1 text-xs text-slate-400 max-w-xl">
        This imitates the mobile / tablet app UI for the customer. Only rooms
        under the selected home type are visible, and only appliances enabled in
        configuration are shown.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {visibleRoomKeys.map((key) => {
          const r = rooms[key];
          if (!r) return null;
          const conf = applianceConfig[key] || {};

          const showLights =
            r.lights !== undefined && conf.lights !== false;
          const showFan = r.fan && conf.fan !== false;
          const showAC = r.ac && conf.ac !== false;
          const showExhaust =
            r.exhaust !== undefined && conf.exhaust !== false;
          const showGeyser =
            r.geyser !== undefined && conf.geyser !== false;
          const showWM =
            r.washingMachine !== undefined &&
            conf.washingMachine !== false;

          return (
            <div
              key={key}
              className="card p-4 rounded-2xl bg-black/70 border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">
                    {currentHomeType === "1bhk" && key === "livingRoom"
                      ? "Hall"
                      : r.label}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {key === "livingRoom"
                      ? "Main hall status overview."
                      : key.startsWith("bathroom")
                      ? "Bathroom status."
                      : key === "washArea"
                      ? "Wash area & laundry status."
                      : "Room comfort & lighting status."}
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
                {showLights && (
                  <CustomerPill label="Lights" active={r.lights} />
                )}
                {showFan && r.fan && (
                  <CustomerPill
                    label="Fan"
                    active={r.fan.on}
                    detail={`S${r.fan.speed}`}
                  />
                )}
                {showAC && r.ac && (
                  <CustomerPill
                    label="AC"
                    active={r.ac.on}
                    detail={`${r.ac.temperature}°C`}
                  />
                )}
                {showExhaust && (
                  <CustomerPill
                    label="Exhaust"
                    active={r.exhaust}
                  />
                )}
                {showGeyser && (
                  <CustomerPill
                    label="Geyser"
                    active={r.geyser}
                  />
                )}
                {showWM && (
                  <CustomerPill
                    label="Washer"
                    active={r.washingMachine}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
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
      <span className="text-[11px] font-semibold text-slate-100">
        {label}
      </span>
      <span className="text-[10px] text-slate-400">
        {active ? "On" : "Off"} {detail && `• ${detail}`}
      </span>
    </div>
  );
}