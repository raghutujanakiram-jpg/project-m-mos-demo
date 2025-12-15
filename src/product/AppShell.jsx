import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "dashboard" },
  { label: "Rooms", path: "rooms" },
  { label: "Scenes", path: "scenes" },
  { label: "Voice (Chinna)", path: "voice" },
  { label: "Energy", path: "energy" },
  { label: "Security", path: "security" },
  { label: "Users", path: "users" },
  { label: "Audit", path: "audit" },
  { label: "Settings", path: "settings" }
];

export default function AppShell() {
  return (
    <div className="w-full h-full flex text-white">
      {/* SYSTEM RAIL */}
      <aside className="w-60 h-full border-r border-slate-800 bg-black/80 flex flex-col">
        <div className="p-4 border-b border-slate-800">
          <div className="text-lg font-semibold text-red-500">
            PROJECT-M
          </div>
          <div className="text-[10px] text-slate-400">
            Offline Control OS
          </div>
        </div>

        <nav className="flex-1 p-2 space-y-1">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={`/app/${item.path}`}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm transition ${
                  isActive
                    ? "bg-red-600/20 text-red-400"
                    : "text-slate-400 hover:bg-slate-800/40"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-3 border-t border-slate-800 text-[10px] text-slate-500">
          Powered by M-OS • Offline-First
        </div>
      </aside>

      {/* OS WORKSPACE */}
      <main className="flex-1 h-full overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}