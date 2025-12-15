import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DEVICE_MAP = {
  living: [
    { id: "light", name: "Main Light", type: "switch" },
    { id: "fan", name: "Ceiling Fan", type: "switch" },
    { id: "tv", name: "Television", type: "switch" },
  ],
  bedroom: [
    { id: "light", name: "Bed Light", type: "switch" },
    { id: "ac", name: "Air Conditioner", type: "switch" },
  ],
  kitchen: [
    { id: "light", name: "Kitchen Light", type: "switch" },
  ],
};

export default function RoomDetails() {
  const { roomId } = useParams();
  const devices = DEVICE_MAP[roomId] || [];

  const [state, setState] = useState(
    Object.fromEntries(devices.map((d) => [d.id, false]))
  );

  const toggle = (id) =>
    setState((s) => ({ ...s, [id]: !s[id] }));

  return (
    <div className="p-6">
      <h1 className="text-xl text-slate-200 mb-4">
        Room: {roomId?.toUpperCase()}
      </h1>

      <div className="space-y-3 max-w-xl">
        {devices.map((device) => (
          <div
            key={device.id}
            className="flex items-center justify-between rounded-lg 
                       border border-white/10 bg-black/40 p-4"
          >
            <div className="text-slate-200">{device.name}</div>

            <button
              onClick={() => toggle(device.id)}
              className={`px-4 py-1 rounded text-xs font-medium
                ${
                  state[device.id]
                    ? "bg-[#ff1a1a] text-white"
                    : "bg-slate-700 text-slate-200"
                }`}
            >
              {state[device.id] ? "ON" : "OFF"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}