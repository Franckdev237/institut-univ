import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 no-print">
      {/* 📢 1. BANDEAU BREAKING NEWS GVE */}
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
          {/* Boucle infinie */}
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

      {/* 🏛️ 2. NAVBAR PRINCIPALE */}
      <nav className="bg-white/95 backdrop-blur-md shadow-md p-4 flex justify-between items-center px-6">
        
        {/* LOGO & NOM */}
        <a href="/" className="flex items-center space-x-3 shrink-0">
          <img src="/logo.png" alt="Logo GVE" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-lg font-black text-blue-900 leading-none tracking-tighter">GROUPE VALERIEN ETUDIANT OBALA</span>
          </div>
        </a>

        {/* MENU CENTRAL (Desktop) */}
        <div className="hidden lg:flex items-center space-x-5 font-bold text-slate-600 text-[12px] uppercase tracking-tighter">
           <a href="/" className="text-blue-600 border-b-2 border-blue-600 pb-1">Accueil</a>
           <a href="/a-propos" className="hover:text-blue-900 transition-colors">À Propos</a>
           
           <span className="text-slate-200">|</span>

           <a href="/sante" className="hover:text-blue-900 transition-colors">Santé</a>
           <a href="/polytechnique" className="hover:text-blue-900 transition-colors">Ingénierie</a>
           <a href="/gestion" className="hover:text-blue-900 transition-colors">Communication</a>
           <a href="/galerie" className="hover:text-blue-900 transition-colors">Galerie</a>
           <a href="/contact" className="hover:text-blue-900 transition-colors">Contact</a>
        </div>

        {/* 🔘 3. ZONE BOUTONS (Action Rapide) */}
        <div className="flex items-center gap-3">
          {/* Bouton Scolarité (Discret) */}
          <a href="/scolarite" className="hidden xl:block text-blue-700 bg-blue-50 px-3 py-2 rounded-xl border border-blue-100 font-black text-[10px] uppercase">
            🎓 Scolarité
          </a>

          {/* BOUTON PRÉINSCRIPTION (Secondaire - Outline) */}
          <a 
            href="/preinscription" 
            className="hidden sm:block border-2 border-blue-800 text-blue-800 px-4 py-2 rounded-full font-black text-[11px] uppercase hover:bg-blue-800 hover:text-white transition-all transform active:scale-95 shadow-sm"
          >
            Préinscription
          </a>

          {/* BOUTON S'INSCRIRE (Principal - Plein) */}
          <a 
            href="/admissions" 
            className="bg-blue-800 text-white px-5 py-2.5 rounded-full font-black text-[11px] uppercase shadow-lg hover:bg-slate-900 transition-all transform active:scale-95"
          >
            S'inscrire
          </a>
        </div>
      </nav>
    </div>
  );
}