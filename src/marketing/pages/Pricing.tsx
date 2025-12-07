import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <IntroSection />
      <TiersSection />
      <NotesSection />
      <ComparisonSection />
      <FinalCTA />
    </div>
  );
};

export default Pricing;

/* ==================== SECTIONS ==================== */

const IntroSection: React.FC = () => (
  <section className="pt-10 pb-12">
    <SectionHeader
      eyebrow="Pricing"
      title="Transparent, project-based pricing. No forced subscriptions."
      description="Project-M is priced as hardware + installation for your specific property. Optional cloud features are add-ons, not requirements."
    />
  </section>
);

const TiersSection: React.FC = () => {
  const tiers = [
    {
      name: "Starter",
      ideal: "1–2 BHK",
      headline: "Core automation for compact homes.",
      bullets: [
        "M-OS hub",
        "Essential lighting circuits",
        "Basic sensors",
        "Curtain support for key rooms",
      ],
      note: "Good entry point if you’re starting with one flat.",
    },
    {
      name: "Comfort",
      ideal: "3–4 BHK / villas",
      headline: "Deeper coverage and premium scenes.",
      bullets: [
        "Full-floor lighting coverage",
        "Curtains and key loads",
        "More sensors & panels",
        "Tailored scenes for lifestyle",
      ],
      highlight: true,
      note: "Recommended for most villas and larger homes.",
    },
    {
      name: "Project",
      ideal: "Hospitality / builders",
      headline: "Scaled deployments with custom design.",
      bullets: [
        "Multi-unit planning",
        "Installer enablement",
        "Project-level support",
        "Integration options",
      ],
      note: "Designed with builders, integrators and operators.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Indicative tiers"
        title="Packages tuned to property size and complexity."
      />
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`rounded-2xl border bg-black/40 p-5 flex flex-col gap-3 ${
              t.highlight
                ? "border-[var(--mos-red,#ff3131)]/60 shadow-[0_0_32px_rgba(255,0,51,0.25)]"
                : "border-white/10"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-semibold">{t.name}</div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[var(--text-muted,#9ca3af)]">
                {t.ideal}
              </span>
            </div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {t.headline}
            </div>
            <ul className="text-xs text-[var(--text-muted,#9ca3af)] space-y-1">
              {t.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>
            <div className="text-[11px] text-[var(--mos-red,#ff3131)]">
              {t.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const NotesSection: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="How pricing works"
      title="Every quote is mapped to your actual circuits and rooms."
    />
    <ul className="mt-4 space-y-2 text-xs text-[var(--text-muted,#9ca3af)] max-w-3xl">
      <li>
        • Pricing depends on number of circuits, panels, sensors and special
        loads — not just square footage.
      </li>
      <li>
        • Retrofit complexity (panel condition, routing, access) can influence
        labour and installation cost.
      </li>
      <li>
        • Optional add-ons: extended warranty, project dashboards, integrations
        and special interfaces.
      </li>
    </ul>
  </section>
);

const ComparisonSection: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Comparison"
      title="Where Project-M differs from subscription-heavy cloud systems."
    />
    <div className="mt-6 overflow-x-auto text-xs">
      <table className="min-w-[560px] border-separate border-spacing-y-2">
        <thead className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted,#9ca3af)]">
          <tr>
            <th className="text-left pr-4 pb-1">Area</th>
            <th className="text-left pr-4 pb-1">Project-M</th>
            <th className="text-left pb-1">Typical cloud smart home</th>
          </tr>
        </thead>
        <tbody>
          <CompareRow
            label="Core behaviour during internet outage"
            projectM="Runs locally on M-OS hub."
            cloud="Often degraded or non-functional."
          />
          <CompareRow
            label="Dependence on monthly fee"
            projectM="Offline core works without subscription."
            cloud="Many features locked behind recurring plans."
          />
          <CompareRow
            label="Where your data lives by default"
            projectM="Inside the home network."
            cloud="Pushed to vendor servers."
          />
          <CompareRow
            label="Upgrade path"
            projectM="Add modules and panels as you grow."
            cloud="Often tied to specific vendor cloud bundles."
          />
        </tbody>
      </table>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="pb-4">
    <div className="rounded-3xl border border-[var(--mos-red,#ff3131)]/40 bg-[linear-gradient(135deg,_rgba(255,49,49,0.16),_rgba(0,0,0,0.85))] p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
          Ready to scope your project?
        </div>
        <div className="text-lg sm:text-xl font-semibold mt-1">
          Get an indicative range, then a detailed quote.
        </div>
        <div className="text-xs text-[var(--text-muted,#9ca3af)] mt-2 max-w-md">
          Start with the pricing calculator, then share your floor plan. Our
          team will convert it into a circuit-level Project-M proposal.
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <Link
          to="/pricing-calculator"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
        >
          Open pricing calculator
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
        >
          Request detailed quote
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
