import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AppShell from "./AppShell";

import Dashboard from "./pages/Dashboard";
import Rooms from "./pages/Rooms";
import Scenes from "./pages/Scenes";
import Voice from "./pages/Voice";
import Energy from "./pages/Energy";
import Security from "./pages/Security";
import Users from "./pages/Users";
import Audit from "./pages/Audit";
import Settings from "./pages/Settings";

export default function ProductApp() {
  return (
    <Routes>
      {/* ✅ Layout route (NO path) */}
      <Route element={<AppShell />}>
        {/* Default → /app/dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="scenes" element={<Scenes />} />
        <Route path="voice" element={<Voice />} />
        <Route path="energy" element={<Energy />} />
        <Route path="security" element={<Security />} />
        <Route path="users" element={<Users />} />
        <Route path="audit" element={<Audit />} />
        <Route path="settings" element={<Settings />} />

        {/* Optional safety net */}
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}