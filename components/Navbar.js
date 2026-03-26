import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 no-print font-sans">
      {/* 📢 1. BANDEAU BREAKING NEWS */}
      <div className="bg-blue-900 text-white py-1.5 overflow-hidden flex items-center border-b border-white/10">
        <div className="bg-red-600 px-3 py-0.5 text-[9px] font-black uppercase italic tracking-tighter animate-pulse shrink-0 ml-4 rounded">
          Breaking News
        </div>
        <div className="relative flex overflow-x-hidden font-medium text-xs">
          <div className="animate-marquee whitespace-nowrap py-1">
            <span className="mx-4">🚀 Inscriptions ouvertes 2025-2026 à Obala</span>
            <span className="mx-4">|</span>
            <span className="mx-4">🎓 Nouveaux BTS Communication & Santé</span>
            <span className="mx-4">|</span>
          </div>
        </div>
      </div>

      {/* 🏛️ 2. NAVBAR PRINCIPALE */}
      <nav className="bg-white shadow-md p-2 flex justify-between items-center px-4 md:px-6">
        
        {/* LOGO & NOM (Sur 2 lignes pour gagner de la place) */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Logo GVE" className="w-9 h-9 object-contain" />
          <div className="flex flex-col">
            <span className="text-[12px] md:text-[14px] font-black text-blue-900 leading-[1.1] tracking-tighter uppercase">
              Groupe Valerien<br/>Etudiant Obala
            </span>
          </div>
        </a>

        {/* MENU CENTRAL (Compact pour éviter le débordement) */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 font-bold text-slate-600 text-[10px] xl:text-[11px] uppercase tracking-tighter">
           <a href="/" className="text-blue-600 border-b-2 border-blue-600 pb-1">Accueil</a>
           
           <a href="/a-propos" className="hover:text-blue-900 transition-colors leading-tight text-center">
            À<br/>PROPOS
           </a>
           
           <span className="text-slate-200">|</span>

           <a href="/sante" className="hover:text-blue-900 transition-colors">Santé</a>
           <a href="/polytechnique" className="hover:text-blue-900 transition-colors">Ingénierie</a>
           <a href="/gestion" className="hover:text-blue-900 transition-colors text-center">Commu-<br/>nication</a>
           <a href="/galerie" className="hover:text-blue-900 transition-colors">Galerie</a>
           <a href="/contact" className="hover:text-blue-900 transition-colors">Contact</a>
        </div>

        {/* 🔘 3. ZONE BOUTONS (Action Rapide) */}
        <div className="flex items-center gap-2 shrink-0">
          
          {/* Badge Scolarité (Style icône + texte) */}
          <a href="/scolarite" className="hidden xl:flex flex-col items-center justify-center bg-blue-50 px-2 py-1 rounded-lg border border-blue-100 hover:bg-blue-100 transition-all">
            <span className="text-[12px]">🎓</span>
            <span className="text-[8px] font-black text-blue-800 uppercase leading-none">Scolarité</span>
          </a>

          {/* PRÉINSCRIPTION (Contour Bleu) */}
          <a 
            href="/preinscription" 
            className="hidden sm:block border-2 border-blue-800 text-blue-800 px-3 py-2 rounded-full font-black text-[10px] uppercase hover:bg-blue-800 hover:text-white transition-all transform active:scale-95"
          >
            Préinscription
          </a>

          {/* S'INSCRIRE (Plein Bleu) */}
          <a 
            href="/admissions" 
            className="bg-blue-800 text-white px-4 py-2.5 rounded-full font-black text-[10px] uppercase shadow-lg hover:bg-blue-900 transition-all transform active:scale-95"
          >
            S'inscrire
          </a>
        </div>
      </nav>
    </div>
  );
}