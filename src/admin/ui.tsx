import React from 'react';

export const input =
  'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003366]/30 focus:border-[#003366] bg-white';
export const btn =
  'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-bold bg-[#003366] text-white hover:bg-[#002244] disabled:opacity-50 disabled:cursor-not-allowed transition';
export const btnGhost =
  'inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-300 text-gray-700 hover:bg-gray-100 transition';
export const btnDanger =
  'inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold border border-red-200 text-red-600 hover:bg-red-50 transition';

export const Field = ({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1">{label}</span>
    {children}
    {hint && <span className="block text-xs text-gray-400 mt-1">{hint}</span>}
  </label>
);

export const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 md:p-6">
    <h2 className="text-lg font-bold text-[#003366] mb-4 font-serif">{title}</h2>
    {children}
  </section>
);

export const Msg = ({ text }: { text: string }) =>
  text ? (
    <p className={`text-sm mt-3 ${text.startsWith('✔') ? 'text-green-600' : 'text-red-600'}`}>{text}</p>
  ) : null;
