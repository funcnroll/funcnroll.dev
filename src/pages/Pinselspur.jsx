import GeneralLink from "../components/reusable/GeneralLink";
import ProjectParagraph from "../components/reusable/project/ProjectParagraph";
import ProjectUl from "../components/reusable/project/ProjectUl";
import ProjectH3 from "../components/reusable/project/ProjectH3";
import ProjectLi from "../components/reusable/project/ProjectLi";
import ProjectH1 from "../components/reusable/project/ProjectH1";
import ProjectH2 from "../components/reusable/project/ProjectH2";
import ProjectCenter from "../components/reusable/project/ProjectCenter";
import PageNavigation from "../components/reusable/PageNavigation";
import ShikiHighlighter, {
  createHighlighterCore,
  createJavaScriptRegexEngine,
} from "react-shiki/core";

const highlighter = await createHighlighterCore({
  themes: [import("@shikijs/themes/one-dark-pro")],
  langs: [import("@shikijs/langs/jsx")],
  engine: createJavaScriptRegexEngine(import("shiki/wasm")),
});

const techStack = [
  "React + Vite",
  "TailwindCSS",
  "React Router",
  "Heroicons",
  "Web3Forms",
  "Hetzner + nginx (deploy)",
];

const buttonCode = `
function Button({
  type = "main", // type for button styles: main, ghost, nav
  children,
  font = "bold", // light, regular, medium, bold
  px = "px-4",
  py = "py-2",
  extra = "",
  onClick = () => {},
  onSubmit = () => {},
  disabled = false,
  submit = false,
}) {
  function handleClick(e) {
    if (submit) {
      onSubmit();
    } else {
      e.preventDefault();
      onClick();
    }
  }

  const other = \`\${px} \${py} \${extra}\`;

  // applies common styles for all button types
  const baseClass = \`cursor-pointer transition-all duration-300 rounded-lg \${other}\`;

  // disabled class
  const disabledClass = \`bg-gray-300 text-gray-500 cursor-not-allowed border-none \${other}\`;

  // font class
  const fontClass = \`font-\${font}\`;

  // different styles based on button type
  const types = {
    main: "bg-brandPurple-lighter text-white hover:bg-brandPurple",
    ghost:
      "border-2 border-brandBlue-lighter bg-transparent text-brandBlue-lighter hover:border-brandBlue-light hover:bg-brandBlue-light hover:text-white",
    ghost_nav:
      "border-2 border-brandPurple-lighter bg-transparent text-brandPurple-lighter hover:border-brandPurple hover:bg-brandPurple hover:text-white",
    nav: "cursor-pointer transition-all duration-300 hover:text-brandPurple",
  };

  // combine classes depending on whether the button is disabled
  const buttonClass = disabled
    ? \`\${baseClass} \${disabledClass}\` // apply disabled styles if the button is disabled
    : \`\${baseClass} \${fontClass} \${types[type]}\`; // otherwise, apply regular styles

  return (
    <button
      className={buttonClass}
      onClick={handleClick}
      disabled={disabled}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
}

export default Button;`;

function Pinselspur() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0d0b2b] to-[#16091d] text-white px-4">
      <div className="max-w-3xl pt-12 mx-auto text-center">
        <PageNavigation to="/">Back</PageNavigation>
        <ProjectH1>Pinselspur</ProjectH1>
        <ProjectH2>A Client Project</ProjectH2>

        <ProjectParagraph extraClass="mt-3">
          <GeneralLink
            weight="medium"
            to="https://pinselspur.com"
          >
            Pinselspur
          </GeneralLink>{" "}
          is a custom-built website for an oil painter to showcase and sell
          commissions. It’s a fully functional ordering system designed to
          respect aesthetics and usability, powered by a maintainable and
          modular architecture.
        </ProjectParagraph>

        <ProjectCenter>
          <ProjectH3>DRY by Design</ProjectH3>
          <ProjectParagraph>
            One of the biggest challenges in this build was maintaining a DRY
            codebase while handling repeat UI elements like general-use buttons.
            By abstracting layout structures and reusing functional components,
            I significantly reduced redundancy and made the codebase far easier
            to scale and maintain.
          </ProjectParagraph>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>Technology Stack</ProjectH3>
          <ProjectUl>
            {techStack.map((item) => (
              <ProjectLi
                icon="arrow"
                key={item}
              >
                {item}
              </ProjectLi>
            ))}
          </ProjectUl>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>Highlights</ProjectH3>
          <ProjectUl>
            <ProjectLi icon="check">DRY structure via components</ProjectLi>
            <ProjectLi icon="check">
              Fully responsive layout with clean UI
            </ProjectLi>
            <ProjectLi icon="check">
              Minimal form submissions via Web3Forms
            </ProjectLi>
          </ProjectUl>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>DRY Example: Reusable Button Component</ProjectH3>
          <ProjectParagraph>
            Here’s a real component I reused across Pinselspur to keep styling
            consistent and logic modular. It supports multiple types, font
            weights, padding, and disabled logic all via props.
          </ProjectParagraph>
        </ProjectCenter>
        <div className="overflow-x-auto text-sm text-left border rounded-lg shadow-lg md:text-base border-white/10">
          <ShikiHighlighter
            highlighter={highlighter}
            language="jsx"
            theme="one-dark-pro"
          >
            {buttonCode}
          </ShikiHighlighter>
        </div>
      </div>
    </div>
  );
}

export default Pinselspur;
