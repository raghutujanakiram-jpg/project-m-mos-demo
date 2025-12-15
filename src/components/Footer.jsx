import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-gray-400">
        {/* Brand */}
        <div>
          <div className="text-white font-semibold mb-2">PROJECT-M</div>
          <p>
            World’s first offline-first home automation platform.
            Built for resilience, privacy, and local intelligence.
          </p>
        </div>

        {/* Parked Links */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/solutions">Solutions</Link>
          <Link to="/pricing">Pricing</Link>
          <span>Products</span>
          <span>Pricing Calculator</span>
          <span>Partners</span>
          <span>Installer Program</span>
          <Link to="/support">Support</Link>
          <span>Contact</span>
        </div>

        {/* Meta */}
        <div className="text-xs">
          <p>© {new Date().getFullYear()} Project-M</p>
          <p className="mt-2">Offline-first by design · Privacy by default</p>
        </div>
      </div>
    </footer>
  );
}