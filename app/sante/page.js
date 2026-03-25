import React from 'react';

export default function SantePage() {
  const filieres = [
    {
      titre: "Aide-soignant",
      slogan: "Servir, assister, soigner avec humanité.",
      description: "La filière Aide-Soignant forme des professionnels capables d’accompagner, assister et prendre soin des patients dans les structures de santé, sous la supervision du personnel médical et paramédical.",
      points: ["Hygiène et le confort du patient", "Assistance aux soins de base", "Accueil et l’accompagnement des malades","La surveillance de l’état général du patient"],
      image: "/8.jpg"
    },
    {
      titre: "Pharmacie",
      slogan: "L'expertise du médicament au service du patient.",
      description: "Maîtrisez la science des médicaments, de leur conception à leur dispensation. Un rôle clé dans le conseil.",
      points: ["Pharmacologie", "Conseil patient", "Gestion d'officine"],
      image: "/9.jpg"
    },
    {
      titre: "Odontostomatologiess / Santé Bucco-dentaire",
      slogan: "Un beau sourire commence par une bouche saine.",
      description: "Spécialisez-vous dans la prévention et le traitement des pathologies des dents et des gencives.",
      points: ["Soins dentaires", "Chirurgie buccale", "Prothèses"],
      image: "/10.jpg"
    },
    {
      titre: "Sage-Femme / Maïeutique",
      slogan: "Accompagner la vie dès ses premiers instants.",
      description: "Une formation d'excellence pour le suivi de la grossesse, l'accouchement et les soins post-nataux.",
      points: ["Suivi néonatal", "Obstétrique", "Accompagnement"],
      image: "/11.jpg"
    },
    {
      titre: "Techniciens de Laboratoire",
      slogan: "L'exactitude du diagnostic au service du médecin.",
      description: "Maîtrisez les analyses biologiques et chimiques pour aider au diagnostic des pathologies.",
      points: ["Hématologie", "Biochimie", "Microbiologie"],
      image: "/12.jpg"
    },
    {
      titre: "Ophtalmologie / Optométrie",
      slogan: "Préserver et corriger la vision pour mieux voir le monde.",
      description: "Spécialisez-vous dans les soins oculaires, la mesure de la vue et l'adaptation des lentilles et lunettes.",
      points: ["Examen de vue", "Pathologies oculaires", "Optométrie"],
      image: "/13.jpg"
    },
    
    {
      titre: "Imagerie Médicale",
      slogan: "Voir l'invisible pour mieux soigner.",
      description: "Maîtrisez les technologies de pointe (Scanner, IRM, Radio) pour réaliser des images précises.",
      points: ["Radiologie", "Scanner & IRM", "Échographie"],
      image: "/15.jpg"
    },
    {
      titre: "Santé Publique",
      slogan: "Prévenir aujourd’hui pour protéger demain.",
      description: "La filière Santé Publique forme des professionnels capables de prévenir les maladies, promouvoir la santé et améliorer le bien-être des populations.",
      points: ["la prévention sanitaire", "l’éducation à la santé", "l’hygiène et l’assainissement", "la surveillance des problèmes de santé communautaire", "la gestion et l’organisation des actions de santé publique"],
      image: "/16.jpg"
    },
    {
      titre: "Soins Infirmiers",
      slogan: "L'art de soigner avec humanité et compétence.",
      description: "Devenez le pilier des services de soins. Apprenez les gestes techniques et la gestion des urgences.",
      points: ["Soins cliniques", "Pratique hospitalière", "Éthique"],
      image: "/17.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <header className="relative bg-emerald-900 py-32 text-center text-white overflow-hidden">
        <img src="/7.jpg" alt="Bannière" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">Sciences de la Santé</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto italic">"L'excellence au service de la vie."</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto py-20 px-6 space-y-32">
        {filieres.map((f, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
            <div className="w-full md:w-1/2">
              <img src={f.image} alt={f.titre} className="rounded-3xl shadow-2xl h-[400px] w-full object-cover transform hover:scale-105 transition duration-500" />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-emerald-600 font-bold uppercase text-sm tracking-widest">Filière d'excellence</span>
              <h2 className="text-4xl font-extrabold text-slate-800 mt-2 mb-4">{f.titre}</h2>
              <p className="text-lg font-semibold text-emerald-700 mb-4">{f.slogan}</p>
              <p className="text-slate-600 mb-6 text-lg">{f.description}</p>
              <ul className="space-y-3 mb-10">
                {f.points.map((p, idx) => (
                  <li key={idx} className="flex items-center text-slate-700"><span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3 text-xs">✔</span> {p}</li>
                ))}
              </ul>
              <a href="/admissions" className="inline-block bg-emerald-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-700 transition">S'inscrire en {f.titre}</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}