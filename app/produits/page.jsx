"use client";

import { useState } from "react";
import ProductsCard from "@/components/Products/ProductsCard";
import Filter from "@/components/Products/Filter";
import Container from "@/components/ui/Container";

const Produits = () => {
  const [categorie, setCategorie] = useState("all");

  return (
    <Container>
      <Filter setCategorie={setCategorie} />
      <ProductsCard categorie={categorie} />
    </Container>
  );
};

export default Produits;
