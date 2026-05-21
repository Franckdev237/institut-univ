import React from 'react';

export default function ValerienTvPage() {
  // Liste des vidéos de la chaîne
  const videos = [
    {
      id: "1",
      vimeoId: "1194330254", // Ton lien fonctionnel
      titre: "Grand Reportage : Les Journées d'Orientation Académique et Professionnelle",
      description: "Retour en images sur les temps forts des Journées d'Orientation. Découvrez les échanges enrichissants entre nos experts, les bacheliers et les professionnels venus guider la future génération de leaders à Obala.",
      categorie: "Événement"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-900 text-white pt-36 pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête de la page TV */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2.5 bg-orange-500/10 text-orange-400 font-black text-[10px] uppercase tracking-[0.4em] px-4 py-1.5 rounded-full border border-orange-500/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Chaîne Officielle
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">
            VALÉRIEN ÉDUCATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">TV</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Retrouvez tous les reportages, interviews, événements et moments forts de nos différents instituts en vidéo.
          </p>
        </div>

        {/* Grille des Vidéos / Lecteur Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {videos.map((video) => (
            <div key={video.id} className="lg:col-span-12 bg-slate-950/50 border border-slate-800 rounded-[2.5rem] p-6 md:p-8 shadow-2xl">
              
              {/* Grand Écran Vidéo */}
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-black mb-6">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=0&badge=0&autopause=0&byline=0&portrait=0&title=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.titre}
                ></iframe>
              </div>

              {/* Infos Vidéo */}
              <div className="space-y-3">
                <span className="inline-block bg-blue-500/10 text-blue-400 font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-md border border-blue-500/20">
                  {video.categorie}
                </span>
                <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight text-white">
                  {video.titre}
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light max-w-4xl">
                  {video.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}