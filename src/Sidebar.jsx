// src/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useHomeState } from "./homeState.jsx";

const navItemBase =
  "flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-colors";

const iconDot = (color) => (
  <span
    className={`inline-block h-2 w-2 rounded-full ${color} shadow-[0_0_10px_rgba(255,255,255,0.6)]`}
  />
);

export default function Sidebar({ onLogout, disabled = false }) {
  const { role, currentUser } = useHomeState();
  const isAdmin = role === "admin";

  return (
    <aside className="w-60 bg-black/70 border-r border-white/10 flex flex-col px-4 py-5">
      {/* LOGO */}
      <div className="flex items-center gap-2 mb-6">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-[#ff1a1a] to-[#9b0f0f] flex items-center justify-center shadow-[0_8px_30px_rgba(255,26,26,0.6)]">
          <span className="font-mono font-bold text-lg">M</span>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.18em] uppercase text-slate-400">
            PROJECT-M
          </div>
          <div className="text-xs text-slate-300">M-OS Offline Home OS</div>
        </div>
      </div>

      {/* MAIN */}
      <SidebarSection label="Main">
        {/* Admin sees Dashboard + Rooms + Customer; user sees only Customer */}
        {isAdmin && (
          <>
            <SidebarLink
              to="/dashboard"
              icon={iconDot("bg-[#ff3b3b]")}
              disabled={disabled}
            >
              Dashboard
            </SidebarLink>
            <SidebarLink
              to="/rooms"
              icon={iconDot("bg-[#38bdf8]")}
              disabled={disabled}
            >
              Rooms
            </SidebarLink>
          </>
        )}

        <SidebarLink
          to="/customer"
          icon={iconDot("bg-[#a855f7]")}
          disabled={disabled}
        >
          Customer View
        </SidebarLink>
      </SidebarSection>

      {/* OUTDOOR & ESTATE */}
      <SidebarSection label="Outdoor & Estate">
        <SidebarLink
          to="/outdoor"
          icon={iconDot("bg-[#22c55e]")}
          disabled={disabled}
        >
          Outdoor & Pool
        </SidebarLink>
        <SidebarLink
          to="/gate"
          icon={iconDot("bg-[#fde047]")}
          disabled={disabled}
        >
          Gate & Garage
        </SidebarLink>

        {/* Estate lighting only for admin */}
        {isAdmin && (
          <SidebarLink
            to="/estate"
            icon={iconDot("bg-[#fb7185]")}
            disabled={disabled}
          >
            Estate Lighting
          </SidebarLink>
        )}
      </SidebarSection>

      {/* HOME PLANNING */}
      <SidebarSection label="Home Planning">
        <SidebarLink
          to="/home-types"
          icon={iconDot("bg-[#f97316]")}
          disabled={disabled}
        >
          Home Types
        </SidebarLink>
        <SidebarLink
          to="/appliances"
          icon={iconDot("bg-[#22d3ee]")}
          disabled={disabled}
        >
          Appliances
        </SidebarLink>
      </SidebarSection>

      {/* FOOTER / STATUS */}
      <div className="mt-auto pt-4 border-t border-white/10 text-[10px] text-slate-500">
        <div className="flex items-center justify-between mb-1">
          <span>M-OS v0.9 • Demo Build</span>
          <span className="uppercase tracking-[0.18em] text-[9px]">
            {role}
          </span>
        </div>
        <div className="mb-2 text-[9px] text-slate-400 truncate">
          User: {currentUser}
        </div>
        <div className="text-[9px] text-slate-500">
          Fully offline by design. No external cloud.
        </div>

        {/* Logout */}
        {onLogout && (
          <button
            onClick={onLogout}
            className="mt-3 w-full rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] text-slate-200 hover:border-[#ff1a1a88] hover:bg-[#ff1a1a22]"
          >
            Shutdown / Logout
          </button>
        )}
      </div>
    </aside>
  );
}

function SidebarSection({ label, children }) {
  return (
    <div className="mb-4">
      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2">
        {label}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function SidebarLink({ to, icon, children, disabled }) {
  if (disabled) {
    // visually same but no routing (during boot / shutdown)
    return (
      <div
        className={`${navItemBase} text-slate-500 bg-black/40 border border-white/5 cursor-not-allowed`}
      >
        {icon}
        <span>{children}</span>
      </div>
    );
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${navItemBase} ${
          isActive
            ? "bg-[#ff1a1a22] text-slate-50 border border-[#ff1a1a66]"
            : "text-slate-300 hover:bg-white/5"
        }`
      }
    >
      {icon}
      <span>{children}</span>
    </NavLink>
  );
}