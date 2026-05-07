"use client";
import React, { useState } from 'react';

export default function GaleriePage() {
  const [filter, setFilter] = useState('all');

  // Liste nettoyée : sections vides supprimées
  const photos = [
    { id: 9, src: "/Flyers-01.jpg", title: "Filières Santé (ISSAT-MVO)", cat: "offres" },
    { id: 10, src: "/Flyers-02.jpg", title: "Polytechnique & Ingénierie", cat: "offres" },
    { id: 11, src: "/Flyers-03.jpg", title: "Communication & Gestion", cat: "offres" },
    { id: 1, src: "/g1.jpg", title: "Entrée du Campus", cat: "campus" },
    { id: 2, src: "/g2.jpg", title: "Laboratoire de Santé", cat: "cours" },
    { id: 4, src: "/g4.jpg", title: "Étudiants en Groupe", cat: "vie" },
    { id: 5, src: "/g5.jpg", title: "Remise de Diplômes", cat: "evenement" },
    { id: 8, src: "/g8.jpg", title: "Pratique Infirmerie", cat: "cours" },
  ];

  const categories = [
    { id: 'all', label: 'Tout voir' },
    { id: 'offres', label: 'Offres & Formations' },
    { id: 'campus', label: 'Le Campus' },
    { id: 'cours', label: 'Cours & Pratique' },
    { id: 'vie', label: 'Vie Étudiante' },
    { id: 'evenement', label: 'Événements' },
  ];

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(p => p.cat === filter);

  return (
    <main className="min-h-screen bg-white">
      {/* Header Premium */}
      <header className="bg-slate-900 py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <h1 className="relative z-10 text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">
          IMMERSION <span className="text-blue-500">GROUPE VALÉRIEN EDUCATION</span>
        </h1>
        <p className="relative z-10 text-slate-400 max-w-2xl mx-auto font-light text-lg">
          Explorez l'excellence académique à travers les infrastructures de notre campus d'Obala.
        </p>
      </header>

      {/* Filtres de navigation */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-8 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all duration-300 ${
                filter === cat.id 
                ? 'bg-blue-900 text-white shadow-2xl shadow-blue-900/40 scale-105' 
                : 'bg-slate-50 text-slate-500 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille de Photos Optimisée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className={`group relative overflow-hidden rounded-[2.5rem] bg-slate-200 aspect-[4/5] cursor-pointer shadow-xl transition-all duration-700 hover:-translate-y-3 ${photo.cat === 'offres' ? 'ring-4 ring-blue-50' : ''}`}
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Badge "Nouveau" pour les Flyers d'offres */}
              {photo.cat === 'offres' && (
                <div className="absolute top-6 right-6 z-10 bg-blue-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-tighter">
                  Offre 2025
                </div>
              )}
              
              {/* Overlay d'information au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-[9px] font-black uppercase tracking-[0.3em] mb-2">
                  {categories.find(c => c.id === photo.cat)?.label}
                </span>
                <h3 className="text-white font-black text-xl leading-tight uppercase italic tracking-tighter">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* État vide sécurisé */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200">
            <div className="text-4xl mb-4">📷</div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Bientôt de nouvelles images disponibles</p>
          </div>
        )}
      </section>

      {/* Section CTA Finale */}
      <section className="bg-slate-900 py-24 text-center px-6 rounded-t-[4rem]">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic tracking-tighter">Prêt à nous rejoindre ?</h2>
        <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg font-light">Inscrivez-vous dès maintenant pour garantir votre place au sein du Groupe Valérien.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="https://wa.me/237655209877" className="bg-emerald-600 text-white font-black px-10 py-5 rounded-2xl shadow-2xl hover:bg-emerald-700 transition-all transform hover:scale-105 uppercase text-xs tracking-widest">
            Discuter sur WhatsApp
          </a>
          <a href="/admissions" className="bg-blue-600 text-white font-black px-10 py-5 rounded-2xl shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-105 uppercase text-xs tracking-widest">
            S'inscrire en ligne
          </a>
        </div>
      </section>
    </main>
  );
}