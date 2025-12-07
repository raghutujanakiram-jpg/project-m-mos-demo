import React from "react";
import { Link } from "react-router-dom";

const Solutions: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <IntroSection />
      <VerticalsSection />
      <ScenariosSection />
      <RolloutSection />
      <FinalCTA />
    </div>
  );
};

export default Solutions;

/* ==================== SECTIONS ==================== */

const IntroSection: React.FC = () => (
  <section className="pt-10 pb-12">
    <SectionHeader
      eyebrow="Solutions"
      title="One offline-first platform across multiple property types."
      description="Project-M is designed to retrofit existing apartments as easily as it powers new villas, hotels and offices — all running on the same M-OS core."
    />
  </section>
);

const VerticalsSection: React.FC = () => {
  const verticals = [
    {
      title: "City apartments",
      body: "2/3 BHK flats with existing wiring. Retrofit modules, hub and select panels bring them into the Project-M ecosystem with minimal civil work.",
      highlight: "Ideal for owners who want premium automation without rebuilding the home.",
    },
    {
      title: "Villas & farmhouses",
      body: "Larger homes with gardens, pumps and perimeter zones. Project-M handles zoning, scenes, outdoor lighting and reliability during unstable networks.",
      highlight: "Great for homes that experience frequent power cuts or poor ISP coverage.",
    },
    {
      title: "Hotels & serviced stays",
      body: "Rooms, corridors and common areas kept consistent even if cloud services are offline. Guest comfort scenes run on M-OS inside the property.",
      highlight: "Useful where guest experience cannot depend on public internet quality.",
    },
    {
      title: "Offices & studios",
      body: "Meeting rooms, studios and small offices with schedules, access control and energy optimisation — without adding another cloud panel.",
      highlight: "Perfect for spaces that need predictable behaviour during work hours.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Property types"
        title="Tailored rollout patterns for each segment."
      />
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {verticals.map((v) => (
          <div
            key={v.title}
            className="rounded-2xl border border-white/10 bg-black/40 p-4 flex flex-col gap-2"
          >
            <div className="text-sm font-medium">{v.title}</div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {v.body}
            </div>
            <div className="text-[11px] text-[var(--mos-red,#ff3131)]">
              {v.highlight}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ScenariosSection: React.FC = () => {
  const scenarios = [
    {
      title: "Evening arrival",
      body: "As you unlock the main door, entry and living lights come on, curtains adjust and climate switches to comfort mode — all triggered locally.",
    },
    {
      title: "Night safety",
      body: "Motion sensors guide low-level pathway lights. Security scenes keep outdoor zones active even if the modem or router is offline.",
    },
    {
      title: "Guest mode",
      body: "Temporary scenes and access profiles for guests or tenants, without exposing full admin controls or your personal routines.",
    },
    {
      title: "Energy-conscious mode",
      body: "Non-critical loads and circuits can be throttled or switched off based on time of day, occupancy or tariff windows.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Everyday use cases"
        title="Built around how people actually live in their spaces."
      />
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        {scenarios.map((s) => (
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
    </section>
  );
};

const RolloutSection: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Deployment"
      title="From a single flat to a full project rollout."
      description="Project-M can be deployed home-by-home or across entire buildings and communities, with installers and partners handling on-ground execution."
    />
    <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs text-[var(--text-muted,#9ca3af)]">
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <div className="text-sm font-medium mb-1">Single homes</div>
        <p>
          Ideal for owners retrofitting one apartment or villa. Assessment,
          design, installation and handover handled via certified installers.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <div className="text-sm font-medium mb-1">Cluster deployments</div>
        <p>
          Multiple units in the same building or layout use a shared rollout
          plan, reducing cost and complexity while keeping each home private.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
        <div className="text-sm font-medium mb-1">Builder & project tie-ups</div>
        <p>
          Pre-planned automation for new developments with standard packages,
          installer enablement and optional white-labelling.
        </p>
      </div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="pb-4">
    <div className="rounded-3xl border border-[var(--mos-red,#ff3131)]/35 bg-[linear-gradient(135deg,_rgba(255,49,49,0.14),_rgba(0,0,0,0.9))] p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
          Explore a solution
        </div>
        <div className="text-lg sm:text-xl font-semibold mt-1">
          Tell us about your property. We’ll propose a Project-M plan.
        </div>
        <div className="text-xs text-[var(--text-muted,#9ca3af)] mt-2 max-w-md">
          Whether it’s a single home, a villa, a hotel or a new development,
          we’ll map an offline-first automation layout for you.
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
        >
          Share project details
        </Link>
        <Link
          to="/pricing-calculator"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
        >
          Estimate budget
        </Link>
      </div>
    </div>
  </section>
);

/* ==================== SHARED ==================== */

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
