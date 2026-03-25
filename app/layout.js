import "./globals.css";
import Navbar from "../components/Navbar"; // Note le "../" pour sortir de 'app'
import Footer from "../components/Footer";

export const metadata = {
  title: "Institut Supérieur d'Obala",
  description: "Formation d'excellence en Santé, Polytechnique et Gestion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="antialiased font-sans">
        {/* La Navbar sera en haut de chaque page */}
        <Navbar />

        {/* Le "children" représente le contenu de chaque page (page.js) */}
        <div className="min-h-screen">
          {children}
        </div>

        {/* Le Footer sera en bas de chaque page */}
        <Footer />
      </body>
    </html>
  );
}