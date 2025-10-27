import GeneralLink from "../components/reusable/GeneralLink";
import ProjectParagraph from "../components/reusable/project/ProjectParagraph";
import ProjectUl from "../components/reusable/project/ProjectUl";
import ProjectH3 from "../components/reusable/project/ProjectH3";
import ProjectLi from "../components/reusable/project/ProjectLi";
import ProjectH1 from "../components/reusable/project/ProjectH1";
import ProjectH2 from "../components/reusable/project/ProjectH2";
import ProjectCenter from "../components/reusable/project/ProjectCenter";
import PageNavigation from "../components/reusable/PageNavigation";

function RepNote() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0d0b2b] to-[#16091d] text-white px-4">
      <div className="max-w-3xl pt-12 mx-auto text-center">
        <PageNavigation to="/">Back</PageNavigation>

        <ProjectH1>RepNote</ProjectH1>
        <ProjectH2>Training Log &amp; Performance Dashboard</ProjectH2>

        <ProjectParagraph extraClass="mt-3">
          <div className="mb-2">
            <GeneralLink
              weight="medium"
              to="https://repnotedemo.funcnroll.dev"
            >
              Live Demo
            </GeneralLink>{" "}
            ·{" "}
            <GeneralLink
              weight="medium"
              to="https://github.com/funcnroll/repnote"
            >
              Github
            </GeneralLink>
          </div>
          Repnote is a minimalist training log and dashboard, styled to feel
          like a mobile app. It brings together your workouts, templates, and
          history in one place, with everything connected so progress feels
          clear and effortless.
        </ProjectParagraph>

        <ProjectCenter>
          <ProjectH3>Why I built this</ProjectH3>
          <ProjectParagraph>
            I wanted a project that exercised state management, UI consistency,
            and non-trivial data shaping. Fitness data is perfect for this: it’s
            structured but messy, temporal, and highly visual. RepNote was my
            way to harden fundamentals before moving to Next.js.
          </ProjectParagraph>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>The Result</ProjectH3>
          <ProjectParagraph>
            RepNote is both a polished product and a personal milestone. It
            combines clean visuals with solid structure so the experience feels
            simple, but every interaction has a purpose. From editing a set to
            saving a session, everything connects back to charts that actually
            show your progress.
          </ProjectParagraph>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>Preview</ProjectH3>
          <div className="grid gap-6 md:grid-cols-2">
            <img
              src="/repnotepreview1.png"
              alt="Training Volume visualization with radar chart and bar chart"
              className="border border-gray-700 shadow-lg rounded-xl"
            />
            <img
              src="/repnotepreview2.png"
              alt="Workout History showing logged sessions"
              className="border border-gray-700 shadow-lg rounded-xl"
            />
          </div>
          <ProjectParagraph extraClass="mt-2">
            RepNote combines detailed training insights (radar charts,
            performance metrics) with a clean workout history log.{" "}
            <GeneralLink to="https://github.com/funcnroll/repnote">
              See more screenshots on Github
            </GeneralLink>
            .
          </ProjectParagraph>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>Data Visualization</ProjectH3>

          <ProjectUl>
            <ProjectLi>
              Volume (muscle distributon via radar chart, weekly sets, reps and
              weight )
            </ProjectLi>
            <ProjectLi>
              Performance (Estimated 1RMs and total training volume)
            </ProjectLi>
            <ProjectLi>
              Consistency (adherence, completed sets and session time)
            </ProjectLi>
          </ProjectUl>
          <ProjectParagraph>
            The charts are built on shared styles, so they look consistent and
            stay easy to maintain.
          </ProjectParagraph>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>State &amp; Workflow</ProjectH3>
          <ProjectUl>
            <ProjectLi icon="check">
              Start a workout, track it, finish it, and save it
            </ProjectLi>
            <ProjectLi icon="check">
              Build templates that evolve from past sessions
            </ProjectLi>
            <ProjectLi icon="check">
              Keep a history that’s easy to browse and compare
            </ProjectLi>
            <ProjectLi icon="check">
              All data sticks around, even if you refresh the page
            </ProjectLi>
          </ProjectUl>
          <ProjectParagraph>
            Extra stats like weekly totals or top sets are calculated
            automatically, so the app always feels up to date without extra
            effort.
          </ProjectParagraph>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>UI/UX Design</ProjectH3>
          <ProjectUl>
            <ProjectLi icon="check">
              A phone-style frame for focused previews
            </ProjectLi>
            <ProjectLi icon="check">
              Clean, responsive charts with subtle grid lines
            </ProjectLi>
            <ProjectLi icon="check">
              Edit sets and notes without leaving the flow
            </ProjectLi>
            <ProjectLi icon="check">
              Consistent, minimal styling that stays out of the way
            </ProjectLi>
          </ProjectUl>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>Architecture &amp; Reusability</ProjectH3>
          <ProjectParagraph>
            The app is built from reusable parts (charts, components, and
            utilities that can be dropped in anywhere). By separating concerns
            and avoiding repetition, it stays lightweight but easy to extend as
            needed.
          </ProjectParagraph>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>Lessons Learned</ProjectH3>
          <ProjectUl>
            <ProjectLi icon="check">
              Good flows are more valuable than just adding features
            </ProjectLi>
            <ProjectLi icon="check">
              Reusable chart parts scale better than one-off solutions
            </ProjectLi>
            <ProjectLi icon="check">
              Small, focused components are easier to manage
            </ProjectLi>
            <ProjectLi icon="check">
              Consistency in design makes iteration faster
            </ProjectLi>
          </ProjectUl>
        </ProjectCenter>

        <ProjectCenter>
          <ProjectH3>Tech Stack</ProjectH3>
          <ProjectUl>
            <ProjectLi icon="arrow">React (Typescript)</ProjectLi>
            <ProjectLi icon="arrow">Vite</ProjectLi>
            <ProjectLi icon="arrow">Redux Toolkit</ProjectLi>
            <ProjectLi icon="arrow">React Router</ProjectLi>
            <ProjectLi icon="arrow">TailwindCSS</ProjectLi>
            <ProjectLi icon="arrow">Recharts</ProjectLi>
          </ProjectUl>
        </ProjectCenter>
      </div>
    </div>
  );
}

export default RepNote;
