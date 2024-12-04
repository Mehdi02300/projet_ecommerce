"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebaseConfig";
import Link from "next/link";
import Button from "../ui/Button";
import { utiliserPanier } from "@/context/CartContext";
import Container from "../ui/Container";

const ProductsCard = ({ className }) => {
  const [produits, setProduits] = useState([]); // État pour stocker les produits
  const [loading, setLoading] = useState(true); // État de chargement

  // Importer la fonction ajouterAuPanier depuis le contexte
  const { ajouterAuPanier } = utiliserPanier();

  useEffect(() => {
    const recupererProduits = async () => {
      const requete = await getDocs(collection(db, "products")); // Récupérer les produits depuis Firestore
      const tableauProduits = requete.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduits(tableauProduits);
      setLoading(false); // Indiquer que le chargement est terminé
    };

    recupererProduits();
  }, []);

  // Fonction pour gérer l'ajout au panier
  const handleAjouterAuPanier = (produit) => {
    ajouterAuPanier(produit); // Appeler la fonction du contexte
  };

  return (
    <Container>
      <div className={`md:h-screen mt-32 ${className}`}>
        <h1 className="text-2xl font-bold mb-4">Nos produits</h1>
        {loading ? (
          // Afficher un spinner pendant le chargement
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-primary"></div>
          </div>
        ) : (
          // Afficher les produits une fois le chargement terminé
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {produits.map((produit) => (
              <div key={produit.id}>
                <div className="border rounded-lg p-4 bg-white shadow-lg hover:scale-105 duration-300">
                  {/* Lien vers la page du produit */}
                  <Link href={`/produits/${produit.id}`}>
                    <img src={produit.image} alt={produit.name} className="w-full h-72 object-cover mb-2 rounded" />
                    <h2 className="text-xl">{produit.name}</h2>
                    <p className="text-gray-600">{produit.description}</p>
                    <p className="text-black font-bold mt-2">{produit.price}€</p>
                  </Link>
                </div>
                {/* Bouton pour ajouter au panier */}
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
