import { Link } from "react-router-dom";

function PageNavigation({ children, to, size = "md" }) {
  const sizeClasses = {
    xs: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  };

  return (
    <Link
      to={to}
      className={`text-blue-400 transition-all duration-300 hover:text-blue-500 ${sizeClasses[size]}`}
    >
      {children}
    </Link>
  );
}

export default PageNavigation;
