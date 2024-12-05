import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Configuration de Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Fonction pour télécharger une image
export const uploadProductImage = async (file) => {
  if (!file) {
    console.log("Aucun fichier sélectionné");
    return null;
  }

  const storageRef = ref(storage, `products/${file.name}`); // Path de stockage (dans un dossier "products")

  try {
    // Uploader le fichier
    const snapshot = await uploadBytes(storageRef, file);
    console.log("Téléchargement réussi", snapshot);

    // Obtenir l'URL de téléchargement de l'image
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log("URL de l'image:", downloadURL);

    return downloadURL; // Retourne l'URL pour être utilisée dans ta base de données
  } catch (error) {
    console.error("Erreur lors du téléchargement:", error);
    return null;
  }
};

export { db, auth, storage };
