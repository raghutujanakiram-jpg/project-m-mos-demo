import React from "react";
import { users } from "../data/users.mock";

export default function Users() {
  return (
    <div className="min-h-screen text-slate-100">
      <div className="max-w-6xl mx-auto py-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">
              User Management
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Manage access to PROJECT-M Control Center
            </p>
          </div>

          <button className="px-4 py-2 text-sm bg-red-600 hover:bg-red-500 rounded-md">
            + Add User
          </button>
        </div>

        <div className="grid gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between bg-black/40 border border-white/10 rounded-lg p-4 hover:border-red-500 transition"
            >
              <div>
                <div className="text-sm font-semibold">{user.name}</div>
                <div className="text-xs text-slate-400">{user.email}</div>
              </div>

              <div className="text-xs text-slate-300">
                Role: <span className="text-red-400">{user.role}</span>
              </div>

              <div className="text-xs">
                Status:{" "}
                <span
                  className={
                    user.status === "Active"
                      ? "text-emerald-400"
                      : "text-yellow-400"
                  }
                >
                  {user.status}
                </span>
              </div>

              <button className="text-xs px-3 py-1 rounded border border-white/10 hover:border-red-500">
                Manage
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}