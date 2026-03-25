import React from 'react';

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Header de la page */}
      <div className="bg-blue-900 py-20 text-center text-white relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
          className="absolute inset-0 w-full h-full object-cover opacity-20" 
          alt="Admissions"
        />
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Portail des Admissions</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Rejoignez l'Institut Stvalo et donnez une impulsion décisive à votre carrière. 
            Remplissez le formulaire ci-dessous pour débuter votre pré-inscription.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto -mt-10 px-6 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Sidebar d'informations */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-blue-600">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center">
                <span className="mr-2">📁</span> Pièces à fournir
              </h3>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex items-start tracking-tight">✅ Copie certifiée du Baccalauréat</li>
                <li className="flex items-start tracking-tight">✅ Relevés de notes des 3 dernières années</li>
                <li className="flex items-start tracking-tight">✅ Photocopie de la CNI</li>
                <li className="flex items-start tracking-tight">✅ 4 photos d'identité 4x4</li>
              </ul>
            </div>

            <div className="bg-emerald-600 p-6 rounded-2xl shadow-md text-white">
              <h3 className="font-bold mb-2">Besoin d'aide ?</h3>
              <p className="text-sm opacity-90 mb-4">Notre service d'orientation est disponible pour vous accompagner.</p>
              <div className="text-sm font-bold underline">admissions@stvalo-univ.cm</div>
            </div>
          </div>

          {/* Formulaire principal */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-8 border-b pb-4">Formulaire de Pré-inscription</h2>
            
            <form className="space-y-6">
              {/* Infos Personnelles */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2">Nom Complet</label>
                  <input type="text" placeholder="Ex: Jean Moussa" className="p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2">Téléphone</label>
                  <input type="tel" placeholder="+237 6xx xxx xxx" className="p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-500 uppercase mb-2">Adresse Email</label>
                <input type="email" placeholder="votre@email.com" className="p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>

              {/* Choix de l'école */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2">École Souhaitée</label>
                  <select className="p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                    <option>Sélectionnez une école</option>
                    <option>École de Santé</option>
                    <option>École Polytechnique</option>
                    <option>École de Gestion</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-bold text-slate-500 uppercase mb-2">Niveau d'entrée</label>
                  <select className="p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none">
                    <option>Niveau 1 (Bac)</option>
                    <option>Niveau 2 (Bac+1)</option>
                    <option>Niveau 3 (Licence/BTS)</option>
                    <option>Master 1</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-slate-500 uppercase mb-2">Dernier diplôme obtenu</label>
                <input type="text" placeholder="Ex: Baccalauréat C, D, ou G" className="p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition" />
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-blue-800 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
                  Soumettre ma candidature
                  <span className="ml-2">→</span>
                </button>
                <p className="text-[10px] text-slate-400 mt-4 text-center italic">
                  En soumettant ce formulaire, vous acceptez d'être contacté par notre service pédagogique pour finaliser votre inscription.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}