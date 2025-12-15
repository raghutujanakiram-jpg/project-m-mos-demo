import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-black/60 border border-white/10 rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-1">
          Project-M Product Login
        </h2>
        <p className="text-xs text-gray-400 mb-4">
          Secure access for installers, partners and internal teams.
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 rounded bg-black border border-white/10 text-sm"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 rounded bg-black border border-white/10 text-sm"
        />

        <button className="w-full py-2 rounded bg-white text-black text-sm font-medium">
          Sign in
        </button>

        <p className="mt-3 text-xs text-gray-500">
          Product OS loads after authentication.
        </p>
      </div>
    </div>
  );
};

export default Login;