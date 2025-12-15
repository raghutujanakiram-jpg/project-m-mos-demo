import React, { useState } from "react";

export default function Settings() {
  const [mode, setMode] = useState("User");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Settings</h1>

      <div className="mt-6 p-4 rounded-lg bg-black/40 border border-white/10">
        <div className="text-sm font-medium">Access Mode</div>
        <p className="text-[11px] text-slate-500 mt-1">
          Switch roles for demo purposes
        </p>

        <div className="mt-3 flex gap-2">
          {["User", "Installer", "Admin"].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-3 py-1 rounded-md text-xs border transition
                ${mode === m
                  ? "border-[#ff1a1a] bg-[#ff1a1a22] text-[#ff5c5c]"
                  : "border-white/10 hover:border-[#ff1a1a]"}`}
            >
              {m}
            </button>
          ))}
        </div>

        <div className="mt-4 text-[11px] text-slate-400">
          Current mode: <span className="text-[#ff3b3b]">{mode}</span>
        </div>
      </div>
    </div>
  );
}