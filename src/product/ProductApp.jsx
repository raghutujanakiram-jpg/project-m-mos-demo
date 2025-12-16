import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RequireAuth from "./RequireAuth";
import AppShell from "./AppShell";
import Login from "./Login";

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
      {/* 🔓 Public */}
      <Route path="/product/login" element={<Login />} />

      {/* 🔐 Protected product area */}
      <Route
        path="/product"
        element={
          <RequireAuth>
            <AppShell />
          </RequireAuth>
        }
      >
        {/* Default → /product/dashboard */}
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

        {/* Safety fallback */}
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Route>
    </Routes>
  );
}