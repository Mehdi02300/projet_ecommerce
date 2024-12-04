"use client";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { utiliserPanier } from "@/context/CartContext";

const Header = () => {
  const pathname = usePathname();
  const { panier } = utiliserPanier();

  // Calcul du nombre total d'articles dans le panier
  const totalArticles = panier.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex justify-between items-center h-[80px]">
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
      <Link href="/panier" className="flex gap-2">
        <ShoppingCart />
        <span>Panier ({totalArticles})</span>
      </Link>
    </header>
  );
};

export default Header;
