// src/homeState.jsx
import React, { createContext, useContext, useState } from "react";

const HomeContext = createContext();

/**
 * Room presets per home type.
 * Keys are internal; labels are what the user sees.
 * NOTE: every preset keeps "livingRoom" so Chinna voice still works.
 */
const ROOM_PRESETS = {
  "1bhk": {
    livingRoom: {
      label: "Hall",
      lights: true,
      fan: { on: true, speed: 3 },
      ac: { on: true, temperature: 24 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 23 },
    },
    kitchen: {
      label: "Kitchen",
      lights: true,
      exhaust: false,
    },
    bathroom: {
      label: "Bathroom",
      lights: true,
    },
    washArea: {
      label: "Wash Area",
      lights: true,
    },
  },

  "2bhk": {
    livingRoom: {
      label: "Hall / Living Room",
      lights: true,
      fan: { on: true, speed: 3 },
      ac: { on: true, temperature: 24 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 23 },
    },
    bedroom2: {
      label: "Bedroom 2",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: false, temperature: 24 },
    },
    kitchen: {
      label: "Kitchen",
      lights: true,
      exhaust: false,
    },
    bathroom1: {
      label: "Bathroom 1",
      lights: true,
    },
    bathroom2: {
      label: "Bathroom 2",
      lights: true,
    },
    washArea: {
      label: "Wash Area",
      lights: true,
    },
    balcony: {
      label: "Balcony",
      lights: false,
    },
  },

  "3bhk": {
    livingRoom: {
      label: "Hall / Living Room",
      lights: true,
      fan: { on: true, speed: 3 },
      ac: { on: true, temperature: 24 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 23 },
    },
    bedroom2: {
      label: "Bedroom 2",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    bedroom3: {
      label: "Bedroom 3",
      lights: true,
      fan: { on: false, speed: 1 },
      ac: { on: false, temperature: 24 },
    },
    kitchen: {
      label: "Kitchen",
      lights: true,
      exhaust: false,
    },
    bathroom1: {
      label: "Bathroom 1",
      lights: true,
    },
    bathroom2: {
      label: "Bathroom 2",
      lights: true,
    },
    washArea: {
      label: "Wash / Utility",
      lights: true,
    },
    balcony: {
      label: "Balcony",
      lights: false,
    },
  },

  "4bhk": {
    livingRoom: {
      label: "Hall / Living Room",
      lights: true,
      fan: { on: true, speed: 3 },
      ac: { on: true, temperature: 24 },
    },
    familyLounge: {
      label: "Family Lounge",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 23 },
    },
    bedroom2: {
      label: "Bedroom 2",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    bedroom3: {
      label: "Bedroom 3",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: false, temperature: 24 },
    },
    bedroom4: {
      label: "Bedroom 4 / Guest",
      lights: true,
      fan: { on: false, speed: 1 },
      ac: { on: false, temperature: 24 },
    },
    kitchen: {
      label: "Kitchen",
      lights: true,
      exhaust: false,
    },
    bathroom1: {
      label: "Common Bathroom",
      lights: true,
    },
    bathroom2: {
      label: "Attached Bathroom",
      lights: true,
    },
    washArea: {
      label: "Wash / Utility",
      lights: true,
    },
    balcony: {
      label: "Balcony / Sit-out",
      lights: false,
    },
  },

  villa: {
    livingRoom: {
      label: "Living Room",
      lights: true,
      fan: { on: true, speed: 3 },
      ac: { on: true, temperature: 24 },
    },
    familyLounge: {
      label: "Family Lounge",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 23 },
    },
    bedroom2: {
      label: "Bedroom 2",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    bedroom3: {
      label: "Bedroom 3",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    kitchen: {
      label: "Main Kitchen",
      lights: true,
      exhaust: false,
    },
    utility: {
      label: "Utility / Service",
      lights: true,
    },
    bathroom1: {
      label: "Master Bath",
      lights: true,
    },
    bathroom2: {
      label: "Common Bath",
      lights: true,
    },
    washArea: {
      label: "Wash Area",
      lights: true,
    },
    balcony: {
      label: "Balcony / Deck",
      lights: false,
    },
  },

  bungalow: {
    livingRoom: {
      label: "Grand Living",
      lights: true,
      fan: { on: true, speed: 3 },
      ac: { on: true, temperature: 24 },
    },
    dining: {
      label: "Dining",
      lights: true,
      fan: { on: true, speed: 2 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 23 },
    },
    bedroom2: {
      label: "Bedroom 2",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    bedroom3: {
      label: "Bedroom 3",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: false, temperature: 24 },
    },
    study: {
      label: "Study / Office",
      lights: true,
      fan: { on: true, speed: 2 },
    },
    kitchen: {
      label: "Kitchen",
      lights: true,
      exhaust: false,
    },
    washArea: {
      label: "Wash Area",
      lights: true,
    },
    bathroom1: {
      label: "Common Bathroom",
      lights: true,
    },
    bathroom2: {
      label: "Attached Bathroom",
      lights: true,
    },
  },

  farm: {
    livingRoom: {
      label: "Hall / Lounge",
      lights: true,
      fan: { on: true, speed: 3 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    bedroom2: {
      label: "Guest Bedroom 1",
      lights: true,
      fan: { on: true, speed: 2 },
    },
    bedroom3: {
      label: "Guest Bedroom 2",
      lights: true,
      fan: { on: true, speed: 2 },
    },
    kitchen: {
      label: "Kitchen",
      lights: true,
    },
    bathroom1: {
      label: "Guest Bathroom",
      lights: true,
    },
    washArea: {
      label: "Utility / Wash",
      lights: true,
    },
  },

  vintage: {
    livingRoom: {
      label: "Hall (Vintage)",
      lights: true,
      fan: { on: true, speed: 2 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
    },
    bedroom2: {
      label: "Side Bedroom",
      lights: true,
      fan: { on: true, speed: 2 },
    },
    kitchen: {
      label: "Old Kitchen",
      lights: true,
    },
    bathroom: {
      label: "Bathroom",
      lights: true,
    },
    veranda: {
      label: "Veranda",
      lights: true,
    },
  },

  custom: {
    livingRoom: {
      label: "Living Room (Custom)",
      lights: true,
      fan: { on: true, speed: 3 },
    },
    masterBedroom: {
      label: "Master Bedroom (Custom)",
      lights: true,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 24 },
    },
    kitchen: {
      label: "Kitchen (Custom)",
      lights: true,
    },
  },
};

// simple deep clone so each home gets its own state
function clonePreset(type) {
  const preset = ROOM_PRESETS[type] || ROOM_PRESETS["2bhk"];
  return JSON.parse(JSON.stringify(preset));
}

export function HomeProvider({ children }) {
  const [currentHomeType, setCurrentHomeType] = useState("1bhk");
  const [rooms, setRooms] = useState(clonePreset("1bhk"));

  const [outdoorState, setOutdoorState] = useState({
    pool: {
      pump: false,
      lights: false,
      heater: false,
      temperature: 28,
    },
    gate: {
      isOpen: false,
      autoMode: false,
      light: false,
    },
    garage: {
      isOpen: false,
      lights: false,
    },
    estateLighting: {
      garden: false,
      compound: true,
      driveway: false,
      fence: false,
    },
  });

  const [role, setRole] = useState("user"); // user / admin

  // ---------- ROOM ACTIONS ----------
  const toggleLight = (roomKey) => {
    setRooms((prev) =>
      !prev[roomKey]
        ? prev
        : {
            ...prev,
            [roomKey]: {
              ...prev[roomKey],
              lights: !prev[roomKey].lights,
            },
          }
    );
  };

  const toggleFan = (roomKey) => {
    setRooms((prev) =>
      !prev[roomKey] || !prev[roomKey].fan
        ? prev
        : {
            ...prev,
            [roomKey]: {
              ...prev[roomKey],
              fan: {
                ...prev[roomKey].fan,
                on: !prev[roomKey].fan.on,
              },
            },
          }
    );
  };

  const setFanSpeed = (roomKey, speed) => {
    setRooms((prev) =>
      !prev[roomKey] || !prev[roomKey].fan
        ? prev
        : {
            ...prev,
            [roomKey]: {
              ...prev[roomKey],
              fan: {
                ...prev[roomKey].fan,
                speed: Math.min(5, Math.max(1, speed)),
              },
            },
          }
    );
  };

  const toggleAC = (roomKey) => {
    setRooms((prev) =>
      !prev[roomKey] || !prev[roomKey].ac
        ? prev
        : {
            ...prev,
            [roomKey]: {
              ...prev[roomKey],
              ac: {
                ...prev[roomKey].ac,
                on: !prev[roomKey].ac.on,
              },
            },
          }
    );
  };

  const changeACTemperature = (roomKey, value) => {
    setRooms((prev) =>
      !prev[roomKey] || !prev[roomKey].ac
        ? prev
        : {
            ...prev,
            [roomKey]: {
              ...prev[roomKey],
              ac: {
                ...prev[roomKey].ac,
                temperature: Math.min(30, Math.max(16, value)),
              },
            },
          }
    );
  };

  // ---------- OUTDOOR ACTIONS ----------
  const togglePoolPump = () =>
    setOutdoorState((prev) => ({
      ...prev,
      pool: { ...prev.pool, pump: !prev.pool.pump },
    }));

  const togglePoolLights = () =>
    setOutdoorState((prev) => ({
      ...prev,
      pool: { ...prev.pool, lights: !prev.pool.lights },
    }));

  const togglePoolHeater = () =>
    setOutdoorState((prev) => ({
      ...prev,
      pool: { ...prev.pool, heater: !prev.pool.heater },
    }));

  const changePoolTemperature = (value) =>
    setOutdoorState((prev) => ({
      ...prev,
      pool: {
        ...prev.pool,
        temperature: Math.min(40, Math.max(20, value)),
      },
    }));

  const toggleGate = () =>
    setOutdoorState((prev) => ({
      ...prev,
      gate: { ...prev.gate, isOpen: !prev.gate.isOpen },
    }));

  const toggleGateAutoMode = () =>
    setOutdoorState((prev) => ({
      ...prev,
      gate: { ...prev.gate, autoMode: !prev.gate.autoMode },
    }));

  const toggleGateLight = () =>
    setOutdoorState((prev) => ({
      ...prev,
      gate: { ...prev.gate, light: !prev.gate.light },
    }));

  const toggleGarage = () =>
    setOutdoorState((prev) => ({
      ...prev,
      garage: { ...prev.garage, isOpen: !prev.garage.isOpen },
    }));

  const toggleGarageLights = () =>
    setOutdoorState((prev) => ({
      ...prev,
      garage: { ...prev.garage, lights: !prev.garage.lights },
    }));

  const toggleEstateLight = (key) =>
    setOutdoorState((prev) => ({
      ...prev,
      estateLighting: {
        ...prev.estateLighting,
        [key]: !prev.estateLighting[key],
      },
    }));

  // ---------- HOME TYPE ----------
  const setHomeType = (type) => {
    setCurrentHomeType(type);
    setRooms(clonePreset(type)); // reset rooms layout when type changes
  };

  return (
    <HomeContext.Provider
      value={{
        rooms,
        outdoorState,
        currentHomeType,
        role,
        setRole,
        // room actions
        toggleLight,
        toggleFan,
        setFanSpeed,
        toggleAC,
        changeACTemperature,
        // outdoor actions
        togglePoolPump,
        togglePoolLights,
        togglePoolHeater,
        changePoolTemperature,
        toggleGate,
        toggleGateAutoMode,
        toggleGateLight,
        toggleGarage,
        toggleGarageLights,
        toggleEstateLight,
        // home type
        setHomeType,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export const useHomeState = () => useContext(HomeContext);