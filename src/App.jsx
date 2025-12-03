import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar.jsx";
import Dashboard from "./Dashboard.jsx";
import Rooms from "./Rooms.jsx";
import CustomerView from "./CustomerView.jsx";
import OutdoorPool from "./OutdoorPool.jsx";
import GateGarage from "./GateGarage.jsx";
import EstateLighting from "./EstateLighting.jsx";
import HomeTypes from "./HomeTypes.jsx";
import AppliancesByHomeType from "./AppliancesByHomeType.jsx";

import ChinnaOverlay from "./ChinnaOverlay.jsx";
import LoginOverlay from "./LoginOverlay.jsx";
import BootScreen from "./BootScreen.jsx";

export default function App() {
  // overlay: 'login' | 'boot' | 'shutdown' | 'none'
  const [overlay, setOverlay] = useState("login");
  const navigate = useNavigate();

  // ===== LOGIN SUCCESS => BOOT => REDIRECT BY ROLE =====
  const handleLoginSuccess = (mode) => {
    // mode = 'user' | 'admin'
    setOverlay("boot");

    setTimeout(() => {
      setOverlay("none");

      if (mode === "user") {
        navigate("/customer", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }
    }, 2300);
  };

  // ===== LOGOUT => SHUTDOWN => BACK TO LOGIN =====
  const handleLogout = () => {
    setOverlay("shutdown");

    setTimeout(() => {
      navigate("/dashboard", { replace: true });
      setOverlay("login");
    }, 2000);
  };

  const inApp = overlay === "none";

  return (
    <div className="min-h-screen bg-mos text-slate-100 flex">
      {/* OVERLAYS */}
      {overlay === "login" && <LoginOverlay onEnter={handleLoginSuccess} />}

      {(overlay === "boot" || overlay === "shutdown") && (
        <BootScreen mode={overlay === "boot" ? "boot" : "shutdown"} />
      )}

      {/* MAIN SHELL */}
      <Sidebar onLogout={handleLogout} disabled={!inApp} />

      <main className="relative flex-1 px-6 pt-6 pb-10 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/customer" element={<CustomerView />} />
          <Route path="/outdoor" element={<OutdoorPool />} />
          <Route path="/gate" element={<GateGarage />} />
          <Route path="/estate" element={<EstateLighting />} />
          <Route path="/home-types" element={<HomeTypes />} />
          <Route path="/appliances" element={<AppliancesByHomeType />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>

        {/* Chinna only after login + boot */}
        {inApp && <ChinnaOverlay />}
      </main>
    </div>
  );
}