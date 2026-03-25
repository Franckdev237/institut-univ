import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-blue-900 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-black mb-4">Contactez-nous</h1>
        <p className="text-blue-200 max-w-xl mx-auto px-6">
          Une question ? Un besoin d'orientation ? Notre équipe vous accueille tous les jours à notre campus d'Obala.
        </p>
      </div>

      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">Nos Coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">📍</div>
                  <div>
                    <p className="font-bold text-slate-800">Localisation</p>
                    <p className="text-slate-600 italic">Obala, Route de Batchenga, à côté de la station service.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-emerald-100 p-3 rounded-lg text-emerald-600 mr-4">📞</div>
                  <div>
                    <p className="font-bold text-slate-800">Téléphone</p>
                    <p className="text-slate-600">+237 6xx xxx xxx / +237 2xx xxx xxx</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg text-purple-600 mr-4">✉️</div>
                  <div>
                    <p className="font-bold text-slate-800">Email</p>
                    <p className="text-slate-600">contact@stvalo-univ.cm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg text-orange-600 mr-4">🕒</div>
                  <div>
                    <p className="font-bold text-slate-800">Horaires d'ouverture</p>
                    <p className="text-slate-600">Lundi - Vendredi : 08h00 - 17h00</p>
                    <p className="text-slate-600">Samedi : 09h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte Google Maps (Iframe) */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.411654446416!2d11.523458620861117!3d4.156548684525832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7c33842c5b%3A0xc078864f77c3a032!2sObala!5e0!3m2!1sfr!2scm!4v1709730000000!5m2!1sfr!2scm" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Formulaire de Message Rapide */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Votre Nom" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="email" placeholder="Votre Email" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <input type="text" placeholder="Sujet" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
              <textarea placeholder="Votre message..." rows="5" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              <button className="w-full bg-blue-900 text-white font-bold py-4 rounded-xl hover:bg-blue-800 transition shadow-lg">
                Envoyer le message
              </button>
            </form>
          </div>

        </div>
      </section>
    </main>
  );
}