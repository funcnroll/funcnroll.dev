import GeneralLink from "../GeneralLink";

function ProjectLinks({ links = [] }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-2 text-md md:text-lg">
      {links.map((link, index) => (
        <span
          key={index}
          className="flex items-center gap-2"
        >
          <GeneralLink
            weight="medium"
            to={link.url}
          >
            {link.label}
          </GeneralLink>
          {/* Dot separator except after the last link */}
          {index < links.length - 1 && <span>·</span>}
        </span>
      ))}
    </div>
  );
}

export default ProjectLinks;
