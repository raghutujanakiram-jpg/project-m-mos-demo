import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./apiClient";
import { useAuthStore } from "./authStore";

// 🔒 Toggle this OFF after investor demo
const DEMO_MODE = true;

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // ===============================
      // 🚀 INVESTOR DEMO SAFE MODE
      // ===============================
      if (DEMO_MODE) {
        login({
          token: "demo-token",
          user: {
            name: "Investor Demo",
            role: "admin",
          },
        });

        navigate("/product/dashboard");
        return;
      }

      // ===============================
      // 🔐 REAL AUTH (POST-DEMO)
      // ===============================
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data);
      navigate("/product/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message || "Authentication failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-black/60 p-6 rounded-xl w-96 border border-white/10"
      >
        <h2 className="text-lg mb-1">Project-M Product Login</h2>
        <p className="text-xs text-gray-400 mb-4">
          Secure access to the M-OS Control Plane
        </p>

        <input
          className="w-full mb-3 p-2 rounded bg-black/40 border border-white/10"
          placeholder="Email (demo optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 rounded bg-black/40 border border-white/10"
          placeholder="Password (demo optional)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <div className="text-red-500 text-sm mb-2">
            {error}
          </div>
        )}

        <button
          disabled={loading}
          className="w-full bg-white text-black py-2 rounded font-medium"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-[10px] text-gray-500 mt-3 text-center">
          Product OS loads after authentication
        </p>
      </form>
    </div>
  );
}