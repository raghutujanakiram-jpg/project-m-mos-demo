import React from "react";
import { useHomeState } from "./homeState.jsx";

export default function Dashboard() {
  const { rooms, currentHomeType } = useHomeState();

  return (
    <div className="min-h-screen text-slate-100 relative">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ff1a1a33] blur-[140px]" />
        <div className="absolute bottom-[-60px] right-10 h-72 w-72 rounded-full bg-[#7f1d1daa] blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-6">
        <h1 className="text-3xl font-semibold tracking-wide text-slate-200 drop-shadow-[0_0_18px_rgba(255,26,26,0.5)]">
          PROJECT-M <span className="text-[#ff1a1a]">Control Center</span>
        </h1>
        <p className="mt-2 text-xs text-slate-400 font-mono uppercase tracking-[0.18em]">
          Offline Smart Home • {currentHomeType?.toUpperCase()}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {/* Security */}
          <div className="card p-4 shadow-[0_0_35px_rgba(255,26,26,0.3)]">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Security Modes
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              Switch between home / away / night. (Mock only)
            </p>
            <div className="flex gap-3 mt-4">
              {["Home", "Away", "Night"].map((m) => (
                <button
                  key={m}
                  className="flex-1 px-3 py-2 rounded-lg bg-black/40 text-xs 
                             border border-white/10 hover:border-[#ff1a1a] 
                             hover:bg-[#ff1a1a22] transition uppercase tracking-wide"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Energy */}
          <div className="card p-4 shadow-[0_0_35px_rgba(255,26,26,0.3)]">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Energy Load
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              Simulated load for this demo graph.
            </p>
            <div className="mt-5 text-3xl font-bold text-[#ff3b3b] drop-shadow-[0_0_10px_rgba(255,60,60,0.6)]">
              1450 W
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              Today: 6.4 kWh • Mock value
            </p>
          </div>

          {/* Water */}
          <div className="card p-4 shadow-[0_0_35px_rgba(255,26,26,0.3)]">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Water Tank
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              Auto-mode simulation via M-OS.
            </p>
            <div className="mt-6 text-4xl font-bold text-[#ff5c5c] drop-shadow-[0_0_12px_rgba(255,60,60,0.7)]">
              72%
            </div>
          </div>

          {/* Rooms count */}
          <div className="card p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              Rooms Connected
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              Based on your selected home type.
            </p>
            <div className="mt-5 text-4xl font-bold text-[#ff1a1a] drop-shadow-[0_0_12px_rgba(255,26,26,0.7)]">
              {Object.keys(rooms).length}
            </div>
          </div>

          {/* Chinna */}
          <div className="card p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              AI Assistant • Chinna
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              Local offline voice interface for home controls.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
              <span className="text-xs text-slate-300">Ready • Listening</span>
            </div>
          </div>

          {/* System */}
          <div className="card p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide">
              System Status
            </h2>
            <p className="text-[11px] text-slate-400 mt-1">
              PROJECT-M internal lab build.
            </p>
            <div className="mt-4 text-[11px] font-mono text-slate-400 leading-5">
              M-OS Kernel: <span className="text-[#ff3b3b]">v0.9</span>
              <br />
              Build: <span className="text-[#ff3b3b]">#020</span>
              <br />
              Mode: LAB
              <br />
              HUB: M-HUB/01
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}