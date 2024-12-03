import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIxVzPD1GvCHg8jf9sdedLGpaVcFcLz9c",
  authDomain: "projet-ecommerce-34807.firebaseapp.com",
  projectId: "projet-ecommerce-34807",
  storageBucket: "projet-ecommerce-34807.firebasestorage.app",
  messagingSenderId: "427582933840",
  appId: "1:427582933840:web:be11624bd1e960da98fa55",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
