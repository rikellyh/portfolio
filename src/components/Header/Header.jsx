import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import '../../styles/components/header.sass';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <div className='container-header'>
        <div className='logo'>
          <h1>Rikelly Mendes</h1>
        </div>
        <nav>
          <div
            className='toggle'
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FaBars />
          </div>
          <ul
            className={
              isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
            }
          >
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#aboutme'>Sobre mim</a>
            </li>
            <li>
              <a href='#skills'>Skills</a>
            </li>
            <li>
              <a href='#projects'>Projetos</a>
            </li>
            <li>
              <a href='#contacts'>Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
