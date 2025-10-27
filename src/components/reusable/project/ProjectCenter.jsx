function ProjectCenter({ children, extraClass = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${extraClass}`}
    >
      {children}
    </div>
  );
}

export default ProjectCenter;
