function Header({ children }) {
  return (
    <h1 className="mb-4 text-3xl font-semibold sm:text-4xl lg:text-5xl sm:text-center">
      {children}
    </h1>
  );
}

export default Header;
