import { useAuthStore } from "./authStore";

export default function Dashboard() {
  const user = useAuthStore((s) => s.user);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-semibold mb-2">
        M-OS Control Dashboard
      </h1>

      <p className="text-sm text-gray-400 mb-6">
        Offline-first automation system overview
      </p>

      <div className="grid md:grid-cols-3 gap-4">
        <Stat title="System Status" value="Online (Local)" />
        <Stat title="Latency" value="0 ms (Offline)" />
        <Stat title="Active Nodes" value="12" />
      </div>

      <div className="mt-8 bg-black/40 border border-white/10 rounded-xl p-6">
        <h2 className="text-lg mb-2">Logged in as</h2>
        <p className="text-sm text-gray-300">
          {user?.name || "Demo User"} — {user?.role || "admin"}
        </p>
      </div>
    </div>
  );
}

function Stat({ title, value }) {
  return (
    <div className="bg-black/40 border border-white/10 rounded-xl p-4">
      <div className="text-xs text-gray-400 mb-1">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}