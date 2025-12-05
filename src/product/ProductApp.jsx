import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Dashboard.jsx"; 
// ⬆️ This uses your existing login/dashboard screen

const ProductApp = () => {
  return (
    <Routes>
      {/* /app → /app/dashboard */}
      <Route path="/" element={<Navigate to="dashboard" replace />} />

      {/* /app/dashboard */}
      <Route path="dashboard" element={<Dashboard />} />

      {/* catch-all inside /app */}
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Routes>
  );
};

export default ProductApp;