import React from "react";
import { Link } from "react-router-dom";

const Pricing: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pb-16">
      <Hero />
      <Principles />
      <Plans />
      <WhatImpactsCost />
      <ProjectFlow />
      <PricingFAQ />
      <PricingFinalCTA />
    </div>
  );
};

export default Pricing;

/* ==================== SECTIONS ==================== */

const Hero: React.FC = () => (
  <section className="pt-10 pb-10">
    <div className="max-w-3xl">
      <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--mos-red,#ff3131)] mb-1">
        Pricing
      </div>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
        Transparent, project-based pricing for offline automation.
      </h1>
      <p className="mt-3 text-sm text-[var(--text-muted,#9ca3af)]">
        Project-M pricing is built around rooms, loads and complexity – not
        vague bundles. You pay for the hardware and integration effort needed
        to make your home truly offline-first.
      </p>
    </div>
  </section>
);

const Principles: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Principles"
      title="How we think about pricing for Project-M."
      description="The goal is to give you clear expectations before you commit, and predictable behaviour after you go live."
    />
    <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs">
      <PrincipleCard
        title="No forced subscriptions"
        body="Core offline automation runs without recurring cloud fees. Optional services are clearly scoped."
      />
      <PrincipleCard
        title="Room and load-based"
        body="Pricing aligns with actual circuits, rooms and devices – not arbitrary labels."
      />
      <PrincipleCard
        title="Design-first"
        body="We price after understanding your layout, not before. The proposal reflects your real use case."
      />
    </div>
  </section>
);

const Plans: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      tag: "For 1–2 bedroom homes",
      highlight: "Ideal for early adopters and trial projects.",
      bullets: [
        "Core M-OS hub for the property.",
        "Key rooms covered with lighting scenes.",
        "Basic sensors in select areas.",
        "Indicative range shared after quick discovery call.",
      ],
      idealFor: "Compact homes, first Project-M deployment, pilots.",
    },
    {
      name: "Comfort",
      tag: "For full 2/3 BHK automation",
      highlight: "End-to-end automation for a typical apartment.",
      bullets: [
        "M-OS hub sized for your load and future growth.",
        "Lighting and fan control across living and bedrooms.",
        "Curtains/blinds in priority rooms.",
        "Offline scenes for daily routines and holidays.",
      ],
      idealFor: "Families and professionals in mid to premium apartments.",
      featured: true,
    },
    {
      name: "Signature",
      tag: "For villas and premium projects",
      highlight: "Whole-home automation with advanced logic.",
      bullets: [
        "Multiple hubs or extended topology where required.",
        "Perimeter, garden, pool and façade integration.",
        "Energy and utilities tied into key scenes.",
        "Custom flows for staff, guests and owners.",
      ],
      idealFor: "Villas, farmhouses, multi-floor homes and flagship units.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="Packages"
        title="Indicative packages to align expectations."
        description="Final commercials are tailored to your project, but these bands help you understand how Project-M scales."
      />
      <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border bg-black/40 p-4 flex flex-col gap-3 ${
              plan.featured
                ? "border-[var(--mos-red,#ff3131)] shadow-[0_0_28px_rgba(255,49,49,0.35)]"
                : "border-white/10"
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <div className="text-sm font-semibold">{plan.name}</div>
                <div className="text-[11px] text-[var(--text-muted,#9ca3af)]">
                  {plan.tag}
                </div>
              </div>
              {plan.featured && (
                <span className="px-2 py-0.5 rounded-full bg-[var(--mos-red,#ff3131)]/15 border border-[var(--mos-red,#ff3131)] text-[10px]">
                  Most chosen
                </span>
              )}
            </div>

            <p className="text-[11px] text-[var(--text-muted,#9ca3af)]">
              {plan.highlight}
            </p>

            <ul className="space-y-1 text-[11px] text-[var(--text-muted,#9ca3af)]">
              {plan.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <div className="mt-1 text-[11px] text-[var(--text-muted,#9ca3af)]">
              <span className="font-semibold text-[var(--text-light,#f9fafb)]">
                Ideal for:
              </span>{" "}
              {plan.idealFor}
            </div>

            <div className="mt-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-full text-[11px] font-medium bg-white text-black hover:bg-neutral-200 transition"
              >
                Get a project-specific quote
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhatImpactsCost: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Scope drivers"
      title="What actually changes the cost of a Project-M deployment."
      description="Two similar-sized homes can have very different requirements. These are the main levers that influence overall pricing."
    />
    <div className="mt-6 grid md:grid-cols-3 gap-4 text-xs">
      <ScopeCard
        title="Number of circuits and loads"
        body="More lighting circuits, fans and special loads mean more modules and design effort."
      />
      <ScopeCard
        title="Scene complexity"
        body="Simple on/off scenes cost less than multi-sensor, multi-room flows with safety rules."
      />
      <ScopeCard
        title="Curtains, blinds and facades"
        body="Additional motorised elements and outdoor lighting increase device count and wiring scope."
      />
      <ScopeCard
        title="Sensors and safety"
        body="Additional motion, door, leak or smoke inputs add hardware and commissioning effort."
      />
      <ScopeCard
        title="Network readiness"
        body="Good LAN and Wi-Fi simplify deployment. Weak backbone may require additional infra."
      />
      <ScopeCard
        title="Support model"
        body="AMC, SLAs and remote support options can be layered based on project requirements."
      />
    </div>
  </section>
);

const ProjectFlow: React.FC = () => (
  <section className="pb-12">
    <SectionHeader
      eyebrow="Engagement model"
      title="How a typical Project-M engagement is structured."
      description="You don&apos;t have to guess where the money goes. The process is staged so you see value at each step."
    />
    <div className="mt-6 grid md:grid-cols-4 sm:grid-cols-2 gap-4 text-xs">
      <StepCard
        step="01"
        title="Discovery"
        body="You share layout, requirements and priorities. We clarify what offline-first means for your project."
      />
      <StepCard
        step="02"
        title="Solution design"
        body="We propose hub sizing, modules, sensors and scenes with indicative commercials."
      />
      <StepCard
        step="03"
        title="Implementation"
        body="Hardware installation, wiring touchpoints and M-OS commissioning on-site."
      />
      <StepCard
        step="04"
        title="Handover & support"
        body="Scenes are validated with you, documentation is shared and support channels are defined."
      />
    </div>
  </section>
);

const PricingFAQ: React.FC = () => {
  const faqs = [
    {
      q: "Do I need to pay anything monthly for core automation?",
      a: "No. Core offline automation runs on the M-OS hub inside your home. Optional cloud features may have their own pricing, but they are not required for day-to-day operation.",
    },
    {
      q: "Can I start small and expand later?",
      a: "Yes. Many clients start with key rooms or a single floor, then extend to the rest of the property using the same M-OS core.",
    },
    {
      q: "What happens if I add more devices in the future?",
      a: "The proposal will indicate how much headroom your M-OS hub has. Additional devices and scenes can be added with incremental cost.",
    },
    {
      q: "Is site survey charged separately?",
      a: "For most projects, an initial remote assessment is free. Detailed on-site surveys may be billed or adjusted against the final project value, depending on scope.",
    },
  ];

  return (
    <section className="pb-12">
      <SectionHeader
        eyebrow="FAQs"
        title="Commercial questions we typically get from clients."
      />
      <div className="mt-6 grid md:grid-cols-2 gap-4 text-xs">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-2xl border border-white/10 bg-black/40 p-4"
          >
            <div className="text-sm font-medium mb-1">{f.q}</div>
            <div className="text-[11px] text-[var(--text-muted,#9ca3af)]">
              {f.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const PricingFinalCTA: React.FC = () => (
  <section className="pb-4">
    <div className="rounded-3xl border border-[var(--mos-red,#ff3131)]/40 bg-[linear-gradient(135deg,_rgba(255,49,49,0.16),_rgba(0,0,0,0.9))] p-6 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
          Move to next step
        </div>
        <div className="text-lg sm:text-xl font-semibold mt-1">
          Get a Project-M proposal tailored to your property.
        </div>
        <div className="text-xs text-[var(--text-muted,#9ca3af)] mt-2 max-w-md">
          Share your floor plan, photos or a simple sketch. We&apos;ll respond
          with a configuration and commercial outline based on M-OS and
          offline-first design.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
        >
          Request a detailed quote
        </Link>
        <Link
          to="/solutions"
          className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-medium border border-white/20 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
        >
          Review use cases again
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

const PrincipleCard: React.FC<{ title: string; body: string }> = ({
  title,
  body,
}) => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className="text-[11px] text-[var(--text-muted,#9ca3af)]">{body}</div>
  </div>
);

const ScopeCard: React.FC<{ title: string; body: string }> = ({
  title,
  body,
}) => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className="text-[11px] text-[var(--text-muted,#9ca3af)]">{body}</div>
  </div>
);

const StepCard: React.FC<{ step: string; title: string; body: string }> = ({
  step,
  title,
  body,
}) => (
  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
    <div className="flex items-center justify-between gap-2 mb-1">
      <span className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted,#9ca3af)]">
        Step {step}
      </span>
    </div>
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className="text-[11px] text-[var(--text-muted,#9ca3af)]">{body}</div>
  </div>
);