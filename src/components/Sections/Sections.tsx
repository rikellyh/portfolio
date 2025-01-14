import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import { Projects } from "./Projects/Projects";

export const Sections = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};
