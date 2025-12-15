import React from "react";

export default function CTA({ title, subtitle, actionText }) {
  return (
    <div className="bg-gradient-to-r from-red-600/20 to-transparent border border-red-500/30 rounded-xl p-8 text-center">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">{subtitle}</p>
      <button className="mt-4 px-6 py-2 bg-red-600 rounded-md hover:bg-red-700">
        {actionText}
      </button>
    </div>
  );
}