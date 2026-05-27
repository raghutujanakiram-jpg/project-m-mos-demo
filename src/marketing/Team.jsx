import React from "react";
import { motion } from "framer-motion";

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

  // Framer Motion Variants for Staggered Load
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 16 } 
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 text-white font-sans selection:bg-red-500/30">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pt-16 pb-12 text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
          The People Behind Project-M
        </h1>
        <p className="text-base md:text-lg text-neutral-400 max-w-3xl leading-relaxed">
          Project-M is driven by passion, engineering excellence, and a shared
          mission to redefine offline-first automation. These are the minds
          shaping that future.
        </p>
      </motion.section>

      {/* Team Grid */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {members.map((m) => (
          <motion.article
            key={m.name}
            variants={itemVariants}
            whileHover={{ 
              y: -6, 
              borderColor: "rgba(255, 0, 51, 0.35)",
              boxShadow: "0 12px 30px -10px rgba(0, 0, 0, 0.7), 0 0 15px -3px rgba(255, 0, 51, 0.15)"
            }}
            className="relative group rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-white/5 p-6 flex flex-col sm:flex-row gap-5 items-start transition-colors duration-300 hover:bg-neutral-900/60 overflow-hidden"
          >
            {/* Subtle Inner Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Enlarged Avatar Image Frame */}
            <div className="relative flex-shrink-0 mx-auto sm:mx-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--mos-red,#ff0033)] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-[2px]" />
              <img
                src={m.avatar}
                alt={m.name}
                className="h-20 w-20 rounded-full object-cover relative z-10 border border-white/10 group-hover:border-white/20 transition-all duration-300 shadow-lg"
              />
            </div>

            {/* Identity & Bio Contents */}
            <div className="flex-1 text-center sm:text-left relative z-10">
              <h2 className="text-base font-semibold tracking-wide text-neutral-100 group-hover:text-white transition-colors duration-200">
                {m.name}
              </h2>
              <div className="text-[11px] text-[var(--mos-red,#ff0033)] mb-3 uppercase tracking-widest font-bold">
                {m.role}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal text-justify sm:text-left group-hover:text-neutral-300 transition-colors duration-200">
                {m.bio}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.section>

      {/* Footer Meta Description */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 text-xs md:text-sm text-neutral-500 max-w-4xl border-t border-white/5 pt-6 leading-relaxed"
      >
        Project-M is empowered by a broader ecosystem of engineers, designers,
        installers, and partners working toward a unified offline-automation
        future.
      </motion.p>
    </div>
  );
};

export default Team;
