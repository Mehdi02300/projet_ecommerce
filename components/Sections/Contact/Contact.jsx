import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <Container>
      <div className="min-h-screen pt-32 space-y-8">
        <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-lg leading-7">
          Nous sommes là pour vous aider. Que ce soit pour une question, une suggestion ou une réclamation, n’hésitez pas à nous contacter. Notre équipe se fera un plaisir de vous répondre dans les
          plus brefs délais.
        </p>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Formulaire de contact</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="nom" className="block text-lg font-medium mb-2">
                Nom complet
              </label>
              <input type="text" id="nom" placeholder="Votre nom" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-2">
                Email
              </label>
              <input type="email" id="email" placeholder="Votre email" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none" />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium mb-2">
                Message
              </label>
              <textarea id="message" placeholder="Votre message" rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
            </div>

            <Button theme="primary" type="submit" className="w-full">
              Envoyer
            </Button>
          </form>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Nous contacter directement</h2>
          <div className="space-y-4">
            <p className="text-lg">
              <strong>Email :</strong> support@shopika.com
            </p>
            <p className="text-lg">
              <strong>Téléphone :</strong> +33 1 23 45 67 89
            </p>
            <p className="text-lg">
              <strong>Adresse :</strong> 123 Rue de Commerce, 75001 Paris, France
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Suivez-nous</h2>
          <p className="text-lg">Restez informé de nos dernières nouveautés et offres spéciales en nous suivant sur les réseaux sociaux :</p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Twitter
            </a>
          </div>
        </section>
      </div>
    </Container>
  );
}
