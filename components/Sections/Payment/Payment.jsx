"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function Payment() {
  const [email, setEmail] = useState("");
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

  return (
    <Container className={"h-screen"}>
      <button onClick={() => router.back()} className="flex gap-2 mt-32">
        <ArrowLeft /> <span>Retour</span>
      </button>
      <div className="flex flex-col justify-center items-center mt-48">
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-6">Paiement</h1>
          <p className="mb-4">Vous payez en tant qu'invité avec l'email : {email}</p>
          <Button theme="primary">Valider le paiement</Button>
        </div>
      </div>
    </Container>
  );
}
