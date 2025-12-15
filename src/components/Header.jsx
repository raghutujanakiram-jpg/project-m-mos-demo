import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItemClass = ({ isActive }) =>
  `text-sm transition ${
    isActive
      ? "text-white"
      : "text-[var(--text-muted,#9ca3af)] hover:text-white"
  }`;

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-lg font-semibold tracking-tight text-white"
        >
          Project-M
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navItemClass}>
            Home
          </NavLink>

          <NavLink to="/technology" className={navItemClass}>
            Technology
          </NavLink>

          <NavLink to="/solutions" className={navItemClass}>
            Solutions
          </NavLink>

          <NavLink to="/products" className={navItemClass}>
            Products
          </NavLink>

          <NavLink to="/pricing" className={navItemClass}>
            Pricing
          </NavLink>

          <NavLink to="/team" className={navItemClass}>
            Team
          </NavLink>

          <NavLink to="/investors" className={navItemClass}>
            Investors
          </NavLink>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium bg-white text-black hover:bg-neutral-200 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;