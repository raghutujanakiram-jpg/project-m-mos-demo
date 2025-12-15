import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // where user wanted to go before auth
  const redirectTo = location.state?.from || "/product/dashboard";

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    /**
     * TEMP AUTH (MOCK)
     * Replace later with API call
     */
    setTimeout(() => {
      localStorage.setItem("pm_auth", "true");
      navigate(redirectTo, { replace: true });
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b0b0d] text-slate-100">
      <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-black/60 p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
        {/* HEADER */}
        <div className="mb-5">
          <h1 className="text-lg font-semibold tracking-wide">
            PROJECT-M Login
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Secure access to the M-OS Control Plane
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] text-slate-400 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg bg-black border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-red-500"
              placeholder="you@project-m.ai"
            />
          </div>

          <div>
            <label className="block text-[11px] text-slate-400 mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg bg-black border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-red-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 rounded-lg bg-white text-black py-2 text-sm font-medium hover:bg-neutral-200 transition disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-4 text-[10px] text-slate-500 leading-relaxed">
          This is an offline-first system.  
          Internet access is optional for core operation.
        </div>
      </div>
    </div>
  );
};

export default Login;