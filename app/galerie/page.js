"use client";
import React, { useState } from 'react';

export default function GaleriePage() {
  const [filter, setFilter] = useState('all');

  // Liste des photos avec catégories
  const photos = [
    { id: 1, src: "/g1.jpg", title: "Entrée du Campus", cat: "campus" },
    { id: 2, src: "/g2.jpg", title: "Laboratoire de Santé", cat: "cours" },
    { id: 3, src: "/g3.jpg", title: "Atelier Mécanique", cat: "cours" },
    { id: 4, src: "/g4.jpg", title: "Étudiants en Groupe", cat: "vie" },
    { id: 5, src: "/g5.jpg", title: "Remise de Diplômes", cat: "evenement" },
    { id: 6, src: "/g6.jpg", title: "Salle d'Informatique", cat: "campus" },
    { id: 7, src: "/g7.jpg", title: "Conférence de Presse", cat: "evenement" },
    { id: 8, src: "/g8.jpg", title: "Pratique Infirmerie", cat: "cours" },
  ];

  const categories = [
    { id: 'all', label: 'Tout voir' },
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
      {/* Header */}
      <header className="bg-slate-900 py-20 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Notre Galerie</h1>
        <p className="text-slate-400 max-w-2xl mx-auto italic">
          Immersion au cœur du Groupe Valérien Éducation : infrastructures, vie académique et moments forts à Obala.
        </p>
      </header>

      {/* Filtres */}
      <section className="max-w-7xl mx-auto py-10 px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all shadow-sm ${
                filter === cat.id 
                ? 'bg-blue-900 text-white scale-110 shadow-lg' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grille de Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="group relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[4/5] cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-2"
            >
              <img 
                src={photo.src} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-blue-300 text-[10px] font-black uppercase tracking-widest mb-1">
                  {categories.find(c => c.id === photo.cat)?.label}
                </span>
                <h3 className="text-white font-bold text-lg leading-tight">
                  {photo.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Message si vide */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 font-medium">Aucune photo dans cette catégorie pour le moment.</p>
          </div>
        )}
      </section>

      {/* Section Instagram / Social CTA */}
      <section className="bg-blue-50 py-16 text-center px-6">
        <h2 className="text-2xl font-black text-blue-900 mb-4">Suivez-nous au quotidien</h2>
        <p className="text-slate-600 mb-8">Retrouvez plus de photos et vidéos sur nos réseaux sociaux.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="bg-white p-4 rounded-2xl shadow-md hover:text-blue-600 transition">Facebook</a>
          <a href="#" className="bg-white p-4 rounded-2xl shadow-md hover:text-pink-600 transition">Instagram</a>
          <a href="#" className="bg-white p-4 rounded-2xl shadow-md hover:text-red-600 transition">YouTube</a>
        </div>
      </section>
    </main>
  );
}