import React from "react";

export default function BootScreen({ mode = "boot" }) {
  const isShutdown = mode === "shutdown";

  const title = isShutdown
    ? "Shutting down core modules…"
    : "Booting core modules…";

  const sub = isShutdown
    ? "Releasing relays · voice layer · M-OS surfaces"
    : "Initializing relays · voice layer · M-OS surfaces";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050506] text-slate-100 z-50">
      <div className="relative w-full max-w-md px-6">
        <div className="absolute -inset-12 blur-[120px] bg-[#ff1a1a33]" />

        <div className="relative rounded-3xl border border-[#ff1a1a66] bg-gradient-to-b from-[#2b0000] via-black to-[#130000] px-6 py-6 shadow-[0_0_60px_rgba(255,26,26,0.7)]">
          <div className="text-center">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ffb4b4] text-lg font-mono">
              M
            </div>

            <div className="text-xs tracking-[0.28em] text-slate-300 uppercase">
              PROJECT-M
            </div>
            <div className="mt-1 text-[11px] text-[#ffb4b4]">
              M-OS · World’s First Offline Home Automation OS
            </div>

            <div className="mt-4 text-[10px] font-mono text-slate-400 uppercase tracking-[0.18em]">
              {title}
            </div>

            <div className="mt-3 h-1 w-full rounded-full bg-black/40 overflow-hidden">
              <div
                className={`h-full w-1/2 bg-gradient-to-r from-[#ff1a1a] to-[#ffa3a3] ${
                  isShutdown ? "animate-ping" : "animate-pulse"
                }`}
              />
            </div>

            <div className="mt-3 text-[10px] text-slate-500">{sub}</div>
          </div>
        </div>
      </div>
    </div>
  );
}