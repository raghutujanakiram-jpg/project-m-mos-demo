import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <IntroSection />
      <CoreProductsSection />
      <BundlesSection />
      <AppSection />
      <FinalCTA />
    </div>
  );
};

export default Products;

/* ==================== SECTIONS ==================== */

const IntroSection = () => (
  <section className="pt-10 pb-12">
    <SectionHeader
      eyebrow="Products"
      title="Project-M hardware, powered by M-OS."
      description="A tightly integrated lineup of hubs, modules, panels and controllers engineered to run automation locally, inside your home."
    />
    <p className="mt-4 text-sm text-[var(--text-muted,#9ca3af)] max-w-3xl">
      Every Project-M device is designed around offline-first behaviour.
      Hardware talks to the M-OS hub over local protocols, so scenes and
      schedules keep working even when the internet does not.
    </p>
  </section>
);

const CoreProductsSection = () => {
  const products = [
    {
      title: "M-OS hub",
      tag: "Required",
      body: "The local brain that runs M-OS. Handles scenes, schedules, safety rules and device orchestration for your entire space.",
    },
    {
      title: "Retrofit switch modules",
      tag: "Retrofit",
      body: "Modules that sit behind existing switchboards to make circuits scene-aware without changing your interiors.",
    },
    {
      title: "Touch panels",
      tag: "Premium UI",
      body: "Glass or matte panels with scene buttons, dimmers and status indicators powered by M-OS.",
    },
    {
      title: "Curtain & blind controllers",
      tag: "Comfort",
      body: "Controllers for curtains, blinds and sheers with position control and scheduling.",
    },
    {
      title: "Sensors & inputs",
      tag: "Awareness",
      body: "Motion, door/window, occupancy and environmental sensors feeding local automations.",
    },
    {
      title: "Energy & load controllers",
      tag: "Utility",
      body: "Modules for pumps, motors and key loads so Project-M can orchestrate energy behaviour.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Core lineup"
        title="Everything you need to make a home offline-smart."
      />
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-white/10 bg-black/40 p-4 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="text-sm font-medium">{p.title}</div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[var(--text-muted,#9ca3af)]">
                {p.tag}
              </span>
            </div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {p.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const BundlesSection = () => {
  const bundles = [
    {
      name: "Starter apartment kit",
      ideal: "1–2 BHK",
      includes:
        "1× M-OS hub, 6–10 switch modules, basic sensors, curtain support for key rooms.",
    },
    {
      name: "Villa & duplex kit",
      ideal: "3–5 BHK",
      includes:
        "1× M-OS hub, higher module count, outdoor circuits, water pump and gate/garage integration options.",
    },
    {
      name: "Hospitality kit",
      ideal: "Rooms + common areas",
      includes:
        "Room-level scenes, corridor and facade lighting, basic energy and comfort automations.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Packages"
        title="Pre-planned kits for faster deployment."
        description="Use these as starting points — actual designs are customised to your floor plan and requirement."
      />
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        {bundles.map((b) => (
          <div
            key={b.name}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 flex flex-col gap-2"
          >
            <div className="text-sm font-medium">{b.name}</div>
            <div className="text-[11px] text-[var(--mos-red,#ff3131)]">
              Ideal for {b.ideal}
            </div>
            <div className="text-xs text-[var(--text-muted,#9ca3af)]">
              {b.includes}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const AppSection = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Project-M app"
      title="A single interface for rooms, scenes and status."
      description="The Project-M app and panels are built to feel like an OS UI — minimal, responsive and designed around how homes are actually used."
    />
    <ul className="mt-4 space-y-2 text-xs text-[var(--text-muted,#9ca3af)] max-w-3xl">
      <li>• Room-first navigation with quick scene triggers.</li>
      <li>• Offline configuration stored on the M-OS hub, not in a remote server.</li>
      <li>• Profiles for owners, family members, guests and installers.</li>
      <li>• Future support for dashboards and big-screen views for larger homes.</li>
    </ul>
  </section>
);

const FinalCTA = () => (
  <section className="pb-4">
    <div className="rounded-3xl border border-white/15 bg-black/40 p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
          Next
        </div>
        <div className="text-lg sm:text-xl font-semibold mt-1">
          Map products to your specific home.
        </div>
        <div className="text-xs text-[var(--text-muted,#9ca3af)] mt-2 max-w-md">
          Share your floor plan or project details and we’ll suggest the right
          mix of hubs, modules and panels — not more, not less.
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:items-center">
        <Link
          to="/pricing-calculator"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
        >
          Estimate with calculator
        </Link>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
        >
          Talk to solutions team
        </Link>
      </div>
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