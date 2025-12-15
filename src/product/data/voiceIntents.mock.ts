export const voiceIntents = [
  {
    phrase: "good morning",
    action: "scene",
    target: "morning",
    response: "Good morning. Activating morning routine.",
  },
  {
    phrase: "movie night",
    action: "scene",
    target: "movie",
    response: "Movie night scene activated.",
  },
  {
    phrase: "turn off all lights",
    action: "global",
    target: "lights_off",
    response: "All lights have been turned off.",
  },
  {
    phrase: "activate away mode",
    action: "scene",
    target: "away",
    response: "Away mode activated. Home secured.",
  },
];