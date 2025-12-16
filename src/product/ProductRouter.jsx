import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AppShell from "./AppShell";
import RequireAuth from "./RequireAuth";

/* Product Pages */
import Dashboard from "./Dashboard";
import Rooms from "./pages/Rooms";
import Devices from "./pages/Devices";
import Scenes from "./pages/Scenes";
import Settings from "./pages/Settings";

const ProductRouter = () => {
  return (
    <Routes>
      {/* Authenticated product area */}
      <Route
        path="/"
        element={
          <RequireAuth>
            <AppShell />
          </RequireAuth>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="devices" element={<Devices />} />
        <Route path="scenes" element={<Scenes />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default ProductRouter;