import React from 'react';

export default function HomePage() {
  const ecoles = [
    {
      id: 'sante-arts',
      nom: "Ecole privée de formation du personnels de santé/ISSAT-MVO",
      description: "Formations d'excellence en soins infirmiers, maïeutique et techniques biomédicales sous double agrément MINSANTE MINESUP.",
      logos: ["/logo-sante.png", "/logo-gestion.png"],
      color: "border-emerald-500",
      gradient: "from-emerald-100 to-white",
      text: "text-emerald-900",
      btn: "bg-emerald-600 hover:bg-emerald-700",
      lien: "/sante",
    },
    {
      id: 'polytechnique',
      nom: "Institut Polytechnique Saint Valérien D'Obala",
      description: "Le pôle technologique : Génie Civil, Informatique, Électrique et Maintenance industrielle.",
      logos: ["/logo-poly.png"],
      color: "border-blue-700",
      gradient: "from-blue-100 to-white",
      text: "text-blue-900",
      btn: "bg-blue-800 hover:bg-blue-900",
      lien: "/polytechnique",
    },
    {
      id: 'gestion',
      nom: "Institut Supérieur Sciences Art et Techniques Mbida Valérien D'Obala",
      description: "Ecole de formation aux métiers de la gestion, de la communication et des sciences de santés.",
      logos: ["/logo-gestion.png"],
      color: "border-red-600",
      gradient: "from-red-100 to-white",
      text: "text-red-900",
      btn: "bg-red-600 hover:bg-red-700",
      lien: "/gestion",
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-24 font-sans">
    
      {/* 🌟 HEADER PREMIUM : LOGOS ET AUTORISATIONS */}
      <section className="px-6 pt-20 mb-12 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-24 mb-16">
            
            {/* Logo 1 */}
            <div className="flex flex-col items-center flex-1 group">
              <div className="h-32 md:h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src="/logo-sante.png" alt="Logo Santé" className="max-h-full w-auto object-contain drop-shadow-xl" />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] font-black text-blue-900 uppercase tracking-tighter opacity-70 mb-1">Agrément d'ouverture</p>
                <p className="text-[11px] font-bold text-slate-600 leading-tight border-t border-slate-200 pt-2 px-4 italic">
                  N°6043/D/MINSANTE/SG/DRH <br /> du 08 JUIN 2022
                </p>
              </div>
            </div>

            {/* Logo 2 (Le Central) */}
            <div className="flex flex-col items-center flex-1 group">
              <div className="h-40 md:h-56 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src="/logo-poly.png" alt="Logo Poly" className="max-h-full w-auto object-contain drop-shadow-2xl" />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] font-black text-blue-900 uppercase tracking-tighter opacity-70 mb-1">Autorisation Ministérielle</p>
                <p className="text-[11px] font-bold text-slate-600 leading-tight border-t border-slate-200 pt-2 px-4 italic">
                  AUTORISATION n° 24-07508/L/MINESUP/DDES/ESUP/SDA/ANAP
                </p>
              </div>
            </div>

            {/* Logo 3 */}
            <div className="flex flex-col items-center flex-1 group">
              <div className="h-32 md:h-48 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src="/logo-gestion.png" alt="Logo Gestion" className="max-h-full w-auto object-contain drop-shadow-xl" />
              </div>
              <div className="mt-6 text-center">
                <p className="text-[10px] font-black text-blue-900 uppercase tracking-tighter opacity-70 mb-1">Agrément d'ouverture</p>
                <p className="text-[11px] font-bold text-slate-600 leading-tight border-t border-slate-200 pt-2 px-4 italic">
                  AUTORISATION n° 26-00351/L/MINESUP/DDES/ESUP/SDA/ANAP
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
             <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              GROUPE VALÉRIEN <br /> <span className="text-blue-900">ÉDUCATION</span>
            </h1>
            <p className="text-slate-500 font-bold tracking-[0.3em] uppercase text-sm">Excellence - Innovation - Professionnalisme</p>
          </div>
        </div>
      </section>

      {/* 📺 SECTION À LA UNE : VALÉRIEN ÉDUCATION TV (DESIGN SALON TV PREMIUM) */}
      <section className="max-w-7xl mx-auto px-6 mb-24 mt-12">
        <div className="bg-gradient-to-br from-[#0B0F19] to-[#1E2640] p-8 md:p-14 rounded-[3.5rem] shadow-2xl border-2 border-slate-800 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          {/* Infos à Gauche */}
          <div className="lg:col-span-5 space-y-6 text-left relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-lg shadow-red-500/50"></span>
              <span className="text-orange-400 font-black text-[10px] uppercase tracking-[0.4em] bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                DIFFUSION EN COURS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none">
              VALÉRIEN ÉDUCATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">TV</span>
            </h2>
            
            <div className="space-y-3">
              <p className="text-slate-200 font-bold text-xl md:text-2xl leading-tight uppercase italic text-balance">
                Les Journées d'Orientation Académique et Professionnelle
              </p>
              <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">
                Revivez l’immersion complète des bacheliers à Obala. Découvrez nos ateliers d’orientation et l'accompagnement personnalisé mis en œuvre pour construire les projets professionnels de la rentrée 2026-2027.
              </p>
            </div>

            <div className="pt-4">
              <a 
                href="/valerien-education-tv" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-xs uppercase tracking-widest px-8 py-5 rounded-2xl shadow-xl shadow-orange-950/50 transition-all transform hover:scale-105 active:scale-95"
              >
                <span>Accéder à la chaîne & Galerie</span>
                <span className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center text-[10px]">▶</span>
              </a>
            </div>
          </div>

          {/* Écran TV Orné (Droite) */}
          <div className="lg:col-span-7 w-full relative z-10">
            {/* Structure Externe de la TV */}
            <div className="relative w-full rounded-[2.5rem] p-4 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 border-4 border-slate-600 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
              
              {/* En-tête de l'Écran style Studio */}
              <div className="flex justify-between items-center px-4 pb-3 text-[10px] font-black text-slate-400 tracking-wider uppercase">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>MONITEUR PRINCIPAL : LIVE</span>
                </div>
                <span className="text-orange-400 font-mono animate-pulse">GROUPE VALÉRIEN ÉDUCATION TV</span>
              </div>

              {/* Conteneur de l'Écran Vidéo */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-inner bg-slate-950 border-2 border-slate-900">
                <iframe
                  src="https://player.vimeo.com/video/1194330254?autoplay=0&badge=0&autopause=0&byline=0&portrait=0&title=0"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Journées d'orientation"
                ></iframe>
              </div>

              {/* Pied de la TV avec Boutons simulés */}
              <div className="flex justify-between items-center pt-3 px-2 text-[9px] font-bold text-slate-500">
                <span>MODEL: GVE-2026</span>
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                  <span className="w-3 h-1 bg-blue-500 rounded-full shadow-sm shadow-blue-500/50"></span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 🖼️ BANNIÈRE PUBLICITAIRE */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-[12px] border-white transition-all duration-700 hover:shadow-blue-200/50">
          <img 
            src="/Banderole-Campagne2.jpg" 
            alt="Campagne 2026" 
            className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />
        </div>
      </section>

      {/* 🏛️ GRID DES ÉCOLES */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecoles.map((ecole) => (
            <div 
              key={ecole.id} 
              className={`group relative bg-gradient-to-b ${ecole.gradient} p-10 rounded-[3rem] border border-slate-200 shadow-xl transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center`}
            >
              <div className="flex gap-4 mb-8">
                {ecole.logos.map((logo, idx) => (
                  <div key={idx} className="w-24 h-24 bg-white rounded-[2rem] p-4 shadow-lg flex items-center justify-center border border-slate-50 group-hover:rotate-6 transition-transform">
                    <img src={logo} alt="Logo" className="max-w-full max-h-full object-contain" />
                  </div>
                ))}
              </div>
              
              <h2 className={`text-2xl font-black mb-6 uppercase tracking-tighter leading-tight italic ${ecole.text}`}>
                {ecole.nom}
              </h2>
              
              <p className="text-slate-600 text-sm font-medium mb-10 leading-relaxed min-h-[60px]">
                {ecole.description}
              </p>

              <a 
                href={ecole.lien}
                className={`${ecole.btn} w-full text-white py-5 rounded-2xl font-black text-[12px] uppercase tracking-[0.2em] shadow-lg transform transition-all active:scale-95 flex items-center justify-center gap-2`}
              >
                Découvrir l'institut <span>➜</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}