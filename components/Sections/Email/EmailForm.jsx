"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const EmailForm = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    // Stocker l'email dans le localStorage ou dans un contexte si nécessaire
    localStorage.setItem("guestEmail", email);

    // Rediriger vers la page de paiement
    router.push("/paiement");
  };

  return (
    <Container className={"h-screen"}>
      <button onClick={() => router.back()} className="flex gap-2 mt-32">
        <ArrowLeft /> <span>Retour</span>
      </button>
      <div className="flex flex-col justify-start items-center mt-48">
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Continuer en mode invité</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="email" placeholder="Entrez votre email" value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 border border-gray-300 rounded-lg" required />
            <Button theme="primary">Continuer en mode invité</Button>
          </form>
        </div>
      </div>
    </Container>
  );
};
