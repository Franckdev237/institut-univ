import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* LOGO PRINCIPAL */}
      <a href="/" className="flex items-center space-x-3 group">
        <img 
          src="/logo.png" 
          alt="Logo Groupe Valérien" 
          className="w-12 h-12 object-contain transition group-hover:scale-110" 
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold text-blue-900 leading-none">GROUPE VALÉRIEN ÉDUCATION</span>
          <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase">Excellence Académique</span>
        </div>
      </a>

      {/* Menu de Navigation Desktop */}
      <div className="hidden md:flex space-x-3 items-center font-semibold text-gray-600 text-[13px]">
        
        {/* ACCUEIL & A PROPOS */}
        <div className="relative group px-2 py-1">
          <a href="/" className="hover:text-blue-800 transition">Accueil</a>
          {/* Sous-menu qui apparaît au survol */}
          <div className="absolute hidden group-hover:block bg-white shadow-xl rounded-lg mt-2 py-2 w-40 border border-slate-100 left-0">
            <a href="/a-propos" className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-800 text-sm">À propos de nous</a>
          </div>
        </div>

        {/* École de Santé */}
        <a href="/sante" className="hover:text-emerald-600 transition px-2 py-1 flex items-center gap-1 border-b-2 border-transparent hover:border-emerald-600">
          <img src="/sante-logo.png" alt="" className="w-4 h-4 object-contain" />
          <span>École de Santé</span>
        </a>

        {/* École d'Ingénierie */}
        <a href="/polytechnique" className="hover:text-orange-600 transition px-2 py-1 flex items-center gap-1 border-b-2 border-transparent hover:border-orange-600">
          <img src="/poly-logo.png" alt="" className="w-4 h-4 object-contain" />
          <span>École d'Ingénierie</span>
        </a>

        {/* École de Communication */}
        <a href="/gestion" className="hover:text-purple-600 transition px-2 py-1 border-b-2 border-transparent hover:border-purple-600">
          École de Communication
        </a>

        {/* NOUVEAU : GALERIE */}
        <a href="/galerie" className="hover:text-blue-900 transition px-2 py-1">
          Galerie
        </a>

        <a href="/contact" className="hover:text-blue-900 transition px-2 py-1">
          Contact
        </a>
      </div>

      {/* Bouton Inscription */}
      <div className="flex items-center">
        <a href="/admissions" className="bg-blue-800 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-700 transition shadow-md text-sm transform hover:scale-105 active:scale-95">
          S'inscrire
        </a>
      </div>
    </nav>
  );
}