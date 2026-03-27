import React from 'react';

export default function HomePage() {
  const ecoles = [
    {
      id: 'sante',
      nom: "École de Santé",
      sigle: "ISS",
      logo: "/logo-sante.png", // Assure-toi d'avoir ces fichiers dans /public
      color: "border-emerald-500",
      bg: "hover:bg-emerald-50",
      lien: "/sante",
      description: "Formations MINSANTE & MINESUP : Soins Infirmiers, Sage-femme, Médicotechnique, etc..."
    },
    {
      id: 'polytechnique',
      nom: "École d'Ingénieurie",
      sigle: "ESP",
      logo: "/logo-poly.png",
      color: "border-blue-700",
      bg: "hover:bg-blue-50",
      lien: "/polytechnique",
      description: "Informatique, Génie Civil, Génie Mécanique et productique, Génie Chimique et Procédés."
    },
    {
      id: 'gestion',
      nom: "École de Communication",
      sigle: "IGC",
      logo: "/logo-gestion.png",
      color: "border-red-600",
      bg: "hover:bg-red-50",
      lien: "/gestion",
      description: "Marketing, Communication Digitale, Journalisme, Communication des Organisations, Audiovisuel, Infographie etc..."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 🌟 HERO SECTION : Identité Visuelle du Groupe */}
      <section className="py-16 px-6 text-center bg-slate-50 border-b">
        <div className="max-w-4xl mx-auto">
          <img src="/logo.png" alt="Groupe Valérien" className="w-24 h-24 mx-auto mb-6 object-contain" />
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4 tracking-tighter uppercase italic">
            Groupe Valérien Éducation
          </h1>
          <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">
            Bienvenue sur le portail officiel. Choisissez votre établissement pour découvrir nos formations d'excellence à Obala.
          </p>
        </div>
      </section>

      {/* 🏛️ LE HUB : Les 3 Écoles */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {ecoles.map((ecole) => (
            <a 
              key={ecole.id} 
              href={ecole.lien}
              className={`group p-8 rounded-[2.5rem] border-2 ${ecole.color} ${ecole.bg} transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col items-center text-center transform hover:-translate-y-2`}
            >
              <div className="w-32 h-32 mb-6 bg-white rounded-full p-4 shadow-inner flex items-center justify-center">
                <img src={ecole.logo} alt={ecole.sigle} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
              </div>
              <h2 className="text-2xl font-black text-slate-800 mb-2 leading-tight uppercase">
                {ecole.sigle}
              </h2>
              <p className="text-sm font-bold text-blue-900 mb-4 uppercase tracking-widest">
                {ecole.nom}
              </p>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                {ecole.description}
              </p>
              <div className="mt-auto inline-flex items-center gap-2 font-black text-xs uppercase bg-slate-900 text-white px-6 py-3 rounded-full group-hover:bg-blue-800 transition-colors">
                Entrer dans l'école ➜
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}