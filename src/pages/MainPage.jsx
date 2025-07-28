import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import GetInTouch from "../components/GetInTouch.jsx";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects";

function Main() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-br from-[#050510] via-[#0d0b2b] to-[#16091d] text-white sm:text-lg lg:text-xl">
        <Hero />
        <Projects />
        <About />
        <GetInTouch />
        <Footer />
      </div>
    </main>
  );
}

export default Main;
