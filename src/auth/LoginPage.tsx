import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import your auth service here

export default function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: real auth logic
    // await authService.login(email, password);

    setLoading(false);
    navigate("/app/dashboard"); // 🔻 triggers lazy load of ProductApp
  };

  return (
    <div className="login-page">
   <div className="border bg-black/70 p-6 rounded-2xl neon-border">
        <h1>Welcome to PROJECT – M</h1>
        <p>Sign in to manage your offline smart home.</p>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" disabled={loading}>
            {loading ? "Signing in…" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
