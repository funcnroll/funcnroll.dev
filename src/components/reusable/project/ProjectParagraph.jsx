function ProjectParagraph({ children, extraClass = "" }) {
  return (
    <p
      className={`text-gray-300 leading-relaxed mb-8 md:text-lg ${extraClass}`}
    >
      {children}
    </p>
  );
}

export default ProjectParagraph;
