// src/Rooms.jsx
import React from "react";
import { useHomeState } from "./homeState.jsx";

export default function Rooms() {
  const {
    rooms,
    currentHomeType,
    getVisibleRoomKeys,
    applianceConfig,
    toggleLight,
    toggleFan,
    setFanSpeed,
    toggleAC,
    changeACTemperature,
    toggleAppliancePresence,
  } = useHomeState();

  const visibleRoomKeys = getVisibleRoomKeys();

  return (
    <div className="max-w-6xl mx-auto py-6">
      <h1 className="text-2xl font-semibold text-slate-100">
        Room Controls{" "}
        <span className="text-xs text-slate-500">
          ({currentHomeType.toUpperCase()} layout)
        </span>
      </h1>
      <p className="mt-1 text-xs text-slate-400 max-w-xl">
        This is the main engineer / admin view. Only rooms that belong to the
        selected home type are visible. Use the bottom row in each card to
        configure which appliances exist in that room.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-2 grid-cols-1">
        {visibleRoomKeys.map((key) => {
          const room = rooms[key];
          if (!room) return null;

          const conf = applianceConfig[key] || {};

          const showLights =
            room.lights !== undefined && conf.lights !== false;
          const showFan = room.fan && conf.fan !== false;
          const showAC = room.ac && conf.ac !== false;
          const showExhaust =
            room.exhaust !== undefined && conf.exhaust !== false;
          const showGeyser =
            room.geyser !== undefined && conf.geyser !== false;
          const showWM =
            room.washingMachine !== undefined &&
            conf.washingMachine !== false;

          return (
            <div
              key={key}
              className="card p-4 shadow-[0_0_25px_rgba(15,23,42,0.8)]"
            >
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h2 className="text-sm font-semibold text-slate-100 uppercase">
                    {/* For 1BHK, show HALL label cleaner */}
                    {currentHomeType === "1bhk" && key === "livingRoom"
                      ? "HALL"
                      : room.label}
                  </h2>
                  <p className="text-[11px] text-slate-400">
                    {key === "livingRoom"
                      ? "Main family / hall area."
                      : key.startsWith("bathroom")
                      ? "Bathroom / washroom with geyser & exhaust."
                      : key === "washArea"
                      ? "Utility / wash area, washing machine zone."
                      : "Simulated smart room with appliances."}
                  </p>
                </div>
              </div>

              {/* LIGHTS */}
              {showLights && (
                <RoomRow
                  label="Lights"
                  value={room.lights ? "On" : "Off"}
                  onToggle={() => toggleLight(key)}
                />
              )}

              {/* FAN */}
              {showFan && room.fan && (
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
              {showAC && room.ac && (
                <RoomRow
                  label="Air Conditioner"
                  value={
                    room.ac.on
                      ? `${room.ac.temperature}°C`
                      : "Off"
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

              {/* EXHAUST */}
              {showExhaust && (
                <RoomRow
                  label="Exhaust"
                  value={room.exhaust ? "On" : "Off"}
                  onToggle={() =>
                    // Reuse lights toggle here as simple demo (can be separated later)
                    toggleLight(key)
                  }
                  hint="Exhaust relay is separate in real board – mocked here."
                />
              )}

              {/* GEYSER */}
              {showGeyser && (
                <RoomRow
                  label="Geyser / Water Heater"
                  value={room.geyser ? "On" : "Off"}
                  onToggle={() =>
                    // demo reuse – you can later add a dedicated toggleGeyser()
                    toggleLight(key)
                  }
                />
              )}

              {/* WASHING MACHINE */}
              {showWM && (
                <RoomRow
                  label="Washing Machine"
                  value={room.washingMachine ? "On" : "Off"}
                  onToggle={() =>
                    // demo reuse – real product would map to SSR relay
                    toggleLight(key)
                  }
                />
              )}

              {/* APPLIANCE CONFIG FOR THIS ROOM */}
              <div className="mt-4 border-t border-white/5 pt-2">
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.18em] mb-1">
                  Configure appliances in this room
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {room.lights !== undefined && (
                    <ApplianceToggle
                      label="Lights"
                      active={conf.lights !== false}
                      onClick={() =>
                        toggleAppliancePresence(key, "lights")
                      }
                    />
                  )}
                  {room.fan && (
                    <ApplianceToggle
                      label="Fan"
                      active={conf.fan !== false}
                      onClick={() =>
                        toggleAppliancePresence(key, "fan")
                      }
                    />
                  )}
                  {room.ac && (
                    <ApplianceToggle
                      label="AC"
                      active={conf.ac !== false}
                      onClick={() =>
                        toggleAppliancePresence(key, "ac")
                      }
                    />
                  )}
                  {room.exhaust !== undefined && (
                    <ApplianceToggle
                      label="Exhaust"
                      active={conf.exhaust !== false}
                      onClick={() =>
                        toggleAppliancePresence(key, "exhaust")
                      }
                    />
                  )}
                  {room.geyser !== undefined && (
                    <ApplianceToggle
                      label="Geyser"
                      active={conf.geyser !== false}
                      onClick={() =>
                        toggleAppliancePresence(key, "geyser")
                      }
                    />
                  )}
                  {room.washingMachine !== undefined && (
                    <ApplianceToggle
                      label="Washer"
                      active={conf.washingMachine !== false}
                      onClick={() =>
                        toggleAppliancePresence(key, "washingMachine")
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RoomRow({ label, value, onToggle, extraControls, hint }) {
  return (
    <div className="mt-3 border border-white/5 rounded-xl px-3 py-2.5 flex items-center justify-between gap-3 bg-black/30">
      <div>
        <div className="text-xs font-semibold text-slate-100">
          {label}
        </div>
        <div className="text-[11px] text-slate-400">{value}</div>
        {hint && (
          <div className="text-[10px] text-slate-500 mt-0.5">
            {hint}
          </div>
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

function ApplianceToggle({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-2.5 py-1 rounded-full text-[10px] border ${
        active
          ? "border-[#ff1a1a88] bg-[#ff1a1a22] text-slate-50"
          : "border-white/15 bg-black/60 text-slate-400"
      }`}
    >
      {label}
    </button>
  );
}