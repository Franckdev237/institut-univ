export const metadata = {
  // 1. Titre et Description de base
  title: {
    default: "Groupe Valérien Éducation | Institut Supérieur d'Obala",
    template: "%s | GVE Obala" // Permet d'avoir "Santé | GVE Obala" sur les sous-pages
  },
  description: "Le Groupe Valérien Éducation à Obala propose des formations professionnelles d'excellence (BTS) en Santé, Ingénierie et Communication. Inscrivez-vous pour la session 2025-2026.",
  keywords: ["BTS Obala", "Formation professionnelle Cameroun", "École de santé Obala", "Polytechnique Obala", "Groupe Valérien Éducation", "Études supérieures Lékié"],
  author: "Ango Dagobert",

  // 2. Open Graph (Pour WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Groupe Valérien Éducation | L'Excellence à Obala",
    description: "Rejoignez un pôle de formation moderne au cœur de la Lékié. Santé, Ingénierie, Communication.",
    url: 'https://www.groupevalerien.com', // Remplace par ton vrai domaine plus tard
    siteName: 'GVE Obala',
    images: [
      {
        url: '/32.jpg', // L'image qui s'affichera lors du partage
        width: 1200,
        height: 630,
        alt: 'Campus Groupe Valérien Éducation',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  // 3. Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: "Groupe Valérien Éducation",
    description: "Formation professionnelle d'excellence à Obala.",
    images: ['/32.jpg'],
  },

  // 4. Les Icônes (Favicon)
  icons: {
    icon: '/icon.png',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  // 5. Robots (Pour dire à Google d'indexer le site)
  robots: {
    index: true,
    follow: true,
  },
};