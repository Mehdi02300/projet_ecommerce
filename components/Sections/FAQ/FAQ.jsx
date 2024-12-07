"use client";

import Container from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState([]);

  const openFAQ = (index) => {
    if (isOpen.includes(index)) {
      setIsOpen(isOpen.filter((i) => i !== index));
    } else {
      setIsOpen([...isOpen, index]);
    }
  };

  return (
    <section className="my-36 relative">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">FAQ - Questions Fréquentes</h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-4 border bg-white border-gray-200 rounded-lg shadow hover:shadow-lg transition-all duration-300 h-auto"
                onClick={() => openFAQ(index)}
              >
                <div className="flex items-center justify-between hover:cursor-pointer">
                  <h2 className="text-lg font-semibold flex-1">{faq.question}</h2>
                  <ChevronDown
                    className={`transform transition-transform duration-300 ${
                      isOpen.includes(index) ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <p
                  className={`mt-6 text-gray-600 transition-all duration-500 ${
                    isOpen.includes(index) ? "block" : "hidden"
                  }`}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <div className="-z-10 absolute -left-3 bottom-0 bg-red-500 h-48 md:h-[500px] w-96 blur-[120px] animate-move-slow"></div>
        </div>
      </Container>
    </section>
  );
};

const faqs = [
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer: "Nous acceptons les cartes bancaires, PayPal, et d'autres moyens sécurisés.",
  },
  {
    question: "Quels sont les délais de livraison ?",
    answer: "Les délais varient entre 3 à 7 jours ouvrables selon votre emplacement.",
  },
  {
    question: "Comment effectuer un retour ou un échange ?",
    answer: "Contactez-nous via le formulaire de contact pour lancer la procédure de retour.",
  },
  {
    question: "Mon paiement est-il sécurisé ?",
    answer:
      "Absolument, nous utilisons un système de paiement crypté et certifié conforme aux normes internationales.",
  },
  {
    question: "Acceptez-vous les paiements en plusieurs fois ?",
    answer:
      "Oui, les paiements échelonnés sont disponibles avec certaines options (détails à vérifier à la caisse).",
  },
  {
    question: "Livrez-vous à l’international ?",
    answer:
      "Oui, nous livrons dans plusieurs pays. Les délais et frais varient selon la destination.",
  },
  {
    question: "Puis-je suivre ma commande ?",
    answer: "Une fois votre commande expédiée, vous recevrez un lien de suivi par e-mail.",
  },
  {
    question: "Dois-je créer un compte pour commander ?",
    answer:
      "Non, vous pouvez commander en tant qu'invité. Cependant, un compte vous permet de suivre vos commandes plus facilement.",
  },
  {
    question: "Quels sont vos horaires de support client ?",
    answer: "Notre équipe est disponible du lundi au vendredi, de 9h à 18h.",
  },
];

export default FAQ;
