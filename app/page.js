import React from 'react';

export default function HomePage() {
  const ecoles = [
    {
      id: 'sante-arts',
      nom: "Santé, Arts & Métiers",
      logos: ["/logo-sante.png", "/logo-gestion.png"], // Deux logos ici
      color: "border-emerald-500",
      gradient: "from-emerald-50 to-white",
      text: "text-emerald-700",
      btn: "bg-emerald-600 hover:bg-emerald-700",
      lien: "/sante",
    },
    {
      id: 'polytechnique',
      nom: "Institut Polytechnique Saint Valérien D'Obala",
      logos: ["/logo-poly.png"],
      color: "border-blue-700",
      gradient: "from-blue-50 to-white",
      text: "text-blue-800",
      btn: "bg-blue-800 hover:bg-blue-900",
      lien: "/polytechnique",
    },
    {
      id: 'gestion',
      nom: "INSTITUT Supérieur des Sciences Art et Techniques Mbida Valérien D'Obala",
      logos: ["/logo-gestion.png"],
      color: "border-red-600",
      gradient: "from-red-50 to-white",
      text: "text-red-700",
      btn: "bg-red-600 hover:bg-red-700",
      lien: "/gestion",
      
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20 font-sans">
      
      {/* 🌟 HEADER PREMIUM : Les 3 logos alignés */}
      <section className="px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trio de Logos */}
          <div className="flex justify-center items-center gap-8 mb-10 animate-in fade-in zoom-in duration-700">
            <img src="/logo-sante.png" alt="Logo Santé" className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 shadow-sm rounded-lg p-1" />
            <img src="/logo-poly.png" alt="Logo Poly" className="h-20 md:h-24 w-auto object-contain shadow-md rounded-lg p-1 bg-white" />
            <img src="/logo-gestion.png" alt="Logo Gestion" className="h-16 md:h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 shadow-sm rounded-lg p-1" />
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-4 tracking-[ -0.05em] uppercase italic">
            GROUPE VALÉRIEN ÉDUCATION
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto mb-6"></div>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Bienvenue sur le portail officiel. Choisissez votre établissement pour découvrir nos formations d'excellence à Obala.
          </p>
        </div>
      </section>

      {/* 🏛️ GRID DES ÉCOLES STYLE CARDS PREMIUM */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {ecoles.map((ecole) => (
            <div 
              key={ecole.id} 
              className={`group relative bg-gradient-to-b ${ecole.gradient} p-10 rounded-[3rem] border border-slate-200 ${ecole.color} hover:border-2 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col items-center text-center`}
            >
              {/* Conteneur Logos de l'école */}
              <div className="flex gap-4 mb-8">
                {ecole.logos.map((logo, idx) => (
                  <div key={idx} className="w-24 h-24 bg-white rounded-[1.5rem] p-3 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img src={logo} alt="Logo" className="max-w-full max-h-full object-contain" />
                  </div>
                ))}
              </div>
              
              <h2 className={`text-3xl font-black mb-1 italic uppercase tracking-tighter ${ecole.text}`}>
                {ecole.sigle}
              </h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                {ecole.nom}
              </p>
              
              <p className="text-slate-600 text-sm mb-10 leading-relaxed min-h-[60px]">
                {ecole.description}
              </p>

              <a 
                href={ecole.lien}
                className={`${ecole.btn} w-full text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-[0.1em] shadow-lg shadow-blue-900/10 transform transition-all active:scale-95 group-hover:tracking-[0.15em]`}
              >
                Entrer dans l'école ➜
              </a>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}