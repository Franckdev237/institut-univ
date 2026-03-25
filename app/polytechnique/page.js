import React from 'react';

export default function PolytechniquePage() {
  const departements = [
    {
      id: "informatique",
      titre: "Génie Informatique",
      slogan: "Ton Bac, ton passeport vers le numérique !",
      description: "Apprends la programmation, le développement d'applications et les réseaux pour répondre aux besoins du marché numérique.",
      points: ["Programmation", "Développement Web & Mobile", "Administration Réseaux"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600",
      couleur: "text-blue-600",
      icon: "💻"
    },
    {
      id: "civil",
      titre: "Génie Civil",
      slogan: "Après ton Bac, construit ton Avenir !",
      description: "Rêve de bâtir des routes, des bâtiments et des ouvrages modernes. Une formation pratique pour devenir un bâtisseur.",
      points: ["Études de structures", "Gestion de chantier", "Dessin technique"],
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=600",
      couleur: "text-orange-600",
      icon: "🏗️"
    },
    {
      id: "electrique",
      titre: "Génie Électrique",
      slogan: "Fais jaillir ton avenir dès ton Bac !",
      description: "Formation complète en électricité, électronique et réseaux dans nos ateliers modernes.",
      points: ["Installations électriques", "Maintenance industrielle", "Énergies renouvelables"],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600",
      couleur: "text-yellow-500",
      icon: "⚡"
    },
    {
      id: "mecanique",
      titre: "Génie Mécanique & Productique",
      slogan: "Du Bac aux machines, passe à l'action !",
      description: "Apprends la conception, la fabrication et la maintenance d'équipements industriels.",
      points: ["Conception assistée par ordi (CAO)", "Fabrication mécanique", "Maintenance"],
      image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600",
      couleur: "text-red-600",
      icon: "⚙️"
    },
    {
      id: "chimique",
      titre: "Génie Chimique & Procédés",
      slogan: "Après ton Bac, deviens l'expert de la transformation !",
      description: "Maîtrise la chimie générale, les procédés industriels et le travail en laboratoire.",
      points: ["Analyses chimiques", "Contrôle qualité", "Transformation industrielle"],
      image: "https://images.unsplash.com/photo-1532187863486-abf9d3971da1?q=80&w=600",
      couleur: "text-emerald-600",
      icon: "🧪"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header dynamique */}
      <header className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200" className="w-full h-full object-cover" alt="Polytech" />
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4">Science de l'ingénieur</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Devenez un technicien supérieur recherché grâce à nos 2 ans de formation pratique intensive.
          </p>
        </div>
      </header>

      {/* Liste des départements */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid gap-16">
          {departements.map((dept, index) => (
            <div key={dept.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition hover:shadow-xl`}>
              
              {/* Image & Badge */}
              <div className="w-full md:w-1/2 relative">
                <img src={dept.image} alt={dept.titre} className="w-full h-80 object-cover rounded-2xl" />
                <div className={`absolute top-4 left-4 bg-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center ${dept.couleur}`}>
                  <span className="mr-2 text-xl">{dept.icon}</span> BTS
                </div>
              </div>

              {/* Contenu */}
              <div className="w-full md:w-1/2">
                <h2 className={`text-3xl font-black mb-2 ${dept.couleur}`}>{dept.titre}</h2>
                <p className="text-slate-900 font-bold mb-4 italic">"{dept.slogan}"</p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {dept.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {dept.points.map((point, i) => (
                    <div key={i} className="flex items-center text-sm font-semibold text-slate-700">
                      <span className={`mr-2 ${dept.couleur}`}>✔</span> {point}
                    </div>
                  ))}
                </div>

                <a href="/admissions" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition tracking-wide">
                  S'inscrire en {dept.titre}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Appel à l'action spécifique */}
      <section className="bg-orange-500 py-16 text-center text-white">
        <p className="mb-8 font-medium">Ne laisse pas passer ta chance de devenir un expert.</p>
        <a href="/admissions" className="bg-white text-orange-600 px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:bg-slate-900 hover:text-white transition">
          DÉPOSER MON DOSSIER MAINTENANT
        </a>
      </section>
    </main>
  );
}