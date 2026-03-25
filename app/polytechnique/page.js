import React from 'react';

export default function PolytechniquePage() {
  const departements = [
    {
      id: "informatique",
      titre: "Génie Informatique",
      slogan: "Innover, programmer, bâtir le monde numérique.",
      // Modification ici : On utilise un tableau pour gérer le saut de ligne proprement
      description: ["La filière Génie Informatique forme des professionnels capables de concevoir, développer, installer et maintenir des solutions informatiques adaptées aux besoins des entreprises et des organisations.", "Cette formation permet aux apprenants d’acquérir des compétences dans les domaines de :"],
      points: ["Programmation", "Développement des applications Web & Mobile", "Administration Réseaux","la maintenance informatique", "la gestion des bases de données","la cybersécurité"],
      image: "/18.jpg",
      couleur: "text-blue-600",
      icon: "💻"
    },
    {
      id: "civil",
      titre: "Génie Civil",
      slogan: "Construire aujourd’hui les bases de demain.",
      description: ["La filière Génie Civil forme des professionnels capables de concevoir, réaliser, superviser et entretenir les ouvrages de construction et les infrastructures nécessaires au développement des villes et des communautés.", "Au cours de cette formation :"],
      points: ["Études de structures", "Gestion de chantier", "Dessin technique","la topographie","la gestion et le suivi des chantiers","la lecture et l’exploitation des plans"],
      image: "/19.jpg",
      couleur: "text-orange-600",
      icon: "🏗️"
    },
    {
      id: "electrique",
      titre: "Génie Électrique",
      slogan: "Maîtriser l’énergie, éclairer l’avenir.",
      description: ["La filière Génie Électrique forme des techniciens et professionnels capables d’installer, exploiter, entretenir et sécuriser les systèmes électriques utilisés dans les habitations, les industries et les entreprises.", "Les apprenants développent des compétences en :"],
      points: ["Installations électriques", "Maintenance industrielle", "électricité générale", "électrotechnique", "maintenance des équipements électriques","automatismes","production et distribution de l’énergie","sécurité électrique"],
      image: "/20.jpg",
      couleur: "text-yellow-500",
      icon: "⚡"
    },
    {
      id: "mecanique",
      titre: "Génie Mécanique & Productique",
      slogan: "Concevoir, fabriquer, optimiser la production.",
      description: ["La filière Génie Mécanique et Productique forme des professionnels capables de participer à la conception, à la fabrication, à l’entretien et à l’optimisation des systèmes mécaniques et des procédés de production industrielle.", "Cette formation donne des compétences en :"],
      points: ["la mécanique générale", "Fabrication industrielle", "Maintenance","la gestion de la production","les machines et équipements industriels","la qualité et productivité","l’organisation des procédés de fabrication"],
      image: "/21.jpg",
      couleur: "text-red-600",
      icon: "⚙️"
    },
    {
      id: "chimique",
      titre: "Génie Chimique & Procédés",
      slogan: "Transformer la matière, créer des solutions pour demain.",
      description: ["La filière Génie Chimique et Procédé forme des professionnels capables de comprendre, contrôler et optimiser les procédés de transformation de la matière.", "Au cours de cette formation, les apprenants développent :"],
      points: ["Analyses chimiques", "Contrôle qualité", "Transformation industrielle","chimie appliquée","gestion des unités de production","traitement et valorisation des produits."],
      image: "/22.jpg",
      couleur: "text-emerald-600",
      icon: "🧪"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-slate-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
           <img src="/23.jpg" alt="Bannière" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        </div>
        <div className="relative z-10 px-6">
          {/* Correction ici : "ingénierie" */}
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">Sciences de l'ingénierie</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto italic">
            "Devenez un technicien supérieur recherché grâce à nos 2 ans de formation pratique intensive."
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid gap-16">
          {departements.map((dept, index) => (
            <div key={dept.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition hover:shadow-xl`}>
              
              <div className="w-full md:w-1/2 relative group">
                <img src={dept.image} alt={dept.titre} className="w-full h-80 object-cover rounded-2xl transform transition group-hover:scale-105 duration-500" />
                <div className={`absolute top-4 left-4 bg-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center ${dept.couleur}`}>
                  <span className="mr-2 text-xl">{dept.icon}</span> BTS
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className={`text-3xl font-black mb-2 ${dept.couleur}`}>{dept.titre}</h2>
                <p className="text-slate-900 font-bold mb-4 italic">"{dept.slogan}"</p>
                
                {/* Modification ici pour afficher les deux lignes de description proprement */}
                <div className="text-slate-600 mb-6 leading-relaxed space-y-2">
                  <p>{dept.description[0]}</p>
                  <p className="font-semibold">{dept.description[1]}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {dept.points.map((point, i) => (
                    <div key={i} className="flex items-center text-sm font-semibold text-slate-700">
                      <span className={`mr-2 ${dept.couleur}`}>✔</span> {point}
                    </div>
                  ))}
                </div>

                <a href="/admissions" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition tracking-wide shadow-lg">
                  S'inscrire en {dept.titre}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-orange-500 py-16 text-center text-white">
        <p className="mb-8 font-medium">Ne laisse pas passer ta chance de devenir un expert.</p>
        <a href="/admissions" className="bg-white text-orange-600 px-10 py-4 rounded-full font-black text-lg shadow-2xl hover:bg-slate-900 hover:text-white transition uppercase tracking-tighter">
          Déposer mon dossier maintenant
        </a>
      </section>
    </main>
  );
}