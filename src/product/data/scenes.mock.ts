export const scenes = [
  {
    id: "morning",
    name: "Good Morning",
    description: "Wake-up routine across home",
    actions: [
      "Living Room Lights ON",
      "Bedroom Curtains OPEN",
      "Water Heater ON",
    ],
    status: "Idle",
  },
  {
    id: "away",
    name: "Away Mode",
    description: "Secure home when no one is inside",
    actions: [
      "All Lights OFF",
      "Security System ARMED",
      "Non-essential Power OFF",
    ],
    status: "Idle",
  },
  {
    id: "movie",
    name: "Movie Night",
    description: "Entertainment-focused lighting & power",
    actions: [
      "Living Room Lights DIM",
      "TV Plug ON",
      "Curtains CLOSE",
    ],
    status: "Idle",
  },
  {
    id: "night",
    name: "Night Mode",
    description: "Low power, high security state",
    actions: [
      "All Lights OFF",
      "Perimeter Security ON",
      "Bedroom Night Lamp ON",
    ],
    status: "Idle",
  },
];