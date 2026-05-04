import React from 'react';

export default function SantePremium() {
  const polesSante = [
    {
      id: "biomedical",
      categorie: "SCIENCES ET TECHNIQUES BIOMÉDICALES",
      description: "Le cœur technologique du diagnostic. Formez-vous à la maîtrise des analyses et de l'imagerie pour devenir un pilier du système médical.",
      niveaux: ["BTS", "LICENCE"],
      specialites: [
        "Techniques de laboratoire et d'analyses biomédicales",
        "Radiologie et Imagerie médicale",
        "Techniques pharmaceutiques"
      ],
      image: "/12.jpg",
      accent: "from-pink-600 to-pink-900",
      bannerColor: "bg-pink-600"
    },
    {
      id: "medico-sanitaire",
      categorie: "ÉTUDES MÉDICO-SANITAIRES",
      description: "L'art du soin et de l'accompagnement. Des formations centrées sur l'humain pour encadrer la vie, restaurer la mobilité et assurer des soins de qualité.",
      niveaux: ["BTS", "LICENCE"],
      specialites: [
        "Sage-femme",
        "Sciences infirmières",
        "Kinésithérapie"
      ],
      image: "/11.jpg",
      accent: "from-blue-600 to-indigo-900",
      bannerColor: "bg-blue-600"
    },
    {
      id: "etat",
      categorie: "CYCLES DIPLÔME D'ÉTAT (MINSANTE)",
      description: "Le parcours d'excellence réglementé par l'État. Ces formations confèrent des titres professionnels reconnus pour une intégration directe dans la fonction publique et le secteur privé.",
      niveaux: ["DIPLÔME D'ÉTAT"],
      specialites: [
        "Infirmier Diplômé d'État (IDE)",
        "Sage-Femme Diplômée d'État",
        "Aide-Soignant (Spécialisé)"
      ],
      image: "/17.jpg",
      accent: "from-emerald-600 to-teal-950",
      bannerColor: "bg-emerald-600",
      isSpecial: true
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFDFD] text-slate-900 pb-20">
      {/* 🌌 HEADER STYLE INSTITUT */}
      <header className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <img src="/7.jpg" alt="Pôle Santé" className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/60 to-[#FDFDFD]"></div>
        
        <div className="relative z-10 text-center px-6">
          <p className="text-pink-500 font-black text-xs uppercase tracking-[0.4em] mb-4">ISSAT - Mbida Valérien d'Obala</p>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter uppercase italic leading-none">
            SCIENCES DE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">LA SANTÉ</span>
          </h1>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 inline-block px-8 py-2 rounded-full text-white font-bold uppercase italic shadow-2xl">
             FORMATIONS AGRÉÉES : BTS • LICENCE • ÉTAT
          </div>
        </div>
      </header>

      {/* 🏛️ SECTIONS DES PÔLES */}
      <section className="max-w-7xl mx-auto py-24 px-6 space-y-32">
        {polesSante.map((pole, index) => (
          <div 
            key={pole.id} 
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-start`}
          >
            {/* Visual Block avec Bandeaux Flottants */}
            <div className="w-full lg:w-1/2 group relative">
              <div className={`absolute -inset-4 bg-gradient-to-r ${pole.accent} rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative h-[480px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
                <img src={pole.image} alt={pole.categorie} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
                
                {/* Bandeaux de Niveau (Bando) */}
                <div className="absolute top-8 left-0 flex flex-col gap-2 items-start">
                  {pole.niveaux.map((niv, i) => (
                    <div key={i} className={`${pole.bannerColor} text-white px-6 py-2 font-black text-[10px] uppercase tracking-[0.2em] shadow-xl rounded-r-full border-y border-r border-white/20`}>
                      {niv}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-1/2 py-4">
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tighter text-slate-800 border-l-8 border-pink-500 pl-6">
                {pole.categorie}
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light italic">
                {pole.description}
              </p>
              
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-inner">
                <h3 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em] mb-6 flex items-center">
                  <span className={`w-3 h-3 rounded-full ${pole.bannerColor} mr-3 animate-pulse`}></span>
                  Filières disponibles :
                </h3>
                
                <div className="space-y-4">
                  {pole.specialites.map((spec, i) => (
                    <div key={i} className="flex items-center group/item text-slate-700 font-bold">
                      <span className={`mr-4 transition-transform group-hover/item:translate-x-1 ${pole.id === 'biomedical' ? 'text-pink-500' : 'text-blue-600'}`}>
                        ◆
                      </span>
                      <span className="text-sm md:text-base leading-tight uppercase tracking-tight">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                 <a href="/admissions" className={`px-10 py-4 rounded-xl font-black uppercase text-[10px] tracking-widest text-white shadow-xl hover:scale-105 transition-transform bg-gradient-to-r ${pole.accent}`}>
                    Dossier de candidature ➜
                 </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}