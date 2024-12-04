import Container from "@/components/ui/Container";
import { CreditCard, Medal, MessageCircleQuestion, Truck } from "lucide-react";

const Advantages = () => {
  return (
    <section className="py-10 bg-tertiary flex justify-center items-center">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="border border-secondary flex flex-col justify-center items-center text-white px-5 gap-4 w-5/6 h-[300px] rounded-lg"
            >
              <div className="mb-10">{advantage.icon}</div>
              <h3 className="font-bold text-center">{advantage.title}</h3>
              <p className="text-center text-sm text-gray-500">{advantage.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const advantages = [
  {
    icon: <Truck />,
    title: "FRAIS DE LIVRAISON OFFERT",
    description: "Livraison offerte avec Mondial Relay",
  },
  {
    icon: <CreditCard />,
    title: "PAIEMENT SÉCURISÉ",
    description: "Paiements en ligne 100% sécurisés",
  },
  {
    icon: <MessageCircleQuestion />,
    title: "SUPPORT CLIENT 24/7",
    description: "Nous répondons à toutes vos questions",
  },
  {
    icon: <Medal />,
    title: "CONFORT",
    description: "Tous nos produits sont de qualités premium",
  },
];

export default Advantages;
