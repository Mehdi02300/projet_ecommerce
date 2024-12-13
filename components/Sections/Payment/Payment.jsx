"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { utiliserPanier } from "@/context/CartContext";

export default function Payment() {
  const [email, setEmail] = useState("");

  const { viderLePanier } = utiliserPanier();

  const router = useRouter();

  useEffect(() => {
    // Récupérer l'email stocké dans le localStorage
    const storedEmail = localStorage.getItem("guestEmail");
    if (!storedEmail) {
      // Rediriger si aucun email n'est trouvé
      window.location.href = "/email";
    } else {
      setEmail(storedEmail);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    viderLePanier();
    alert("Féliciation !");
  };

  return (
    <Container className={"h-screen"}>
      <button onClick={() => router.back()} className="flex gap-2 mt-32">
        <ArrowLeft /> <span>Retour</span>
      </button>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Paiement</h1>
          <p className="mb-4 text-center">Vous payez en tant qu'invité avec l'email : {email}</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 font-medium">Numéro de carte</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="flex gap-4">
              <div>
                <label className="block mb-2 font-medium">Date d'expiration</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="MM/AA"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 font-medium">CVV</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            <div className="text-center">
              <Button theme="primary">Valider le paiement</Button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
}
