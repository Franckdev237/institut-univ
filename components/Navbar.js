import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50">
      {/* 📢 BANDEAU BREAKING NEWS GVE */}
      <div className="bg-blue-900 text-white py-2 overflow-hidden flex items-center border-b border-white/10">
        <div className="bg-red-600 px-4 py-1 text-[10px] font-black uppercase italic tracking-tighter animate-pulse shrink-0 ml-4 rounded">
          Breaking GVE News
        </div>
        <div className="relative flex overflow-x-hidden font-medium text-sm">
          <div className="animate-marquee whitespace-nowrap py-1">
            <span className="mx-4">🚀 Inscriptions ouvertes pour l'année 2025-2026 à Obala</span>
            <span className="mx-4">|</span>
            <span className="mx-4">🎓 Nouveau cycle de BTS en Communication et Santé disponible</span>
            <span className="mx-4">|</span>
            <span className="mx-4">🏗️ Ouverture prochaine des nouveaux laboratoires de Polytechnique</span>
            <span className="mx-4">|</span>
          </div>
          {/* On double le texte pour l'effet de boucle infinie */}
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-1">
            <span className="mx-4">🚀 Inscriptions ouvertes pour l'année 2025-2026 à Obala</span>
            <span className="mx-4">|</span>
            <span className="mx-4">🎓 Nouveau cycle de BTS en Communication et Santé disponible</span>
            <span className="mx-4">|</span>
            <span className="mx-4">🏗️ Ouverture prochaine des nouveaux laboratoires de Polytechnique</span>
            <span className="mx-4">|</span>
          </div>
        </div>
      </div>

      {/* TA NAVBAR ACTUELLE (Légèrement ajustée pour coller au bandeau) */}
      <nav className="bg-white/95 backdrop-blur-md shadow-md p-4 flex justify-between items-center">
        {/* ... Ton code actuel du logo ... */}
        <a href="/" className="flex items-center space-x-3 group">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-blue-900 leading-none">GROUPE VALÉRIEN</span>
          </div>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex space-x-4 items-center font-semibold text-gray-600 text-[12px]">
           <a href="/" className="hover:text-blue-800">Accueil</a>
           <a href="/sante">Santé</a>
           <a href="/polytechnique">Ingénierie</a>
           <a href="/gestion">Communication</a>
           <a href="/scolarite" className="text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">🎓 Scolarité</a>
           <a href="/galerie">Galerie</a>
           <a href="/contact">Contact</a>
        </div>

        <a href="/admissions" className="bg-blue-800 text-white px-4 py-2 rounded-full font-bold text-xs">
          S'inscrire
        </a>
      </nav>
    </div>
  );
}