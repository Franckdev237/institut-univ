import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer";

export const metadata = {
  // 1. TITRE ET DESCRIPTION (SEO de base)
  title: {
    default: "Groupe Valérien Éducation | Institut Supérieur d'Obala",
    template: "%s | GVE Obala" 
  },
  description: "Le Groupe Valérien Éducation à Obala (Lékié) propose des formations professionnelles d'excellence en Santé, Ingénierie et Communication. Inscrivez-vous pour la session 2025-2026.",
  keywords: ["BTS Obala", "Formation professionnelle Cameroun", "École de santé Obala", "Polytechnique Obala", "Groupe Valérien Éducation", "Études supérieures Lékié", "Institut privé Obala"],
  authors: [{ name: "Ango Dagobert" }],

  // 2. OPEN GRAPH (Pour WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Groupe Valérien Éducation | L'Excellence à Obala",
    description: "Rejoignez un pôle de formation moderne au cœur de la Lékié. Santé, Ingénierie, Communication.",
    url: 'https://www.groupevalerien.com', // À remplacer par ton futur domaine
    siteName: 'GVE Obala',
    images: [
      {
        url: '/32.jpg', // Image de partage (doit être dans le dossier public)
        width: 1200,
        height: 630,
        alt: 'Campus Groupe Valérien Éducation Obala',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  // 3. CONFIGURATION DES ICÔNES (Favicon)
  // Note : Les fichiers doivent être physiquement dans le dossier /public
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  // 4. RÉFÉRENCEMENT (Robots Google)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased font-sans bg-white text-slate-900">
        {/* Barre de navigation fixe (News + Menu) */}
        <Navbar />

        {/* Contenu principal : 
            pt-[115px] est crucial pour que le contenu ne soit pas caché 
            sous la Navbar qui est en "fixed".
        */}
        <main className="min-h-screen pt-[115px]">
          {children}
        </main>

        {/* Pied de page */}
        <Footer />
      </body>
    </html>
  );
}