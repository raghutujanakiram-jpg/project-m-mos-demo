import React, { useState } from "react";

export default function Scenes() {
  const [rules, setRules] = useState([]);

  const addRule = () =>
    setRules([...rules, { id: Date.now(), name: "Morning Routine" }]);

  return (
    <div className="p-6">
      <button onClick={addRule} className="mb-4 bg-red-600 px-4 py-2 rounded">
        Add Scene
      </button>

      {rules.map((r) => (
        <div key={r.id} className="card p-4 mb-2">
          {r.name}
        </div>
      ))}
    </div>
  );
}