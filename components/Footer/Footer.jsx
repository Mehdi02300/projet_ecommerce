import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-10 py-10">
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
        <div className="flex flex-col items-center md:items-start sm:w-[250px] md:w-[350px]">
          <h2 className="text-center md:text-start text-xl font-bold mb-4">Shopika</h2>
          <p className="opacity-50 text-center md:text-start">
            Simplifiez votre expérience shopping avec notre sélection de produits de qualité.
          </p>
        </div>

        <div className="flex flex-col items-center md:mr-52">
          <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/produits" className="hover:underline">
                Produits
              </Link>
            </li>
            <li>
              <Link href="/a-propos" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-end">
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-primary" aria-label="Facebook">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24l-1.918.001c-1.504 0-1.794.714-1.794 1.762v2.309h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary" aria-label="Instagram">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-3.313 0-3.676.012-4.952.071-1.276.059-2.155.26-2.926.552A5.92 5.92 0 002.55 2.55c-.292.771-.493 1.65-.552 2.926C1.988 6.746 2 7.109 2 10.422v3.157c0 3.313.012 3.676.071 4.952.059 1.276.26 2.155.552 2.926a5.92 5.92 0 002.55 2.55c.771.292 1.65.493 2.926.552C8.324 22.988 8.687 23 12 23s3.676-.012 4.952-.071c1.276-.059 2.155-.26 2.926-.552a5.92 5.92 0 002.55-2.55c.292-.771.493-1.65.552-2.926.059-1.276.071-1.639.071-4.952v-3.157c0-3.313-.012-3.676-.071-4.952-.059-1.276-.26-2.155-.552-2.926A5.92 5.92 0 0019.45 2.55c-.771-.292-1.65-.493-2.926-.552C15.676.012 15.313 0 12 0zm0 1.748c3.194 0 3.568.012 4.822.07 1.081.05 1.694.234 2.094.392.547.215.937.494 1.345.902.408.408.687.798.902 1.345.158.4.342 1.013.392 2.094.058 1.254.07 1.628.07 4.822s-.012 3.568-.07 4.822c-.05 1.081-.234 1.694-.392 2.094a3.52 3.52 0 01-.902 1.345 3.52 3.52 0 01-1.345.902c-.4.158-1.013.342-2.094.392-1.254.058-1.628.07-4.822.07s-3.568-.012-4.822-.07c-1.081-.05-1.694-.234-2.094-.392a3.52 3.52 0 01-1.345-.902 3.52 3.52 0 01-.902-1.345c-.158-.4-.342-1.013-.392-2.094-.058-1.254-.07-1.628-.07-4.822s.012-3.568.07-4.822c.05-1.081.234-1.694.392-2.094a3.52 3.52 0 01.902-1.345 3.52 3.52 0 011.345-.902c.4-.158 1.013-.342 2.094-.392C8.432 1.76 8.806 1.748 12 1.748zm0 5.305a4.947 4.947 0 100 9.895 4.947 4.947 0 000-9.895zm0 8.147a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm6.406-9.843a1.158 1.158 0 100-2.316 1.158 1.158 0 000 2.316z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-sm opacity-75">
        © 2024 Shopika. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
