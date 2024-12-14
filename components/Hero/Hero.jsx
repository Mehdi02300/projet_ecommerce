import Button from "../ui/Button";
import Container from "../ui/Container";
import CardHero from "./CardHero";

const Hero = () => {
  return (
    <main className="flex flex-col items-center h-screen pt-32 bg-gradient-to-bl from-white via-red-100 to-red-500">
      <Container className={"flex-1 flex flex-col justify-start text-center space-y-6"}>
        <h1
          className="text-5xl font-bold w-full md:w-3/5 mx-auto"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          L'expérience <span className="text-[#ED3833]">shopping</span> qui vous{" "}
          <span className="text-[#ED3833]">simplifie</span> la vie
        </h1>
        <p
          className="text-gray-500 w-full md:w-2/5 mx-auto"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="1800"
        >
          Découvrez une sélection de produits de qualité, soigneusement choisis pour répondre à vos
          besoins quotidiens.
        </p>
        <div
          className="w-3/4 md:w-1/3 mx-auto"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="2500"
        >
          <Button theme="primary" href="/produits">
            Voir nos produits
          </Button>
        </div>
      </Container>
      <CardHero />
      <div className="absolute -bottom-36 left-0 w-full h-48 md:h-72 bg-gradient-to-b from-transparent via-white/100 to-white/100"></div>
    </main>
  );
};

export default Hero;
