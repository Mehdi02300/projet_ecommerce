import Container from "@/components/ui/Container";

export default function About() {
  return (
    <Container>
      <div className="min-h-screen pt-32 space-y-6">
        <h1 className="text-4xl font-bold mb-6">À propos de nous</h1>
        <p className="text-lg leading-7">
          Bienvenue chez <span className="font-bold text-primary">Shopika</span>, votre destination en ligne pour des produits soigneusement sélectionnés. Nous sommes passionnés par la création d’une
          expérience d’achat unique, où qualité, simplicité et satisfaction client sont au cœur de nos priorités.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Notre mission</h2>
          <p className="text-lg leading-7">
            Chez Shopika, nous croyons que chaque client mérite des produits de qualité, sans compromis. Notre mission est de vous fournir une gamme variée d’articles, allant des essentiels du
            quotidien aux cadeaux uniques, le tout à des prix compétitifs.
          </p>
          <p className="text-lg leading-7">Nous nous efforçons de dépasser vos attentes grâce à un service client irréprochable et des produits triés sur le volet pour répondre à vos besoins.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Nos valeurs</h2>
          <ul className="list-disc list-inside text-lg leading-7">
            <li>
              <span className="font-semibold">Qualité :</span> Nous travaillons uniquement avec des fournisseurs de confiance pour garantir des produits durables et performants.
            </li>
            <li>
              <span className="font-semibold">Transparence :</span> Nos descriptions de produits sont claires, et nos prix sont sans surprise.
            </li>
            <li>
              <span className="font-semibold">Innovation :</span> Nous sommes toujours à la recherche de nouvelles façons d'améliorer votre expérience d'achat.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Pourquoi nous choisir ?</h2>
          <p className="text-lg leading-7">En choisissant Shopika, vous bénéficiez de :</p>
          <ul className="list-disc list-inside text-lg leading-7">
            <li>Une sélection de produits de qualité.</li>
            <li>Un service client réactif et à votre écoute.</li>
            <li>Des transactions sécurisées pour une tranquillité d’esprit.</li>
            <li>Des livraisons rapides et fiables.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Nos engagements envers l'environnement</h2>
          <p className="text-lg leading-7">
            Nous sommes conscients de notre impact environnemental et nous faisons tout notre possible pour réduire notre empreinte écologique. Cela inclut l’utilisation d’emballages recyclables et
            des partenariats avec des fournisseurs respectueux de l’environnement.
          </p>
          <p className="text-lg leading-7">En soutenant Shopika, vous soutenez une entreprise qui place la durabilité et la responsabilité au centre de ses préoccupations.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Rejoignez notre communauté</h2>
          <p className="text-lg leading-7">
            Nous aimons connecter avec nos clients. Suivez-nous sur les réseaux sociaux pour découvrir les nouveautés, participer à des concours, et partager vos expériences avec nos produits.
            Ensemble, construisons une communauté autour de la qualité et du style.
          </p>
          <p className="text-lg font-semibold">Merci de faire partie de notre aventure. Nous sommes ravis de vous avoir parmi nous !</p>
        </section>
      </div>
    </Container>
  );
}
