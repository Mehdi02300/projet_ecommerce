"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebaseConfig";
import Link from "next/link";
import Button from "../ui/Button";
import { utiliserPanier } from "@/context/CartContext";
import Container from "../ui/Container";

const ProductsCard = ({ className }) => {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const { ajouterAuPanier } = utiliserPanier();

  useEffect(() => {
    const recupererProduits = async () => {
      const requete = await getDocs(collection(db, "products"));
      const tableauProduits = requete.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduits(tableauProduits);
      setLoading(false);
    };

    recupererProduits();
  }, []);

  const handleAjouterAuPanier = (produit) => {
    ajouterAuPanier(produit);
  };

  return (
    <Container>
      <div>
        <h1 className="text-2xl font-bold mb-4">Nos produits</h1>
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-tertiary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto">
            {produits.map((produit) => (
              <div key={produit.id}>
                <div className="border rounded-lg p-4 bg-white shadow-lg hover:scale-105 duration-300 h-96">
                  <Link href={`/produits/${produit.id}`}>
                    <div className="aspect-square relative mb-2">
                      <img
                        src={produit.imageUrl}
                        alt={produit.name}
                        className="absolute inset-0 w-full h-full object-contain rounded"
                      />
                    </div>
                    <h2 className="text-xl">{produit.name}</h2>
                    <p className="text-gray-600">{produit.description}</p>
                    <p className="text-black font-bold mt-2">{produit.price}€</p>
                  </Link>
                </div>
                <div className="mt-5 text-center">
                  <Button theme="primary" onClick={() => handleAjouterAuPanier(produit)}>
                    Ajouter au panier
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
};

export default ProductsCard;
