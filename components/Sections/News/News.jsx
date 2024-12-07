import ProductsCard from "@/components/Products/ProductsCard";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const News = () => {
  return (
    <section className="my-36 relative">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between w-3/4 mx-auto mb-10">
          <h2 className="text-4xl font-semibold mb-5">Nouveautés</h2>
          <Link href="/produits" className="flex gap-2 hover:underline">
            <span>Voir tout</span>
            <ArrowRight />
          </Link>
        </div>
        <ProductsCard limit={3} />
      </Container>
    </section>
  );
};

export default News;
