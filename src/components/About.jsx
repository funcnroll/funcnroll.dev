import GeneralParagraph from "../components/reusable/GeneralParagraph";
import Header from "../components/reusable/Header";
import Section from "../components/reusable/Section";

function About() {
  return (
    <Section>
      <Header>About</Header>
      <div className="space-y-4 sm:text-center">
        <GeneralParagraph>
          I'm a 17 year old front-end developer with 2 years of experience who
          prefers clean code, design, and building things that just work.
        </GeneralParagraph>
        <GeneralParagraph>
          I enjoy working collaboratively, supporting others, and sharing what I
          learn along the way.
        </GeneralParagraph>
        <GeneralParagraph>
          Skills: React, Redux, Tailwind, TypeScript, JavaScript (+ HTML & CSS),
          Nginx and Linux
        </GeneralParagraph>
      </div>
    </Section>
  );
}

export default About;
