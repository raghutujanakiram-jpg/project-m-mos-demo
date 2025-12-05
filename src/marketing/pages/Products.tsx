import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// ⬆️ adjust this import to match your existing dashboard component path

// If you have other product pages, import and add them here too.
// import Devices from "./pages/Devices";
// import Settings from "./pages/Settings";

const ProductApp: React.FC = () => {
  return (
    <Routes>
      {/* /app -> /app/dashboard */}
      <Route path="/" element={<Navigate to="dashboard" replace />} />

      {/* /app/dashboard */}
      <Route path="dashboard" element={<Dashboard />} />

      {/* Example extra routes if you want them later
      <Route path="devices" element={<Devices />} />
      <Route path="settings" element={<Settings />} />
      */}

      {/* Catch-all inside /app/* just in case */}
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default ProductApp;