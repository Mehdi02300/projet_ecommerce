import ProductsCard from "@/components/Products/ProductsCard";
import Container from "@/components/ui/Container";

const News = () => {
  return (
    <section className="mb-32">
      <Container>
        <h2 className="mt-32 text-4xl font-semibold mb-5">Nouveautés</h2>
        <ProductsCard />
      </Container>
    </section>
  );
};

export default News;
