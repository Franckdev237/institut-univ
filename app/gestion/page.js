import React from 'react';

export default function CommunicationStrictPremium() {
  const filieres = [
    {
      id: "journalisme",
      titre: "Journalisme",
      description: "Apprenez à rechercher, traiter et diffuser l'information avec rigueur. Cette formation vous prépare aux défis des médias modernes, de la presse écrite au web.",
      debouches: [
        "Presse écrite & Agences",
        "Audiovisuel (Radio/TV)",
        "Médias en ligne & Web",
        "Secteurs connexes"
      ],
      metiers: [
        "Journaliste d'entreprise",
        "Attaché de presse",
        "Consultant en communication",
        "Chargé de relations publiques",
        "Responsable éditorial"
      ],
      image: "/25.jpg",
      accent: "from-blue-700 to-blue-900",
      icon: "🎙️"
    },
    {
      id: "communication-org",
      titre: "Communication des organisations",
      description: "Devenez l'expert de l'image de marque et de la stratégie institutionnelle. Maîtrisez les outils pour connecter efficacement les organisations à leurs publics.",
      debouches: [
        "Presse écrite & Agences",
        "Audiovisuel (Radio/TV)",
        "Médias en ligne & Web",
        "Secteurs connexes"
      ],
      metiers: [
        "Journaliste d'entreprise",
        "Attaché de presse",
        "Consultant en communication",
        "Chargé de relations publiques",
        "Responsable éditorial"
      ],
      image: "/24.jpg",
      accent: "from-indigo-700 to-indigo-950",
      icon: "🏢"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] text-white font-sans">
      {/* 🌌 HERO SECTION : CONFORME AU FLYER */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/31.jpg" alt="ISSAT MVO" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/0 via-[#0f172a]/80 to-[#0f172a]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
  {/* Changement de text-xs à text-sm pour agrandir légèrement */}
  <p className="text-orange-500 font-black text-sm uppercase tracking-[0.4em] mb-4">
    Institut Supérieur des Sciences, Arts et Techniques MBIDA VALÉRIEN D'OBALA
  </p>
  
  <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase italic leading-none">
    INFORMATION ET <br />
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 text-5xl md:text-8xl">
      COMMUNICATION
    </span>
  </h1>

  <div className="mt-6 bg-orange-600 inline-block px-8 py-2 rounded-lg text-white font-black uppercase italic shadow-lg">
    RECRUTEMENT SUR ÉTUDE DE DOSSIER
  </div>
</div>
      </header>

      {/* 🏛️ LES FILIÈRES STRICTES DU FLYER */}
      <section className="max-w-6xl mx-auto py-20 px-6 space-y-32">
        {filieres.map((f, index) => (
          <div key={f.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}>
            
            {/* Image Block */}
            <div className="w-full lg:w-1/2 group relative">
              <div className={`absolute -inset-2 bg-gradient-to-r ${f.accent} rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition duration-700`}></div>
              <div className="relative h-[400px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src={f.image} alt={f.titre} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent"></div>
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-black mb-6 uppercase italic tracking-tighter flex items-center gap-4">
                <span className="text-blue-500 text-2xl">▪</span> {f.titre}
              </h2>
              <p className="text-slate-400 text-lg mb-10 font-light leading-relaxed">
                {f.description}
              </p>

              {/* DÉBOUCHÉS (REPRISE EXACTE DU FLYER) */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                <h3 className="text-orange-500 font-black text-sm uppercase tracking-widest mb-6 border-b border-orange-500/20 pb-2">
                  Débouchés & Carrière
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="space-y-3">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Secteurs :</p>
                    {f.debouches.map((item, i) => (
                      <div key={i} className="flex items-center text-sm font-bold text-slate-200">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span> {item}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Métiers :</p>
                    {f.metiers.map((job, i) => (
                      <div key={i} className="flex items-center text-sm font-medium text-slate-300">
                        <span className="text-orange-500 mr-2">○</span> {job}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-10">
                 <button className="bg-white text-[#0f172a] px-10 py-4 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-orange-600 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Postuler en {f.titre}
                 </button>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* CTA Final */}
      <section className="bg-indigo-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Le monde des médias vous attend.</h2>
        <p className="mb-8 opacity-90">Inscriptions ouvertes pour l'année académique 2025-2026.</p>
        <a href="/admissions" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-black text-lg shadow-xl hover:bg-slate-900 hover:text-white transition">
          REJOINDRE L'INSTITUT MAINTENANT
        </a>
      </section>
    </main>
  );
}