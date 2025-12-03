// src/homeState.jsx
import React, { createContext, useContext, useState } from "react";

const HomeContext = createContext();

export function HomeProvider({ children }) {
  const [currentHomeType, setCurrentHomeType] = useState("1bhk");
  const [role, setRole] = useState("user"); // user | admin
  const [currentUser, setCurrentUser] = useState("Local Demo");

  // ---------------- ROOMS (MASTER LIST) ----------------
  // We define all possible rooms here. Home type will decide which subset is visible.
  const defaultRooms = {
    livingRoom: {
      label: "Hall / Living Room",
      lights: false,
      fan: { on: true, speed: 3 },
      ac: { on: true, temperature: 24 },
    },
    masterBedroom: {
      label: "Master Bedroom",
      lights: false,
      fan: { on: true, speed: 2 },
      ac: { on: true, temperature: 23 },
    },
    bedroom2: {
      label: "Bedroom 2",
      lights: false,
      fan: { on: false, speed: 1 },
      ac: { on: false, temperature: 24 },
    },
    bedroom3: {
      label: "Bedroom 3 / Guest",
      lights: false,
      fan: { on: false, speed: 1 },
      ac: { on: false, temperature: 24 },
    },
    kitchen: {
      label: "Kitchen",
      lights: false,
      exhaust: false,
    },
    bathroom1: {
      label: "Bathroom",
      lights: false,
      geyser: false,
      exhaust: false,
    },
    bathroom2: {
      label: "Bathroom 2",
      lights: false,
      geyser: false,
      exhaust: false,
    },
    washArea: {
      label: "Wash Area / Utility",
      lights: false,
      washingMachine: false,
    },
    balcony: {
      label: "Balcony",
      lights: false,
    },
    homeTheater: {
      label: "Home Theater",
      lights: false,
      ac: { on: false, temperature: 24 },
    },
  };

  const [rooms, setRooms] = useState(defaultRooms);

  // ---------------- HOME TYPE → WHICH ROOMS ARE VISIBLE ----------------
  // 1BHK: only the 5 rooms you requested.
  const homeTypeRooms = {
    "1bhk": [
      "livingRoom",   // Hall
      "masterBedroom",
      "kitchen",
      "bathroom1",
      "washArea",
    ],
    "2bhk": [
      "livingRoom",
      "masterBedroom",
      "bedroom2",
      "kitchen",
      "bathroom1",
      "washArea",
    ],
    "3bhk": [
      "livingRoom",
      "masterBedroom",
      "bedroom2",
      "bedroom3",
      "kitchen",
      "bathroom1",
      "bathroom2",
      "washArea",
      "balcony",
    ],
    "4bhk": [
      "livingRoom",
      "masterBedroom",
      "bedroom2",
      "bedroom3",
      "kitchen",
      "homeTheater",
      "bathroom1",
      "bathroom2",
      "washArea",
      "balcony",
    ],
    villa: [
      "livingRoom",
      "masterBedroom",
      "bedroom2",
      "bedroom3",
      "kitchen",
      "homeTheater",
      "bathroom1",
      "bathroom2",
      "washArea",
      "balcony",
    ],
    bungalow: [
      "livingRoom",
      "masterBedroom",
      "bedroom2",
      "bedroom3",
      "kitchen",
      "bathroom1",
      "bathroom2",
      "washArea",
    ],
    farm: [
      "livingRoom",
      "masterBedroom",
      "bedroom2",
      "kitchen",
      "bathroom1",
      "washArea",
    ],
    vintage: [
      "livingRoom",
      "masterBedroom",
      "kitchen",
      "bathroom1",
      "washArea",
    ],
  };

  // helper – which room keys are visible for the selected homeType
  const getVisibleRoomKeys = () =>
    homeTypeRooms[currentHomeType] || homeTypeRooms["2bhk"];

  // ---------------- APPLIANCE CONFIG (WHAT EXISTS IN EACH ROOM) ----------------
  // All appliances are ON by default; user can turn off what the room doesn’t have.
  const defaultApplianceConfig = {
    livingRoom: {
      lights: true,
      fan: true,
      ac: true,
    },
    masterBedroom: {
      lights: true,
      fan: true,
      ac: true,
    },
    bedroom2: {
      lights: true,
      fan: true,
      ac: true,
    },
    bedroom3: {
      lights: true,
      fan: true,
      ac: true,
    },
    kitchen: {
      lights: true,
      exhaust: true,
    },
    bathroom1: {
      lights: true,
      geyser: true,
      exhaust: true,
    },
    bathroom2: {
      lights: true,
      geyser: true,
      exhaust: true,
    },
    washArea: {
      lights: true,
      washingMachine: true,
    },
    balcony: {
      lights: true,
    },
    homeTheater: {
      lights: true,
      ac: true,
    },
  };

  const [applianceConfig, setApplianceConfig] = useState(
    defaultApplianceConfig
  );

  const toggleAppliancePresence = (roomKey, applianceKey) => {
    setApplianceConfig((prev) => {
      const roomCfg = prev[roomKey] || {};
      return {
        ...prev,
        [roomKey]: {
          ...roomCfg,
          [applianceKey]: !roomCfg[applianceKey],
        },
      };
    });
  };

  // -------------- OUTDOOR / ESTATE --------------
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

  // -------------- ROOM ACTIONS --------------
  const toggleLight = (room) => {
    setRooms((prev) => ({
      ...prev,
      [room]: { ...prev[room], lights: !prev[room].lights },
    }));
  };

  const toggleFan = (room) => {
    setRooms((prev) => ({
      ...prev,
      [room]: {
        ...prev[room],
        fan: { ...prev[room].fan, on: !prev[room].fan?.on },
      },
    }));
  };

  const setFanSpeed = (room, speed) => {
    setRooms((prev) => ({
      ...prev,
      [room]: {
        ...prev[room],
        fan: {
          ...prev[room].fan,
          speed: Math.min(5, Math.max(1, speed)),
        },
      },
    }));
  };

  const toggleAC = (room) => {
    setRooms((prev) => ({
      ...prev,
      [room]: {
        ...prev[room],
        ac: { ...prev[room].ac, on: !prev[room].ac?.on },
      },
    }));
  };

  const changeACTemperature = (room, value) => {
    setRooms((prev) => ({
      ...prev,
      [room]: {
        ...prev[room],
        ac: {
          ...prev[room].ac,
          temperature: Math.min(30, Math.max(16, value)),
        },
      },
    }));
  };

  // -------------- OUTDOOR ACTIONS --------------
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

  // -------------- HOME TYPE --------------
  const setHomeType = (type) => setCurrentHomeType(type);

  return (
    <HomeContext.Provider
      value={{
        rooms,
        outdoorState,
        currentHomeType,
        role,
        currentUser,
        applianceConfig,
        getVisibleRoomKeys,

        setRole,
        setCurrentUser,
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
        // appliances config
        toggleAppliancePresence,
        // home type
        setHomeType,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

export const useHomeState = () => useContext(HomeContext);