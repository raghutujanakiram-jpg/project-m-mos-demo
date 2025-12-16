import { useEffect, useState } from "react";
import { api } from "./apiClient";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
  api.get("/product/status")
    .then((res) => setData(res.data))
    .catch(console.error);
}, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Product Dashboard</h1>
      <pre className="text-xs opacity-80">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}