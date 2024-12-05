"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Créer le contexte du panier
const CartContext = createContext();

// Hook personnalisé pour accéder au panier
export const utiliserPanier = () => {
  return useContext(CartContext);
};

// Fournisseur du panier
export const CartProvider = ({ children }) => {
  const [panier, setPanier] = useState([]);

  // Charger le panier depuis localStorage au démarrage
  useEffect(() => {
    const panierSauvegardé = localStorage.getItem("panier");
    if (panierSauvegardé) {
      try {
        const panierParsed = JSON.parse(panierSauvegardé);
        if (Array.isArray(panierParsed)) {
          setPanier(panierParsed);
        } else {
          localStorage.removeItem("panier"); // Si ce n'est pas un tableau, on le supprime
        }
      } catch (erreur) {
        console.error("Erreur lors du chargement du panier depuis localStorage:", erreur);
        localStorage.removeItem("panier"); // Nettoyage en cas d'erreur de parsing
      }
    }
  }, []);

  // Sauvegarder le panier dans localStorage à chaque changement
  useEffect(() => {
    if (panier.length > 0) {
      localStorage.setItem("panier", JSON.stringify(panier));
    } else {
      localStorage.removeItem("panier"); // Si panier vide, supprimer du localStorage
    }
  }, [panier]);

  // Ajouter un produit au panier
  const ajouterAuPanier = (produit) => {
    setPanier((panierPrécedent) => {
      const produitDéjàDansPanier = panierPrécedent.find((item) => item.id === produit.id);
      if (produitDéjàDansPanier) {
        // Si le produit est déjà dans le panier, on incrémente la quantité
        return panierPrécedent.map((item) => (item.id === produit.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        // Sinon, on ajoute le produit avec une quantité de 1
        return [...panierPrécedent, { ...produit, quantity: 1 }];
      }
    });
  };

  // Supprimer un produit du panier
  const supprimerDuPanier = (id) => {
    setPanier((panierPrécedent) => {
      const nouveauPanier = panierPrécedent.filter((item) => item.id !== id);
      if (nouveauPanier.length === 0) {
        localStorage.removeItem("panier"); // Si panier vide, on nettoie localStorage
      }
      return nouveauPanier;
    });
  };

  // Augmenter la quantite
  const augmenterQuantite = (id) => {
    setPanier((prev) => prev.map((produit) => (produit.id === id ? { ...produit, quantity: produit.quantity + 1 } : produit)));
  };

  // Diminuer la quantite
  const diminuerQuantite = (id) => {
    setPanier((prev) => prev.map((produit) => (produit.id === id ? { ...produit, quantity: produit.quantity > 1 ? produit.quantity - 1 : 1 } : produit)));
  };

  // Vider le panier
  const viderLePanier = () => {
    setPanier([]);
    localStorage.removeItem("panier");
  };

  return <CartContext.Provider value={{ panier, ajouterAuPanier, supprimerDuPanier, viderLePanier, augmenterQuantite, diminuerQuantite }}>{children}</CartContext.Provider>;
};
