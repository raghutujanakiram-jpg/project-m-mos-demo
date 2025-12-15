import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const AppShell = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-slate-100 flex">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="h-16 flex items-center px-5 border-b border-white/10">
          <span className="text-sm font-semibold tracking-wide">
            PROJECT-M
          </span>
          <span className="ml-2 text-[10px] text-red-400">M-OS</span>
        </div>

        <nav className="p-4 space-y-1 text-sm">
          <NavItem to="/product/dashboard" label="Dashboard" />
          <NavItem to="/product/rooms" label="Rooms" />
          <NavItem to="/product/devices" label="Devices" />
          <NavItem to="/product/scenes" label="Scenes" />
          <NavItem to="/product/energy" label="Energy" />
          <NavItem to="/product/security" label="Security" />
          <NavItem to="/product/settings" label="Settings" />
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col">
        {/* TOP BAR */}
        <header className="h-14 flex items-center justify-between px-6 border-b border-white/10 bg-black/40 backdrop-blur-xl">
          <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
            Offline Home Automation OS
          </div>

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-slate-300">Local Mode</span>
          </div>
        </header>

        {/* CONTENT */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

/* ---------- Sidebar Item ---------- */

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `
      block px-4 py-2 rounded-lg transition
      ${
        isActive
          ? "bg-red-500/10 text-red-400 border border-red-500/30"
          : "text-slate-300 hover:bg-white/5"
      }
    `
    }
  >
    {label}
  </NavLink>
);

export default AppShell;