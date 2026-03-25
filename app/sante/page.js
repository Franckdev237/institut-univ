import React from 'react';

export default function SantePage() {
  const filieres = [
    {
      titre: "Soins Infirmiers",
      slogan: "L'art de soigner avec humanité et compétence.",
      description: "Devenez le pilier des services de soins. Apprenez les gestes techniques, le suivi des patients et la gestion des urgences.",
      points: ["Stages cliniques garantis", "Pratique en laboratoire", "Éthique médicale"],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600",
      color: "emerald"
    },
    {
      titre: "Sage-Femme / Maïeutique",
      slogan: "Accompagner la vie dès ses premiers instants.",
      description: "Une formation d'excellence pour le suivi de la grossesse, l'accouchement et les soins post-nataux.",
      points: ["Suivi néonatal", "Obstétrique pratique", "Accompagnement psychologique"],
      image: "https://images.unsplash.com/photo-1584515159074-299f090726d4?q=80&w=600",
      color: "teal"
    },
    {
      titre: "Techniques de Laboratoire",
      slogan: "L'exactitude du diagnostic au service du patient.",
      description: "Maîtrisez les analyses biologiques, chimiques et médicales pour aider au diagnostic des pathologies.",
      points: ["Hématologie", "Biochimie clinique", "Microbiologie"],
      image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=600",
      color: "blue"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <header className="bg-emerald-900 py-24 text-center text-white relative">
        <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Santé" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">Science de Santé</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto italic">"L'excellence au service de la vie et de la santé pour tous."</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto py-20 px-6 space-y-20">
        {filieres.map((f, i) => (
          <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
            <div className="w-full md:w-1/2">
              <img src={f.image} alt={f.titre} className="rounded-3xl shadow-2xl h-[400px] w-full object-cover" />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm italic">Filière d'excellence</span>
              <h2 className="text-4xl font-bold text-slate-800 mt-2 mb-4">{f.titre}</h2>
              <p className="text-lg font-semibold text-emerald-700 mb-4">{f.slogan}</p>
              <p className="text-slate-600 mb-6 leading-relaxed">{f.description}</p>
              <ul className="grid grid-cols-1 gap-3 mb-8">
                {f.points.map((p, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 font-medium">
                    <span className="bg-emerald-100 text-emerald-600 p-1 rounded-full mr-3 text-xs">✔</span> {p}
                  </li>
                ))}
              </ul>
              <a href="/admissions" className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-700 transition">Choisir cette filière</a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}