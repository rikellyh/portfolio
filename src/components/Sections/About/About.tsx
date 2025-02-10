import Skeleton from "react-loading-skeleton";

import ProfilePicture from "../../../assets/img/profile.jpeg";
import "./about.css";

interface AboutProps {
  handleImageLoad: () => void;
  isImageLoaded: boolean;
}

export const About: React.FC<AboutProps> = ({
  handleImageLoad,
  isImageLoaded,
}) => {
  return (
    <div className="about__wrapper displayFlex--center">
      <div>
        <h1>Console.log("Olá Mundo!")</h1>
      </div>
      <div className="about__wrapper--div">
        <div className="about__wrapper--img">
          {isImageLoaded && (
            <Skeleton
              highlightColor="#f5f5f5"
              duration={2}
              className="skeleton"
              borderRadius="10% 0%"
            />
          )}
          <img
            src={ProfilePicture}
            alt="woman picture"
            onLoad={handleImageLoad}
          />
        </div>
        <ul className="about__wrapper--list">
          <li>Apaixonada por criar interfaces intuitivas e responsivas</li>
          <li>Cerca de 1 ano de experiência profissional em React.js</li>
          <li>Participa ativamente da comunidade tech em fóruns</li>
          <li>Natural de Caruaru-PE</li>
          <li>
            Gosta de caminhar/correr ao ar livre e se aventurar no que é novo!
          </li>
        </ul>
      </div>
    </div>
  );
};
