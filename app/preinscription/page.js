"use client";
import React, { useState } from 'react';

export default function PreinscriptionPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Étape 2: Infos Personnelles
    nom: '', prenom: '', telephone: '', email: '', dateNaissance: '', ville: '',
    // Étape 3: Tuteur
    nomTuteur: '', telTuteur: '', lienParente: '',
    // Étape 4: Filière
    filiere: '', diplome: ''
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Félicitations ! Votre préinscription est enregistrée. Un conseiller du GVE vous contactera.");
    window.location.href = "/"; // Retour accueil
  };

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* BARRE DE PROGRESSION */}
        <div className="flex justify-between mb-12 relative">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= num ? 'bg-blue-900 text-white shadow-lg scale-110' : 'bg-slate-200 text-slate-500'}`}>
                {num}
              </div>
              <span className="text-[10px] mt-2 font-black uppercase text-slate-400">Étape {num}</span>
            </div>
          ))}
          <div className="absolute top-5 left-0 w-full h-1 bg-slate-200 -z-0">
            <div className="h-full bg-blue-900 transition-all duration-500" style={{ width: `${(step - 1) * 33.33}%` }}></div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          
          {/* ÉTAPE 1 : CONDITIONS */}
          {step === 1 && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-3xl font-black text-blue-900 mb-6 italic uppercase">1. Conditions d'admission</h2>
              <div className="bg-blue-50 p-6 rounded-2xl mb-8 text-slate-700 space-y-4 text-sm leading-relaxed">
                <p className="font-bold">En vous préinscrivant au Groupe Valérien Éducation, vous vous engagez à :</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Fournir des informations authentiques et vérifiables.</li>
                  <li>Présenter les originaux de vos diplômes lors de l'inscription physique.</li>
                  <li>Respecter le règlement intérieur du campus d'Obala.</li>
                </ul>
                <p className="italic text-xs text-blue-600">Note : La préinscription ne garantit pas une place définitive tant que les frais de scolarité ne sont pas réglés.</p>
              </div>
              <button onClick={nextStep} className="w-full bg-blue-900 text-white py-5 rounded-2xl font-black hover:bg-slate-900 transition shadow-xl">J'ACCEPTE LES CONDITIONS</button>
            </div>
          )}

          {/* ÉTAPE 2 : INFOS PERSONNELLES */}
          {step === 2 && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-2xl font-black text-blue-900 mb-8 uppercase">2. Informations Personnelles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm">
                <div>
                  <label className="block font-bold text-slate-600 mb-2">Nom(s) *</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:border-blue-900" onChange={(e) => setFormData({...formData, nom: e.target.value})} required />
                </div>
                <div>
                  <label className="block font-bold text-slate-600 mb-2">Prénom(s) *</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:border-blue-900" onChange={(e) => setFormData({...formData, prenom: e.target.value})} required />
                </div>
                <div>
                  <label className="block font-bold text-slate-600 mb-2">Téléphone *</label>
                  <input type="tel" placeholder="6xx xx xx xx" className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:border-blue-900" onChange={(e) => setFormData({...formData, telephone: e.target.value})} required />
                </div>
                <div>
                  <label className="block font-bold text-slate-600 mb-2">Date de naissance *</label>
                  <input type="date" className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:border-blue-900" onChange={(e) => setFormData({...formData, dateNaissance: e.target.value})} required />
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold">Retour</button>
                <button onClick={nextStep} className="flex-[2] bg-blue-900 text-white py-4 rounded-xl font-bold shadow-lg">Continuer</button>
              </div>
            </div>
          )}

          {/* ÉTAPE 3 : INFOS TUTEUR */}
          {step === 3 && (
            <div className="p-8 md:p-12 animate-fade-in text-sm">
              <h2 className="text-2xl font-black text-blue-900 mb-8 uppercase">3. Parent ou Tuteur</h2>
              <div className="space-y-6 mb-8">
                <div>
                  <label className="block font-bold text-slate-600 mb-2">Nom du Tuteur *</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:border-blue-900" onChange={(e) => setFormData({...formData, nomTuteur: e.target.value})} required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bold text-slate-600 mb-2">Téléphone Tuteur *</label>
                    <input type="tel" className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:border-blue-900" onChange={(e) => setFormData({...formData, telTuteur: e.target.value})} required />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-600 mb-2">Lien de parenté</label>
                    <input type="text" placeholder="Père, Mère, Oncle..." className="w-full p-4 bg-slate-50 border rounded-xl outline-none focus:border-blue-900" onChange={(e) => setFormData({...formData, lienParente: e.target.value})} />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold">Retour</button>
                <button onClick={nextStep} className="flex-[2] bg-blue-900 text-white py-4 rounded-xl font-bold shadow-lg">Continuer</button>
              </div>
            </div>
          )}

          {/* ÉTAPE 4 : VÉRIFICATION & VALIDATION */}
          {step === 4 && (
            <div className="p-8 md:p-12 animate-fade-in">
              <h2 className="text-2xl font-black text-blue-900 mb-8 uppercase">4. Vérification finale</h2>
              <div className="bg-slate-50 p-6 rounded-2xl mb-8 space-y-3 text-sm border border-slate-200">
                <p><strong>Étudiant :</strong> {formData.nom} {formData.prenom}</p>
                <p><strong>Téléphone :</strong> {formData.telephone}</p>
                <p><strong>Tuteur :</strong> {formData.nomTuteur} ({formData.telTuteur})</p>
                <p className="pt-3 border-t text-xs text-slate-500 italic">Veuillez vérifier que les numéros de téléphone sont corrects pour recevoir votre SMS de confirmation.</p>
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="flex-1 bg-slate-100 text-slate-600 py-4 rounded-xl font-bold">Modifier</button>
                <button onClick={handleSubmit} className="flex-[2] bg-emerald-600 text-white py-4 rounded-xl font-black shadow-lg hover:bg-emerald-700">VALIDER MA PRÉINSCRIPTION ✅</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}