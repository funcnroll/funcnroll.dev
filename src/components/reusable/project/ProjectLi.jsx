import { ArrowRight, Check } from "lucide-react";

function ProjectLi({ children, icon = "arrow" }) {
  const Icon = icon === "check" ? Check : ArrowRight;

  return (
    <li className="flex items-center gap-2 md:text-lg">
      <Icon className="w-4 h-4" />
      <span>{children}</span>
    </li>
  );
}

export default ProjectLi;
