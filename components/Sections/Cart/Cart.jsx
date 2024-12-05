"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { utiliserPanier } from "@/context/CartContext";

export default function Cart() {
  const { panier, augmenterQuantite, diminuerQuantite, supprimerDuPanier } = utiliserPanier();
  const [isCheckout, setIsCheckout] = useState(false);

  const total = panier.reduce((acc, produit) => acc + produit.price * produit.quantity, 0).toFixed(2);

  if (panier.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="font-bold text-xl">Votre panier est vide.</p>
      </div>
    );
  }

  return (
    <Container>
      <div className="min-h-screen pt-32 flex flex-col">
        <h2 className="text-4xl font-bold mb-10">Mon Panier</h2>
        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            {panier.map((produit) => (
              <div key={produit.id} className="flex flex-wrap justify-between items-center mb-4 border-t border-b py-5 gap-5">
                <div className="flex items-start gap-5 flex-1">
                  <div className="w-32 h-32 relative">
                    <img src={produit.imageUrl} alt={produit.name} className="absolute inset-0 w-full h-full object-contain rounded-lg shadow-lg" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{produit.name}</p>
                    <p>{produit.price} €</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button onClick={() => diminuerQuantite(produit.id)}>-</Button>
                  <p className="text-lg font-bold">{produit.quantity}</p>
                  <Button onClick={() => augmenterQuantite(produit.id)}>+</Button>
                </div>

                <Button theme="danger" onClick={() => supprimerDuPanier(produit.id)}>
                  Retirer
                </Button>
              </div>
            ))}
          </div>

          <div className="my-4 text-end">
            <p className="font-bold text-2xl mb-4">Total: {total} €</p>
            <Button href="/email" theme="primary">
              Passer à la caisse
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
