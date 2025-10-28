function ProjectParagraph({ children, extraClass = "" }) {
  return (
    <p
      className={`text-gray-300 leading-relaxed mb-4 md:text-lg text-left

        ${extraClass}`}
    >
      {children}
    </p>
  );
}

export default ProjectParagraph;
