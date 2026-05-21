import React from 'react';

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 no-print font-sans">
      {/* 📢 1. BANDEAU BREAKING NEWS */}
      <div className="bg-blue-900 text-white py-2 overflow-hidden flex items-center border-b border-white/10 shadow-sm">
        <div className="bg-red-600 px-4 py-0.5 text-[10px] font-black uppercase italic tracking-widest animate-pulse shrink-0 ml-4 rounded-full shadow-inner">
          Flash Info
        </div>
        <div className="relative flex overflow-x-hidden font-bold text-[11px] uppercase tracking-wider">
          <div className="animate-marquee whitespace-nowrap py-1">
            <span className="mx-6">🚀 Inscriptions ouvertes 2025-2026 à Obala</span>
            <span className="mx-6 text-blue-400">•</span>
            <span className="mx-6">🎓 Nouveaux BTS Communication & Santé</span>
            <span className="mx-6 text-blue-400">•</span>
            <span className="mx-6">📅 Journée portes du 11 main veuillez vivre les moments forts sur Valérien Education TV</span>
            <span className="mx-6 text-blue-400">•</span>
          </div>
        </div>
      </div>

      {/* 🏛️ 2. NAVBAR PRINCIPALE - Effet de Verre (Glassmorphism) */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100 p-3 flex justify-between items-center px-6 md:px-10">
        
        {/* LOGO / NOM DU GROUPE */}
        <a href="/" className="flex items-center shrink-0 group">
          <div className="flex flex-col border-l-4 border-blue-900 pl-3">
            <span className="text-[14px] md:text-[18px] font-black text-blue-950 leading-none tracking-tighter uppercase group-hover:text-blue-700 transition-colors">
              Groupe Valérien
            </span>
            <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase mt-1">
              Éducation
            </span>
          </div>
        </a>

        {/* MENU CENTRAL - Avec Valérien TV mis en avant au premier regard */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-7 font-bold text-slate-700 text-[11px] uppercase tracking-widest">
           <a href="/" className="text-blue-600 relative after:content-[''] after:absolute after:w-full after:scale-x-100 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-blue-600 after:transition-transform">
             Accueil
           </a>
           
           {/* 🎬 BOUTON VALÉRIEN TV ACCROCHEUR */}
           <a 
             href="/valerien-education-tv" 
             className="bg-orange-50 text-orange-600 hover:bg-orange-100 hover:text-orange-700 px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-all animate-pulse border border-orange-200/60 shadow-sm"
           >
             <span>🎥 Valérien TV</span>
             <span className="w-2 h-2 rounded-full bg-red-500 shadow-sm"></span>
           </a>

           <span className="text-slate-200 font-light">|</span>
           
           <a href="/a-propos" className="hover:text-blue-700 transition-colors relative group">
             À Propos
             <span className="absolute w-0 h-0.5 bg-blue-700 bottom-[-4px] left-0 group-hover:w-full transition-all duration-300"></span>
           </a>
           
           <a href="/sante" className="hover:text-blue-700 transition-colors relative group">
             Santé
             <span className="absolute w-0 h-0.5 bg-blue-700 bottom-[-4px] left-0 group-hover:w-full transition-all duration-300"></span>
           </a>
           
           <a href="/polytechnique" className="hover:text-blue-700 transition-colors relative group">
             Ingénierie
             <span className="absolute w-0 h-0.5 bg-blue-700 bottom-[-4px] left-0 group-hover:w-full transition-all duration-300"></span>
           </a>
           
           <a href="/gestion" className="hover:text-blue-700 transition-colors relative group">
             Communication
             <span className="absolute w-0 h-0.5 bg-blue-700 bottom-[-4px] left-0 group-hover:w-full transition-all duration-300"></span>
           </a>
           
           <a href="/galerie" className="hover:text-blue-700 transition-colors relative group">
             Galerie
             <span className="absolute w-0 h-0.5 bg-blue-700 bottom-[-4px] left-0 group-hover:w-full transition-all duration-300"></span>
           </a>
           
           <a href="/contact" className="hover:text-blue-700 transition-colors relative group">
             Contact
             <span className="absolute w-0 h-0.5 bg-blue-700 bottom-[-4px] left-0 group-hover:w-full transition-all duration-300"></span>
           </a>
        </div>

        {/* 🔘 3. ZONE BOUTONS - Actions Rapides */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="/preinscription" 
            className="hidden sm:inline-flex items-center justify-center border-2 border-slate-200 text-slate-700 px-5 py-2 rounded-xl font-bold text-[10px] uppercase hover:bg-slate-50 hover:border-blue-900 hover:text-blue-900 transition-all"
          >
            Préinscription
          </a>

          <a 
            href="/admissions" 
            className="bg-blue-900 text-white px-6 py-2.5 rounded-xl font-black text-[10px] uppercase shadow-md hover:bg-blue-800 hover:shadow-blue-900/20 transition-all transform active:scale-95 flex items-center gap-2"
          >
            S'inscrire <span className="text-blue-300">→</span>
          </a>
        </div>
      </nav>
    </div>
  );
}