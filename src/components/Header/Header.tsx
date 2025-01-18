import { ArrowUpRight, Menu } from "react-feather";

import { MenuOpenProps } from "../../types/menuOpen";
import "./header.css";

const Header: React.FC<MenuOpenProps> = ({
  isMobileMenuOpen,
  handleToggleMenu,
}) => {
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
            role="navigation"
          >
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
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
