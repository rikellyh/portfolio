import Hardskills from "../../components/BoxInfo/Hardskills/Hardskills";
import Softskills from "../../components/BoxInfo/Softskills/Softskills";

const Skills = () => {
  return (
    <section>
      <h1 className="title">#Skills</h1>
      <div className="box-skills">
        <Hardskills />
        <Softskills />
      </div>
    </section>
  );
};

export default Skills;
