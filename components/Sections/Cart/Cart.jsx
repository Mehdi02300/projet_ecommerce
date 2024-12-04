"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { utiliserPanier } from "@/context/CartContext";

export default function Cart() {
  const { panier, supprimerDuPanier } = utiliserPanier();

  if (panier.length === 0) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="font-bold text-xl">Votre panier est vide.</p>
      </div>
    );
  }

  const total = panier.reduce((acc, produit) => acc + produit.price * produit.quantity, 0);

  return (
    <Container>
      <div className="min-h-screen pt-32 flex flex-col">
        <h2 className="text-4xl font-bold mb-10">Mon Panier</h2>
        <div className="flex-1 flex flex-col justify-between h-full">
          <div>
            {panier.map((produit) => (
              <div key={produit.id} className="flex justify-between items-center mb-4 border-t border-b py-5">
                <div className="flex items-start gap-5">
                  <img src={produit.image} alt={produit.name} className="w-32 h-auto object-cover rounded-lg shadow-lg" />
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{produit.name}</p>
                    <p>{produit.price} €</p>
                    <p>Quantité : {produit.quantity}</p>
                  </div>
                </div>
                <Button onClick={() => supprimerDuPanier(produit.id)}>Retirer</Button>
              </div>
            ))}
          </div>
          <div className="my-4 text-end">
            <p className="font-bold">Total: {total} €</p>
            <Button theme="primary">Passer à la caisse</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
