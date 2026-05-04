"use client";
import React, { useState, useRef } from 'react';

export default function AdmissionsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    filiere: '',
    diplome: '',
    date: new Date().toLocaleDateString()
  });

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
            <img src="/logo-poly.png" alt="Logo" className="w-20 h-20 mx-auto mb-2" />
            <h1 className="text-xl font-black uppercase text-blue-900">Groupe Valérien Éducation</h1>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 italic">Campus d'Obala - Excellence Académique</p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-black bg-slate-900 text-white inline-block px-6 py-2 rounded">RÉCÉPISSÉ D'INSCRIPTION</h2>
            <p className="mt-2 text-sm font-bold">N° GVE-2026-{Math.floor(Math.random() * 10000)}</p>
          </div>

          <div className="space-y-4 text-lg border-b pb-8 text-slate-900">
            <p><strong>Nom de l'étudiant :</strong> <span className="uppercase font-black">{formData.nom}</span></p>
            <p><strong>Téléphone :</strong> {formData.telephone}</p>
            <p><strong>École / Filière :</strong> {formData.filiere}</p>
            <p><strong>Diplôme présenté :</strong> {formData.diplome}</p>
            <p><strong>Date de soumission :</strong> {formData.date}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 text-center text-sm font-bold uppercase text-slate-800">
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
              className="w-full bg-blue-900 text-white py-4 rounded-xl font-black shadow-lg hover:bg-blue-800 transition transform active:scale-95"
            >
              🖨️ IMPRIMER MON RÉCÉPISSÉ (PDF)
            </button>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-slate-500 font-bold text-sm underline hover:text-blue-900"
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
    <main className="min-h-screen bg-slate-50 pb-20 font-sans">
      
      {/* 📢 BANNIÈRE PUBLICITAIRE D'ORIENTATION */}
      <div className="bg-blue-900 text-white py-4 px-6 text-center shadow-lg mb-8 no-print">
        <p className="text-sm md:text-base font-black animate-pulse tracking-widest uppercase">
          🚨 JOURNÉES D'ORIENTATION À OBALA : DU 11 AU 13 MAI 2026 — VENEZ DÉCOUVRIR VOTRE FUTURE ÉCOLE !
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-12">
        
        {/* PARTIE GAUCHE : DOSSIER & FLYERS */}
        <div className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-200">
            <h2 className="text-2xl font-black mb-6 text-blue-900 border-b pb-4 uppercase italic">Dossier à fournir 📂</h2>
            <ul className="space-y-4 text-sm font-bold text-slate-700">
              <li className="flex gap-3 items-center bg-slate-50 p-3 rounded-xl border border-slate-100">✅ 02 Photos 4x4</li>
              <li className="flex gap-3 items-center bg-slate-50 p-3 rounded-xl border border-slate-100">✅ Acte de Naissance (Photocopie)</li>
              <li className="flex gap-3 items-center bg-slate-50 p-3 rounded-xl border border-slate-100">✅ Diplôme : Bac / GCE AL (Photocopie)</li>
              <li className="flex gap-3 items-center bg-slate-50 p-3 rounded-xl border border-slate-100">✅ Photocopie de la CNI</li>
              <li className="flex gap-3 items-center bg-blue-50 p-3 rounded-xl border border-blue-100 text-blue-900 font-black">💰 Frais d'inscription (Campus)</li>
            </ul>
          </div>

          {/* FLYER DYNAMIQUE SELON L'ÉCOLE (Aperçu) */}
          <div className="bg-slate-900 p-6 rounded-[2.5rem] text-white shadow-2xl overflow-hidden relative group">
            <h3 className="text-lg font-black mb-4 flex items-center gap-2">📄 Fiche d'Orientation</h3>
            <img 
              src={formData.filiere === 'SANTÉ' ? '/Flyers-01.jpg' : formData.filiere === 'COMMUNICATION' ? '/Flyers-03.jpg' : '/Flyers-02.jpg'} 
              alt="Flyer Officiel" 
              className="w-full h-auto rounded-xl shadow-md group-hover:scale-105 transition duration-500"
            />
            <p className="mt-4 text-[10px] opacity-60 text-center italic">Document officiel agréé par les Ministères (MINESUP / MINSANTE)</p>
          </div>

          <div className="bg-white p-8 rounded-3xl border-2 border-dashed border-blue-200 text-center">
            <h3 className="font-black text-slate-900 mb-2 uppercase italic">Besoin d'aide ?</h3>
            <div className="space-y-2">
              <a href="tel:+237655209877" className="block text-blue-900 font-black text-lg hover:underline">📞 +237 655 20 98 77</a>
              <a href="tel:+237654525208" className="block text-blue-900 font-black text-lg hover:underline">📞 +237 654 52 52 08</a>
            </div>
            <p className="text-[10px] text-slate-500 mt-4 uppercase font-bold tracking-widest">Obala, Face Gendarmerie</p>
          </div>
        </div>

        {/* PARTIE DROITE : FORMULAIRE */}
        <div className="w-full lg:w-2/3 bg-white shadow-2xl rounded-[3rem] border border-slate-100 overflow-hidden mb-12">
          <div className="bg-blue-900 p-10 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-3xl md:text-4xl font-black uppercase italic tracking-tighter">Candidature en ligne</h1>
              <p className="text-blue-200 text-sm font-medium mt-2">Générez votre récépissé officiel pour l'année académique 2025-2026.</p>
            </div>
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
              <img src="/logo-poly.png" className="w-64 h-64" alt="" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Nom et Prénom *</label>
                <input required type="text" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-900 focus:bg-white transition-all font-bold text-slate-900" placeholder="Ex: ANGO DAGOBERT" 
                onChange={(e) => setFormData({...formData, nom: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Téléphone *</label>
                <input required type="tel" className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-blue-900 focus:bg-white transition-all font-bold text-slate-900" placeholder="655 xx xx xx"
                onChange={(e) => setFormData({...formData, telephone: e.target.value})} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Établissement Choisi *</label>
                <select required className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-slate-900 outline-none focus:border-blue-900 transition-all" 
                  onChange={(e) => setFormData({...formData, filiere: e.target.value})}>
                  <option value="">-- Sélectionner l'école --</option>
                  <option value="SANTÉ">ISSAT-MVO (SCIENCES DE LA SANTÉ)</option>
                  <option value="INGÉNIERIE">IP-SV (POLYTECHNIQUE / INGÉNIERIE)</option>
                  <option value="COMMUNICATION">ISSAT-MVO (COMMUNICATION)</option>
                  <option value="GESTION">ISSAT-MVO (GESTION)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black text-slate-500 mb-2 uppercase tracking-widest">Diplôme présenté *</label>
                <select required className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl font-bold text-slate-900 outline-none focus:border-blue-900 transition-all" 
                  onChange={(e) => setFormData({...formData, diplome: e.target.value})}>
                  <option value="">-- Votre Diplôme --</option>
                  <option value="BACCALAURÉAT / GCE AL">BACCALAURÉAT / GCE A-LEVEL</option>
                  <option value="PROBATOIRE">PROBATOIRE (Aide-Soignant)</option>
                  <option value="LICENCE">LICENCE ACADÉMIQUE</option>
                  <option value="AUTRE">AUTRE ÉQUIVALENT</option>
                </select>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-2xl">
              <p className="text-amber-800 text-xs font-bold leading-relaxed">
                ℹ️ En cliquant sur valider, vous confirmez l'exactitude des informations fournies. Un récépissé sera généré instantanément pour votre dossier physique.
              </p>
            </div>

            <button type="submit" className="w-full bg-blue-900 text-white py-6 rounded-[2rem] font-black text-xl hover:bg-slate-900 transition-all shadow-2xl shadow-blue-900/20 transform active:scale-95 uppercase italic tracking-tighter">
              VALIDER MA CANDIDATURE 📄
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}