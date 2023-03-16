import Header from "./components/Header/Header";
import AboutMe from "./pages/AboutMe/AboutMe";
import SectionPresentation from "./pages/Presentation/Presentation";
import Skills from "./pages/Skills/Skills";
import "./styles/components/page.sass";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <SectionPresentation />
        <AboutMe />
        <Skills />
      </main>
    </div>
  );
}

export default App;
