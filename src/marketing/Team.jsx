import React from "react";

const Team = () => {
  const members = [
    {
      {
    "name": "Uneeth Reddy Arumalla",
    "role": "Founder & CEO",
    "bio": "Architects the future of Project-M and M-OS. Leads innovation across hardware, software, and ecosystem partnerships while shaping the brand’s strategic and technological roadmap. A spatial designer and technology executive based in Guntur, Andhra Pradesh, his diverse career spans privacy-first edge-AI home automation, independent digital media under the creative banner Forex Art Productions, and bespoke interior architecture as the founder of Tints and Wood Interio. He pioneeringly brings a design-native approach to automation by embedding edge-AI systems directly into custom sustainable wood installations, leading the development of Project-M's offline-first smart home hub integrated with 'Chinna', a fully localized, on-device private AI assistant.",
    "avatar": "/images/team/uneeth.jpg"
  },
      
  {
    "name": "Mastan Sai",
    "role": "Co-Founder & CTO",
    "bio": "Serves as the foundational technical force driving the advanced technological architecture across Project-M frameworks. An Indian technology architect and entrepreneur from Guntur, he brings deep expertise in full-stack software application architecture and hyper-scale AI routing. Formerly a software engineer in Hyderabad's IT hub, his background features engineering a healthcare application funded by a US healthcare enterprise, alongside building a library of over 500 self-sustaining SaaS products. His current technical focus centers on democratizing AI for Indian MSMEs via the UNA Digital Ecosystem engines, designing proprietary multi-LLM routing networks for localized processing, and leading short-timeline tech incubation to train the next generation of AI developers.",
    "avatar": "/images/team/bro.jpg"
  },
      
  {
    "name": "Janakiram Raghutu",
    "role": "Program Director",
    "bio": "Directs high-level program tracks, corporate governance, and operational execution for Project-M initiatives. A Global Enterprise Architect, Product Manager, and Business Growth Consultant with over 15 years of cross-border execution experience across India, Germany, and the UK, he specializes in bridging complex, low-level telephony and embedded hardware layers with modern enterprise software. His career includes a robust directorial portfolio (DIN: 07826924) spanning entities like Proautodial Telephony Services, alongside managing large-scale, high-volume IT environments handling 7 Dual-Port PRI lines for over 12,000 corporate endpoints. He simultaneously commands international product management roles, driving enterprise deployments for major German clients and leading financial tech ecosystems.",
    "avatar": "/images/team/janakiram.jpg",
    }, 
    
    {
      name: "Trijan Kumar Puvvada",
      role: "Co-Founder & Head of Systems Engineering",
      bio: "Leads the technical backbone of Project-M. Specializes in hardware logic, protocol engineering and system stability to ensure true offline automation at scale.",
      avatar: "/images/team/Trijan.jpg",
    }, 

    {
      name: "Gopi Byreddy",
      role: "Creative Innovator",
      bio: "Brings fresh imagination to the Project-M experience. Inspires visual identity, interface aesthetics and the emotional design language that defines the brand's premium personality.",
      avatar: "/images/team/Gopikrishna.jpg",
    },
    
   {
      name: "Nagur Vali Shaik",
      role: "Marketing Head",
      bio: "Brings fresh imagination to the Project-M experience. Inspires visual identity, interface aesthetics and the emotional design language that defines the brand's premium personality.",
      avatar: "/images/team/vali.jpg",
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
