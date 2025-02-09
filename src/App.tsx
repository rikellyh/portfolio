import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
      <main className="container displayFlex--center">
        <Sections isMobileMenuOpen={isMobileMenuOpen} />
      </main>
      <Footer />
    </>
  );
}

export default App;
