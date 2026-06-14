import React from 'react';

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-[#090D1A] text-white pt-36 pb-24 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* En-tête de la page */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-400 font-black text-[10px] uppercase tracking-[0.4em] px-5 py-2 rounded-full border border-orange-500/20 shadow-lg">
            ADMISSIONS 2026 - 2027
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-none">
            PROCÉDURE D&apos;INSCRIPTION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">EN LIGNE</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            {"Rejoignez l'un des trois pôles d'excellence du Groupe Valérien Éducation. Suivez les 3 étapes simples ci-dessous pour soumettre votre candidature."}
          </p>
        </div>

        {/* Les 3 Étapes */}
        <div className="space-y-6 mb-16">
          
          {/* ÉTAPE 1 */}
          <div className="bg-[#111726] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start transition-all hover:border-slate-700">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0 text-orange-400 font-black text-xl">
              01
            </div>
            <div className="space-y-4 flex-grow w-full">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Télécharger la Fiche Officielle</h3>
                <p className="text-slate-400 text-sm font-light mt-1">
                  {"Récupérez la fiche individuelle d'inscription contenant les renseignements obligatoires au format PDF."}
                </p>
              </div>
              
              <a 
                href="/fiche-inscription.pdf" 
                download="Fiche_Inscription_Groupe_Valerien.pdf"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-lg transform hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Télécharger la Fiche (PDF)
              </a>
            </div>
          </div>

          {/* ÉTAPE 2 */}
          <div className="bg-[#111726] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start transition-all hover:border-slate-700">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 font-black text-xl">
              02
            </div>
            <div className="space-y-4 flex-grow">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Remplir et Rassembler les Pièces</h3>
                <p className="text-slate-400 text-sm font-light mt-1">
                  {"Remplissez soigneusement la fiche téléchargée et constituez votre dossier de candidature comprenant :"}
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-light bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                <li className="flex items-center gap-2">🔹 Fiche individuelle d&apos;inscription</li>
                <li className="flex items-center gap-2">🔹 Photocopie légalisée du BAC/BT</li>
                <li className="flex items-center gap-2">🔹 Relevés certifiés Probatoire/GCE OL</li>
                <li className="flex items-center gap-2">🔹 Acte de naissance légalisé</li>
                <li className="flex items-center gap-2">🔹 Trois (03) photos d&apos;identité 4x4</li>
                <li className="flex items-center gap-2">🔹 Certificat médical d&apos;aptitude</li>
                <li className="flex items-center gap-2">🔹 Reçu de 10 000 F CFA (Afriland Bank)</li>
              </ul>
              <p className="text-[11px] text-amber-500 italic">
                * Numéro de compte Afriland First Bank : 1037945100196
              </p>
            </div>
          </div>

          {/* ÉTAPE 3 */}
          <div className="bg-[#111726] border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start transition-all hover:border-slate-700">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400 font-black text-xl">
              03
            </div>
            <div className="space-y-4 flex-grow w-full">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight">Envoyer le Dossier par Mail</h3>
                <p className="text-slate-400 text-sm font-light mt-1">
                  {"Scannez l'ensemble de vos pièces en un seul fichier (ou dossier compressé) et envoyez-le à l'adresse e-mail officielle des admissions."}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-950/80 border border-emerald-500/20 px-6 py-4 rounded-2xl">
                <div>
                  <span className="block text-[10px] text-emerald-400 font-mono tracking-widest uppercase">ADRESSE D&apos;ENVOI</span>
                  <span className="text-sm md:text-base font-bold text-white tracking-tight">groupevalerieneducation@gmail.com</span>
                </div>
                <a 
                  href="mailto:groupevalerieneducation@gmail.com?subject=Candidature%20Inscription%202026%20-%20Groupe%20Valerien"
                  className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-black text-[10px] tracking-wider uppercase px-4 py-2 rounded-lg transition-colors shrink-0"
                >
                  Ouvrir ma messagerie
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="text-center bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
          <p className="text-xs text-slate-400 font-light">
            📌 <strong>Important :</strong> {"Le candidat devra obligatoirement se présenter au secrétariat du campus d'Obala muni des pièces physiques originales le jour de la rentrée pour validation définitive de son inscription."}
          </p>
        </div>

      </div>
    </main>
  );
}