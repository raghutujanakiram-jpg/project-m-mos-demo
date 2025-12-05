import React, { useState } from "react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitLead = async () => {
    await fetch("/api/leads/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Thank you! Our Project-M team will connect with you shortly.");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold mb-3">Contact us</h1>
      <p className="text-sm opacity-80 mb-6">
        Share your project requirements and our experts will tailor a Project-M solution.
      </p>

      <div className="flex flex-col gap-4">

        <input
          className="bg-black/40 border border-white/10 rounded-xl p-3 text-sm"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          className="bg-black/40 border border-white/10 rounded-xl p-3 text-sm"
          name="phone"
          placeholder="Phone number"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          className="bg-black/40 border border-white/10 rounded-xl p-3 text-sm"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
        />

        <select
          className="bg-black/40 border border-white/10 rounded-xl p-3 text-sm"
          name="propertyType"
          value={form.propertyType}
          onChange={handleChange}
        >
          <option value="">Property type</option>
          <option value="apartment">Apartment</option>
          <option value="villa">Villa</option>
          <option value="commercial">Commercial</option>
          <option value="hotel">Hotel / Resort</option>
        </select>

        <textarea
          className="bg-black/40 border border-white/10 rounded-xl p-3 text-sm min-h-[120px]"
          name="message"
          placeholder="Tell us about your project"
          value={form.message}
          onChange={handleChange}
        />

        <button
          onClick={submitLead}
          className="px-4 py-3 rounded-xl bg-[var(--mos-red)] text-black text-sm font-semibold"
        >
          Send Inquiry
        </button>

      </div>
    </div>
  );
};

export default Contact;
