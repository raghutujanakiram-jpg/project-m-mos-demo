import React from "react";

const Team = () => {
  const members = [
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
  name: "Kanthi Kiran Yadla",
        role: "Principal Consultant-Embedded Engineering",
      bio: "Responsibilities shift from day-to-day coding to technical leadership, system architecture, and strategic problem-solving for complex projects. They guide the long-term technical direction and mentor other engineers.",
      avatar: "/images/team/Kanthi.jpg",
    },

    {
      name: "Gopi Byreddy",
      role: "Creative Innovator",
      bio: "Brings fresh imagination to the Project-M experience. Inspires visual identity, interface aesthetics and the emotional design language that defines the brand's premium personality.",
      avatar: "/images/team/Gopikrishna.jpg",
    },
    
    {
      name: "Sháas",
      role: "Brand Promotor",
      bio: "A young creative mindset whose curiosity and intuitive interactions influence the simplicity and accessibility principles behind M-OS and Project-M interface design.",
      avatar: "/images/team/Shahanaj.jpg",
    },
    
    {
      name: "Nandana Arumalla",
      role: "Creative Innovator",
      bio: "Brings fresh imagination to the Project-M experience. Inspires visual identity, interface aesthetics and the emotional design language that defines the brand's premium personality.",
      avatar: "/images/team/Nandana.jpg",
    },
  {
      name: "Prakash Reddy Guraka",
      role: "Business Development Manager",
      bio: "Driving force of the company growth by finding new opportunities, building client networks, and creating strategic partnerships, focusing on early sales stages like lead generation and relationship building.",
      avatar: "/images/team/Prakash.jpg",
    },  
    
    {
      name: "Ullaganti Gopinath",
      role: "Account Manager",
      bio: "Responsible for nurturing existing customer relationships, ensuring satisfaction, and driving revenue growth by understanding client needs and coordinating internal teams to deliver solutions.",
      avatar: "/images/team/Gopi.jpg",
    },  
    
    {
      name: "Revanth Kumar Bogadhi",
      role: "Visionary Pillar",
      bio: "Every great venture needs a 'Day Zero' supporter. For Project-M, that person is Revanth. From our earliest milestones to our first business, Revanth’s belief never wavered. As we launch this new chapter in 2026, his mentorship remains our cornerstone. We aren't just a team; we are a foundation built on his enduring faith in our vision.",
      avatar: "/images/team/Revanth.jpg",
    },
    
    {
      name: "Shaanvi Arumalla",
      role: "Junior Visionary & UX Muse",
      bio: "A young creative mind whose curiosity and intuitive interactions influence the simplicity and accessibility principles behind M-OS and Project-M interface design.",
      avatar: "/images/team/Shaanvi.jpg",
    },
    
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
      name: "Pratap Kalapala",
      role: "Early Believer & Support Pillar",
      bio: "The man who supported the company in Early Stages. A constant pillar of strength, reliability, and commitment across all phases of Project-M’s journey.",
      avatar: "/images/team/Pratap.jpg",
    },  
    
    {
      name: "Ramana Reddy",
      role: "Early Believer & Support Pillar",
      bio: "The man who supported the company in Early Stages. A constant pillar of strength, reliability, and commitment across all phases of Project-M’s journey.",
      avatar: "/images/team/Ramana.jpg",
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
