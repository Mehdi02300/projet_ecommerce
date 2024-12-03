"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebaseConfig";
import Link from "next/link";

const CardNews = () => {
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
    <div className="py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {produits.map((produit) => (
          <div
            key={produit.id}
            className="border rounded-lg p-4 bg-white shadow-lg hover:scale-105 duration-300"
          >
            <Link href="/produits">
              <img
                src={produit.image}
                alt={produit.name}
                className="w-full h-72 object-cover mb-2 rounded"
              />
              <h2 className="text-xl">{produit.name}</h2>
              <p className="text-gray-600">{produit.description}</p>
              <p className="text-black font-bold mt-2">{produit.price}€</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardNews;
