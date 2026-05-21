import React from 'react';

export default function ValerienTvPage() {
  const videos = [
    {
      id: "1",
      vimeoId: "1194330254",
      titre: "Grand Reportage : Les Journées d'Orientation Académique et Professionnelle",
      description: "Retour en images sur les temps forts des Journées d'Orientation. Découvrez les échanges enrichissants entre nos experts, les bacheliers et les professionnels venus guider la future génération de leaders à Obala.",
      categorie: "Événement"
    }
  ];

  const imagesEvenement = [
    { id: 1, src: "/evenement-1.jpg", alt: "Atelier orientation bacheliers" },
    { id: 2, src: "/evenement-2.jpg", alt: "Présentation des filières santé" },
    { id: 3, src: "/evenement-3.jpg", alt: "Échanges avec l'équipe pédagogique" },
    { id: 4, src: "/evenement-4.jpg", alt: "Visite guidée des laboratoires" },
    { id: 5, src: "/evenement-5.jpg", alt: "Séance d'accompagnement de groupe" },
    { id: 6, src: "/evenement-6.jpg", alt: "Clôture des journées d'orientation" },
  ];

  return (
    <main className="min-h-screen bg-[#090D1A] text-white pt-36 pb-24 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* En-tête Premium Orné */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-400 font-black text-[10px] uppercase tracking-[0.4em] px-5 py-2 rounded-full border border-orange-500/20 shadow-lg shadow-orange-950/20">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-md shadow-red-500"></span>
            ESPACE AUDIOVISUEL OFFICIEL
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
            VALÉRIEN ÉDUCATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">TV</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            {"Explorez les reportages exclusifs, les moments d'immersion et l'actualité en direct du Groupe Valérien Éducation."}
          </p>
        </div>

        {/* Zone Vidéo - Habillage Cinéma */}
        <div className="mb-24">
          {videos.map((video) => (
            <div key={video.id} className="bg-gradient-to-b from-[#111726] to-[#0D1220] border-2 border-slate-800/80 rounded-[3rem] p-6 md:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.6)]">
              
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border-4 border-slate-950 bg-black aspect-video mb-8">
                <div className="absolute top-4 left-4 z-20 bg-black/60 px-3 py-1 rounded text-[9px] font-mono tracking-widest text-orange-400 border border-white/5 pointer-events-none uppercase">
                  LIVE REPLAY • GVE TV
                </div>

                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?autoplay=0&badge=0&autopause=0&byline=0&portrait=0&title=0`}
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={video.titre}
                ></iframe>
              </div>

              <div className="space-y-4 border-t border-slate-800/60 pt-6">
                <span className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md shadow-blue-950">
                  {video.categorie}
                </span>
                <h2 className="text-2xl md:text-4xl font-black uppercase italic tracking-tight text-white leading-tight">
                  {video.titre}
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light max-w-4xl">
                  {video.description}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* 📸 ZONE GALLERY */}
        <section className="border-t border-slate-800/80 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <p className="text-orange-400 text-xs font-black tracking-[0.3em] uppercase mb-2">GALERIE EXCLUSIVE</p>
              <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">
                {"L'ÉVÉNEMENT EN "} <span className="text-blue-500">IMAGES</span>
              </h3>
            </div>
            <p className="text-slate-400 text-xs md:text-sm font-light max-w-md md:text-right">
              {"Découvrez les clichés pris sur le vif lors de nos sessions d'accompagnement et ateliers avec les étudiants."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imagesEvenement.map((img) => (
              <div 
                key={img.id} 
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-800/80 bg-slate-900 shadow-xl transition-all duration-500 hover:scale-[1.03] hover:border-orange-500/40"
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <p className="text-xs font-bold tracking-wide text-orange-400 uppercase italic">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}