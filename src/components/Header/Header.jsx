import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../../styles/components/header.sass";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <div className="container-header">
        <div className="logo">
          <h1>Rikelly Mendes</h1>
        </div>
        <nav>
          <div
            className="toggle"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FaBars />
          </div>
          <ul
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Sobre mim</Link>
            </li>
            <li>
              <Link>Skills</Link>
            </li>
            <li>
              <Link>Projetos</Link>
            </li>
            <li>
              <Link>Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
