import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./apiClient";
import { useAuthStore } from "./authStore";

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
        className="bg-black/60 p-6 rounded-xl w-96"
      >
        <h2 className="text-lg mb-4">Project-M Product Login</h2>

        <input
          className="w-full mb-3 p-2 rounded bg-black/40"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-3 p-2 rounded bg-black/40"
          placeholder="Password"
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
          className="w-full bg-white text-black py-2 rounded"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}