import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  const nav = [
    { name: "Products", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Technology", path: "/technology" },
    { name: "Team", path: "/team" },
    { name: "Funders", path: "/funders" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-lg font-semibold tracking-wide">
          PROJECT<span className="text-red-500">-M</span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition ${
                pathname === item.path
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-1.5 rounded-full border border-white/20 text-sm hover:bg-white/10 transition"
          >
            Product Login
          </Link>

          <Link
            to="/contact"
            className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
          >
            Contact
          </Link>

           <Link
            to="/Demo"
            className="px-4 py-1.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition"
          >
            Demo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
