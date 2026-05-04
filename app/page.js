import React from 'react';

export default function HomePage() {
  const ecoles = [
    {
      id: 'sante-arts',
      sigle: "ISSAT - MVO",
      nom: "Santé, Arts & Métiers",
      description: "Formations d'excellence en soins infirmiers, maïeutique et techniques biomédicales sous agrément MINSANTE.",
      logos: ["/logo-sante.png", "/logo-gestion.png"],
      color: "border-emerald-500",
      gradient: "from-emerald-100 to-white",
      text: "text-emerald-900",
      btn: "bg-emerald-600 hover:bg-emerald-700",
      lien: "/sante",
    },
    {
      id: 'polytechnique',
      sigle: "IP SV",
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
      sigle: "ISSAT - MVO",
      nom: "Sciences Art et Techniques Mbida Valérien D'Obala",
      description: "Le centre de formation aux métiers de la gestion, de la communication et des sciences sociales.",
      logos: ["/logo-gestion.png"],
      color: "border-red-600",
      gradient: "from-red-100 to-white",
      text: "text-red-900",
      btn: "bg-red-600 hover:bg-red-700",
      lien: "/gestion",
    }
  ];

  return (
    <main className="min-h-screen bg-white pb-20 font-sans">
      
      {/* 📢 BANNIÈRE D'ORIENTATION FLASH (Top Bar) */}
      <div className="bg-blue-900 text-white py-3 px-6 text-center overflow-hidden relative">
        <p className="text-sm font-bold animate-pulse tracking-widest uppercase">
          🚀 JOURNÉES D'ORIENTATION À OBALA : DU 11 AU 13 MAI 2026 — VENEZ CONSTRUIRE VOTRE AVENIR !
        </p>
      </div>

      {/* 🌟 HEADER : LOGOS GRANDS */}
      <section className="px-6 pt-16 mb-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-6 md:gap-16 mb-12 animate-in fade-in zoom-in duration-1000">
            <img src="/logo-sante.png" alt="Logo Santé" className="h-20 md:h-32 w-auto object-contain drop-shadow-md" />
            <img src="/logo-poly.png" alt="Logo Poly" className="h-24 md:h-40 w-auto object-contain drop-shadow-lg" />
            <img src="/logo-gestion.png" alt="Logo Gestion" className="h-20 md:h-32 w-auto object-contain drop-shadow-md" />
          </div>

          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase italic leading-tight">
            GROUPE VALÉRIEN <br /> <span className="text-blue-900">ÉDUCATION</span>
          </h1>
        </div>
      </section>

      {/* 🖼️ INSERTION DE LA BANNIÈRE PUBLICITAIRE (Image demandée) */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-50 hover:scale-[1.01] transition-transform duration-500">
          {/* Remplace 'nom-de-ta-banniere.jpg' par le nom réel de ton fichier image */}
          <img 
            src="/Banderole-Campagne2.jpg" 
            alt="Journées d'Orientation Académique et Professionnelle Obala 2026" 
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* 🏛️ GRID DES ÉCOLES */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {ecoles.map((ecole) => (
            <div 
              key={ecole.id} 
              className={`group relative bg-gradient-to-b ${ecole.gradient} p-12 rounded-[3.5rem] border-2 ${ecole.color} shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center`}
            >
              <div className="flex gap-4 mb-10">
                {ecole.logos.map((logo, idx) => (
                  <div key={idx} className="w-28 h-28 bg-white rounded-3xl p-4 shadow-xl flex items-center justify-center border border-slate-100">
                    <img src={logo} alt="Logo" className="max-w-full max-h-full object-contain" />
                  </div>
                ))}
              </div>
              
              <h2 className={`text-3xl font-black mb-3 italic uppercase tracking-tighter ${ecole.text}`}>
                {ecole.sigle}
              </h2>
              <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">
                {ecole.nom}
              </p>
              
              <p className="text-slate-800 text-base font-medium mb-10 leading-snug min-h-[80px]">
                {ecole.description}
              </p>

              <a 
                href={ecole.lien}
                className={`${ecole.btn} w-full text-white py-5 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl transform transition-all active:scale-95`}
              >
                Accéder aux formations ➜
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}