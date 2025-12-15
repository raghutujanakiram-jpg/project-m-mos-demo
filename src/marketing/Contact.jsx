import React from "react";

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 pb-20">
      <div className="pt-12 pb-6 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          Contact Project-M
        </h1>
        <p className="text-sm text-[var(--text-muted,#9ca3af)]">
          Share your requirement and our team will get back with the right
          approach for your home, villa or project.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-black/40 p-6 max-w-xl">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            className="bg-black/60 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            className="bg-black/60 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none"
          />
          <textarea
            placeholder="Tell us about your project"
            rows="4"
            className="bg-black/60 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none"
          />
          <button
            type="submit"
            className="self-start px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition"
          >
            Send request
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;