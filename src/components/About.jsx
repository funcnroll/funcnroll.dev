import GeneralParagraph from "../components/reusable/GeneralParagraph";
import Header from "../components/reusable/Header";
import Section from "../components/reusable/Section";

function About() {
  return (
    <Section>
      <Header>About</Header>
      <div className="space-y-4 sm:text-center">
        <GeneralParagraph>
          I'm a front-end developer with 2 years of experience who prefers clean
          code and design, and building things that just work.
        </GeneralParagraph>
        <GeneralParagraph>
          I enjoy working collaboratively, supporting others, and sharing what I
          learn along the way.
        </GeneralParagraph>
        <GeneralParagraph>
          Skills: React, Tailwind, TypeScript, JavaScript (+ HTML & CSS), Vite
          and Figma.
        </GeneralParagraph>
      </div>
    </Section>
  );
}

export default About;
