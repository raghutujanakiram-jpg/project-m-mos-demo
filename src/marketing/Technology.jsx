import React from "react";
import { Link } from "react-router-dom";

const Technology = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <IntroSection />
      <StackSection />
      <SecuritySection />
      <ReliabilitySection />
      <APIsSection />
      <FinalCTA />
    </div>
  );
};

export default Technology;

/* ==================== SECTIONS ==================== */

const IntroSection = () => (
  <section className="pt-10 pb-12">
    <SectionHeader
      eyebrow="Technology"
      title="M-OS is a local-first automation operating system."
      description="Instead of treating the cloud as the brain, M-OS runs automation logic inside your home. Project-M is the first consumer platform built fully on that principle."
    />
    <p className="mt-4 text-sm text-[var(--text-muted,#9ca3af)] max-w-3xl">
      The Project-M hub runs M-OS as an edge controller. It orchestrates
      switches, sensors, locks, curtains and panels over local protocols,
      keeping latency low and data inside your network by default.
    </p>
  </section>
);

const StackSection = () => {
  const layers = [
    {
      title: "Device layer",
      body: "Retrofit modules, switches, sensors, locks, curtain motors and energy modules that speak to M-OS over secure local channels.",
    },
    {
      title: "M-OS runtime",
      body: "The core engine that executes scenes, automations, schedules and safety rules directly on the hub — even with no internet.",
    },
    {
      title: "Project-M experience layer",
      body: "Mobile and wall-panel interfaces for configuring scenes, managing rooms and viewing status in real time.",
    },
    {
      title: "Optional cloud layer",
      body: "Remote access, notifications and integrations built as an add-on — not a requirement for your home to function.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Architecture"
        title="A four-layer stack built for the edge."
      />
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {layers.map((l) => (
          <div
            key={l.title}
            className="rounded-2xl border border-white/10 bg-black/40 p-4"
          >
            <div className="text-sm font-medium mb-1">{l.title}</div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {l.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const SecuritySection = () => {
  const items = [
    {
      title: "Local-first data",
      body: "By default, automation data and device state stay on the M-OS hub. Cloud sync is deliberate, not automatic.",
    },
    {
      title: "Isolated access paths",
      body: "Guest access, installer tools and admin controls are separated to reduce accidental exposure.",
    },
    {
      title: "Auditable automations",
      body: "Critical actions such as locks and main loads can be logged and reviewed when required.",
    },
    {
      title: "Minimal cloud surface",
      body: "Only remote functions pass through the cloud layer, shrinking the attack surface compared to pure cloud systems.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Security & privacy"
        title="Designed to keep your home data at home."
        description="M-OS assumes that your internal network is the primary execution environment and treats cloud as an extension, not the core."
      />
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {items.map((i) => (
          <div
            key={i.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="text-sm font-medium mb-1">{i.title}</div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {i.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ReliabilitySection = () => {
  const rows = [
    {
      label: "Scenes & schedules",
      offline: "Run fully on the M-OS hub.",
      cloud: "Optional sync for remote triggers.",
    },
    {
      label: "Switch responses",
      offline: "Sub-100ms on local network.",
      cloud: "Independent of internet jitter.",
    },
    {
      label: "Power outages",
      offline: "State recovery from local store.",
      cloud: "No dependency on remote services.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Reliability"
        title="Engineered for real-world power and network issues."
        description="Homes experience outages, drops and brownouts. M-OS is built to keep core behaviour consistent through all of that."
      />
      <div className="mt-6 overflow-x-auto text-xs">
        <table className="min-w-[520px] border-separate border-spacing-y-2">
          <thead className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted,#9ca3af)]">
            <tr>
              <th className="text-left pr-4 pb-1">Area</th>
              <th className="text-left pr-4 pb-1">Handled by M-OS</th>
              <th className="text-left pb-1">Cloud responsibility</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <td className="align-top pr-4 py-1 text-[var(--text-muted,#9ca3af)]">
                  {r.label}
                </td>
                <td className="align-top pr-4 py-1">
                  <span className="inline-flex px-2 py-1 rounded-full bg-black/40 border border-emerald-400/40 text-[10px]">
                    {r.offline}
                  </span>
                </td>
                <td className="align-top py-1">
                  <span className="inline-flex px-2 py-1 rounded-full bg-black/30 border border-white/15 text-[10px]">
                    {r.cloud}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

const APIsSection = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Integrations"
      title="APIs for builders, partners and future products."
      description="M-OS exposes a controlled integration surface so builders, OEMs and partner apps can plug into Project-M safely."
    />
    <ul className="mt-4 space-y-2 text-xs text-[var(--text-muted,#9ca3af)] max-w-3xl">
      <li>
        • Local API surface for on-prem integrations such as AV systems or BMS
        controllers.
      </li>
      <li>
        • Cloud API endpoints for dashboards, property management tools and
        portfolio-level monitoring.
      </li>
      <li>
        • Future support for installer tooling and provisioning systems so large
        projects can be rolled out consistently.
      </li>
    </ul>
  </section>
);

const FinalCTA = () => (
  <section className="pb-4">
    <div className="rounded-3xl border border-white/15 bg-black/40 p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
          Next step
        </div>
        <div className="text-lg sm:text-xl font-semibold mt-1">
          Map M-OS to your next project.
        </div>
        <div className="text-xs text-[var(--text-muted,#9ca3af)] mt-2 max-w-md">
          Share your use case and we’ll outline how Project-M and M-OS can be
          deployed across your homes, villas or developments.
        </div>
      </div>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
      >
        Talk to our team
      </Link>
    </div>
  </section>
);

/* ==================== SHARED ==================== */

const SectionHeader = ({ eyebrow, title, description }) => (
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