"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebaseConfig";

export default function Produits() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    const recupererProduits = async () => {
      const requete = await getDocs(collection(db, "products"));
      const tableauProduits = requete.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduits(tableauProduits);
    };

    recupererProduits();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nos produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {produits.map((produit) => (
          <div key={produit.id} className="border rounded-lg p-4 bg-white shadow-md">
            <img src={produit.image} alt={produit.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{produit.name}</h2>
            <p className="text-gray-600">{produit.description}</p>
            <p className="text-blue-600 font-bold mt-2">${produit.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
