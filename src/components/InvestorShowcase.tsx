import { FC } from "react";

interface Investor {
  name: string;
  role: string;
  story: string;
}

const people: Investor[] = [
  {
    name: "Pratap",
    role: "Early Supporter",
    story:
      "Believed in the vision when it was still an idea. His encouragement helped maintain conviction during the earliest phase.",
  },
  {
    name: "Ramana Reddy",
    role: "Investor",
    story:
      "Provided guidance during critical decisions and helped shape long-term thinking around sustainable business building.",
  },
  {
    name: "Shahanaaz Shaik",
    role: "Investor",
    story:
      "Backed execution capability and trusted the process before tangible results were visible.",
  },
  {
    name: "Vijayawada Akka",
    role: "Advisor",
    story:
      "Influenced discipline, responsibility, and leadership during key transition phases.",
  },
  {
    name: "Trijan Dad",
    role: "Well-wisher",
    story:
      "Consistently encouraged bigger thinking while reinforcing execution discipline.",
  },
  {
    name: "Shiva Anna",
    role: "Supporter",
    story:
      "Stood by the journey and reinforced confidence during challenging periods.",
  },
  {
    name: "Aunty",
    role: "Early Believer",
    story:
      "Recognized potential early and motivated progress with patience and clarity.",
  },
  {
    name: "Reddy",
    role: "Mentor",
    story:
      "Shared insights that accelerated maturity as a business owner and decision-maker.",
  },
];

const InvestorShowcase: FC = () => {
  return (
    <section className="bg-black text-white py-28 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            People Who Believed in the Journey
          </h2>
          <p className="text-zinc-400 text-lg">
            Companies are not built in isolation. These individuals supported,
            guided, and believed in the vision across different phases of
            Project-M.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {people.map((p, i) => (
            <div
              key={i}
              className="group border border-zinc-800 rounded-2xl p-6 hover:border-red-600 transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-red-500 font-semibold text-lg mb-4">
                {p.name.charAt(0)}
              </div>

              {/* Info */}
              <h3 className="text-lg font-medium">{p.name}</h3>
              <p className="text-sm text-zinc-500 mb-3">{p.role}</p>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {p.story}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorShowcase;