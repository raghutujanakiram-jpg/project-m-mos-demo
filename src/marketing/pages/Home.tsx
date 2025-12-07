import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <HeroSection />
      <WhyOfflineSection />
      <HowItWorksSection />
      <SolutionsSection />
      <OfflineVsCloudSection />
      <DeviceEcosystemSection />
      <FinalCTASection />
    </div>
  );
};

export default Home;

/* ==================== SECTIONS ==================== */

const HeroSection: React.FC = () => {
  return (
    <section className="pt-10 pb-16 grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
      {/* Left copy */}
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--mos-red,#ff3131)] shadow-[0_0_12px_rgba(255,49,49,0.8)]" />
          <span className="uppercase tracking-[0.18em] text-[10px]">
            Project – M • built on M-OS
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          Worlds first{" "}
          <span className="neon-text">offline home automation</span>{" "}
          platform.
        </h1>

        <p className="mt-4 text-sm sm:text-base text-[var(--text-muted,#9ca3af)] max-w-xl">
          Project-M runs entirely inside your home on M-OS. Your lighting,
          climate, security and appliances stay responsive, even when your
          internet or cloud services don’t.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium neon-button neon-glow"
          >
            Book a live demo
          </Link>
          <Link
            to="/technology"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-white/15 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
          >
            Explore M-OS architecture
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 text-[11px] text-[var(--text-muted,#9ca3af)]">
          <Badge label="0% mandatory cloud dependency" />
          <Badge label="Always-on, even in outages" />
          <Badge label="Local data. Local decisions." />
          <Badge label="Millisecond response time" />
        </div>
      </div>

      {/* Right visual placeholder (mockup concept) */}
      <div className="relative">
        <div className="absolute inset-0 blur-3xl bg-[radial-gradient(circle_at_top,_rgba(255,49,49,0.45),_transparent_55%)] pointer-events-none" />
        <div className="relative rounded-3xl border border-[rgba(255,0,51,0.25)] bg-white/5 backdrop-blur-xl overflow-hidden p-4 flex flex-col gap-4 shadow-[0_0_35px_rgba(255,0,51,0.25)]">
          {/* Mock mobile dashboard */}
          <div className="rounded-2xl bg-black/60 border border-white/10 p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-[11px] text-[var(--text-muted,#9ca3af)]">
              <span>My Home • Project-M</span>
              <span className="inline-flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Offline-first
              </span>
            </div>
            <div className="mt-1 text-sm font-medium">
              Tonight scene is scheduled at 9:00 PM
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
              <PillCard title="Living" value="On • 68%" />
              <PillCard title="Bedroom" value="Warm • 32%" />
              <PillCard title="Curtains" value="50% open" />
            </div>
            <div className="mt-4 text-[11px] text-[var(--text-muted,#9ca3af)]">
              Automations are executed locally on your M-OS hub — no cloud
              round-trips.
            </div>
          </div>

          {/* Mini architecture sketch */}
          <div className="rounded-2xl bg-black/40 border border-white/10 p-4 text-[11px]">
            <div className="font-medium mb-2">Local architecture snapshot</div>
            <div className="flex flex-col gap-1">
              <ArchRow left="Project-M app" right="Local network" />
              <ArchRow left="M-OS hub" right="Edge processing" />
              <ArchRow left="Switches, sensors, locks" right="Direct control" />
              <ArchRow left="Optional cloud" right="Remote access only" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyOfflineSection: React.FC = () => {
  const items = [
    {
      title: "Always-on reliability",
      body: "Scenes, schedules and automations keep running even when Wi-Fi or ISP services fail.",
    },
    {
      title: "Data stays at home",
      body: "M-OS processes data locally on the hub. You decide what, if anything, touches the cloud.",
    },
    {
      title: "Instant response",
      body: "No cloud round-trip. Switches, sensors and scenes respond in milliseconds.",
    },
    {
      title: "No subscription trap",
      body: "Core automation doesn’t depend on monthly cloud fees or external servers.",
    },
  ];

  return (
    <section className="pb-14">
      <SectionHeader
        eyebrow="Why offline-first?"
        title="Cloud automation fails when you need it most. Project-M doesn’t."
        description="Instead of sending every action to a remote server, M-OS executes decisions inside your home, at the edge."
      />
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="text-sm font-medium mb-1">{item.title}</div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {item.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Install the M-OS hub",
      body: "A compact edge controller installed inside your home — typically near your electrical or network panel.",
    },
    {
      step: "Step 2",
      title: "Connect devices locally",
      body: "Retrofit modules, switches, sensors, locks and curtains talk directly to the hub over secure local protocols.",
    },
    {
      step: "Step 3",
      title: "Configure Project-M scenes",
      body: "Use the Project-M app to define scenes, schedules and automations. All logic lives and runs locally.",
    },
    {
      step: "Step 4",
      title: "Add optional cloud services",
      body: "Remote access, notifications and integrations are optional layers on top of a fully functional offline core.",
    },
  ];

  return (
    <section className="pb-14">
      <SectionHeader
        eyebrow="How it works"
        title="M-OS turns your home into a local automation cloud."
        description="Instead of pushing everything to the internet, Project-M turns your home into its own private automation zone."
      />
      <div className="mt-6 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
        {steps.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-black/40 p-4 flex flex-col gap-1"
          >
            <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--mos-red,#ff3131)]">
              {s.step}
            </div>
            <div className="text-sm font-medium">{s.title}</div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {s.body}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Link
          to="/technology"
          className="inline-flex items-center text-xs text-[var(--mos-cyan,#00f0ff)] hover:underline"
        >
          View detailed M-OS architecture →
        </Link>
      </div>
    </section>
  );
};

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: "Apartments",
      body: "Retrofit automation with minimal civil work. Ideal for 2/3 BHK homes.",
    },
    {
      title: "Villas & farmhouses",
      body: "Lighting, climate, perimeter security and pumps — even with unstable networks.",
    },
    {
      title: "Hotels & stays",
      body: "Guest experiences that stay consistent during cloud or ISP outages.",
    },
    {
      title: "Offices & studios",
      body: "Access control, schedules, scenes and energy efficiency in shared spaces.",
    },
  ];

  return (
    <section className="pb-14">
      <SectionHeader
        eyebrow="Solutions"
        title="One platform for apartments, villas, hotels and offices."
        description="Project-M adapts from a single flat to a full property portfolio, all powered by the same M-OS core."
      />
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-4"
          >
            <div className="text-sm font-medium mb-1">{s.title}</div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {s.body}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Link
          to="/solutions"
          className="inline-flex items-center text-xs text-[var(--mos-cyan,#00f0ff)] hover:underline"
        >
          Explore detailed use cases →
        </Link>
      </div>
    </section>
  );
};

const OfflineVsCloudSection: React.FC = () => {
  return (
    <section className="pb-14">
      <SectionHeader
        eyebrow="Comparison"
        title="Offline-first vs cloud-dependent smart homes."
        description="See how Project-M behaves when the internet is off, cloud is down or latency spikes."
      />
      <div className="mt-6 overflow-x-auto text-xs">
        <table className="min-w-[560px] border-separate border-spacing-y-2">
          <thead className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted,#9ca3af)]">
            <tr>
              <th className="text-left pr-4 pb-1">Capability</th>
              <th className="text-left pr-4 pb-1">Project-M (Offline-first)</th>
              <th className="text-left pb-1">Typical cloud IoT</th>
            </tr>
          </thead>
          <tbody>
            <CompareRow
              label="Works when internet is down"
              projectM="✔ Core automations continue"
              cloud="✖ Many functions stop responding"
            />
            <CompareRow
              label="Where decisions run"
              projectM="✔ On your M-OS hub at the edge"
              cloud="✖ On remote cloud servers"
            />
            <CompareRow
              label="Data location by default"
              projectM="✔ Inside your home network"
              cloud="✖ Streamed and stored remotely"
            />
            <CompareRow
              label="Latency"
              projectM="✔ Milliseconds, local network speed"
              cloud="✖ Depends on internet + server load"
            />
            <CompareRow
              label="Subscription dependency"
              projectM="✔ Offline core works without it"
              cloud="✖ Often required for basic features"
            />
          </tbody>
        </table>
      </div>
    </section>
  );
};

const DeviceEcosystemSection: React.FC = () => {
  const devices = [
    {
      title: "M-OS hub",
      body: "The local brain that runs Project-M automation for your entire space.",
    },
    {
      title: "Retrofit switch modules",
      body: "Upgrade existing switchboards into smart, scene-aware controls.",
    },
    {
      title: "Touch panels",
      body: "Premium glass or matte touch panels with scene shortcuts.",
    },
    {
      title: "Sensors & inputs",
      body: "Motion, door/window, temperature, lux and leak detection.",
    },
    {
      title: "Curtain & blind controllers",
      body: "Automated openings based on time, light and occupancy.",
    },
    {
      title: "Energy & utilities",
      body: "Monitor and orchestrate loads, motors and key circuits.",
    },
  ];

  return (
    <section className="pb-14">
      <SectionHeader
        eyebrow="Device ecosystem"
        title="One platform. Many devices. A single offline brain."
        description="Everything speaks to M-OS, so your home behaves like a coordinated system — not random islands of hardware."
      />
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {devices.map((d) => (
          <div
            key={d.title}
            className="rounded-2xl border border-white/10 bg-black/40 p-4"
          >
            <div className="text-sm font-medium mb-1">{d.title}</div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {d.body}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Link
          to="/products"
          className="inline-flex items-center text-xs text-[var(--mos-cyan,#00f0ff)] hover:underline"
        >
          View detailed product lineup →
        </Link>
      </div>
    </section>
  );
};

const FinalCTASection: React.FC = () => {
  return (
    <section className="pb-4">
      <div className="rounded-3xl border border-[var(--mos-red,#ff3131)]/40 bg-[linear-gradient(135deg,_rgba(255,49,49,0.16),_rgba(0,0,0,0.8))] p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
            Get started
          </div>
          <div className="text-lg sm:text-xl font-semibold mt-1">
            Make your home the first offline smart home on your street.
          </div>
          <div className="text-xs text-[var(--text-muted,#9ca3af)] mt-2 max-w-md">
            Share your floor plan or project details and we’ll map a
            Project-M-powered automation plan tailored to your space.
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
          >
            Schedule a consultation
          </Link>
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
          >
            View indicative pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ==================== SMALL COMPONENTS ==================== */

const Badge: React.FC<{ label: string }> = ({ label }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 border border-white/10">
    <span className="h-1.5 w-1.5 rounded-full bg-[var(--mos-red,#ff3131)]" />
    <span>{label}</span>
  </div>
);

const SectionHeader: React.FC<{
  eyebrow: string;
  title: string;
  description?: string;
}> = ({ eyebrow, title, description }) => (
  <div className="max-w-2xl">
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

const PillCard: React.FC<{ title: string; value: string }> = ({
  title,
  value,
}) => (
  <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 flex flex-col gap-0.5">
    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
      {title}
    </div>
    <div className="text-xs font-medium">{value}</div>
  </div>
);

const ArchRow: React.FC<{ left: string; right: string }> = ({
  left,
  right,
}) => (
  <div className="flex items-center justify-between gap-2">
    <span className="text-[10px] text-[var(--text-muted,#9ca3af)]">
      {left}
    </span>
    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
      {right}
    </span>
  </div>
);

const CompareRow: React.FC<{
  label: string;
  projectM: string;
  cloud: string;
}> = ({ label, projectM, cloud }) => (
  <tr>
    <td className="align-top pr-4 py-1 text-[var(--text-muted,#9ca3af)]">
      {label}
    </td>
    <td className="align-top pr-4 py-1">
      <span className="inline-flex px-2 py-1 rounded-full bg-black/40 border border-emerald-400/40 text-[10px]">
        {projectM}
      </span>
    </td>
    <td className="align-top py-1">
      <span className="inline-flex px-2 py-1 rounded-full bg-black/30 border border-red-400/30 text-[10px]">
        {cloud}
      </span>
    </td>
  </tr>
);
