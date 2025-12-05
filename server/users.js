// server/users.js

// Simple in-memory user / home store for now.
// Later you can move this into a real DB (Postgres, Mongo, etc.).

export const demoUsers = [
  {
    id: 1,
    homeId: "demo-1bhk",
    name: "Demo 1BHK User",
    pin: "1111",
    role: "user",
    homeType: "1bhk",
  },
  {
    id: 2,
    homeId: "demo-2bhk",
    name: "Demo 2BHK User",
    pin: "2222",
    role: "user",
    homeType: "2bhk",
  },
  {
    id: 3,
    homeId: "demo-3bhk",
    name: "Demo 3BHK User",
    pin: "3333",
    role: "user",
    homeType: "3bhk",
  },
  {
    id: 4,
    homeId: "demo-4bhk",
    name: "Demo 4BHK User",
    pin: "4444",
    role: "user",
    homeType: "4bhk",
  },
  {
    id: 5,
    homeId: "demo-villa",
    name: "Villa Demo",
    pin: "5555",
    role: "user",
    homeType: "villa",
  },
  {
    id: 6,
    homeId: "demo-bungalow",
    name: "Bungalow Demo",
    pin: "6666",
    role: "user",
    homeType: "bungalow",
  },
  {
    id: 7,
    homeId: "demo-farm",
    name: "Farmhouse Demo",
    pin: "7777",
    role: "user",
    homeType: "farm",
  },
  {
    id: 8,
    homeId: "demo-vintage",
    name: "Vintage Demo",
    pin: "8888",
    role: "user",
    homeType: "vintage",
  },
  {
    id: 9,
    homeId: "demo-admin",
    name: "Lab Admin",
    pin: "9999",
    role: "admin",
    homeType: "3bhk", // admin’s default home
  },
];
