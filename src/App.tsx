import Header from "./components/Header/Header";
import { Sections } from "./components/Sections/Sections";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Sections />
      </div>
    </>
  );
}

export default App;
