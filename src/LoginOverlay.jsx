import React, { useState } from "react";
import { useHomeState } from "./homeState";

export default function LoginOverlay({ onEnter }) {
  const { setRole, setHomeType } = useHomeState();

  const [homeId, setHomeId] = useState("");
  const [pin, setPin] = useState("");
  const [selectedRole, setSelectedRole] = useState("user");

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!homeId || !pin) {
      alert("Enter Home ID & PIN");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ homeId, pin }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
        setLoading(false);
        return;
      }

      // SAVE VALUES FROM BACKEND
      setRole(data.role);
      setHomeType(data.homeType);

      // Continue to boot → dashboard/customer
      onEnter();
    } catch (err) {
      alert("Backend not reachable");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-[9999]">
      <div className="w-[420px] bg-[#111]/90 border border-red-600 rounded-xl px-8 py-10 shadow-xl">

        <h1 className="text-center text-xl font-bold mb-6 tracking-wide">
          PROJECT – M<br />
          <span className="text-[12px] text-slate-300">Offline Home Automation OS</span>
        </h1>

        {/* HOME ID */}
        <input
          className="w-full mb-4 p-3 rounded bg-black border border-red-600"
          placeholder="Home ID (demo-1bhk)"
          value={homeId}
          onChange={(e) => setHomeId(e.target.value)}
        />

        {/* PIN */}
        <input
          type="password"
          className="w-full mb-4 p-3 rounded bg-black border border-red-600"
          placeholder="PIN (1111)"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />

        {/* ROLE SELECTOR */}
        <div className="flex justify-between mb-4">
          <button
            className={`px-3 py-2 rounded ${
              selectedRole === "user" ? "bg-red-600" : "bg-[#222]"
            }`}
            onClick={() => setSelectedRole("user")}
          >
            USER
          </button>

          <button
            className={`px-3 py-2 rounded ${
              selectedRole === "admin" ? "bg-red-600" : "bg-[#222]"
            }`}
            onClick={() => setSelectedRole("admin")}
          >
            ADMIN
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-red-600 py-3 mt-2 rounded text-black font-bold hover:bg-red-700"
        >
          {loading ? "VERIFYING..." : "ENTER M-OS"}
        </button>
      </div>
    </div>
  );
}