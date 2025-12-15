import React from "react";

const mockCommands = [
  {
    id: 1,
    command: "Turn on living room light",
    status: "Success",
    time: "10:21 AM",
  },
  {
    id: 2,
    command: "Set bedroom fan speed to 3",
    status: "Success",
    time: "10:18 AM",
  },
  {
    id: 3,
    command: "Activate Night Mode",
    status: "Failed",
    time: "9:54 AM",
  },
];

export default function Voice() {
  return (
    <div className="p-8">
      <h1 className="text-xl font-semibold text-red-400 mb-4">
        Voice Command History
      </h1>

      <div className="space-y-3">
        {mockCommands.map((c) => (
          <div
            key={c.id}
            className="flex justify-between items-center bg-black/40 border border-white/10 rounded-lg px-4 py-3"
          >
            <div>
              <div className="text-sm text-slate-200">{c.command}</div>
              <div className="text-xs text-slate-500">{c.time}</div>
            </div>

            <span
              className={`text-xs px-2 py-1 rounded ${
                c.status === "Success"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}