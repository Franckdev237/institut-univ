import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* LOGO */}
      <a href="/" className="flex items-center space-x-3 group">
        <img 
          src="/logo.png" // Utilise ton image locale
          alt="Logo Groupe Valérien" 
          className="w-12 h-12 object-contain transition group-hover:scale-110" 
        />
        <div className="flex flex-col">
          <span className="text-xl font-bold text-blue-900 leading-none">GROUPE VALÉRIEN ÉDUCATION</span>
          <span className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase">Excellence Académique</span>
        </div>
      </a>

      {/* Menu de Navigation Desktop */}
      <div className="hidden md:flex space-x-5 items-center font-semibold text-gray-600">
        <a href="/" className="hover:text-blue-800 transition px-2 py-1 border-b-2 border-transparent hover:border-blue-800">
          Accueil
        </a>
        <a href="/sante" className="hover:text-emerald-600 transition px-2 py-1 border-b-2 border-transparent hover:border-emerald-600">
          École de Santé
        </a>
        <a href="/polytechnique" className="hover:text-orange-600 transition px-2 py-1 border-b-2 border-transparent hover:border-orange-600">
          École d'Ingénieurie
        </a>
        <a href="/gestion" className="hover:text-purple-600 transition px-2 py-1 border-b-2 border-transparent hover:border-purple-600">
          École de Communication
        </a>
        <a href="/contact" className="hover:text-blue-900 transition px-2 py-1 border-b-2 border-transparent hover:border-blue-900">
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