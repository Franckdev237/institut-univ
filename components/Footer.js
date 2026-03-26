export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Colonne 1 : Identité de l'Institut */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-400">
            Institut Supérieur d'Obala
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Une institution académique de référence dédiée à l'excellence. Nous formons les experts de demain en santé, technologie et management au cœur du Cameroun.
          </p>
          <div className="flex space-x-4">
            {/* Icônes de réseaux sociaux (Placeholders) */}
            <span className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 cursor-pointer transition">fb</span>
            <span className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-400 cursor-pointer transition">in</span>
            <span className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 cursor-pointer transition">yt</span>
          </div>
        </div>

        {/* Colonne 2 : Liens Rapides (Navigation) */}
        <div className="md:ml-12">
          <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">
            Nos Écoles
          </h3>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li>
              <a href="/sante" className="hover:text-emerald-400 transition flex items-center">
                <span className="mr-2">›</span> École de Santé
              </a>
            </li>
            <li>
              <a href="/polytechnique" className="hover:text-orange-400 transition flex items-center">
                <span className="mr-2">›</span> École Polytechnique
              </a>
            </li>
            <li>
              <a href="/gestion" className="hover:text-purple-400 transition flex items-center">
                <span className="mr-2">›</span> École de Gestion
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition flex items-center">
                <span className="mr-2">›</span> Admissions
              </a>
            </li>
          </ul>
        </div>

        {/* Colonne 3 : Contact & Localisation */}
        <div>
          <h3 className="text-lg font-semibold mb-6 border-b border-slate-700 pb-2 inline-block">
            Nous Contacter
          </h3>
          <ul className="space-y-4 text-slate-300 text-sm">
            <li className="flex items-start italic">
              <span className="text-blue-400 mr-3">📍</span>
              Obala, Cameroun <br /> Face à l'entrée principale
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-3">📞</span>
              +237 6 55 20 98 77
            </li>
            <li className="flex items-center">
              <span className="text-blue-400 mr-3">✉️</span>
              info@is-obala.cm
            </li>
            <li className="mt-6">
              <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold">
                Ouvert : Lun - Ven (08h - 17h)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Barre de Copyright */}
      <div className="mt-16 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} <span className="text-slate-300">Institut Stvalo d'Obala</span>. 
          Développé avec passion pour l'excellence académique.
        </p>
      </div>
    </footer>
  );
}