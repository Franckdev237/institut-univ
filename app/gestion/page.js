import React from 'react';

export default function GestionPage() {
  const programmes = [
    {
      titre: "Comptabilité et Finance",
      slogan: "Maîtrisez les chiffres, pilotez la performance.",
      description: "Devenez un expert des chiffres. Analyse financière, gestion budgétaire et audit pour les entreprises modernes.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600"
    },
    {
      titre: "Marketing et Digital",
      slogan: "Influencez le marché, créez l'impact.",
      description: "Apprenez les stratégies de vente, la communication digitale et la gestion de marque à l'ère du numérique.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=600"
    },
    {
      titre: "Ressources Humaines",
      slogan: "Le capital humain au centre de la stratégie.",
      description: "Apprenez à recruter, former et motiver les talents pour accompagner la croissance des organisations.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=600"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-purple-900 py-24 text-center text-white relative">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" className="absolute inset-0 w-full h-full object-cover opacity-30" alt="Gestion" />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase">Science de la Communication</h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">Préparez-vous à devenir les leaders et managers de l'économie africaine de demain.</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {programmes.map((p, i) => (
            <div key={i} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-200 flex flex-col">
              <img src={p.image} alt={p.titre} className="h-56 w-full object-cover" />
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold text-purple-900 mb-3">{p.titre}</h3>
                <p className="text-sm font-bold text-slate-400 uppercase mb-4 tracking-tighter tracking-widest">{p.slogan}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{p.description}</p>
              </div>
              <div className="p-8 pt-0">
                <a href="/admissions" className="block text-center border-2 border-purple-600 text-purple-600 font-bold py-3 rounded-xl hover:bg-purple-600 hover:text-white transition">
                  En savoir plus
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Un cursus orienté vers l'emploi</h2>
          <p className="text-slate-600 mb-8">90% de nos diplômés en Gestion intègrent le marché du travail dans les 6 mois suivant l'obtention de leur BTS ou Licence.</p>
          <a href="/admissions" className="bg-purple-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:bg-purple-700 transition">Déposer ma candidature</a>
        </div>
      </section>
    </main>
  );
}