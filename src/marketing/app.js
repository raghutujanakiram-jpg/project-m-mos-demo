// ---------- User / Session ----------

const USERS = {
  admin: { password: "shivvadmin", role: "admin", label: "Yuneeth Reddy" },
  test: { password: "test", role: "user", label: "Test User" },
  tester: { password: "tester", role: "user", label: "Tester" },
};

let currentUser = null;

// ---------- Module Model (19 modules) ----------

let modules = [
  {
    id: "rain",
    name: "Rain & Weather",
    category: "Environment",
    status: "OK",
    severity: "normal",
    lastEvent: "Drizzle only, safe.",
  },
  {
    id: "gas",
    name: "Gas Leak",
    category: "Kitchen",
    status: "OK",
    severity: "normal",
    lastEvent: "No leak detected.",
  },
  {
    id: "fire",
    name: "Fire / Smoke",
    category: "Safety",
    status: "OK",
    severity: "normal",
    lastEvent: "No smoke / fire.",
  },
  {
    id: "women",
    name: "Women Safety",
    category: "Safety",
    status: "Standby",
    severity: "normal",
    lastEvent: "No distress signals.",
  },
  {
    id: "elder",
    name: "Elder Safety",
    category: "Health",
    status: "OK",
    severity: "normal",
    lastEvent: "All vitals in safe band.",
  },
  {
    id: "theft",
    name: "Theft / Intruder",
    category: "Security",
    status: "Armed",
    severity: "normal",
    lastEvent: "Perimeter secure.",
  },
  {
    id: "baby",
    name: "Baby Safety",
    category: "Health",
    status: "OK",
    severity: "normal",
    lastEvent: "Baby room calm.",
  },
  {
    id: "overflow",
    name: "Water Overflow",
    category: "Utility",
    status: "OK",
    severity: "normal",
    lastEvent: "Tanks in optimal range.",
  },
  {
    id: "electric",
    name: "Electricity Fault",
    category: "Power",
    status: "OK",
    severity: "normal",
    lastEvent: "No overload / surge.",
  },
  {
    id: "locks",
    name: "Door / Window Lock",
    category: "Security",
    status: "Locked",
    severity: "normal",
    lastEvent: "All entry points secured.",
  },
  {
    id: "terrace",
    name: "Terrace Safety",
    category: "Safety",
    status: "OK",
    severity: "normal",
    lastEvent: "No pooling / high wind.",
  },
  {
    id: "kitchen",
    name: "Kitchen Safety",
    category: "Kitchen",
    status: "OK",
    severity: "normal",
    lastEvent: "Stove OFF, air clean.",
  },
  {
    id: "appliance",
    name: "Appliance Safety",
    category: "Power",
    status: "OK",
    severity: "normal",
    lastEvent: "All devices in safe band.",
  },
  {
    id: "night",
    name: "Night / Sleep Mode",
    category: "Comfort",
    status: "Night Prep",
    severity: "normal",
    lastEvent: "Silent watch enabled.",
  },
  {
    id: "parking",
    name: "Car / Bike Parking",
    category: "Garage",
    status: "OK",
    severity: "normal",
    lastEvent: "All slots secure.",
  },
  {
    id: "health",
    name: "Health Emergency",
    category: "Health",
    status: "Standby",
    severity: "normal",
    lastEvent: "No SOS triggered.",
  },
  {
    id: "flood",
    name: "Flood Level",
    category: "Environment",
    status: "OK",
    severity: "normal",
    lastEvent: "Drainage free.",
  },
  {
    id: "quake",
    name: "Earthquake / Vibration",
    category: "Structure",
    status: "OK",
    severity: "normal",
    lastEvent: "No abnormal tremors.",
  },
  {
    id: "plants",
    name: "Plant Irrigation",
    category: "Utility",
    status: "OK",
    severity: "normal",
    lastEvent: "Soil moisture ideal.",
  },
];

// ---------- DOM helpers ----------

const $ = (id) => document.getElementById(id);

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  setTimeout(() => toast.classList.add("hidden"), 3200);
}

function speak(message) {
  if (!("speechSynthesis" in window)) return;
  try {
    const utter = new SpeechSynthesisUtterance(message);
    utter.rate = 1.05;
    utter.pitch = 1.0;
    utter.volume = 1.0;
    window.speechSynthesis.speak(utter);
  } catch (_) {
    // ignore speech errors
  }
}

// ---------- Views ----------

function setView(view) {
  // Sidebar highlight
  document.querySelectorAll(".sidebar-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });

  $("login-view").classList.add("hidden");
  $("dashboard-view").classList.add("hidden");
  $("admin-view").classList.add("hidden");
  $("about-view").classList.add("hidden");

  if (!currentUser) {
    $("login-view").classList.remove("hidden");
    return;
  }

  if (view === "dashboard") {
    $("dashboard-view").classList.remove("hidden");
  } else if (view === "admin") {
    if (currentUser.role === "admin") {
      $("admin-view").classList.remove("hidden");
    } else {
      showToast("Admin controls are only for admin.");
      setView("dashboard");
    }
  } else if (view === "about") {
    $("about-view").classList.remove("hidden");
  }
}

function renderModulesGrid() {
  const grid = $("modules-grid");
  grid.innerHTML = "";

  modules.forEach((mod) => {
    const card = document.createElement("div");
    card.className = "module-card";
    card.dataset.id = mod.id;

    let statusCls = "status-value-ok";
    if (mod.severity === "warning") statusCls = "status-value-warn";
    if (mod.severity === "critical") statusCls = "status-value-crit";

    card.innerHTML = `
      <div class="module-top">
        <div>
          <div class="module-name">${mod.name}</div>
          <div class="module-tag">${mod.category}</div>
        </div>
        <div class="module-pill">${mod.status}</div>
      </div>
      <div class="module-metrics">
        <div class="module-status">
          <span class="status-label">Severity</span>
          <span class="${statusCls}">${mod.severity.toUpperCase()}</span>
        </div>
        <div class="module-status">
          <span class="status-label">Last Event</span>
          <span>${mod.lastEvent}</span>
        </div>
      </div>
      <div class="module-footer">
        Chinna is monitoring this zone.
      </div>
    `;

    card.addEventListener("click", () => {
      showToast(`${mod.name}: ${mod.lastEvent}`);
      if (mod.severity === "critical") {
        speak(`Alert from ${mod.name}. ${mod.lastEvent}`);
      }
    });

    grid.appendChild(card);
  });
}

function renderAdminTable() {
  const body = $("admin-table-body");
  body.innerHTML = "";

  modules.forEach((mod) => {
    const tr = document.createElement("tr");

    let badgeCls = "badge-ok";
    if (mod.severity === "warning") badgeCls = "badge-warn";
    if (mod.severity === "critical") badgeCls = "badge-crit";

    tr.innerHTML = `
      <td>${mod.name}</td>
      <td>${mod.status}</td>
      <td>
        <span class="badge ${badgeCls}">${mod.severity.toUpperCase()}</span>
      </td>
      <td>
        <button class="btn-small" data-action="normal">Normal</button>
        <button class="btn-small" data-action="warn">Warn</button>
        <button class="btn-small" data-action="crit">Critical</button>
      </td>
    `;

    tr.querySelectorAll(".btn-small").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.dataset.action;
        applyAdminAction(mod.id, action);
      });
    });

    body.appendChild(tr);
  });
}

function applyAdminAction(id, action) {
  const mod = modules.find((m) => m.id === id);
  if (!mod) return;

  if (action === "normal") {
    mod.status = "OK";
    mod.severity = "normal";
    mod.lastEvent = "All metrics within safe limits.";
    speak(`${mod.name} reset to normal.`);
  } else if (action === "warn") {
    mod.status = "Warning";
    mod.severity = "warning";
    mod.lastEvent = "Chinna detects early anomaly. Please check.";
    speak(`Warning from ${mod.name}.`);
  } else if (action === "crit") {
    mod.status = "CRITICAL";
    mod.severity = "critical";
    mod.lastEvent = "CRITICAL: Immediate action required.";
    speak(`Critical alert from ${mod.name}. Immediate attention required.`);
  }

  renderModulesGrid();
  renderAdminTable();
}

// ---------- Login / Logout ----------

function handleLogin() {
  const username = $("login-username").value.trim();
  const password = $("login-password").value.trim();
  const errorEl = $("login-error");

  const user = USERS[username];
  if (!user || user.password !== password) {
    errorEl.textContent = "Invalid credentials. Please check username and password.";
    errorEl.classList.remove("hidden");
    return;
  }

  currentUser = { username, role: user.role, label: user.label };
  errorEl.classList.add("hidden");
  $("current-user-label").textContent = `${user.label} (${username})`;
  $("admin-menu-item").style.display = user.role === "admin" ? "block" : "none";

  renderModulesGrid();
  renderAdminTable();
  setView("dashboard");
  showToast(`Welcome ${user.label}. Chinna is online for you.`);
  speak(`Welcome ${user.label}. Project M is now active.`);
}

function handleLogout() {
  currentUser = null;
  $("current-user-label").textContent = "";
  setView("dashboard");
  $("login-view").classList.remove("hidden");
  showToast("Logged out.");
}

// ---------- Init ----------

window.addEventListener("DOMContentLoaded", () => {
  // Show app root after splash
  setTimeout(() => {
    $("app-root").classList.remove("hidden");
  }, 1300);

  // Login
  $("login-btn").addEventListener("click", handleLogin);
  $("login-password").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLogin();
  });

  // Sidebar
  document.querySelectorAll(".sidebar-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!currentUser) {
        $("login-view").classList.remove("hidden");
        showToast("Please login first.");
        return;
      }
      setView(btn.dataset.view);
    });
  });

  // Logout
  $("logout-btn").addEventListener("click", handleLogout);

  // Default view
  setView("dashboard");
});
