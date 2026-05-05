"use client";
import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      {/* 🌌 HERO SECTION : STYLE INSTITUTIONNEL */}
      <section className="relative bg-[#0F172A] py-32 px-6 overflow-hidden">
        {/* Cercles décoratifs en arrière-plan */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-blue-400 font-black text-xs uppercase tracking-[0.5em] mb-6">
            Contact & Assistance
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter leading-none mb-8">
            RESTEZ EN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              RELATION
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
            Le secrétariat du Groupe Valérien Éducation est à votre entière disposition pour vous accompagner dans votre projet académique.
          </p>
        </div>
      </section>

      {/* 🏛️ SECTION CONTENU PRINCIPAL */}
      <section className="max-w-7xl mx-auto -mt-16 pb-24 px-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 📍 COLONNE GAUCHE : INFOS DE CONTACT (4/12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/60 border border-slate-100 transition-all hover:shadow-2xl">
              <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase italic border-l-4 border-blue-600 pl-4">
                Nos Bureaux
              </h2>
              
              <div className="space-y-10">
                {/* Téléphone */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-900 group-hover:text-white transition-all duration-500 shadow-sm border border-blue-100">
                    📞
                  </div>
                  <div>
                    <h3 className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Secrétariat Central</h3>
                    <p className="text-lg font-bold text-slate-800 mt-0.5 tracking-tight">
                      (+237) 655 252 080 / 655 343 466
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm border border-emerald-100">
                    💬
                  </div>
                  <div>
                    <h3 className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Support WhatsApp</h3>
                    <a href="https://wa.me/237655209877" className="text-lg font-bold text-emerald-600 mt-0.5 block hover:underline">
                      Discuter avec un conseiller
                    </a>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm border border-orange-100 shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Campus Principal</h3>
                    <p className="text-slate-700 mt-1 font-medium leading-snug">
                      Obala, Région du Centre, Cameroun.<br />
                      Axe Yaoundé-Obala, face [Point de repère].
                    </p>
                  </div>
                </div>
              </div>

              {/* Bouton GPS */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <a 
                  href="https://www.google.com/maps?q=Obala,Cameroon" 
                  target="_blank" 
                  className="flex items-center justify-center gap-3 bg-slate-900 text-white py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-blue-700 transition-all active:scale-95"
                >
                  📍 Itinéraire Google Maps
                </a>
              </div>
            </div>

            {/* Horaires Card */}
            <div className="bg-gradient-to-br from-blue-900 to-indigo-950 p-8 rounded-[2.5rem] text-white shadow-xl">
              <h3 className="text-blue-300 font-black uppercase text-[10px] tracking-widest mb-4">Disponibilité</h3>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-2xl font-bold italic">Lundi — Samedi</p>
                  <p className="text-blue-300/70 text-sm mt-1 uppercase font-bold tracking-tighter">08:00 — 17:30</p>
                </div>
                <div className="text-4xl opacity-20 italic font-black">24/7</div>
              </div>
            </div>
          </div>

          {/* ✉️ COLONNE DROITE : FORMULAIRE MODERNE (7/12) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tighter">Écrivez-nous</h2>
              <p className="text-slate-400 font-medium mt-2">Réponse garantie sous 24h ouvrées.</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="text-[10px] font-black uppercase text-blue-600 tracking-widest absolute -top-2 left-4 bg-white px-2">Nom Complet</label>
                  <input type="text" placeholder="Ex: Jean Dupont" className="w-full p-5 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-800" />
                </div>
                <div className="relative">
                  <label className="text-[10px] font-black uppercase text-blue-600 tracking-widest absolute -top-2 left-4 bg-white px-2">Contact</label>
                  <input type="text" placeholder="Email ou Téléphone" className="w-full p-5 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-800" />
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] font-black uppercase text-blue-600 tracking-widest absolute -top-2 left-4 bg-white px-2">Sujet de votre demande</label>
                <select className="w-full p-5 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-800 appearance-none">
                  <option>Information sur les inscriptions</option>
                  <option>Demande de bourse d'étude</option>
                  <option>Recrutement / Stage</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="relative">
                <label className="text-[10px] font-black uppercase text-blue-600 tracking-widest absolute -top-2 left-4 bg-white px-2">Votre Message</label>
                <textarea rows="5" placeholder="Comment pouvons-nous vous aider ?" className="w-full p-5 bg-slate-50/50 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:bg-white transition-all font-bold text-slate-800"></textarea>
              </div>

              <button type="submit" className="group relative w-full overflow-hidden bg-blue-600 p-6 rounded-2xl font-black text-white uppercase tracking-[0.2em] shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Transmettre mon message <span className="text-xl group-hover:translate-x-2 transition-transform">✉️</span>
                </span>
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 🏷️ FOOTER SIMPLE SECTION */}
      <section className="bg-slate-50 py-16 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
          Groupe Valérien Éducation • Obala • Cameroun
        </p>
      </section>
    </main>
  );
}