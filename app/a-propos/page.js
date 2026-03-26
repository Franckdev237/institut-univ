"use client";
import React, { useState, useEffect } from 'react';

export default function AProposPage() {
  const [currentImg, setCurrentImg] = useState(0);
  const imagesVision = ["/v1.jpg", "/v2.jpg", "/v3.jpg", "/v4.jpg", "/v5.jpg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % imagesVision.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* SECTION 1 : BANNIÈRE */}
      <header className="relative h-[300px] md:h-[400px] flex items-center justify-center text-white">
        <img src="/32.jpg" alt="Bannière" className="absolute inset-0 w-full h-full object-cover brightness-[0.4]" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">À Propos de Nous</h1>
          <div className="w-24 h-2 bg-blue-600 mx-auto"></div>
        </div>
      </header>

      {/* SECTION 2 : MOT DU PROMOTEUR */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Image du Promoteur */}
          <div className="w-full lg:w-2/5">
            <div className="sticky top-28">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/10 rounded-[2rem] blur-2xl"></div>
                <img src="/promoteur.jpg" alt="Promoteur Groupe Valérien" className="relative w-full rounded-3xl shadow-2xl border-b-8 border-blue-900" />
                <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-6 rounded-2xl shadow-xl hidden md:block">
                  <p className="font-black text-xl">LE PROMOTEUR</p>
                  <p className="text-blue-200 text-sm uppercase tracking-widest">Groupe Valérien Éducation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Texte du Mot de Bienvenue */}
          <div className="w-full lg:w-3/5">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Mot de bienvenue</h2>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
              Bienvenue au <span className="text-blue-900">GROUPE VALÉRIEN ÉDUCATION</span>
            </h3>
            
            <div className="space-y-6 text-slate-700 leading-relaxed text-lg">
              <p>
                Bienvenue au GROUPE VALÉRIEN ÉDUCATION, un espace d’excellence, de savoir et de formation professionnelle dédié à l’épanouissement de la jeunesse camerounaise.
              </p>
              <p>
                Implanté à <span className="font-bold text-slate-900">Obala</span>, dans la Région du Centre du Cameroun, à proximité de Yaoundé, notre Groupe se positionne comme un véritable pôle de formation moderne, accessible et tourné vers les besoins réels de notre société.
              </p>
              <p>
                Le GROUPE VALÉRIEN ÉDUCATION est porté par une ambition forte : former des jeunes compétents, responsables, créatifs et prêts à relever les défis du monde professionnel.
              </p>

              <div className="bg-slate-50 p-8 rounded-2xl border-l-4 border-blue-900 my-8">
                <p className="font-bold text-slate-900 mb-4">Nous mettons à disposition trois établissements complémentaires :</p>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 font-black text-blue-900 text-sm">
                  <li className="flex items-center gap-2">● ÉCOLE DE COMMUNICATION</li>
                  <li className="flex items-center gap-2">● ÉCOLE DE SANTÉ</li>
                  <li className="flex items-center gap-2">● ÉCOLE D'INGÉNIERIE</li>
                </ul>
              </div>

              <p>
                Notre engagement est clair : mettre la qualité de la formation, l’encadrement, la pratique professionnelle et l’insertion au cœur de notre action éducative.
              </p>
              
              <p className="italic font-medium text-slate-800 border-l-2 border-slate-300 pl-6 py-2">
                "Au GROUPE VALÉRIEN ÉDUCATION, nous croyons fermement que l’éducation est l’un des leviers les plus puissants du développement individuel, communautaire et national."
              </p>

              <p className="text-blue-900 font-black pt-4">
                Bienvenue au GROUPE VALÉRIEN ÉDUCATION,<br />
                là où se construisent les compétences de demain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 : NOTRE VISION */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Notre Vision</h2>
              <h3 className="text-4xl font-black mb-8 leading-tight">Devenir la référence majeure de la formation au Cameroun</h3>
              
              <div className="space-y-6 text-slate-300 text-lg">
                <p>
                  Nous aspirons à bâtir, à <span className="text-white font-bold">Obala</span>, un cadre éducatif moderne capable de former une jeunesse compétente, disciplinée, responsable et apte à contribuer efficacement au développement de sa communauté et de la nation.
                </p>
                <p>
                  Notre ambition est de permettre aux jeunes de bénéficier d’une formation de qualité, sans nécessairement devoir s’éloigner de leur environnement familial pour rejoindre les grandes métropoles.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "Promouvoir une éducation de qualité",
                    "Adaptation au marché de l'emploi",
                    "Innovation et excellence professionnelle",
                    "Former les bâtisseurs de demain"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                      <span className="text-blue-400 font-black">0{i+1}</span>
                      <span className="text-sm font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Images de la vision (Diaporama) */}
            <div className="w-full lg:w-1/2 relative h-[350px] md:h-[500px]">
              <div className="absolute -inset-10 bg-blue-600/20 rounded-full blur-[100px]"></div>
              {imagesVision.map((img, index) => (
                <div key={index} className={`absolute inset-0 transition-all duration-1000 transform ${index === currentImg ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-95 rotate-2'}`}>
                   <img src={img} alt={`Vision ${index}`} className="w-full h-full object-cover rounded-[2.5rem] shadow-2xl border-2 border-white/10" />
                   <div className="absolute bottom-6 left-6 bg-blue-600 text-white px-6 py-2 rounded-full font-black text-sm shadow-lg">
                      VISION {index + 1}
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}