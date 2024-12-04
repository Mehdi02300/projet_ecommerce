import Link from "next/link";

const Button = ({ children, theme, href, onClick }) => {
  const className = `${
    theme === "primary" ? "bg-primary hover:bg-[#0056b3]" : "bg-tertiary hover:bg-[#495057]"
  } px-5 py-2 text-white rounded-xl transition-colors duration-200`;

  return href ? (
    <Link href={href} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
