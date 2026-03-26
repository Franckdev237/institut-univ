import React from 'react';

export default function GaleriePage() {
  // Liste de tes photos de la galerie
  const photos = [
    { src: "/g1.jpg", title: "Inauguration" },
    { src: "/g2.jpg", title: "Laboratoire Informatique" },
    { src: "/g3.jpg", title: "Atelier Génie Civil" },
    { src: "/g4.jpg", title: "Cours de Santé" },
    { src: "/g5.jpg", title: "Étudiants en pause" },
    { src: "/g6.jpg", title: "Remise des diplômes" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-blue-900 mb-4 text-center">NOTRE GALERIE</h1>
        <p className="text-center text-slate-600 mb-16">Découvrez la vie au sein de l'institut et nos installations.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-video bg-white">
              <img src={p.src} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}