import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import "../../styles/components/presentation.sass";

const SectionPresentation = () => {
  return (
    <section>
      <h1>Oi,</h1>
      <h2>me chamo Rikelly</h2>
      <span className="dashed-text">
        <s>mas pode me chamar de Kelly</s>
      </span>
      <div className="avatar-contact">
        <img src={avatar} alt="" />
        <span>Desenvolvedora Front-end</span>
        <div>
          <Link>Fale comigo</Link>
          <Link className="about">Quem sou eu</Link>
        </div>
      </div>
    </section>
  );
};

export default SectionPresentation;
