/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active l'export statique pour générer le dossier /out
  output: 'export', 
  
  // Désactive l'optimisation des images pour permettre l'usage de placeholders 
  // externes sans serveur de traitement d'image spécifique
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;