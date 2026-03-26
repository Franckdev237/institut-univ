"use client";
import React, { useState, useRef } from 'react';

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    filiere: '',
    diplome: '',
    date: new Array().slice.call(new Date().toLocaleDateString())
  });

  const receiptRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({...formData, date: new Date().toLocaleDateString()});
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const handlePrint = () => {
    window.print();
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-2xl mx-auto border-4 border-double border-slate-300 p-8 rounded-xl bg-white" id="receipt">
          <div className="text-center border-b-2 border-slate-900 pb-6 mb-6">
            <img src="/logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-2" />
            <h1 className="text-xl font-black uppercase">Groupe Valérien Éducation</h1>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">Campus d'Obala - Excellence Académique</p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-black bg-slate-900 text-white inline-block px-6 py-2 rounded">RÉCÉPISSÉ D'INSCRIPTION</h2>
            <p className="mt-2 text-sm font-bold">N° GVE-2025-{Math.floor(Math.random() * 10000)}</p>
          </div>

          <div className="space-y-4 text-lg border-b pb-8">
            <p><strong>Nom de l'étudiant :</strong> <span className="uppercase">{formData.nom}</span></p>
            <p><strong>Téléphone :</strong> {formData.telephone}</p>
            <p><strong>Filière choisie :</strong> {formData.filiere}</p>
            <p><strong>Diplôme présenté :</strong> {formData.diplome}</p>
            <p><strong>Date de soumission :</strong> {formData.date}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 text-center text-sm font-bold uppercase">
            <div>
              <p className="mb-12">Signature Étudiant</p>
              <div className="border-t border-slate-400 pt-2 italic">Fait à Obala, le {formData.date}</div>
            </div>
            <div>
              <p className="mb-12">Cachet de l'Administration</p>
              <div className="border-t border-slate-400 pt-2 italic">Service des Admissions</div>
            </div>
          </div>

          <div className="mt-12 no-print flex flex-col gap-4">
            <button 
              onClick={handlePrint}
              className="w-full bg-blue-900 text-white py-4 rounded-xl font-black shadow-lg hover:bg-slate-800 transition"
            >
              🖨️ IMPRIMER MON RÉCÉPISSÉ (PDF)
            </button>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-slate-500 font-bold text-sm underline"
            >
              Modifier mes informations
            </button>
          </div>
        </div>

        <style jsx global>{`
          @media print {
            .no-print { display: none !important; }
            body { background: white !important; }
            main { padding: 0 !important; }
            .border-4 { border: none !important; }
          }
        `}</style>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        
        {/* PARTIE GAUCHE : INFOS & DOSSIER */}
        <div className="w-full lg:w-1/3 space-y-8">
          <div className="bg-blue-900 p-8 rounded-[2rem] text-white shadow-xl">
            <h2 className="text-2xl font-black mb-6 border-b border-blue-400 pb-4">Dossier à fournir 📂</h2>
            <p className="text-sm opacity-80 mb-6 italic">Après votre inscription en ligne, déposez ces pièces au campus d'Obala :</p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex gap-3">✅ 02 Photos 4x4</li>
              <li className="flex gap-3">✅ Photocopie de l'Acte de Naissance</li>
              <li className="flex gap-3">✅ Photocopie du Diplôme (Bac/GCE AL)</li>
              <li className="flex gap-3">✅ Photocopie de la CNI</li>
              <li className="flex gap-3">✅ Frais de dossier (Inscription)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-slate-300">
            <h3 className="font-bold text-slate-800 mb-2">Besoin d'aide ?</h3>
            <p className="text-sm text-slate-500 mb-4">Contactez le bureau des admissions pour toute question.</p>
            <a href="tel:+237600000000" className="text-blue-900 font-black">📞 (+237) 6xx xx xx xx</a>
          </div>
        </div>

        {/* PARTIE DROITE : FORMULAIRE */}
        <div className="w-full lg:w-2/3 bg-white shadow-2xl rounded-[2.5rem] border border-slate-100 overflow-hidden">
          <div className="bg-slate-900 p-8 text-white">
            <h1 className="text-3xl font-black uppercase">Candidature en ligne</h1>
            <p className="text-slate-400 text-sm">Remplissez les champs ci-dessous pour générer votre récépissé.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 font-mono uppercase tracking-tighter">Nom et Prénom *</label>
                <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500" placeholder="Ex: ANGO DAGOBERT" 
                onChange={(e) => setFormData({...formData, nom: e.target.value})} />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 font-mono uppercase tracking-tighter">Téléphone *</label>
                <input required type="tel" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-500" placeholder="6xx xx xx xx"
                onChange={(e) => setFormData({...formData, telephone: e.target.value})} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 font-mono uppercase tracking-tighter">École Choisie *</label>
                <select required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" onChange={(e) => setFormData({...formData, filiere: e.target.value})}>
                  <option value="">-- Sélectionner --</option>
                  <option value="SANTÉ">ÉCOLE DE SANTÉ</option>
                  <option value="INGÉNIERIE">ÉCOLE D'INGÉNIERIE</option>
                  <option value="COMMUNICATION">ÉCOLE DE COMMUNICATION</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 font-mono uppercase tracking-tighter">Diplôme d'entrée *</label>
                <select required className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl" onChange={(e) => setFormData({...formData, diplome: e.target.value})}>
                  <option value="">-- Votre Diplôme --</option>
                  <option value="BACCALAURÉAT">BACCALAURÉAT</option>
                  <option value="GCE A-LEVEL">GCE A-LEVEL</option>
                  <option value="PROBATOIRE">PROBATOIRE</option>
                  <option value="AUTRE">AUTRE</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition shadow-xl mt-4">
              VALIDER ET GÉNÉRER MON RÉCÉPISSÉ 📄
            </button>
          </form>
        </div>

      </div>
    </main>
  );
}