import React from "react";

const auditLogs = [
  {
    id: 1,
    action: "User admin created scene 'Morning'",
    time: "2025-01-12 09:45",
  },
  {
    id: 2,
    action: "Security mode changed to Away",
    time: "2025-01-12 08:10",
  },
  {
    id: 3,
    action: "Voice command failed (Unknown device)",
    time: "2025-01-11 22:03",
  },
];

export default function Audit() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold text-red-400">
          Audit & Compliance
        </h1>

        <button className="text-sm px-4 py-2 rounded bg-red-500/20 text-red-400 hover:bg-red-500/30 transition">
          Export Logs
        </button>
      </div>

      <div className="space-y-2">
        {auditLogs.map((log) => (
          <div
            key={log.id}
            className="bg-black/40 border border-white/10 rounded px-4 py-3 text-sm"
          >
            <div className="text-slate-200">{log.action}</div>
            <div className="text-xs text-slate-500 mt-1">{log.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}