import { useState } from "react";

import Header from "./components/Header/Header";
import { Sections } from "./components/Sections/Sections";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        handleToggleMenu={handleToggleMenu}
      />
      <main className="container">
        <Sections isMobileMenuOpen={isMobileMenuOpen} />
      </main>
    </>
  );
}

export default App;
