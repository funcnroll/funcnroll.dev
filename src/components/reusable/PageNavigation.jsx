import { Link } from "react-router-dom";

function PageNavigation({ children, to }) {
  return (
    <Link
      to={to}
      className="text-blue-400 transition-all duration-300 hover:text-blue-500"
    >
      {children}
    </Link>
  );
}

export default PageNavigation;
