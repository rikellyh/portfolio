import Header from "./components/Header/Header";
import { Sections } from "./components/Sections/Sections";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Sections />
      </main>
    </>
  );
}

export default App;
