import React from "react";
import { useNavigate } from "react-router-dom";

const ROOMS = [
  {
    id: "living",
    name: "Living Room",
    devices: 3,
  },
  {
    id: "bedroom",
    name: "Bedroom",
    devices: 2,
  },
  {
    id: "kitchen",
    name: "Kitchen",
    devices: 1,
  },
];

export default function Rooms() {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-xl text-slate-200 mb-4">Rooms</h1>

      <div className="grid gap-4 max-w-xl">
        {ROOMS.map((room) => (
          <div
            key={room.id}
            onClick={() => navigate(`/app/rooms/${room.id}`)}
            className="cursor-pointer rounded-lg border border-white/10 bg-black/40 
                       p-4 hover:border-[#ff1a1a] transition"
          >
            <div className="text-slate-200 font-medium">{room.name}</div>
            <div className="text-xs text-slate-400">
              {room.devices} devices connected
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}