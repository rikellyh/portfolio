import { About } from "./About/About";
import { Contact } from "./Contact/Contact";
import { Home } from "./Home/Home";
import { Projects } from "./Projects/Projects";

interface SectionsProps {
  isMobileMenuOpen: boolean;
  handleImageLoad: () => void;
  isImageLoaded: boolean;
}

export const Sections: React.FC<SectionsProps> = ({
  isMobileMenuOpen,
  handleImageLoad,
  isImageLoaded,
}) => {
  return (
    <>
      <section id="home">
        <Home
          isMobileMenuOpen={isMobileMenuOpen}
          handleImageLoad={handleImageLoad}
          isImageLoaded={isImageLoaded}
        />
      </section>
      <section id="about">
        <About
          handleImageLoad={handleImageLoad}
          isImageLoaded={isImageLoaded}
        />
      </section>
      <section id="projects">
        <Projects
          handleImageLoad={handleImageLoad}
          isImageLoaded={isImageLoaded}
        />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};
