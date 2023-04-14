import Hardskills from '../../components/BoxInfo/Hardskills/Hardskills';
import Softskills from '../../components/BoxInfo/Softskills/Softskills';

const Skills = () => {
  return (
    <section id='skills'>
      <h2 className='title'>#Skills</h2>
      <div className='box'>
        <Hardskills />
        <Softskills />
      </div>
    </section>
  );
};

export default Skills;
