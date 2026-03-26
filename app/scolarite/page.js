import React from 'react';

export default function ScolaritePage() {
  const documents = [
    { type: "Emploi du temps", titre: "BTS Santé - Semaine 12", date: "26/03/2026", link: "#" },
    { type: "Emploi du temps", titre: "Polytechnique - Génie Civil", date: "26/03/2026", link: "#" },
    { type: "Résultats", titre: "Notes CC - Communication d'entreprise", date: "20/03/2026", link: "#" },
    { type: "Note d'information", titre: "Planning des examens de fin de semestre", date: "15/03/2026", link: "#" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-blue-900 text-white p-10 rounded-[2rem] shadow-2xl mb-12">
          <h1 className="text-4xl font-black mb-4">ESPACE SCOLARITÉ 🎓</h1>
          <p className="opacity-80">Consultez vos notes, emplois du temps et communiqués officiels du Groupe Valérien.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Section Emplois du temps */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
               📅 Emplois du Temps
            </h2>
            <div className="space-y-4">
              {documents.filter(d => d.type === "Emploi du temps").map((doc, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition border border-transparent hover:border-blue-200">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{doc.titre}</p>
                    <p className="text-[10px] text-slate-500 italic">Publié le {doc.date}</p>
                  </div>
                  <a href={doc.link} className="text-blue-600 font-bold text-xs bg-white px-3 py-1 rounded shadow-sm">Télécharger</a>
                </div>
              ))}
            </div>
          </div>

          {/* Section Notes & Résultats */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2">
               📊 Notes & Résultats
            </h2>
            <div className="space-y-4">
              {documents.filter(d => d.type === "Résultats").map((doc, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl hover:bg-emerald-50 transition border border-transparent hover:border-emerald-200">
                  <div>
                    <p className="font-bold text-slate-800 text-sm">{doc.titre}</p>
                    <p className="text-[10px] text-slate-500 italic">Publié le {doc.date}</p>
                  </div>
                  <a href={doc.link} className="text-emerald-600 font-bold text-xs bg-white px-3 py-1 rounded shadow-sm">Consulter</a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Accès Parent */}
        <div className="mt-12 bg-orange-100 border-2 border-orange-200 p-6 rounded-2xl flex items-center gap-4">
            <span className="text-3xl">💡</span>
            <p className="text-sm text-orange-800 font-medium">
                <strong>Info Parents :</strong> Pour accéder au bulletin complet de votre enfant, veuillez vous munir de son matricule et contacter le secrétariat d'Obala.
            </p>
        </div>
      </div>
    </main>
  );
}