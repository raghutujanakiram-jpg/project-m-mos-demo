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
          {/* ADDED RALLY BUTTON */}
          <a
            href="https://project-m-mos-demo-3gcmbkke7-janakiram-raghutus-projects.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
          >
            Rally
          </a>
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-white/15 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
          >
            Book a live demo
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
              <span className="inline-flex items-center gap-1"><br />
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

// ... [WhyOffline, HowItWorks, Solutions, OfflineVsCloud, DeviceEcosystem sections remain same]

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
          {/* ADDED RALLY BUTTON */}
          <a
            href="https://project-m-mos-demo-3gcmbkke7-janakiram-raghutus-projects.vercel.app/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition"
          >
            Rally
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium border border-white/20 text-[var(--text-light,#f9fafb)] hover:bg-white/5 transition"
          >
            Schedule a consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

// ... [Rest of components remain same]
