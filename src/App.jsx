import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutMe from './pages/AboutMe/AboutMe';
import Contact from './pages/Contact/Contact';
import SectionPresentation from './pages/Presentation/Presentation';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import './styles/components/page.sass';

function App() {
  return (
    <>
      <div className='portfolio'>
        <Header />
        <main>
          <SectionPresentation />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
