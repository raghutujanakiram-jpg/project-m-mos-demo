import React from "react";
import { Link } from "react-router-dom";

const Technology: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <Hero />
      <Architecture />
      <Layers />
      <OfflineEngine />
      <SecurityPrivacy />
      <CloudConnector />
      <DeveloperReady />
      <TechFinalCTA />
    </div>
  );
};

export default Technology;

/* ==================== SECTIONS ==================== */

const Hero: React.FC = () => (
  <section className="pt-10 pb-10">
    <div className="max-w-3xl">
      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--mos-red,#ff3131)] mb-1">
        Technology
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
        M-OS is the offline automation engine behind Project-M.
      </h1>
      <p className="mt-3 text-sm text-[var(--text-muted,#9ca3af)]">
        Instead of pushing every event to a remote server, M-OS runs your smart
        home as a local automation cloud inside your property. The result:
        always-on reliability, ultra-low latency and full control of your data.
      </p>
    </div>

    {/* Simple visual / diagram placeholder */}
    <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-5 grid md:grid-cols-[1.3fr_1fr] gap-6">
      <div>
        <div className="text-xs font-medium mb-3">
          High-level architecture snapshot
        </div>
        <div className="space-y-2 text-[11px]">
          <ArchRow
            label="User interfaces"
            value="Project-M mobile app, wall panels, physical switches"
          />
          <ArchRow
            label="Control plane"
            value="M-OS scenes engine, scheduler, rules and flows"
          />
          <ArchRow
            label="Device layer"
            value="Switches, sensors, locks, curtains, energy meters"
          />
          <ArchRow
            label="Execution model"
            value="All core logic executed locally on the M-OS hub"
          />
          <ArchRow
            label="Optional cloud"
            value="Remote access, alerts, integrations — never mandatory"
          />
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,49,49,0.3),_transparent_55%)] p-4 flex flex-col justify-center text-[11px]">
        <div className="text-xs font-semibold mb-2">
          What makes M-OS different?
        </div>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Local-first by design, not as an afterthought.</li>
          <li>• Predictable behaviour during internet or cloud outages.</li>
          <li>• Clear separation between offline core and cloud add-ons.</li>
          <li>• Built for Indian grid conditions and real-world latency.</li>
        </ul>
      </div>
    </div>
  </section>
);

const Architecture: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Architecture"
      title="A layered architecture built for offline-first behaviour."
      description="M-OS treats your home as the primary data center. Cloud is an optional extension, not the main control plane."
    />
    <div className="mt-6 grid sm:grid-cols-3 gap-4 text-xs">
      <TechCard
        label="Presentation layer"
        title="Apps, panels and switches"
        body="Users interact via the Project-M app, wall-mounted touch panels and existing physical switches. All of them talk to the local hub first."
      />
      <TechCard
        label="Control layer"
        title="Scenes, rules and schedules"
        body="The control layer in M-OS stores your automation logic — scenes, conditions, schedules and flows — directly on the hub."
      />
      <TechCard
        label="Device layer"
        title="Field devices and sensors"
        body="Retrofit modules, relays, locks, curtain motors and sensors are abstracted as a unified device layer for consistent control."
      />
    </div>
  </section>
);

const Layers: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Execution model"
      title="Local-first engine with deterministic behaviour."
      description="Every rule, scene and schedule is evaluated on the M-OS hub. If your internet is down, your home still behaves exactly as configured."
    />
    <div className="mt-6 grid md:grid-cols-2 gap-4 text-xs">
   <div className="rounded-2xl border border-white/10 bg-black/40 p-4 neon-border">
        <h3 className="text-sm font-medium mb-1">Core engine responsibilities</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Evaluate triggers from switches, sensors and time schedules.</li>
          <li>• Resolve scenes, priorities and safety overrides.</li>
          <li>• Execute commands on devices with acknowledgement.</li>
          <li>• Log key events locally for diagnostics and audits.</li>
        </ul>
      </div>
  <div className="rounded-2xl border border-white/10 bg-black/40 p-4 neon-border">
        <h3 className="text-sm font-medium mb-1">Offline scenarios handled natively</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• ISP down, router up — local control continues as-is.</li>
          <li>• Router reboot — hub resumes with stored configuration.</li>
          <li>• Cloud unreachable — app works in local LAN mode.</li>
          <li>• Limited bandwidth — no heavy dependency on cloud calls.</li>
        </ul>
      </div>
    </div>
  </section>
);

const OfflineEngine: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Offline engine"
      title="Why Project-M continues to work when other systems fail."
      description="Most systems route key decisions through cloud APIs. M-OS compiles your automations into local flows that run directly on the hub."
    />
    <div className="mt-6 grid md:grid-cols-[1.2fr_1fr] gap-4 text-xs">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
        <h3 className="text-sm font-medium mb-1">From configuration to compiled flows</h3>
        <p className="text-[var(--text-muted,#9ca3af)]">
          When you design scenes in the Project-M app, M-OS converts them into
          optimized flow graphs. These graphs are stored locally on the hub and
          executed by the offline engine without external calls.
        </p>
        <ul className="mt-2 space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Inputs: switches, sensors, time, occupancy, power status.</li>
          <li>• Logic: conditions, thresholds, sequences and delays.</li>
          <li>• Outputs: lights, fans, ACs, curtains, locks and scenes.</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,_rgba(255,49,49,0.18),_rgba(0,0,0,0.9))] p-4">
        <h3 className="text-sm font-medium mb-2">Outcome for the end user</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• No “waiting for cloud” spinners for basic actions.</li>
          <li>• Scenes fire on time even if connectivity is unstable.</li>
          <li>• Consistent behaviour across outages and restarts.</li>
          <li>• A home that feels responsive and predictable.</li>
        </ul>
      </div>
    </div>
  </section>
);

const SecurityPrivacy: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Security & privacy"
      title="Data stays inside your four walls by default."
      description="M-OS treats your home as the primary security boundary. The hub is designed to operate with local storage, local logs and explicit cloud permissions."
    />
    <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs">
      <TechCard
        label="Local storage"
        title="Config and logs stored on hub"
        body="Scene definitions, schedules and key event logs live on the M-OS hub. You control backup and export options."
      />
      <TechCard
        label="Controlled exposure"
        title="Cloud access is explicitly configured"
        body="Only specific features — like remote control or push notifications — are routed through the cloud connector, and only if enabled."
      />
      <TechCard
        label="Network posture"
        title="LAN-first communication model"
        body="Devices and apps are designed to talk to the hub over LAN, not directly over the internet."
      />
    </div>
  </section>
);

const CloudConnector: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Cloud connector"
      title="Cloud features as an add-on, not a dependency."
      description="When you need remote access, third-party integrations or cross-site visibility, the cloud connector comes into play."
    />
    <div className="mt-6 grid md:grid-cols-[1.3fr_1fr] gap-4 text-xs">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
        <h3 className="text-sm font-medium mb-1">What the cloud connector does</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Exposes secure endpoints for remote control from outside your LAN.</li>
          <li>• Delivers notifications for alarms, door events and critical alerts.</li>
          <li>• Enables integrations with voice assistants and third-party platforms.</li>
          <li>• Aggregates data only when explicitly configured to do so.</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
        <h3 className="text-sm font-medium mb-1">What it does not do</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• It does not run your core scenes and schedules.</li>
          <li>• It does not need to be online for local control to work.</li>
          <li>• It does not silently change behaviour without your knowledge.</li>
        </ul>
      </div>
    </div>
  </section>
);

const DeveloperReady: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Integration"
      title="Developer-ready APIs and extensibility."
      description="The long-term roadmap for M-OS includes structured APIs and extensions so partners can build on top of Project-M."
    />
    <div className="mt-6 grid md:grid-cols-2 gap-4 text-xs">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
        <h3 className="text-sm font-medium mb-1">Local APIs</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Secure, authenticated endpoints exposed on the LAN.</li>
          <li>• Read/write access to scenes, devices and schedules.</li>
          <li>• Webhook-style triggers for external systems on critical events.</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
        <h3 className="text-sm font-medium mb-1">Partner integrations</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Builders and system integrators can extend standard packages.</li>
          <li>• Future SDKs for dashboards, BMS and PMS integrations.</li>
          <li>• Structured migration paths from existing cloud-first ecosystems.</li>
        </ul>
      </div>
    </div>
  </section>
);

const TechFinalCTA: React.FC = () => (
  <section className="pb-4">
    <div className="rounded-3xl border border-[var(--mos-red,#ff3131)]/40 bg-[linear-gradient(135deg,_rgba(255,49,49,0.16),_rgba(0,0,0,0.9))] p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
          Deep dive
        </div>
        <div className="text-lg sm:text-xl font-semibold mt-1">
          Want to see M-OS running on real hardware?
        </div>
        <div className="text-xs text-[var(--text-muted,#9ca3af)] mt-2 max-w-md">
          Share basic project details and we&apos;ll walk you through a live
          Project-M demo — from hub boot-up to offline automation flows.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
        >
          Book a technical demo
        </Link>
        <Link
          to="/support"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
        >
          Talk to our solution architect
        </Link>
      </div>
    </div>
  </section>
);

/* ==================== SMALL COMPONENTS ==================== */

const SectionHeader: React.FC<{
  eyebrow: string;
  title: string;
  description?: string;
}> = ({ eyebrow, title, description }) => (
  <div className="max-w-3xl">
    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--mos-red,#ff3131)] mb-1">
      {eyebrow}
    </div>
    <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
      {title}
    </h2>
    {description && (
      <p className="mt-2 text-xs sm:text-sm text-[var(--text-muted,#9ca3af)]">
        {description}
      </p>
    )}
  </div>
);

const ArchRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 py-1 border-b border-white/5 last:border-b-0">
    <span className="text-[11px] text-[var(--text-muted,#9ca3af)]">
      {label}
    </span>
    <span className="text-[11px] sm:max-w-xs">{value}</span>
  </div>
);

const TechCard: React.FC<{
  label: string;
  title: string;
  body: string;
}> = ({ label, title, body }) => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)] mb-1">
      {label}
    </div>
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className="text-[11px] text-[var(--text-muted,#9ca3af)]">{body}</div>
  </div>
);