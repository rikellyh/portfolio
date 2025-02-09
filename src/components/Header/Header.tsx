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
            <ul className="displayFlex--center">
              <li>
                <a href="#home" className="displayFlex--center">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="displayFlex--center">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#projects" className="displayFlex--center">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="displayFlex--center">
                  Contato
                </a>
              </li>
              <li className="displayFlex--center">
                <a
                  href="https://drive.google.com/file/d/1blDAQXJWPK2NKzvv5HFH11K0_nVsek9p/view?usp=sharing"
                  className="displayFlex--center"
                  target="_blank"
                >
                  Currículo
                  <ArrowUpRight size={18} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
