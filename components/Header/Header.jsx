"use client";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { utiliserPanier } from "@/context/CartContext";
import Container from "../ui/Container";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const { panier } = utiliserPanier();

  // Calcul du nombre total d'articles dans le panier
  const totalArticles = panier.reduce((acc, item) => acc + item.quantity, 0);

  // État pour déclencher l'animation
  const [animate, setAnimate] = useState(false);

  // Déclencher l'animation lorsque `totalArticles` change
  useEffect(() => {
    if (totalArticles > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300); // Animation dure 300ms
      return () => clearTimeout(timer);
    }
  }, [totalArticles]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md h-[80px]"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Container className={"flex justify-between items-center pt-4"}>
        <div className="flex gap-2">
          <ShoppingBag />
          <span>Shopika</span>
        </div>
        <nav className="flex bg-tertiary text-white rounded-full">
          <Link
            href="/"
            className={classNames(
              "hover:bg-[#495057] px-5 py-3 rounded-full",
              pathname === "/" ? "bg-primary hover:bg-primary" : ""
            )}
          >
            Accueil
          </Link>
          <Link
            href="/produits"
            className={classNames(
              "hover:bg-[#495057] px-5 py-3 rounded-full",
              pathname === "/produits" ? "bg-primary hover:bg-primary" : ""
            )}
          >
            Produits
          </Link>
          <Link
            href="/a-propos"
            className={classNames(
              "hover:bg-[#495057] px-5 py-3 rounded-full",
              pathname === "/a-propos" ? "bg-primary hover:bg-primary" : ""
            )}
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className={classNames(
              "hover:bg-[#495057] px-5 py-3 rounded-full",
              pathname === "/contact" ? "bg-primary hover:bg-primary" : ""
            )}
          >
            Contact
          </Link>
        </nav>
        <Link href="/panier" className="relative flex gap-2 hover:scale-105 duration-150">
          <ShoppingCart />
          <span
            className={`absolute -right-2 -bottom-1 bg-primary text-white font-bold px-[5px] pt-[1px] rounded-full text-xs transition-transform ${
              animate ? "animate-bounce" : ""
            }`}
          >
            {totalArticles}
          </span>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
