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