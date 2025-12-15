import React from "react";

/* ==================== DATA ==================== */

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
  "Minna Ramesh",
  "Mutha Santhosh",
  "Raavi Dundeswari",
  "Shaik Reshma Begum",
  "Tirumala Sridevi",
  "Tiyyagura Siva Shankar Reddy",
  "Tiyyagura Sridevi",
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

/* ==================== PAGE ==================== */

const Investors = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-24">

      {/* ===== Funders ===== */}
      <SectionHeader
        title="Funders"
        description="Individuals who backed Project-M early with trust, conviction, and financial support — enabling long-term thinking and disciplined execution."
      />

      <CardGrid list={funders} />

      {/* ===== Supporters ===== */}
      <div className="mt-16">
        <SectionHeader
          title="Supporters"
          description="People who stood behind the journey with guidance, encouragement, and belief during different phases of growth."
        />

        <CardGrid list={supporters} muted />
      </div>

    </section>
  );
};

export default Investors;

/* ==================== SHARED COMPONENTS ==================== */

const SectionHeader = ({ title, description }) => (
  <div className="pt-12 pb-6 max-w-3xl">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
      {title}
    </h2>
    <p className="text-sm text-[var(--text-muted,#9ca3af)]">
      {description}
    </p>
  </div>
);

const CardGrid = ({ list, muted = false }) => (
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
    {list.map((name, index) => (
      <div
        key={`${name}-${index}`}
        className={`rounded-3xl p-4 flex items-center gap-3 border
          ${muted
            ? "bg-black/30 border-white/5"
            : "bg-black/40 border-white/10"
          }`}
      >
        <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">
          {name.charAt(0)}
        </div>
        <div className="text-sm font-medium">{name}</div>
      </div>
    ))}
  </div>
);