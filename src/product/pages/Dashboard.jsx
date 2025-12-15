import React from "react";

export default function Dashboard() {
  return (
    <div className="w-full h-full p-6 grid grid-cols-12 gap-6">
      
      {/* LEFT STACK */}
      <section className="col-span-5 grid grid-rows-3 gap-6">
        
        <OSWidget title="Security Mode">
          <div className="flex gap-2">
            <OSButton active>HOME</OSButton>
            <OSButton>AWAY</OSButton>
            <OSButton>NIGHT</OSButton>
          </div>
        </OSWidget>

        <OSWidget title="Rooms Connected">
          <div className="text-4xl text-red-500 font-bold">6</div>
          <div className="text-xs text-slate-500 mt-1">
            Living • Bedroom • Kitchen • Balcony
          </div>
        </OSWidget>

        <OSWidget title="AI Assistant · Chinna">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-green-500 rounded-full" />
            <span className="text-sm">Processing locally</span>
          </div>
        </OSWidget>

      </section>

      {/* RIGHT STACK */}
      <section className="col-span-7 grid grid-rows-2 gap-6">

        <OSWidget title="Energy Load">
          <div className="text-5xl font-bold text-red-500">1480 W</div>
          <div className="text-xs text-slate-500">Realtime • No cloud</div>
        </OSWidget>

        <div className="grid grid-cols-2 gap-6">
          <OSWidget title="Water Tank">
            <div className="text-4xl text-red-500 font-bold">72%</div>
          </OSWidget>

          <OSWidget title="System Status">
            <ul className="text-xs space-y-1 text-slate-400">
              <li>M-OS Kernel: v0.9.1</li>
              <li>Build: PROD</li>
              <li>Node: LAB</li>
              <li>HW: N-R4-V1</li>
            </ul>
          </OSWidget>
        </div>

      </section>

    </div>
  );
}

/* OS COMPONENTS */

function OSWidget({ title, children }) {
  return (
    <div className="bg-black/50 border border-slate-800 rounded-xl p-5">
      <div className="text-xs text-slate-400 mb-3 uppercase tracking-wide">
        {title}
      </div>
      {children}
    </div>
  );
}

function OSButton({ children, active }) {
  return (
    <button
      className={`px-4 py-2 rounded-md text-xs font-medium transition ${
        active
          ? "bg-red-600 text-white"
          : "bg-slate-800 text-slate-300 hover:bg-slate-700"
      }`}
    >
      {children}
    </button>
  );
}