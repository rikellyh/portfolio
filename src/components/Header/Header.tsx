import { useState } from "react";

import { ArrowUpRight, Menu } from "react-feather";
import "./header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header">
      <div className="header__container">
        <div>
          <h1>Rikelly Mendes</h1>
          <p>Desenvolvedora Web</p>
        </div>
        <div className="header__menu">
          <div className="header__menu--icon" onClick={handleToggleMenu}>
            <Menu />
          </div>
          <nav
            className={isMobileMenuOpen ? "mobile-menu open" : "mobile-menu"}
          >
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Projetos</li>
              <li>Contato</li>
              <li>
                <a target="_blank">Currículo</a>
                <div>
                  <ArrowUpRight size={18} />
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
