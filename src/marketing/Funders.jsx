import React from "react";

const Team = () => {
  const members = [
    {
      name: "Puvvada Sivarama Prasad",
      role: "Core Support & Organizational Pillar",
      bio: "The man who supported the company through every situation. A constant pillar of strength, reliability, and commitment across all phases of Project-M’s journey.",
      avatar: "/images/team/Sivaramaprasad.jpg",
    },
    {
      name: "Padmavathi",
      role: "Foundational Pillar",
      bio: "A guiding force behind Project-M’s values and culture. Her stability, clarity and support ensure the team operates with purpose, empathy and long-term vision.",
      avatar: "/images/team/Padmavathi.jpg",
    },
    {
      name: "Uneeth Reddy Arumalla",
      role: "Founder & CEO",
      bio: "Architects the future of Project-M and M-OS. Leads innovation across hardware, software and ecosystem partnerships while shaping the brand’s strategic and technological roadmap.",
      avatar: "/images/team/uneeth.jpg",
    },
    {
      name: "Janakiram Raghutu",
      role: "Program Director – Project-M",
      bio: "Drives end-to-end execution across engineering, experience design, installation frameworks and customer success. Ensures seamless integration between product, process and on-ground delivery.",
      avatar: "/images/team/Janakiram.jpg",
    },
    {
      name: "Trijan Kumar Puvvada",
      role: "Co-Founder & Head of Systems Engineering",
      bio: "Leads the technical backbone of Project-M. Specializes in hardware logic, protocol engineering and system stability to ensure true offline automation at scale.",
      avatar: "/images/team/Trijan.jpg",
    },
    {
      name: "Nandana Arumalla",
      role: "Creative Innovator",
      bio: "Brings fresh imagination to the Project-M experience. Inspires visual identity, interface aesthetics and the emotional design language that defines the brand's premium personality.",
      avatar: "/images/team/Nandana.jpg",
    },
    {
      name: "Shaanvi Arumalla",
      role: "Junior Visionary & UX Muse",
      bio: "A young creative mind whose curiosity and intuitive interactions influence the simplicity and accessibility principles behind M-OS and Project-M interface design.",
      avatar: "/images/team/Shaanvi.jpg",
    },

    /* ===== Newly Added Team Members ===== */

    {
      name: "Girish Reddy Gorla",
      role: "Social Media & Digital Presence",
      bio: "Leads Project-M’s social media presence and digital outreach, shaping how the brand communicates, connects, and builds awareness across platforms.",
      avatar: "/images/team/Girish.jpg",
    },
    {
      name: "Gopi Krishna Reddy Byreddy",
      role: "Sales Head",
      bio: "Heads sales strategy and business development, driving partnerships, customer acquisition, and revenue growth for Project-M.",
      avatar: "/images/team/GopiKrishna.jpg",
    },
    
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <section className="pt-12 pb-6">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
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
              className="h-14 w-14 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="text-sm font-semibold">{m.name}</div>
              <div className="text-[11px] text-[var(--mos-red,#ff0033)] mb-1">
                {m.role}
              </div>
              <div className="text-xs text-[var(--text-muted,#9ca3af)]">
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
import React from "react";

const funders = [
  "Arthimalla Kanya Kumari",
  "Bogadhi Revanth Kumar",
  "Bommareddy Vamsi Mohan Reddy",
  "Byreddy Aruna Kumari",
  "Dhanekula Seshu Priya",
  "K V Ramana Reddy",
  "Kalapala Pratap",
  "Kasa Amulya",
  "Kesavarapu NVV Sathyanarayana",
  "Kotha Hari",
  "Kotha Savitri",
  "Kovi Nagamani",
  "Minna Ramesh",
  "Mutha Santhosh",
  "Raavi Dundeswari",
  "Shaik Reshma Begum",
  "Tirumala Sridevi",
  "Tiyyagura Siva Shankar Reddy",
  "Vutukuri Rakesh",
];

const supporters = [
  "Arthimalla Vijayanand",
  "B V Mallikarjun Reddy",
  "Bejjam Deepti",
  "Bogadhi Revan",
  "Byreddy Gopi Krishna Reddy",
  "Byreddy Ranga Reddy",
  "Cherukupally Pravallika Reddy",
  "Daggubati Alekhya",
  "Devarapu Srinivas",
  "Dhanekula Srinivas",
  "Gogineni Vinod Kumar",
  "Guntapalli Chandu",
  "Guraka Samala",
  "Jonnala Avinash Reddy",
  "Karnati Venkata Krishna",
  "Karuturi Ravi Teja",
  "Kesavarapu Sathish",
  "Kovi Ramurthi",
  "Murali M Ravi",
  "R Darakondal Rao",
  "Raavi Ram Mohan Rao",
  "Rajupalam Ramesh",
  "Vaddepalli Siva Nageswar Rao",
  "Vaddepalli Srinu Babu",
  "Yenuganti Uma Mahesh",
];

const Section = ({ title, list }) => (
  <section className="mb-12">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {list.map((name) => (
        <div
          key={name}
          className="rounded-2xl bg-black/40 border border-white/10 p-4 text-sm font-medium"
        >
          {name}
        </div>
      ))}
    </div>
  </section>
);

const Funders = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-10 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          Funders & Supporters
        </h1>
        <p className="text-sm text-[var(--text-muted,#9ca3af)]">
          Project-M is built on trust. These individuals believed early, supported
          consistently, and stood behind the journey.
        </p>
      </header>

      <Section title="Funders" list={funders} />
      <Section title="Supporters" list={supporters} />
    </div>
  );
};

export default Funders;
