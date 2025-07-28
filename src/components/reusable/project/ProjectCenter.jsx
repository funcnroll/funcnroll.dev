function ProjectCenter({ children, extraClass = "" }) {
  return (
    <div className={`items-center text-center ${extraClass}`}>{children}</div>
  );
}

export default ProjectCenter;
