import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function ProjectCard({ img, title, tags, to = "", type = "github" }) {
  return type === "github" ? (
    <a
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-900 rounded-xl p-4 w-full max-w-xs mt-8 mx-auto hover:scale-105 hover:translate-y-1 shadow-[0_0_10px_rgba(192,132,252,0.2)] hover:shadow-[0_0_25px_rgba(192,132,252,0.5)] transition-all duration-300 md:max-w-sm  lg:max-w-md block"
    >
      <CardContent
        img={img}
        title={title}
        tags={tags}
      />
    </a>
  ) : (
    <Link
      to={to}
      className="bg-zinc-900 rounded-xl p-4 w-full max-w-xs mt-8 mx-auto hover:scale-105 hover:translate-y-1 shadow-[0_0_10px_rgba(192,132,252,0.2)] hover:shadow-[0_0_25px_rgba(192,132,252,0.5)] transition-all duration-300 md:max-w-sm lg:max-w-md block"
    >
      <CardContent
        img={img}
        title={title}
        tags={tags}
      />
    </Link>
  );
}

function CardContent({ img, title, tags }) {
  return (
    <>
      <div className="overflow-hidden rounded">
        <img
          src={img}
          alt={title}
          className="object-cover w-full rounded h-36"
        />
      </div>

      <div className="flex items-center justify-between mt-4">
        <h3 className="text-lg font-medium md:text-xl">{title}</h3>
        <ChevronRight className="text-lg md:text-xl" />
      </div>

      <div className="flex gap-2 mt-2 text-sm ">
        {tags.map((tag, i) => (
          <p
            key={i}
            className={`${tag.textColor} bg-zinc-800/60 p-2 rounded-xl  font-light md:font-base`}
          >
            {tag.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default ProjectCard;
