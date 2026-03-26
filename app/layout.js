"use client"; // Obligatoire pour la gestion des cookies et des icônes flottantes
import "./globals.css";
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";
import FloatingSidebar from "../components/FloatingSidebar";

// Note : Dans Next.js 13+ App Router avec "use client", 
// on définit les metadata dans un fichier séparé ou on utilise une astuce.
// Pour rester simple et efficace, voici la structure :

export default function RootLayout({ children }) {
  const [showCookies, setShowCookies] = useState(false);

  // Gestion de l'affichage de la bannière de cookies
  useEffect(() => {
    const consent = localStorage.getItem("gve-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowCookies(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("gve-cookie-consent", "true");
    setShowCookies(false);
  };

  return (
    <html lang="fr">
      <head>
        <title>Groupe Valérien Éducation | Institut Supérieur d'Obala</title>
        <meta name="description" content="Formation d'excellence à Obala (Lékié) : Santé, Ingénierie et Communication. Inscrivez-vous pour la session 2025-2026." />
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="antialiased font-sans bg-white text-slate-900">
        
        {/* 1. BARRE LATÉRALE (Style Arts & Métiers) */}
        <FloatingSidebar />

        {/* 2. NAVIGATION (Avec le bandeau Breaking News) */}
        <Navbar />

        {/* 3. CONTENU PRINCIPAL 
            Le padding-top (pt-[115px]) évite que le texte soit caché sous la barre fixe
        */}
        <main className="min-h-screen pt-[115px]">
          {children}
        </main>

        {/* 4. BANNIÈRE COOKIES (Apparaît en bas à droite) */}
        {showCookies && (
          <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-[380px] bg-slate-900 text-white p-6 rounded-[2.5rem] shadow-2xl z-[100] border border-white/10 animate-fade-in-up no-print">
            <div className="flex items-start gap-4">
              <span className="text-3xl">🍪</span>
              <div>
                <h4 className="font-bold text-lg mb-1">Confidentialité</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Nous utilisons des cookies pour optimiser votre navigation sur le site du GVE Obala.
                </p>
                <div className="flex gap-3">
                  <button 
                    onClick={acceptCookies}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-xl font-bold text-sm transition"
                  >
                    Accepter
                  </button>
                  <button 
                    onClick={() => setShowCookies(false)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 py-2 rounded-xl font-bold text-sm transition"
                  >
                    Plus tard
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. PIED DE PAGE */}
        <Footer />

      </body>
    </html>
  );
}