import { useState } from "react";

export function useHomeState() {
  const [currentHomeType] = useState("demo home");

  const rooms = {
    living: true,
    bedroom: true,
    kitchen: true,
    bathroom: true,
    garage: true,
    outdoor: true,
  };

  return {
    currentHomeType,
    rooms,
  };
}