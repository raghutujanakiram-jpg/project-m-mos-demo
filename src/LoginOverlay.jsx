// src/LoginOverlay.jsx
import React, { useState } from "react";

export default function LoginOverlay(props) {
  // Support BOTH names so App.jsx can use either:
  const loginFn = props.onLogin || props.onEnter;

  const [mode, setMode] = useState("user"); // user | admin
  const [homeId, setHomeId] = useState("");
  const [pin, setPin] = useState("");

  // normal Enter button
  const handleEnter = (e) => {
    e.preventDefault();

    if (!loginFn) {
      console.warn("No onLogin/onEnter handler passed from App.jsx");
      return;
    }

    loginFn({
      role: mode,          // "user" or "admin"
      homeType: "custom",  // normal login => Custom Home
      homeId,
      pin,
    });
  };

  // quick demo helpers
  const handleDemo = (homeType, role = "user") => {
    if (!loginFn) {
      console.warn("No onLogin/onEnter handler passed from App.jsx");
      return;
    }

    loginFn({
      role,
      homeType,           // "1bhk", "2bhk", "villa", etc
      homeId: `Demo ${homeType.toUpperCase()}`,
      pin: "0000",
    });
  };

  return (
    <div className="fixed inset-0 z-40 bg-[#050506] bg-mos flex items-center justify-center">
      <div className="relative w-full max-w-xl px-6">
        <div className="absolute -inset-16 blur-[130px] bg-[#ff1a1a33]" />

        <div className="relative rounded-3xl border border-white/15 bg-black/80 px-8 py-8 shadow-[0_0_70px_rgba(0,0,0,0.9)]">
          {/* header */}
          <div className="text-center mb-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ffb4b4] text-lg font-mono mb-2">
              M
            </div>
            <div className="text-xs tracking-[0.28em] uppercase text-slate-300">
              PROJECT-M
            </div>
            <div className="text-[11px] text-[#ffb4b4] mt-1">
              M-OS · World’s First Offline Home Automation OS
            </div>
            <div className="text-[10px] text-slate-500 mt-1">
              AI Assistant: Chinna · Fully Offline
            </div>
          </div>

          {/* form */}
          <form className="grid gap-4" onSubmit={handleEnter}>
            <label className="text-left text-xs text-slate-300">
              Home ID / Name
              <input
                className="mt-1 w-full rounded-xl bg-black/70 border border-white/20 px-3 py-2 text-xs outline-none focus:border-[#ff1a1a]"
                placeholder="e.g. SSS Villa / Demo Home"
                value={homeId}
                onChange={(e) => setHomeId(e.target.value)}
              />
            </label>

            <label className="text-left text-xs text-slate-300">
              Access PIN
              <input
                type="password"
                className="mt-1 w-full rounded-xl bg-black/70 border border-white/20 px-3 py-2 text-xs outline-none focus:border-[#ff1a1a]"
                placeholder="••••"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </label>

            {/* access mode */}
            <div className="flex items-center justify-between text-xs mt-1">
              <div className="flex items-center gap-1">
                <span className="text-slate-400 mr-1">Access mode</span>
                <button
                  type="button"
                  onClick={() => setMode("user")}
                  className={`px-3 py-1 rounded-full border text-[11px] uppercase tracking-[0.16em] ${
                    mode === "user"
                      ? "border-[#ff1a1a] bg-[#ff1a1a] text-black"
                      : "border-white/20 bg-black/60 text-slate-300"
                  }`}
                >
                  User
                </button>
                <button
                  type="button"
                  onClick={() => setMode("admin")}
                  className={`px-3 py-1 rounded-full border text-[11px] uppercase tracking-[0.16em] ${
                    mode === "admin"
                      ? "border-[#ff1a1a] bg-[#ff1a1a] text-black"
                      : "border-white/20 bg-black/60 text-slate-300"
                  }`}
                >
                  Admin
                </button>
              </div>
            </div>

            {/* DEMO SHORTCUTS */}
            <div className="flex flex-wrap gap-2 mt-1 text-[10px]">
              <button
                type="button"
                onClick={() => handleDemo("1bhk", "user")}
                className="btn-ghost"
              >
                Demo 1BHK
              </button>
              <button
                type="button"
                onClick={() => handleDemo("2bhk", "user")}
                className="btn-ghost"
              >
                Demo 2BHK
              </button>
              <button
                type="button"
                onClick={() => handleDemo("villa", "user")}
                className="btn-ghost"
              >
                Demo Villa
              </button>
              <button
                type="button"
                onClick={() => handleDemo("villa", "admin")}
                className="btn-ghost"
              >
                Demo Admin
              </button>
            </div>

            {/* main login button */}
            <button type="submit" className="btn-red mt-3 w-full">
              ENTER M-OS
            </button>

            <div className="text-[10px] text-slate-500 text-center mt-2">
              Welcome to the world’s first offline Home Automation OS.  
              Your privacy is our top priority – we do not save any information
              to external cloud.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}