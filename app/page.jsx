import Hero from "@/components/Hero/Hero";
import Advantages from "@/components/Sections/Advantages/Advantages";
import FAQ from "@/components/Sections/FAQ/FAQ";
import News from "@/components/Sections/News/News";

export default function Accueil() {
  return (
    <>
      <Hero />
      <News />
      <Advantages />
      <FAQ />
    </>
  );
}
