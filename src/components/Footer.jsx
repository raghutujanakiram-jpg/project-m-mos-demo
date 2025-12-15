import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
      © {new Date().getFullYear()} Project-M. All rights reserved.
    </footer>
  );
};

export default Footer;