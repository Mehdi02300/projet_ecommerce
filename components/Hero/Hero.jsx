import Button from "../ui/Button";
import CardHero from "./CardHero";

const Hero = () => {
  return (
    <main className="mt-16 md:mt-20 flex flex-col items-center gap-10">
      <h1 className="text-5xl text-center font-bold w-full md:w-3/5">
        L'expérience shopping qui vous simplifie la vie
      </h1>
      <p className="texte-black opacity-50 text-center w-full md:w-2/5">
        Découvrez une sélection de produits de qualité, soigneusement choisis pour répondre à vos
        besoins quotidiens.
      </p>
      <Button theme="primary" href="/produits">
        Voir nos produits
      </Button>
      <CardHero />
    </main>
  );
};

export default Hero;
