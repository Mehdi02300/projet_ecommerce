import Button from "../ui/Button";
import Container from "../ui/Container";
import CardHero from "./CardHero";

const Hero = () => {
  return (
    <main className="flex flex-col items-center h-[calc(100vh-80px)]">
      <Container className={"flex-1 flex flex-col justify-center text-center space-y-6"}>
        <h1 className="text-5xl font-bold w-full md:w-3/5 mx-auto">
          L'expérience shopping qui vous simplifie la vie
        </h1>
        <p className="text-black opacity-50 w-full md:w-2/5 mx-auto">
          Découvrez une sélection de produits de qualité, soigneusement choisis pour répondre à vos
          besoins quotidiens.
        </p>
        <div className="w-3/4 md:w-1/3 mx-auto">
          <Button theme="primary" href="/produits">
            Voir nos produits
          </Button>
        </div>
      </Container>
      <CardHero />
    </main>
  );
};

export default Hero;
