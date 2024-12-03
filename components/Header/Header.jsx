"use client";

import { ShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-5">
      <div className="flex gap-2">
        <ShoppingBag />
        <span>Shopika</span>
      </div>
      <nav className="flex bg-tertiary text-white rounded-full">
        <Link
          href="/"
          className={classNames(
            "hover:bg-[#495057] px-5 py-3 rounded-full",
            pathname === "/" ? "bg-primary" : "" // Si on est sur la page d'accueil
          )}
        >
          Accueil
        </Link>
        <Link
          href="/produits"
          className={classNames(
            "hover:bg-[#495057] px-5 py-3 rounded-full",
            pathname === "/produits" ? "bg-primary" : ""
          )}
        >
          Produits
        </Link>
        <Link
          href="/a-propos"
          className={classNames(
            "hover:bg-[#495057] px-5 py-3 rounded-full",
            pathname === "/a-propos" ? "bg-primary" : ""
          )}
        >
          À propos
        </Link>
        <Link
          href="/contact"
          className={classNames(
            "hover:bg-[#495057] px-5 py-3 rounded-full",
            pathname === "/contact" ? "bg-primary" : ""
          )}
        >
          Contact
        </Link>
      </nav>
      <Link href="/panier" className="flex gap-2">
        <ShoppingCart />
        <span>Panier</span>
      </Link>
    </header>
  );
};

export default Header;
