import Header from "./components/Header/Header";
import SectionPresentation from "./pages/Presentation/Presentation";
import "./styles/components/page.sass";

function App() {
  return (
    <div className="portfolio">
      <Header />
      <main>
        <SectionPresentation></SectionPresentation>
      </main>
    </div>
  );
}

export default App;
