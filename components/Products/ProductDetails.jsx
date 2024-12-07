"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/db/firebaseConfig";
import Container from "../ui/Container";
import { ArrowLeft } from "lucide-react";
import Button from "../ui/Button";
import { utiliserPanier } from "@/context/CartContext";

export default function ProduitDetails() {
  const { ajouterAuPanier } = utiliserPanier();
  const router = useRouter();
  const [produitDetails, setProduitDetails] = useState(null);
  const [chargement, setChargement] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const recupererProduit = async () => {
      if (!id) return;
      try {
        const documentProduit = await getDoc(doc(db, "products", id));
        if (documentProduit.exists()) {
          setProduitDetails({ id: documentProduit.id, ...documentProduit.data() });
        } else {
          console.warn("Produit non trouvé.");
        }
      } catch (erreur) {
        console.error("Erreur lors de la récupération du produit :", erreur);
      } finally {
        setChargement(false);
      }
    };
    recupererProduit();
  }, [id]);

  const handleAjouterAuPanier = () => {
    if (produitDetails) {
      ajouterAuPanier(produitDetails);
    }
  };

  if (chargement) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Chargement des détails du produit...</p>
      </div>
    );
  }

  if (!produitDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-500">Produit introuvable.</p>
      </div>
    );
  }

  return (
    <Container>
      <section className="h-screen">
        <button onClick={() => router.back()} className="flex gap-2 mb-5 mt-32 hover:underline">
          <ArrowLeft /> <span>Retour</span>
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 aspect-square relative">
            <img
              src={produitDetails.imageUrl}
              alt={produitDetails.name}
              className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{produitDetails.name}</h1>
            <p className="text-gray-700 text-lg mb-6">{produitDetails.description}</p>
            <p className="text-black font-bold text-2xl mb-6">{produitDetails.price} €</p>
            <Button theme="primary" onClick={handleAjouterAuPanier}>
              Ajouter au panier
            </Button>
          </div>
        </div>
      </section>
    </Container>
  );
}
