import { GitHub } from "react-feather";

import ProjectPicture1 from "../../../assets/img/notepay-img.png";
import ProjectPicture2 from "../../../assets/img/huntington-gif.webp";

import "./projects.css";

export const Projects = () => {
  return (
    <>
      <div className="projects__wrapper">
        <div className="projects__wrapper--description">
          <div>
            <h1>Notepay</h1>
            <span>(React + Typescript)</span>
          </div>
          <p>
            Projeto de duas páginas com o simples objetivo de calcular entradas
            e saídas. Possui função de adicionar, editar e deletar itens da
            lista.
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
            <img src={ProjectPicture1} alt="project notepay print" />
          </a>
        </div>
      </div>
      <div className="projects__wrapper">
        <div className="projects__wrapper--description">
          <div>
            <h1>Landing Page Huntington</h1>
            <span>(Next + Typescript)</span>
          </div>
          <p>
            Página única com TailwindCSS e componentes próprios (header, botões,
            cards, accordion e footer) com dados mockados (textos e imagens).
          </p>
        </div>
        <div className="projects__wrapper--redirect">
          <a href="https://github.com/rikellyh/huntington-lp" target="_blank">
            Ver código
            <GitHub size={16} />
          </a>
        </div>
        <div className="projects__wrapper--project">
          <a href="https://github.com/rikellyh/huntington-lp" target="_blank">
            <img src={ProjectPicture2} alt="project huntington-lp print" />
          </a>
        </div>
      </div>
    </>
  );
};
