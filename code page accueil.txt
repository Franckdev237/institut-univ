"use client"; // Obligatoire pour l'animation et les hooks (useState, useEffect)
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // Tes images du campus (1.jpg, 2.jpg, 3.jpg doivent être dans le dossier /public)
  const images = [
    "/1.jpg", 
    "/2.jpg",
    "/3.jpg"
  ];

  const ecoles = [
    {
      nom: "Science de la Santé",
      phrase: "Former les professionnels de santé de demain.",
      couleur: "border-emerald-500",
      bg: "bg-emerald-50",
      btn: "bg-emerald-600",
      image: "/4.jpg", // Une image spécifique à la santé,
      link: "/sante"
    },
    {
      nom: "Science de l'Ingenieurie",
      phrase: "L'ingénierie et l'innovation au cœur de votre formation.",
      couleur: "border-orange-500",
      bg: "bg-orange-50",
      btn: "bg-orange-600",
      image: "/5.jpg", // Une image de machines ou d'ateliers,
      link: "/polytechnique"
    },
    {
      nom: "Science de la Communication",
      phrase: "Forger les leaders et les managers de l'économie de demain.",
      couleur: "border-purple-500",
      bg: "bg-purple-50",
      btn: "bg-purple-600",
      image: "/6.jpg", // Une image de bureau ou de salle de cours
      link: "/gestion"
    }
  ];

  // Logique du Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- SECTION HERO AVEC SLIDER --- */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Images défilantes */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-50" : "opacity-0"
            }`}
          >
            <img 
              src={img} 
              alt={`Slide ${index}`} 
              className="w-full h-full object-cover scale-105"
            />
          </div>
        ))}

        {/* Contenu Texte par-dessus */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            GROUPE VALÉRIEN ÉDUCATION
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto font-light">
            L'excellence académique à Obala. Formez-vous aux métiers de demain avec nos experts en Santé, Polytechnique et Gestion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/admissions" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-2xl transform hover:scale-105">
              S'inscrire maintenant
            </a>
            <a href="/polytechnique" className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition shadow-xl">
              Nos Formations
            </a>
          </div>
        </div>

        {/* Indicateurs du Slider (Petits points) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {images.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrentImage(i)}
              className={`h-2 rounded-full transition-all ${i === currentImage ? "bg-blue-500 w-12" : "bg-white/50 w-3 hover:bg-white"}`}
            />
          ))}
        </div>
      </section>

      {/* --- SECTION 1 : LES 3 ÉCOLES --- */}
      <section className="max-w-7xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 uppercase">Nos Pôles de Formation</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {ecoles.map((ecole, i) => (
            <div key={i} className={`overflow-hidden rounded-3xl shadow-xl transition hover:-translate-y-3 border-t-8 ${ecole.couleur} ${ecole.bg}`}>
              <img src={ecole.image} alt={ecole.nom} className="w-full h-56 object-cover" />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{ecole.nom}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-medium">{ecole.phrase}</p>
                <a href={ecole.link} className={`block text-center py-4 rounded-xl text-white font-bold shadow-lg transition-all hover:brightness-110 ${ecole.btn}`}>
                  Découvrir les filières
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2 : POURQUOI NOUS ? --- */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi choisir le Groupe Valérien ?</h2>
          <p className="text-slate-600 mb-16 max-w-2xl mx-auto italic">
            Un encadrement de proximité pour une réussite garantie.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Diplômes Agréés", desc: "Formations certifiées par l'État et reconnues sur le marché du travail.", icon: "🎓" },
              { title: "Corps Enseignant", desc: "Des docteurs et professionnels chevronnés pour votre encadrement.", icon: "👨‍🏫" },
              { title: "Insertion Pro", desc: "Un réseau de partenaires pour vos stages et vos premiers emplois.", icon: "💼" },
              { title: "Équipements", desc: "Plateaux techniques modernes et laboratoires équipés.", icon: "🔬" }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-slate-100">
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-bold text-xl mb-3 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3 : CHIFFRES CLÉS --- */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Étudiants", val: "1500+" },
            { label: "Partenaires", val: "50+" },
            { label: "Filières", val: "15" },
            { label: "Réussite", val: "98%" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-5xl font-black mb-2">{stat.val}</div>
              <div className="text-blue-300 uppercase text-sm font-bold tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 5 : APPEL À L'ACTION --- */}
      <section className="py-24 px-6 bg-slate-100 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-[3rem] bg-white shadow-2xl border border-slate-200">
          <h2 className="text-4xl font-black text-slate-900 mb-6">Prêt à construire votre avenir ?</h2>
          <p className="text-slate-600 mb-10 text-xl font-medium">Les pré-inscriptions pour la rentrée 2026 sont officiellement ouvertes.</p>
          <a href="/admissions" className="inline-block bg-blue-800 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition shadow-xl transform hover:scale-110">
            Déposer mon dossier en ligne
          </a>
        </div>
      </section>
    </main>
  );
}