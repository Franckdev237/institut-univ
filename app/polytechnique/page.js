import React from 'react';

export default function PolytechniquePremium() {
  const departements = [
    {
      id: "informatique",
      titre: "Génie Informatique",
      description: "Le moteur de la transformation digitale. Ce département forme des experts capables de répondre aux défis de l'intelligence artificielle, du développement logiciel et de la cybersécurité dans un environnement technologique en constante évolution.",
      filiereTitre: "Filières d'Excellence :",
      specialites: [
        "Génie logiciel",
        "Maintenance des systèmes informatiques",
        "Informatique industrielle et automatisme"
      ],
      image: "/18.jpg",
      accent: "from-blue-600 to-indigo-900",
      icon: "💻"
    },
    {
      id: "civil",
      titre: "Génie Civil",
      description: "Bâtir l'avenir et dessiner les cités de demain. Nos formations couvrent l'intégralité du cycle de vie des infrastructures, de la conception topographique à la gestion durable des chantiers et de l'urbanisme moderne.",
      filiereTitre: "Filières d'Excellence :",
      specialites: [
        "Bâtiment",
        "Travaux publics",
        "Géomètre-topographe",
        "Menuiserie et ébénisterie",
        "Installation sanitaire",
        "Urbanisme"
      ],
      image: "/19.jpg",
      accent: "from-orange-500 to-red-700",
      icon: "🏗️"
    },
    {
      id: "electrique",
      titre: "Génie Électrique",
      description: "L'énergie est le sang de l'industrie. Nous formons des techniciens de haut niveau spécialisés dans la gestion des systèmes de puissance et la maintenance critique des équipements haute technologie, notamment dans le secteur médical.",
      filiereTitre: "Filières d'Excellence :",
      specialites: [
        "Électrotechnique",
        "Maintenance des appareils biomédicaux"
      ],
      image: "/20.jpg",
      accent: "from-blue-800 to-slate-900",
      icon: "⚡"
    },
    {
      id: "chimique",
      titre: "Génie Chimique & Procédés",
      description: "À la frontière de la science et de l'industrie, ce département se concentre sur la transformation de la matière. De la chimie générale au contrôle des procédés industriels, nous préparons les acteurs de l'industrie de demain.",
      filiereTitre: "Filières d'Excellence :",
      specialites: [
        "Chimie",
        "Génie chimique et des procédés"
      ],
      image: "/22.jpg",
      accent: "from-emerald-600 to-teal-900",
      icon: "🧪"
    },
    {
      id: "mecanique",
      titre: "Génie Mécanique & Productique",
      description: "Concevoir le mouvement et optimiser la production. Cette filière allie la rigueur de la mécanique classique à l'innovation de la mécatronique automobile pour une polyvalence absolue sur le marché de l'emploi.",
      filiereTitre: "Filières d'Excellence :",
      specialites: [
        "Maintenance industrielle et productive",
        "Mécanique et électronique automobile (option mécatronique)"
      ],
      image: "/21.jpg",
      accent: "from-red-600 to-rose-950",
      icon: "⚙️"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-white font-sans selection:bg-orange-500">
      {/* 🌌 HERO SECTION AVANT-GARDE */}
      <header className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/23.jpg" alt="Background" className="w-full h-full object-cover opacity-40 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0c]/80 to-[#0a0a0c]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          {/* ✅ POLICE AUGMENTÉE ICI : text-sm -> text-lg et padding ajusté */}
          <span className="inline-block px-6 py-2 mb-8 border-2 border-orange-500/50 rounded-full text-orange-500 text-lg md:text-xl font-black tracking-[0.2em] uppercase animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.3)]">
            Institut Polytechnique Saint Valérien d'Obala
          </span>
          
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic leading-none">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">EXCELLENCE</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg font-medium leading-relaxed">
            Formations certifiées pour les leaders technologiques de demain. 
            Recrutement sur étude de dossier pour la session 2026.
          </p>
        </div>
      </header>

      {/* 🏛️ DÉPARTEMENTS ET FILIÈRES PREMIUM */}
      <section className="max-w-7xl mx-auto py-24 px-6 space-y-32">
        {departements.map((dept, index) => (
          <div 
            key={dept.id} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
          >
            {/* Visual Block */}
            <div className="w-full lg:w-1/2 group relative">
              <div className={`absolute -inset-4 bg-gradient-to-r ${dept.accent} rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src={dept.image} alt={dept.titre} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8">
                   <span className="text-6xl mb-4 block drop-shadow-lg">{dept.icon}</span>
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-black mb-6 italic uppercase tracking-tighter">
                {dept.titre}
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed font-light">
                {dept.description}
              </p>
              
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl mb-10">
                <h3 className="text-orange-500 font-black text-sm uppercase tracking-widest mb-6 flex items-center">
                  <span className="w-8 h-[2px] bg-orange-500 mr-4"></span>
                  {dept.filiereTitre}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {dept.specialites.map((spec, i) => (
                    <div key={i} className="flex items-start group/item text-slate-200">
                      <span className="mt-1 mr-3 text-orange-500 group-hover/item:translate-x-1 transition-transform">→</span>
                      <span className="font-bold text-sm tracking-tight uppercase">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="group relative px-8 py-4 bg-white text-black font-black rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 uppercase text-xs tracking-[0.2em]">
                <span className="relative z-10 italic">Postuler maintenant</span>
                <div className={`absolute inset-0 bg-gradient-to-r ${dept.accent} translate-y-full group-hover:translate-y-0 transition-transform`}></div>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 📢 CALL TO ACTION FINAL */}
      <section className="bg-blue-900 py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-600 rounded-full blur-[100px] opacity-20"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase italic">Prêt à construire votre avenir ?</h2>
          <p className="text-blue-200 mb-10 font-medium italic">"Rejoignez la nouvelle génération d'ingénieurs à Obala dès la rentrée 2025-2026."</p>
          <a href="/admissions" className="bg-orange-600 text-white px-12 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-white hover:text-blue-900 transition-all uppercase tracking-tighter inline-block">
            Déposer mon dossier maintenant
          </a>
        </div>
      </section>
    </main>
  );
}