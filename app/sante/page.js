import React from 'react';

export default function SantePage() {
  const filieres = [
    {
      titre: "Médecin Généraliste",
      slogan: "Le premier rempart pour la santé de la communauté.",
      description: "Devenez un expert du diagnostic, du traitement et de la prévention des maladies. Une formation complète pour une vision globale du patient.",
      points: ["Diagnostic précis", "Suivi thérapeutique", "Prévention active"],
      image: "/7.jpg", // Prépare une image 7.jpg dans public (ex: stéthoscope, médecin)
      color: "blue"
    },
    {
      titre: "Pharmacie",
      slogan: "L'expertise du médicament au service du patient.",
      description: "Maîtrisez la science des médicaments, de leur conception à leur dispensation. Jouez un rôle clé dans le conseil et le suivi thérapeutique.",
      points: ["Pharmacologie avancée", "Conseil patient", "Gestion d'officine"],
      image: "/8.jpg", // Prépare une image 8.jpg dans public (ex: mortier, gélules, comptoir)
      color: "teal"
    },
    {
      titre: "Odontostomatologie / Santé Bucco-dentaire",
      slogan: "Parce qu'un beau sourire commence par une bouche saine.",
      description: "Spécialisez-vous dans la prévention, le diagnostic et le traitement des pathologies de la bouche, des dents et des gencives.",
      points: ["Soins dentaires", "Chirurgie buccale", "Prévention"],
      image: "/9.jpg", // Prépare une image 9.jpg dans public (ex: fauteuil dentaire, miroir, turbine)
      color: "emerald"
    },
    {
      titre: "Kinésithérapie",
      slogan: "Redonner le mouvement et l'autonomie par le geste.",
      description: "Apprenez les techniques de rééducation pour aider les patients à retrouver leur mobilité, leur force et leur fonction après une blessure ou une maladie.",
      points: ["Rééducation fonctionnelle", "Thérapie manuelle", "Suivi sportif"],
      image: "/10.jpg", // Prépare une image 10.jpg dans public (ex: table de massage, haltères, patient)
      color: "sky"
    },
    {
      titre: "Imagerie Médicale",
      slogan: "Voir l'invisible pour mieux soigner.",
      description: "Maîtrisez les technologies de pointe (Scanner, IRM, Échographie) pour réaliser des images précises et aider au diagnostic des pathologies.",
      points: ["Radiologie numérique", "Scanner & IRM", "Échographie"],
      image: "/11.jpg", // Prépare une image 11.jpg dans public (ex: machine IRM, écran de contrôle, radiographie)
      color: "indigo"
    },
     {
      titre: "Soins Infirmiers",
      slogan: "L'art de soigner avec humanité et compétence.",
      description: "Devenez le pilier des services de soins. Apprenez les gestes techniques, le suivi des patients et la gestion des urgences.",
      points: ["Stages cliniques garantis", "Pratique en laboratoire", "Éthique médicale"],
      image: "/12.jpg", // Prépare une image 12.jpg dans public (ex: infirmière, perfusion, tensiomètre)
      color: "rose"
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER AVEC TA PHOTO 4.JPG */}
      <header className="relative bg-emerald-900 py-32 text-center text-white overflow-hidden">
        <img 
          src="/4.jpg" 
          alt="Bannière Santé" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter">
            Sciences de la Santé
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto italic font-light">
            "L'excellence au service de la vie et de la santé pour tous."
          </p>
        </div>
      </header>

      {/* SECTION FILIÈRES */}
      <section className="max-w-7xl mx-auto py-20 px-6 space-y-32">
        {filieres.map((f, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
            {/* IMAGE DE LA FILIÈRE AVEC EFFET */}
            <div className="w-full md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-emerald-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition"></div>
                <img 
                  src={f.image} 
                  alt={f.titre} 
                  className="relative rounded-3xl shadow-2xl h-[450px] w-full object-cover transform transition duration-500 hover:scale-[1.02]" 
                />
              </div>
            </div>

            {/* TEXTE DE LA FILIÈRE */}
            <div className="w-full md:w-1/2">
              <span className={`text-${f.color}-600 font-bold tracking-widest uppercase text-sm`}>
                Filière d'excellence
              </span>
              <h2 className="text-4xl font-extrabold text-slate-800 mt-2 mb-4">
                {f.titre}
              </h2>
              <p className={`text-lg font-semibold text-${f.color}-700 mb-4`}>
                {f.slogan}
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                {f.description}
              </p>
              
              <ul className="grid grid-cols-1 gap-4 mb-10">
                {f.points.map((p, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <span className={`flex items-center justify-center bg-${f.color}-100 text-${f.color}-600 w-6 h-6 rounded-full mr-4 text-xs shadow-sm`}>
                      ✔
                    </span> 
                    {p}
                  </li>
                ))}
              </ul>
              
              <a 
                href="/admissions" 
                className={`inline-block bg-${f.color}-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-${f.color}-700 hover:shadow-${f.color}-200 transition-all transform hover:-translate-y-1`}
              >
                Choisir cette filière
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* BANNIÈRE DE CONTACT RAPIDE */}
      <section className="bg-slate-50 py-16 text-center border-t border-slate-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Besoin d'en savoir plus sur nos diplômes ?</h3>
        <a href="/contact" className="text-emerald-600 font-bold border-b-2 border-emerald-600 pb-1 hover:text-emerald-700 transition">
          Contacter un conseiller d'orientation
        </a>
      </section>
    </main>
  );
}