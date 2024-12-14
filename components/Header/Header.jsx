"use client";

import { ShoppingBag, ShoppingCart, X } from "lucide-react";
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

  const [animate, setAnimate] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Déclencher l'animation lorsque `totalArticles` change
  useEffect(() => {
    if (totalArticles > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timer);
    }
  }, [totalArticles]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/produits", label: "Produits" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md shadow-md h-[80px]"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Container className={"flex justify-between items-center pt-4"}>
        <button className="md:hidden z-50 p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="space-y-1">
              <span className="block w-5 h-0.5 bg-black"></span>
              <span className="block w-5 h-0.5 bg-black"></span>
              <span className="block w-5 h-0.5 bg-black"></span>
            </div>
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={classNames(
            "fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={closeMenu}
        />

        <div
          className={classNames(
            "fixed top-0 left-0 h-screen w-64 bg-tertiary transform transition-transform duration-300 ease-in-out z-40 md:hidden",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex flex-col pt-24 px-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={classNames(
                  "text-white px-4 py-3 rounded-lg hover:bg-[#495057] transition-colors",
                  pathname === link.href ? "bg-primary hover:bg-primary" : ""
                )}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <ShoppingBag />
          <span>Shopika</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:inline-flex bg-tertiary text-white rounded-full">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={classNames(
                "hover:bg-[#495057] px-5 py-3 rounded-full",
                pathname === link.href ? "bg-primary hover:bg-primary" : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/panier" className="relative flex gap-2 hover:scale-105 duration-150 z-50">
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
