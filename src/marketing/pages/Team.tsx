import React from "react";

const team = [
  {
    name: "Padmavathi",
    role: "Foundational Pillar",
    responsibility:
      "Core inspiration and support system behind the Project-M initiative. Ensures the team stays grounded and purpose-driven.",
    image: "/images/team/Padmavathi.jpg",
  },
  {
    name: "Arumalla Uneeth Reddy",
    role: "Founder & Chief Vision Architect",
    responsibility:
      "Defines the strategic roadmap for Project-M and M-OS. Drives innovation, partner alliances, and enterprise automation strategy.",
    image: "/images/team/uneeth.jpg",
  },
  {
    name: "Janakiram R",
    role: "Program Director – Project-M",
    responsibility:
      "Leads cross-functional execution across hardware, firmware, app engineering, installer ecosystems and customer experience.",
    image: "/images/team/Janakiram.jpg",
  },
  {
    name: "Nandana",
    role: "Creative Inspiration & Future Innovator",
    responsibility:
      "Inspires the design philosophy and user-experience direction that guides Project-M’s premium identity.",
    image: "/images/team/Nandana.jpg",
  },
  {
    name: "Shaanvi",
    role: "Junior Visionary & User Experience Muse",
    responsibility:
      "Her intuitive interactions inspire the simplicity and accessibility goals of Project-M’s UI/UX.",
    image: "/images/team/Shaanvi.jpg",
  },
  {
    name: "Trijan",
    role: "Future Technologist",
    responsibility:
      "Represents the next generation of engineering talent that Project-M aims to inspire with offline-first innovation.",
    image: "/images/team/Trijan.jpg",
  },
];

const Team: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 fade-section">

      {/* Header */}
      <section className="mb-10">
        <h1 className="text-3xl font-semibold mb-3 fade-up">
          The People Behind Project-M
        </h1>
        <p className="text-sm text-[var(--text-muted)] max-w-3xl fade-up delay-100">
          Project-M is built from passion, vision and relentless innovation.
          This is the core team and the foundational inspiration that fuels the 
          world’s first offline-first home automation platform.
        </p>
      </section>

      {/* Team Grid */}
      <section className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {team.map((member, index) => (
          <article
            key={member.name}
            className={`rounded-2xl border border-white/10 bg-black/40 p-4 flex flex-col gap-3 fade-up delay-${200 + index * 50}`}
          >
            {/* Image */}
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 rounded-full overflow-hidden border border-white/15 bg-white/5">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name + role */}
              <div>
                <div className="text-sm font-semibold">{member.name}</div>
                <div className="text-[11px] text-[var(--text-muted)]">
                  {member.role}
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <p className="text-[11px] text-[var(--text-muted)] leading-relaxed">
              {member.responsibility}
            </p>
          </article>
        ))}
      </section>

      {/* Outro */}
      <section className="mt-12 fade-up delay-600">
        <p className="text-xs text-[var(--text-muted)] max-w-3xl">
          Project-M is supported by a wider ecosystem of engineers, designers, 
          installers and partners who contribute to transforming offline 
          automation into a global standard.
        </p>
      </section>
    </div>
  );
};

export default Team;
