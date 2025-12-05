import React from "react";
import { Link } from "react-router-dom";

const Solutions: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <Hero />
      <Segments />
      <Flows />
      <RetrofitStory />
      <BuilderUseCase />
      <OpsSection />
      <SolutionsFinalCTA />
    </div>
  );
};

export default Solutions;

/* ==================== SECTIONS ==================== */

const Hero: React.FC = () => (
  <section className="pt-10 pb-10">
    <div className="max-w-3xl">
      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--mos-red,#ff3131)] mb-1">
        Solutions
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
        One offline automation platform for apartments, villas, hotels and
        offices.
      </h1>
      <p className="mt-3 text-sm text-[var(--text-muted,#9ca3af)]">
        Project-M is designed to retrofit into existing spaces and scale to new
        builds. Start with a single 2BHK, expand to a villa or roll out across
        a full project — all powered by the same M-OS core.
      </p>
    </div>
  </section>
);

const Segments: React.FC = () => {
  const segments = [
    {
      tag: "Residential",
      title: "Premium apartments",
      body: "Scene-based lighting, fan and AC control, with no major civil changes. Ideal for 2/3 BHK units where reliability matters more than gimmicks.",
      bullets: [
        "Retrofit behind existing switchboards where possible.",
        "Centralised scenes: Relax, Focus, Movie, Goodnight.",
        "Offline schedules for balcony, façade and corridor lighting.",
      ],
    },
    {
      tag: "Residential",
      title: "Independent villas & farmhouses",
      body: "Whole-home automation for multi-floor spaces, holiday homes and farmhouses — built to handle patchy connectivity and power conditions.",
      bullets: [
        "Perimeter lights, garden and pathway scenes.",
        "Water motor and borewell automation with safety logic.",
        "Gate and garage integration with access control.",
      ],
    },
    {
      tag: "Hospitality",
      title: "Boutique hotels & serviced stays",
      body: "Guest rooms that behave consistently, even when the ISP has a bad day. Scenes map to guest journeys instead of just switches.",
      bullets: [
        "Room-level scenes: Welcome, Sleep, Housekeeping.",
        "Local fallback when PMS or Wi-Fi is unstable.",
        "Central dashboards without breaking offline behaviour.",
      ],
    },
    {
      tag: "Commercial",
      title: "Offices, studios & clinics",
      body: "Automations that support working hours, meeting rooms and shared spaces, without adding complexity for frontline staff.",
      bullets: [
        "Schedules tied to working hours and holidays.",
        "Occupancy-driven scenes for meeting rooms.",
        "Energy-optimised patterns for non-critical circuits.",
      ],
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Segments"
        title="Built for real projects and real operating conditions."
        description="Every segment gets the same offline reliability, with different scene logic and control strategies tuned for the use case."
      />
      <div className="mt-6 grid md:grid-cols-2 gap-4 text-xs">
        {segments.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-black/40 p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
                {s.tag}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px]">
                Offline-first
              </span>
            </div>
            <div className="text-sm font-medium">{s.title}</div>
            <p className="text-[11px] text-[var(--text-muted,#9ca3af)]">
              {s.body}
            </p>
            <ul className="mt-1 space-y-1 text-[11px] text-[var(--text-muted,#9ca3af)]">
              {s.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const Flows: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Experience flows"
      title="Design scenes around daily routines, not just devices."
      description="Project-M structures automations as flows: who is using the space, what they need and how the home should respond — all executed locally on M-OS."
    />
    <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs">
      <FlowCard
        title="Residential – Evening arrival"
        steps={[
          "Door unlock or main switch triggers a Welcome scene.",
          "Entry, living and kitchen lights ramp up softly.",
          "Curtains adjust based on time and outside light.",
          "Optional: background music turns on at preset volume.",
        ]}
      />
      <FlowCard
        title="Hospitality – Guest check-in"
        steps={[
          "Front desk marks room as Occupied in PMS or local tool.",
          "Welcome scene runs as guest taps keycard or enters.",
          "Temperature set to a comfortable preset.",
          "Curtains and lights adjust to the time of day.",
        ]}
      />
      <FlowCard
        title="Office – Meeting room"
        steps={[
          "Occupancy or booking triggers Meeting scene.",
          "Room lights and display power on.",
          "Blinds adjust to minimise glare.",
          "After the meeting, everything powers down reliably.",
        ]}
      />
    </div>
  </section>
);

const RetrofitStory: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Retrofit-friendly"
      title="Upgrade existing homes without rebuilding them."
      description="Most real projects are not blank canvases. Project-M is engineered to slide into existing switchboards and electrical layouts with minimal disruption."
    />
    <div className="mt-6 grid md:grid-cols-[1.2fr_1fr] gap-4 text-xs">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
        <h3 className="text-sm font-medium mb-1">Typical retrofit flow</h3>
        <ol className="list-decimal ml-4 space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>Site survey to map circuits, loads and switch positions.</li>
          <li>Define scene requirements room-by-room with the client.</li>
          <li>Retrofit smart modules behind select switchboards.</li>
          <li>Install M-OS hub and connect to LAN + power.</li>
          <li>Configure scenes, schedules and safety logic in Project-M.</li>
        </ol>
      </div>
      <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,_rgba(0,240,255,0.16),_rgba(0,0,0,0.9))] p-4">
        <h3 className="text-sm font-medium mb-2">
          What stays offline during all this?
        </h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Core configuration is stored on the M-OS hub.</li>
          <li>• Test scenes run locally during commissioning.</li>
          <li>• No dependency on live cloud services during handover.</li>
        </ul>
      </div>
    </div>
  </section>
);

const BuilderUseCase: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Builders & project owners"
      title="Standardised offline automation across multiple units."
      description="For builders and project owners, Project-M provides a repeatable blueprint that can be deployed across towers, blocks and villa communities."
    />
    <div className="mt-6 grid md:grid-cols-2 gap-4 text-xs">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
        <h3 className="text-sm font-medium mb-1">Standard packages</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Tiered packages by BHK configuration or room count.</li>
          <li>• Predefined scene templates for each typology.</li>
          <li>• Common logic for balcony, façade and common areas.</li>
        </ul>
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4 space-y-2">
        <h3 className="text-sm font-medium mb-1">Operational benefits</h3>
        <ul className="space-y-1 text-[var(--text-muted,#9ca3af)]">
          <li>• Handover-ready homes with proven offline setups.</li>
          <li>• Fewer complaints about “app not working when Wi-Fi is down”.</li>
          <li>• A differentiated story for premium and mid-market buyers.</li>
        </ul>
      </div>
    </div>
  </section>
);

const OpsSection: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Operations"
      title="Support, maintenance and lifecycle built in."
      description="The support model is designed around real-world operations — remote troubleshooting without taking away local control."
    />
    <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs">
      <OpsCard
        title="Local-first diagnostics"
        body="Technicians can view hub health, device status and recent logs directly on-site, without depending on external dashboards."
      />
      <OpsCard
        title="Remote assistance"
        body="With the client’s approval, support can temporarily use cloud tools to inspect configurations and suggest fixes."
      />
      <OpsCard
        title="Upgrade path"
        body="Firmware and feature updates are designed to be staged and reversible, so homes remain stable during rollouts."
      />
    </div>
  </section>
);

const SolutionsFinalCTA: React.FC = () => (
  <section className="pb-4">
    <div className="rounded-3xl border border-[var(--mos-red,#ff3131)]/40 bg-[linear-gradient(135deg,_rgba(255,49,49,0.16),_rgba(0,0,0,0.9))] p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
          Next step
        </div>
        <div className="text-lg sm:text-xl font-semibold mt-1">
          Share your floor plan and we&apos;ll design a Project-M solution.
        </div>
        <div className="text-xs text-[var(--text-muted,#9ca3af)] mt-2 max-w-md">
          Whether it&apos;s a single apartment or a full project, we can map
          scenes, devices and M-OS hubs to your exact requirements.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
        >
          Send project details
        </Link>
        <Link
          to="/pricing"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
        >
          View indicative packages
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

const FlowCard: React.FC<{ title: string; steps: string[] }> = ({
  title,
  steps,
}) => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <div className="text-sm font-medium mb-1">{title}</div>
    <ol className="list-decimal ml-4 mt-1 space-y-1 text-[11px] text-[var(--text-muted,#9ca3af)]">
      {steps.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ol>
  </div>
);

const OpsCard: React.FC<{ title: string; body: string }> = ({
  title,
  body,
}) => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className="text-[11px] text-[var(--text-muted,#9ca3af)]">{body}</div>
  </div>
);