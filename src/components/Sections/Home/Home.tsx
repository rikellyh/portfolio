import { ArrowDown } from "react-feather";
import { HomeProps } from "../../../types/menuOpen";

import AvatarAnime from "../../../assets/img/avatar.jpeg";
import "./home.css";

export const Home: React.FC<HomeProps> = ({ isMobileMenuOpen }) => {
  return (
    <div className="home__profile">
      <div>
        <h1>Aprimorando a Experiência do Usuário na Web</h1>
        <p>
          Trabalho para que seus designs se tornem aplicações web de alto nível
          e totalmente operacionais. Que tal falarmos sobre o seu projeto?
        </p>
        <div className="home__profile--hyperlink displayFlex--center">
          <div className="home__profile--hyperlink--div displayFlex--center">
            <a href="#projects" id="projectsBtn">
              Meus Projetos
              <ArrowDown />
            </a>
          </div>
          <div className="home__profile--hyperlink--div displayFlex--center">
            <a href="#contact">
              <span className={isMobileMenuOpen ? "wave--hidden" : "wave"}>
                👋
              </span>
              Vamos Conversar!
            </a>
          </div>
        </div>
      </div>
      <div className="home__profile--img">
        <img src={AvatarAnime} alt="avatar anime" />
      </div>
    </div>
  );
};
