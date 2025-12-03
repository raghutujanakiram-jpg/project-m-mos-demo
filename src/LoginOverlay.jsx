import React, { useState } from "react";
import { useHomeState } from "./homeState.jsx";

export default function LoginOverlay({ onEnter }) {
  const { setRole, setHomeType, setCurrentUser } = useHomeState();
  const [mode, setMode] = useState("user");

  // preset demo profiles
  const demoProfiles = [
    { id: "demo-1bhk", label: "Demo 1BHK User", role: "user", homeType: "1bhk" },
    { id: "demo-2bhk", label: "Demo 2BHK User", role: "user", homeType: "2bhk" },
    { id: "demo-3bhk", label: "Demo 3BHK User", role: "user", homeType: "3bhk" },
    { id: "demo-4bhk", label: "Demo 4BHK User", role: "user", homeType: "4bhk" },
    { id: "demo-villa", label: "Demo Villa User", role: "user", homeType: "villa" },
    {
      id: "demo-admin",
      label: "Demo Admin (Lab)",
      role: "admin",
      homeType: "villa",
    },
  ];

  // normal manual login (uses mode + current default homeType)
  const handleEnter = () => {
    setRole(mode);
    setCurrentUser(mode === "admin" ? "Local Admin" : "Local User");
    if (onEnter) onEnter(mode);
  };

  // quick demo login for a specific profile
  const handleDemoLogin = (profile) => {
    setRole(profile.role);
    setHomeType(profile.homeType);
    setCurrentUser(profile.label);
    if (onEnter) onEnter(profile.role);
  };

  return (
    <div className="fixed inset-0 z-40 bg-[#050506] bg-mos flex items-center justify-center">
      <div className="relative w-full max-w-xl px-6">
        <div className="absolute -inset-16 blur-[130px] bg-[#ff1a1a33]" />

        <div className="relative rounded-3xl border border-white/15 bg-black/80 px-8 py-8 shadow-[0_0_70px_rgba(0,0,0,0.9)]">
          <div className="text-center mb-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ffb4b4] text-lg font-mono mb-2">
              M
            </div>
            <div className="text-xs tracking-[0.28em] uppercase text-slate-300">
              PROJECT-M
            </div>
            <div className="text-[11px] text-[#ffb4b4] mt-1">
              M-OS • World’s First Offline Home Automation OS
            </div>
            <div className="text-[10px] text-slate-500 mt-1">
              AI Assistant: Chinna • Fully Offline
            </div>
          </div>

          {/* Normal login fields (for future real auth) */}
          <div className="grid gap-4">
            <label className="text-left text-xs text-slate-300">
              Home ID / Name
              <input
                className="mt-1 w-full rounded-xl bg-black/70 border border-white/20 px-3 py-2 text-xs outline-none focus:border-[#ff1a1a]"
                placeholder="e.g. SSS Villa / Demo Home"
              />
            </label>

            <label className="text-left text-xs text-slate-300">
              Access PIN
              <input
                type="password"
                className="mt-1 w-full rounded-xl bg-black/70 border border-white/20 px-3 py-2 text-xs outline-none focus:border-[#ff1a1a]"
                placeholder="••••"
              />
            </label>

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

            <button onClick={handleEnter} className="btn-red mt-2">
              ENTER M-OS
            </button>

            {/* DEMO USERS ROW */}
            <div className="mt-4 border-t border-white/10 pt-3">
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400 mb-2">
                Quick Demo Users
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                {demoProfiles.map((profile) => (
                  <button
                    key={profile.id}
                    type="button"
                    onClick={() => handleDemoLogin(profile)}
                    className="rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-left hover:border-[#ff1a1a88] hover:bg-[#ff1a1a22]"
                  >
                    {profile.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-[10px] text-slate-500 text-center mt-3">
              Welcome to the world’s first offline Home Automation OS.
              Your privacy is our top priority — we do not save any information
              to external cloud.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}