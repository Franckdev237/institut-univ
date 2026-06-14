import React from 'react';

export default function InscriptionPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pt-36 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* En-tête de la page - Simple & Pro */}
        <div className="text-center space-y-3 mb-12 border-b border-slate-200 pb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Admissions Académiques 2026 - 2027
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Procédure d&apos;inscription en ligne
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Suivez les 3 étapes ci-dessous pour télécharger, remplir et transmettre votre dossier de candidature.
          </p>
        </div>

        {/* Les 3 Étapes épurées */}
        <div className="space-y-6 mb-12">
          
          {/* ÉTAPE 1 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-5 items-start shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 font-bold text-lg">
              1
            </div>
            <div className="space-y-3 flex-grow w-full">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Télécharger la fiche d&apos;inscription</h3>
                <p className="text-slate-600 text-sm mt-0.5">
                  Récupérez la fiche individuelle officielle au format PDF pour commencer votre dossier.
                </p>
              </div>
              
              <a 
                href="/fiche-inscription.pdf" 
                download="Fiche_Inscription_Groupe_Valerien.pdf"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Télécharger le fichier PDF
              </a>
            </div>
          </div>

          {/* ÉTAPE 2 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-5 items-start shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 font-bold text-lg">
              2
            </div>
            <div className="space-y-3 flex-grow w-full">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Remplir la fiche et réunir les pièces</h3>
                <p className="text-slate-600 text-sm mt-0.5">
                  Remplissez la fiche téléchargée et constituez votre dossier physique avec les documents suivants :
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <li>• Fiche d&apos;inscription dûment remplie</li>
                <li>• Photocopie légalisée du BAC ou BT</li>
                <li>• Relevés certifiés Probatoire / GCE OL</li>
                <li>• Acte de naissance légalisé</li>
                <li>• Trois (03) photos d&apos;identité 4x4</li>
                <li>• Certificat médical d&apos;aptitude</li>
                <li>• Reçu des frais de dossier (10 000 F CFA)</li>
              </ul>
              <p className="text-xs text-slate-500 font-medium">
                * Frais à verser chez Afriland First Bank — Compte N° : 1037945100196
              </p>
            </div>
          </div>

          {/* ÉTAPE 3 */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col md:flex-row gap-5 items-start shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 font-bold text-lg">
              3
            </div>
            <div className="space-y-3 flex-grow w-full">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Envoyer le dossier complet</h3>
                <p className="text-slate-600 text-sm mt-0.5">
                  Scannez l&apos;ensemble de vos documents et transmettez-les à l&apos;adresse électronique de l&apos;établissement.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 text-white px-5 py-4 rounded-xl w-full">
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Adresse e-mail de réception</span>
                  <span className="text-sm md:text-base font-mono font-bold text-blue-400">groupevalerieneducation@gmail.com</span>
                </div>
                <a 
                  href="mailto:groupevalerieneducation@gmail.com?subject=Candidature%20Inscription%202026%20-%20Groupe%20Valerien"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs px-4 py-2 rounded-lg transition-colors shrink-0"
                >
                  Envoyer un e-mail
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Note de rappel en bas */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-center">
          <p className="text-xs text-amber-800 leading-relaxed">
            📌 <strong>Rappel important :</strong> Le candidat devra obligatoirement présenter les pièces physiques originales au secrétariat du campus d&apos;Obala dès la rentrée académique pour la validation définitive de son inscription.
          </p>
        </div>

      </div>
    </main>
  );
}