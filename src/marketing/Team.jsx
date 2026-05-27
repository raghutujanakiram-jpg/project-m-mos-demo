import React from "react";

const Team = () => {
  const members = [
    {
      name: "Uneeth Reddy Arumalla",
      role: "Founder & CEO",
      bio: "An Indian entrepreneur, spatial designer, and technology executive pioneering the convergence of high-end structural design and localized software systems. As the founding visionary behind Project-M and its proprietary operating system, M-OS, he drives enterprise-level, edge-AI automation strategies. He spearheads the development of Project-M's offline-first smart home hub integrated with 'Chinna', a fully localized, on-device private AI assistant. Based in Guntur, Andhra Pradesh, his diverse background includes founding Tints and Wood Interio—a premium regional brand specializing in sustainable timber architecture—and an early Tollywood independent media career producing digital creative content under Forex Art Productions.",
      avatar: "/images/team/uneeth.jpg"
    },
    {
      name: "Ravi Bavaji Mastan Rao",
      role: "Co-Founder & CTO",
      bio: "A technology architect and entrepreneur dedicated to democratizing artificial intelligence for grassroots economic growth. Formerly a full-stack software engineer in Hyderabad's IT hub, he serves as the foundational technical force driving Project-M. He specializes in designing proprietary AI routing networks that orchestrate thousands of specialized, domain-specific LLMs for high-speed localized processing. His deep technical portfolio includes architecting a healthcare application backed by a US healthcare enterprise and engineering a comprehensive library of over 500 self-sustaining SaaS products. He also drives the engines behind the UNA Digital Ecosystem, delivering 'Business-in-a-Box' storefronts to rapidly digitize Indian MSMEs.",
      avatar: "/images/team/bro.jpg"
    },
    {
      name: "Janakiram Raghutu",
      role: "Program Director",
      bio: "A Global Enterprise Architect, Product Manager, and Corporate Governance Consultant with over 15 years of cross-border execution experience across 26 countries, including India, Germany, and the UK. A 'T-Shaped Visionary', he bridges complex, low-level telephony and embedded hardware with modern enterprise software layers. His robust directorial portfolio (DIN: 07826924) spans infrastructure companies like Proautodial Telephony Services, alongside managing massive IT environments scaling up to 7 Dual-Port PRI lines, parallel routing, and custom IVRs for over 12,000 corporate endpoints. He simultaneously commands international product roles, managing high-stakes European RFPs and deploying enterprise applications for major German clients.",
      avatar: "/images/team/Janakiram.jpg"
    }, 
    {
      name: "Trijan Kumar Puvvada",
      role: "Co-Founder & Head of Systems Engineering",
      bio: "Serves as the rigorous technical backbone of Project-M's hardware infrastructure. Specializing in advanced hardware logic, embedded protocol engineering, and low-level system stability, he commands the architectural frameworks required to achieve true offline automation at scale. His expertise bridges physical semiconductor mechanics with real-time operational reliability, eliminating cloud-dependent latency. By optimizing device-to-device communication layers, he ensures that Project-M's localized ecosystem networks maintain fail-safe, hyper-secure performance across complex high-throughput environments.",
      avatar: "/images/team/Trijan.jpg"
    }, 
    {
      name: "Gopi Byreddy",
      role: "Creative Innovator",
      bio: "Brings precise creative vision and aesthetic mastery to the Project-M user experience. He masterminds the visual identity, digital-physical interface paradigms, and human-centric design frameworks that define the brand’s premium corporate personality. By synthesis of industrial tactile feedback and clean user interface aesthetics, he ensures complex edge-AI configurations translate into intuitive, frictionless touchpoints. His design philosophy aligns technological complexity with luxury ergonomics, elevating M-OS from a utility into an experiential workspace.",
      avatar: "/images/team/Gopikrishna.jpg"
    },
    {
      name: "Nagur Vali Shaik",
      role: "Marketing Head",
      bio: "Drives international growth, strategic outreach, and commercial market positioning for the Project-M ecosystem. He crafts the unified communications architecture and brand narratives necessary to scale cutting-edge offline automation solutions across consumer, corporate, and industrial landscapes. Specializing in data-driven growth marketing, regional partner acquisition, and product launch lifecycles, he bridges the gap between deep-tech engineering breakthroughs and mass-market ecosystem adoption, positioning M-OS as an industry standard.",
      avatar: "/images/team/vali.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <section className="pt-12 pb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2 text-white">
          The People Behind Project-M
        </h1>
        <p className="text-sm text-[var(--text-muted,#9ca3af)] max-w-3xl">
          Project-M is driven by passion, engineering excellence and a shared
          mission to redefine offline-first automation. These are the minds
          shaping that future.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        {members.map((m) => (
          <article
            key={m.name}
            className="rounded-3xl bg-black/40 border border-white/10 p-4 flex gap-3 items-start"
          >
            <img
              src={m.avatar}
              alt={m.name}
              className="h-14 w-14 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">{m.name}</div>
              <div className="text-[11px] text-[var(--mos-red,#ff0033)] mb-1 uppercase tracking-wider font-medium">
                {m.role}
              </div>
              <div className="text-xs text-[var(--text-muted,#9ca3af)] leading-relaxed">
                {m.bio}
              </div>
            </div>
          </article>
        ))}
      </section>

      <p className="mt-8 text-xs text-[var(--text-muted,#9ca3af)] max-w-4xl">
        Project-M is empowered by a broader ecosystem of engineers, designers,
        installers and partners working toward a unified offline-automation
        future.
      </p>
    </div>
  );
};

export default Team;
