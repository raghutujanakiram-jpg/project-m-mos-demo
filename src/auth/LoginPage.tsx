import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo login – no auth yet
    navigate("/app/dashboard");
  };

  return (
    <div className="min-h-screen flex items-start justify-center pt-16 text-slate-100 relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-[-60px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#ff1a1a22] blur-[160px]" />
      </div>

      <form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-3xl rounded-xl border border-white/10 bg-black/60 p-6 shadow-[0_0_60px_rgba(255,26,26,0.25)]"
      >
        <h1 className="text-lg font-semibold tracking-wide">
          Welcome to <span className="text-[#ff1a1a]">PROJECT-M</span>
        </h1>
        <p className="mt-1 text-xs text-slate-400">
          Sign in to manage your offline smart home.
        </p>

        <div className="mt-4 flex gap-3">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-[#ff1a1a]"
          />
          <input
            type="password"
            placeholder="Password"
            className="flex-1 rounded-md bg-black/40 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-[#ff1a1a]"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-[#ff1a1a] text-black text-sm font-semibold hover:bg-[#ff3b3b] transition"
          >
            Login
          </button>
        </div>

        <p className="mt-3 text-[11px] text-slate-500">
          Demo mode • No credentials required
        </p>
      </form>
    </div>
  );
}