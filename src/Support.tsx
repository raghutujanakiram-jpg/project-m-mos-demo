import React, { useState } from "react";

const Support: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    issueType: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitTicket = async () => {
    await fetch("/api/support/tickets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Your support request has been submitted.");
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-2xl font-semibold mb-3">Support</h1>
      <p className="text-sm opacity-80 mb-6">Raise issues or queries related to Project-M and M-OS.</p>

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
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
        />

        <select
          className="bg-black/40 border border-white/10 rounded-xl p-3 text-sm"
          name="issueType"
          value={form.issueType}
          onChange={handleChange}
        >
          <option value="">Select issue type</option>
          <option value="app">App / UX Issue</option>
          <option value="device">Device Installation</option>
          <option value="network">Network/Offline Mode</option>
          <option value="automation">Automation Not Triggering</option>
        </select>

        <textarea
          className="bg-black/40 border border-white/10 rounded-xl p-3 text-sm min-h-[120px]"
          name="description"
          placeholder="Describe your issue"
          value={form.description}
          onChange={handleChange}
        />

        <button
          onClick={submitTicket}
          className="px-4 py-3 rounded-xl bg-[var(--mos-red)] text-black text-sm font-semibold"
        >
          Submit Ticket
        </button>
      </div>
    </div>
  );
};

export default Support;
