import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Technology", to: "/technology" },
  { label: "Solutions", to: "/solutions" },
  { label: "Products", to: "/products" },
  { label: "Pricing", to: "/pricing" },
  { label: "Pricing Calculator", to: "/pricing-calculator" },
  { label: "Team", to: "/team" },
  { label: "Partners", to: "/partners" },
  { label: "Installer Program", to: "/installer-program" },
  { label: "Support", to: "/support" },
  { label: "Contact", to: "/contact" },
];

const MarketingLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#111827_0,_#050509_55%)] text-[var(--text-light)] flex flex-col">
      {/* HEADER */}
      <header className="border-b border-[var(--mos-border-soft,#1f2933)]/60 backdrop-blur-md bg-black/30 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo + Wordmark */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-[var(--mos-red)] neon-glow flex items-center justify-center">
              <span className="text-xs font-semibold tracking-[0.18em]">
                M
              </span>
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-[0.22em] uppercase">
                Project – M
              </div>
              <div className="text-[11px] text-[var(--text-muted,#9ca3af)] tracking-wide">
                built on M-OS
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-5 text-xs">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "transition-colors duration-150",
                    isActive ? "text-white" : "text-[var(--mos-red)] hover:text-white",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
  <Link
    to="/contact"
    className="px-3.5 py-1.5 rounded-full bg-[var(--mos-red)] text-black font-semibold neon-glow"
  >
    Book a demo
  </Link>

  <Link
    to="/login"
    className="px-3 py-1.5 rounded-full border border-white/20 text-white hover:text-black hover:bg-white transition-all"
  >
    Login
  </Link>
</div>

        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-24 pb-32">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--mos-border-soft,#1f2933)]/60 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-[var(--text-muted,#9ca3af)] flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
          <div>
            <div className="font-semibold tracking-[0.18em] uppercase text-[10px]">
              Project – M
            </div>
            <div className="text-[11px] mt-1">
              Worlds first offline home automation platform, powered by M-OS.
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/support" className="hover:text-white transition-colors">
              Support
            </Link>
            <span className="opacity-70">
              © {new Date().getFullYear()} M-OS Technologies
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingLayout;
