function GeneralLink({ weight = "regular", to, children }) {
  return (
    <a
      className={`font-${weight} cursor-pointer  text-blue-400 hover:text-blue-500 transition-all duration-300`}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default GeneralLink;
