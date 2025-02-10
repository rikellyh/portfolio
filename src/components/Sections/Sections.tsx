import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import { Projects } from "./Projects/Projects";

interface SectionsProps {
  isMobileMenuOpen: boolean;
}

export const Sections: React.FC<SectionsProps> = ({ isMobileMenuOpen }) => {
  return (
    <>
      <section id="home">
        <Home isMobileMenuOpen={isMobileMenuOpen} />
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
