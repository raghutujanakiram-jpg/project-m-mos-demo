import React from "react";
import { useHomeState } from "./homeState.jsx";

const baseData = {
  "1bhk": {
    title: "1 BHK Baseline",
    items: [
      "Living: 1 Smart TV, 1 Fan, 0–1 AC",
      "Bedroom: 1 Fan, 0–1 AC",
      "Kitchen: 1 Fridge, 1 Chimney / Exhaust, Mixer, Kettle",
      "Bathroom: 1 Geyser",
    ],
  },
  "2bhk": {
    title: "2 BHK Family Home",
    items: [
      "Living: TV + Fan + AC",
      "2 Bedrooms: 2 Fans, 1–2 ACs",
      "Kitchen: Fridge, Chimney, Microwave, Mixer",
      "Bathrooms: 1–2 Geysers",
      "Balcony: Washing Machine",
    ],
  },
  "3bhk": {
    title: "3 BHK Premium",
    items: [
      "Living: TV + Soundbar + AC",
      "3 Bedrooms: 3 Fans, 2–3 ACs, bedside lamps",
      "Kitchen: Large Fridge, Chimney, Oven",
      "Bathrooms: 2–3 Geysers + Exhaust",
      "Utility: Washing Machine, optional Dryer",
    ],
  },
  "4bhk": {
    title: "4 BHK + Home Theater",
    items: [
      "Living: Smart TV + AVR + 5.1 Speakers",
      "Home Theater: Projector / 7.1 System",
      "4 Bedrooms: 4 Fans, 3–4 ACs",
      "Kitchen: 350–450L Fridge, Chimney, Oven, Mixer",
      "Bathrooms: 3–4 Geysers + Exhaust",
      "Balcony: WM 8–10kg, Drying Rack",
    ],
  },
  villa: {
    title: "Villa",
    items: [
      "Living + Family Lounge with AC + Home Theater",
      "Bedrooms: 3–5 ACs, Fans, Lamps",
      "Kitchen + Utility: Full load of appliances",
      "Outdoor: Gate motor, Garden lights, Pool options",
      "Garage: Door + Lights",
      "Staff / Maid Room with mini-kitchen",
    ],
  },
  bungalow: {
    title: "Bungalow",
    items: [
      "Grand Living + Dining",
      "Multiple Bedrooms with ACs and fans",
      "Office / Study room",
      "Maid & Driver rooms",
      "Garden + Courtyard lighting",
      "Garage & Main Gate automation",
    ],
  },
  farm: {
    title: "Farm House",
    items: [
      "Main Hall + Lounge",
      "Guest Bedrooms (2–6)",
      "Pool + Deck lights + Heater",
      "Garden / Pathway / Fence lighting",
      "Outdoor bar / barbecue area",
      "Caretaker quarters + Out house",
    ],
  },
  vintage: {
    title: "Vintage Individual Home",
    items: [
      "Retrofitted lighting circuits",
      "Ceiling fans + classic fixtures",
      "ACs only in selected rooms",
      "Kitchen wiring carefully upgraded",
      "Extra attention to surge + protection",
    ],
  },
};

export default function AppliancesByHomeType() {
  const { currentHomeType } = useHomeState();
  const data = baseData[currentHomeType] || baseData["2bhk"];

  return (
    <div className="max-w-5xl mx-auto py-6">
      <h1 className="text-2xl font-semibold">Appliance Map</h1>
      <p className="mt-1 text-xs text-slate-400 max-w-xl">
        High-level list of major appliances per home type. In production, this
        feeds relay mapping, board size selection and energy dashboards.
      </p>

      <div className="card mt-5 p-4">
        <h2 className="text-sm font-semibold text-slate-100">{data.title}</h2>
        <ul className="mt-3 space-y-1 text-[11px] text-slate-300 list-disc ml-4">
          {data.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}