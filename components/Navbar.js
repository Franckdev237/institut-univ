import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50">
      {/* 📢 BANDEAU BREAKING NEWS */}
      <div className="bg-blue-900 text-white py-2 overflow-hidden flex items-center border-b border-white/10">
        <div className="bg-red-600 px-4 py-1 text-[10px] font-black uppercase italic tracking-tighter animate-pulse shrink-0 ml-4 rounded">
          Breaking GVE News
        </div>
        <div className="relative flex overflow-x-hidden font-medium text-sm">
          <div className="animate-marquee whitespace-nowrap py-1">
            <span className="mx-4">🚀 Inscriptions ouvertes 2025-2026</span>
            <span className="mx-4">|</span>
            <span className="mx-4">🎓 Nouveaux BTS Communication & Santé</span>
            <span className="mx-4">|</span>
          </div>
        </div>
      </div>

      {/* NAVBAR PRINCIPALE */}
      <nav className="bg-white shadow-xl p-4 flex justify-between items-center">
        {/* LOGO */}
        <a href="/" className="flex items-center space-x-2 shrink-0">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-lg font-black text-blue-900 hidden sm:block">GVE OBALA</span>
        </a>

        {/* MENU DESKTOP (Vérifie bien cette partie) */}
        <div className="hidden lg:flex items-center space-x-6 font-bold text-slate-600 text-[13px]">
           {/* ACCUEIL - Mis en avant avec une icône */}
           <a href="/" className="flex items-center gap-1 text-blue-600 hover:text-blue-800 border-b-2 border-blue-600 pb-1">
             🏠 Accueil
           </a>
           
           <a href="/a-propos" className="hover:text-blue-900 transition-colors uppercase tracking-tighter">À Propos</a>
           
           {/* Séparateur discret */}
           <span className="text-slate-200">|</span>

           <a href="/sante" className="hover:text-blue-900 transition-colors uppercase tracking-tighter">Santé</a>
           <a href="/polytechnique" className="hover:text-blue-900 transition-colors uppercase tracking-tighter">Ingénierie</a>
           <a href="/gestion" className="hover:text-blue-900 transition-colors uppercase tracking-tighter">Communication</a>
           <a href="/galerie" className="hover:text-blue-900 transition-colors uppercase tracking-tighter">Galerie</a>
           <a href="/contact" className="hover:text-blue-900 transition-colors uppercase tracking-tighter">Contact</a>
        </div>

        {/* BOUTONS DROITE */}
        <div className="flex items-center gap-3">
          <a href="/scolarite" className="hidden md:block text-blue-700 bg-blue-50 px-4 py-2 rounded-full border border-blue-100 font-bold text-xs uppercase">
            🎓 Scolarité
          </a>
          <a href="/admissions" className="bg-blue-800 text-white px-5 py-2.5 rounded-full font-black text-xs uppercase shadow-lg hover:bg-slate-900 transition transform active:scale-95">
            S'inscrire
          </a>
        </div>
      </nav>
    </div>
  );
}