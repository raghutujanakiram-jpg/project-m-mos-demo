import React from "react";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        World’s first <span className="text-red-500">offline home automation</span> platform.
      </h1>

      <p className="mt-6 max-w-2xl text-gray-400">
        Project-M runs entirely inside your home on M-OS.
        No cloud dependency. No latency surprises. Full control.
      </p>

      <div className="mt-12">
        <CTA
          title="Experience offline intelligence"
          subtitle="See how M-OS executes automation locally, even during outages."
          actionText="Book a live demo"
        />
      </div>
    </section>
  );
}