import Skeleton from "react-loading-skeleton";
import { GitHub } from "react-feather";

import ProjectPicture from "../../../assets/img/notepay-img.png";
import "./projects.css";

interface ProjectsProps {
  handleImageLoad: () => void;
  isImageLoaded: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({
  handleImageLoad,
  isImageLoaded,
}) => {
  return (
    <div className="projects__wrapper">
      <div className="projects__wrapper--description">
        <div>
          <h1>Notepay</h1>
          <span>(React + Typescript)</span>
        </div>
        <p>
          Projeto de duas páginas com o simples objetivo de calcular entradas e
          saídas. Possui função de adicionar, editar e deletar itens da lista.
        </p>
      </div>
      <div className="projects__wrapper--redirect">
        <a href="https://github.com/rikellyh/notePay" target="_blank">
          Ver código
          <GitHub size={16} />
        </a>
      </div>
      <div className="projects__wrapper--project">
        <a href="https://github.com/rikellyh/notePay" target="_blank">
          {isImageLoaded && (
            <Skeleton
              highlightColor="#f5f5f5"
              duration={2}
              borderRadius="0.5rem"
              className="skeleton"
            />
          )}
          <img
            src={ProjectPicture}
            alt="project notepay print"
            onLoad={handleImageLoad}
          />
        </a>
      </div>
    </div>
  );
};
