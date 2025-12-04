// src/Rooms.jsx
import React from "react";
import { useHomeState } from "./homeState.jsx";

export default function Rooms() {
  const {
    rooms,
    currentHomeType,
    toggleLight,
    toggleFan,
    setFanSpeed,
    toggleAC,
    changeACTemperature,
  } = useHomeState();

  if (!rooms || Object.keys(rooms).length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-slate-300">
        No rooms configured for this home type.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-6">
      <h1 className="text-2xl font-semibold text-slate-100">
        Room Controls{" "}
        <span className="text-xs text-slate-500 uppercase ml-2">
          {currentHomeType}
        </span>
      </h1>
      <p className="mt-1 text-xs text-slate-400 max-w-xl">
        Each home type loads a different set of rooms. Use this view to simulate
        lights, fans and A-Cs for that specific plan.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-2 grid-cols-1">
        {Object.entries(rooms).map(([key, room]) => (
          <div
            key={key}
            className="card p-4 shadow-[0_0_25px_rgba(15,23,42,0.8)]"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h2 className="text-sm font-semibold text-slate-100">
                  {room.label}
                </h2>
                <p className="text-[11px] text-slate-400">
                  {describeRoom(key)}
                </p>
              </div>
            </div>

            {/* Lights */}
            {"lights" in room && (
              <RoomRow
                label="Lights"
                value={room.lights ? "On" : "Off"}
                onToggle={() => toggleLight(key)}
              />
            )}

            {/* Fan */}
            {room.fan && (
              <RoomRow
                label="Fan"
                value={
                  room.fan.on ? `Speed ${room.fan.speed}` : "Off"
                }
                onToggle={() => toggleFan(key)}
                extraControls={
                  room.fan.on && (
                    <FanButtons
                      speed={room.fan.speed}
                      onChange={(s) => setFanSpeed(key, s)}
                    />
                  )
                }
              />
            )}

            {/* AC */}
            {room.ac && (
              <RoomRow
                label="Air Conditioner"
                value={
                  room.ac.on ? `${room.ac.temperature}°C` : "Off"
                }
                onToggle={() => toggleAC(key)}
                extraControls={
                  room.ac.on && (
                    <TempButtons
                      temp={room.ac.temperature}
                      onChange={(t) => changeACTemperature(key, t)}
                    />
                  )
                }
              />
            )}

            {/* Kitchen exhaust or any special flag */}
            {key === "kitchen" && "exhaust" in room && (
              <RoomRow
                label="Exhaust"
                value={room.exhaust ? "On" : "Off"}
                onToggle={() => toggleLight("kitchen")} // demo reuse
                hint="Separate hardware line; mocked here."
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function describeRoom(key) {
  switch (key) {
    case "livingRoom":
      return "Primary hall / TV area.";
    case "masterBedroom":
      return "Main bedroom comfort & ambience.";
    case "bedroom2":
    case "bedroom3":
    case "bedroom4":
      return "Additional bedroom.";
    case "kitchen":
      return "Cooking, fridge and exhaust.";
    case "bathroom":
    case "bathroom1":
    case "bathroom2":
      return "Bathroom lights and geyser zone.";
    case "washArea":
    case "utility":
      return "Laundry / utility area.";
    case "balcony":
      return "Balcony or sit-out.";
    case "familyLounge":
      return "Extra family lounge / TV area.";
    case "study":
      return "Study / office space.";
    case "veranda":
      return "Vintage front veranda.";
    default:
      return "Smart room in this home type.";
  }
}

function RoomRow({ label, value, onToggle, extraControls, hint }) {
  return (
    <div className="mt-3 border border-white/5 rounded-xl px-3 py-2.5 flex items-center justify-between gap-3 bg-black/30">
      <div>
        <div className="text-xs font-semibold text-slate-100">{label}</div>
        <div className="text-[11px] text-slate-400">{value}</div>
        {hint && (
          <div className="text-[10px] text-slate-500 mt-0.5">{hint}</div>
        )}
      </div>
      <div className="flex items-center gap-2">
        {extraControls}
        {onToggle && (
          <button
            onClick={onToggle}
            className="px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] border border-white/15 bg-white/5 hover:bg-[#ff1a1a22] hover:border-[#ff1a1a88]"
          >
            Toggle
          </button>
        )}
      </div>
    </div>
  );
}

function FanButtons({ speed, onChange }) {
  return (
    <div className="flex items-center gap-1 text-[11px]">
      <button
        onClick={() => onChange(speed - 1)}
        className="h-6 w-6 rounded-full border border-white/15 flex items-center justify-center"
      >
        –
      </button>
      <span className="w-6 text-center">{speed}</span>
      <button
        onClick={() => onChange(speed + 1)}
        className="h-6 w-6 rounded-full border border-white/15 flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}

function TempButtons({ temp, onChange }) {
  return (
    <div className="flex items-center gap-1 text-[11px]">
      <button
        onClick={() => onChange(temp - 1)}
        className="h-6 w-6 rounded-full border border-white/15 flex items-center justify-center"
      >
        –
      </button>
      <span className="w-10 text-center">{temp}°</span>
      <button
        onClick={() => onChange(temp + 1)}
        className="h-6 w-6 rounded-full border border-white/15 flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
}