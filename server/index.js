// server/index.js
import express from "express";
import cors from "cors";
import { demoUsers } from "./users.js";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Simple health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true, service: "project-m-backend" });
});

// LOGIN endpoint
app.post("/api/login", (req, res) => {
  const { homeId, pin, mode } = req.body || {};

  if (!homeId || !pin) {
    return res.status(400).json({ error: "Home ID and PIN required." });
  }

  // Find matching user
  const user = demoUsers.find(
    (u) =>
      u.homeId.toLowerCase() === String(homeId).toLowerCase() &&
      u.pin === String(pin)
  );

  if (!user) {
    return res.status(401).json({ error: "Invalid credentials." });
  }

  // If mode is admin, require admin role
  if (mode === "admin" && user.role !== "admin") {
    return res.status(403).json({ error: "Admin access denied for this user." });
  }

  // Success: send trimmed user info
  res.json({
    id: user.id,
    name: user.name,
    role: user.role,
    homeType: user.homeType,
    homeId: user.homeId,
  });
});

app.listen(PORT, () => {
  console.log(`M-OS backend running on http://localhost:${PORT}`);
});
