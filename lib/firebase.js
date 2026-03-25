import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Ta configuration exacte extraite de la console Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCR4vBpHc86UC_mVrfxdywNxI1F50xVJBU",
  authDomain: "groupe-valerien-education.firebaseapp.com",
  projectId: "groupe-valerien-education",
  storageBucket: "groupe-valerien-education.firebasestorage.app",
  messagingSenderId: "1843922077362",
  appId: "1:1843922077362:web:3380129b4e2b89418c6bab",
  measurementId: "G-Y3MP38WGWY"
};

// Initialisation sécurisée pour Next.js (évite les doubles instances)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Analytics (seulement dans le navigateur)
const analytics = typeof window !== 'undefined' ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;

export { app, analytics };