import React from 'react';

export default function CommunicationPage() {
  const filieres = [
    {
      id: "communication-org",
      titre: "BTS Communication des Organisations",
      slogan: "Informer, valoriser, connecter les institutions au public.",
      description: "La filière Communication des Organisations forme des professionnels capables de concevoir, gérer et diffuser l’image, les messages et les actions de communication d’une entreprise, d’une institution ou d’une organisation.",
      details: "Cette formation permet aux étudiants d’acquérir des compétences en :",
      points: ["Communication interne et externe", "Relations publiques", "Rédaction professionnelle", "Stratégie de communication", "Communication institutionnelle", "Organisation d’événements", "Gestion de l’image"],
      image: "/24.jpg",
      couleur: "text-indigo-600",
      icon: "🏢"
    },
    {
      id: "journalisme",
      titre: "BTS Journalisme",
      slogan: "Informer avec rigueur, éclairer avec vérité.",
      description: "La filière Journalisme forme des professionnels capables de rechercher, traiter, rédiger et diffuser l’information à travers les différents supports médiatiques.",
      details: "Les apprenants y développent des compétences en :",
      points: ["Techniques de reportage", "Rédaction journalistique", "Interview et enquête", "Presse écrite, radio, TV et web", "Traitement de l’actualité", "Déontologie et éthique", "Communication médiatique"],
      image: "/25.jpg",
      couleur: "text-blue-600",
      icon: "🎙️"
    },
    {
      id: "audiovisuel",
      titre: "BTS Audiovisuel",
      slogan: "Créer l’image, produire l’émotion, raconter le monde.",
      description: "La filière Audiovisuel forme des techniciens et créateurs capables de produire, filmer, monter et diffuser des contenus visuels et sonores.",
      details: "Cette formation permet d’acquérir des compétences en :",
      points: ["Prise de vue", "Montage vidéo", "Captation et traitement du son", "Réalisation de contenus", "Techniques de production", "Gestion de studio", "Supports multimédias"],
      image: "/26.jpg",
      couleur: "text-purple-600",
      icon: "🎥"
    },
    {
      id: "infographie",
      titre: "BTS Infographie / Design Graphique",
      slogan: "Transformer les idées en images qui marquent.",
      description: "La filière Infographie / Design Graphique forme des professionnels capables de concevoir des supports visuels destinés à la communication, à la publicité et au marketing.",
      details: "Les étudiants y apprennent à maîtriser :",
      points: ["Création graphique", "Mise en page", "Identité visuelle", "Publicité visuelle", "Supports imprimés et numériques", "Retouche d’image", "Communication visuelle"],
      image: "/27.jpg",
      couleur: "text-pink-600",
      icon: "🎨"
    },
    {
      id: "publicite-marketing",
      titre: "BTS Publicité et Marketing Digital",
      slogan: "Créer l’impact, attirer l’attention, développer la visibilité.",
      description: "La filière Publicité et Marketing Digital forme des professionnels capables de promouvoir une marque à travers les outils modernes et les plateformes numériques.",
      details: "Cette formation développe des compétences en :",
      points: ["Stratégie publicitaire", "Marketing digital", "Réseaux sociaux", "Campagnes promotionnelles", "Branding et image de marque", "Communication commerciale", "Contenu numérique"],
      image: "/28.jpg",
      couleur: "text-orange-600",
      icon: "🚀"
    },
    {
      id: "photographie",
      titre: "BTS Photographie Professionnelle",
      slogan: "Capturer l’instant, révéler le message.",
      description: "La filière Photographie Professionnelle forme des techniciens de l’image capables de réaliser, traiter et valoriser des productions photographiques.",
      details: "Les apprenants sont formés en :",
      points: ["Prise de vue", "Cadrage et lumière", "Retouche photo", "Photographie événementielle", "Photographie publicitaire", "Traitement numérique", "Création de contenus visuels"],
      image: "/29.jpg",
      couleur: "text-cyan-600",
      icon: "📸"
    },
    {
      id: "cinema-multimedia",
      titre: "BTS Métiers du Cinéma et de la Production Multimédia",
      slogan: "Imaginer, produire, diffuser des contenus qui inspirent.",
      description: "Cette filière forme des professionnels capables de participer à la création, à la production et à la diffusion de contenus audiovisuels et cinématographiques.",
      details: "Cette formation permet d’acquérir des compétences en :",
      points: ["Écriture de scénario", "Réalisation", "Production audiovisuelle", "Montage et postproduction", "Création multimédia", "Gestion de projets créatifs", "Diffusion numérique"],
      image: "/30.jpg",
      couleur: "text-rose-600",
      icon: "🎬"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-indigo-900 py-24 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
           <img src="/31.jpg" alt="Bannière" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Communication & Médias</h1>
          <p className="text-xl text-indigo-200 max-w-3xl mx-auto italic font-light">
            Formez-vous aux métiers de l'image, de l'information et du digital.
          </p>
        </div>
      </header>

      {/* Liste des filières */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid gap-12">
          {filieres.map((f, index) => (
            <div key={f.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500`}>
              
              {/* Image */}
              <div className="w-full md:w-1/2 relative group overflow-hidden rounded-2xl">
                <img src={f.image} alt={f.titre} className="w-full h-80 object-cover transform transition group-hover:scale-110 duration-700" />
                <div className={`absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-bold shadow-sm ${f.couleur}`}>
                  {f.icon} BTS
                </div>
              </div>

              {/* Contenu */}
              <div className="w-full md:w-1/2">
                <h2 className={`text-3xl font-black mb-2 leading-tight ${f.couleur}`}>{f.titre}</h2>
                <p className="text-slate-900 font-bold mb-4 italic">"{f.slogan}"</p>
                
                <div className="text-slate-600 mb-6 leading-relaxed">
                  <p className="mb-3">{f.description}</p>
                  <p className="font-semibold text-slate-800">{f.details}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                  {f.points.map((p, i) => (
                    <div key={i} className="flex items-center text-sm font-medium text-slate-700">
                      <span className={`mr-2 ${f.couleur}`}>●</span> {p}
                    </div>
                  ))}
                </div>

                <a href="/admissions" className="inline-block bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-600 transition shadow-lg">
                  S'inscrire en {f.id === "communication-org" ? "Communication" : f.titre.split('BTS ')[1]}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-indigo-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Le monde des médias vous attend.</h2>
        <p className="mb-8 opacity-90">Inscriptions ouvertes pour l'année académique 2025-2026.</p>
        <a href="/admissions" className="bg-white text-indigo-600 px-10 py-4 rounded-full font-black text-lg shadow-xl hover:bg-slate-900 hover:text-white transition">
          REJOINDRE L'INSTITUT MAINTENANT
        </a>
      </section>
    </main>
  );
}