import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Sections } from "./components/Sections/Sections";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  const handleToggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleImageLoad = () => setIsImageLoaded(!isImageLoaded);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        handleToggleMenu={handleToggleMenu}
      />
      <main className="container displayFlex--center">
        <Sections
          isMobileMenuOpen={isMobileMenuOpen}
          handleImageLoad={handleImageLoad}
          isImageLoaded={isImageLoaded}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
