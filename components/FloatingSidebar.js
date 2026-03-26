import React from 'react';

export default function FloatingSidebar() {
  const socialLinks = [
    { label: "Partager", icon: "🌐", link: "#", color: "text-red-500" },
    { label: "Facebook", icon: "F", link: "#", color: "text-blue-700" },
    { label: "Instagram", icon: "I", link: "#", color: "text-pink-600" },
    { label: "WhatsApp", icon: "W", link: "https://wa.me/237655209877", color: "text-emerald-500" }
  ];

  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-[100] no-print">
      {/* 🔍 Bouton RECHERCHE (Tout en haut, fond noir) */}
      <button className="w-16 h-16 bg-[#333333] hover:bg-black text-white flex items-center justify-center text-3xl font-bold shadow-2xl transition group relative">
        <span>🔍</span>
        {/* Bulle info au survol */}
        <span className="absolute left-full ml-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Rechercher
        </span>
      </button>

      {/* 📱 Liste des Icônes RÉSEAUX SOCIAUX (Dessous, fond blanc) */}
      <div className="bg-white border-l border-b border-slate-200 shadow-2xl rounded-br-2xl">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.link}
            target={social.label !== "Partager" ? "_blank" : undefined}
            className={`w-16 h-16 flex items-center justify-center text-2xl font-black ${social.color} hover:bg-slate-50 transition border-t border-slate-100 group relative`}
          >
            <span>{social.icon}</span>
            {/* Bulle info au survol */}
            <span className="absolute left-full ml-4 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}