import ProductsCard from "@/components/Products/ProductsCard";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const News = () => {
  return (
    <section className="my-32">
      <Container>
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-semibold mb-5">Nouveautés</h2>
          <Link href="/produits" className="flex gap-2">
            <span>Voir tout</span>
            <ArrowRight />
          </Link>
        </div>
        <ProductsCard className={"mt-0 md:h-1/2"} />
      </Container>
    </section>
  );
};

export default News;
