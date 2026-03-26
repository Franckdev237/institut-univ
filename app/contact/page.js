"use client";
import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-blue-900 py-20 px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Contactez-nous</h1>
        <div className="w-20 h-2 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-blue-100 max-w-2xl mx-auto font-medium">
          Le secrétariat du Groupe Valérien Éducation est à votre écoute pour toute question relative aux inscriptions et aux formations.
        </p>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* COLONNE GAUCHE : INFOS DE CONTACT */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 italic">Nos Coordonnées</h2>
              
              <div className="space-y-8">
                {/* Téléphone */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">📞</div>
                  <div>
                    <h3 className="font-black text-slate-800 uppercase text-sm tracking-widest">Appels & Secrétariat</h3>
                    <p className="text-xl font-bold text-blue-900 mt-1 hover:underline cursor-pointer">(+237) 655209877</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">💬</div>
                  <div>
                    <h3 className="font-black text-slate-800 uppercase text-sm tracking-widest">WhatsApp Direct</h3>
                    <a href="https://wa.me/+237655209877" className="text-xl font-bold text-emerald-600 mt-1 block hover:underline">Cliquez pour discuter</a>
                  </div>
                </div>

                {/* Localisation */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition-all shadow-sm">📍</div>
                  <div>
                    <h3 className="font-black text-slate-800 uppercase text-sm tracking-widest">Localisation du Campus</h3>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Obala, Région du Centre, Cameroun.<br />
                      Axe Yaoundé-Obala, à proximité de [Préciser un point de repère].
                    </p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-slate-900 group-hover:text-white transition-all shadow-sm">⏰</div>
                  <div>
                    <h3 className="font-black text-slate-800 uppercase text-sm tracking-widest">Horaires d'ouverture</h3>
                    <p className="text-slate-600 mt-1">Lundi - Vendredi : 08h00 - 16h30</p>
                    <p className="text-slate-600 italic text-sm">Samedi : Sur rendez-vous uniquement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton Google Maps */}
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border-2 border-dashed border-slate-200">
                <p className="font-bold text-slate-800 mb-4 text-center">Utilisez le GPS pour venir nous voir</p>
                <a 
                    href="https://www.google.com/maps?q=Obala,Cameroon" 
                    target="_blank" 
                    className="flex items-center justify-center gap-3 bg-blue-900 text-white py-4 px-8 rounded-2xl font-black shadow-xl hover:bg-blue-800 transition transform active:scale-95"
                >
                    🗺️ OUVRIR DANS GOOGLE MAPS
                </a>
            </div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE DE MESSAGE RAPIDE */}
          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16"></div>
            
            <h2 className="text-2xl font-black text-slate-900 mb-6 uppercase">Envoyez un message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">Nom Complet</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-slate-400 ml-1">Email / Téléphone</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">Sujet</label>
                <input type="text" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">Votre Message</label>
                <textarea rows="4" className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-blue-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black hover:bg-blue-900 transition-all shadow-lg">
                ENVOYER MON MESSAGE ✉️
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}