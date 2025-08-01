import Header from "../components/reusable/Header";
import ProjectCard from "../components/reusable/ProjectCard";
import Section from "../components/reusable/Section";

function Project() {
  return (
    <Section>
      <Header>Projects</Header>
      <div className="flex flex-col flex-wrap gap-4 sm:flex-row">
        <ProjectCard
          img="/pinselspur.png"
          title="Pinselspur"
          tags={[
            {
              name: "React",
              textColor: "text-blue-400",
            },
            {
              name: "Real World",
              textColor: "text-sky-400/90",
            },
            {
              name: "Online Store",
              textColor: "text-indigo-300",
            },
          ]}
          to="/pinselspur"
          type="page"
        />
        <ProjectCard
          img="/weatherapp.png"
          title="Weather App"
          tags={[
            {
              name: "TypeScript",
              textColor: "text-blue-400",
            },
            {
              name: "API",
              textColor: "text-teal-400/80",
            },
          ]}
          to="https://github.com/funcnroll/weather-app-typescript"
        />
        <ProjectCard
          img="/countryquiz.png"
          title="Country Quiz"
          tags={[
            {
              name: "JavaScript",
              textColor: "text-lime-400/70",
            },
            {
              name: "API",
              textColor: "text-teal-400/80",
            },
          ]}
          to="https://github.com/funcnroll/countriesgame"
        />
      </div>
    </Section>
  );
}

export default Project;
