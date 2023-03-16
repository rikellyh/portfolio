import verification from '../../../assets/verification.png';
import '../../../styles/components/box.sass';

const Hardskills = () => {
  return (
    <div className='box-info'>
      <h2>Hardskills</h2>
      <ul>
        <li>
          <img src={verification} alt='' />
          <span>HTML</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>CSS</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Javascript</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Figma</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>React</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Typescript</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Node</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Python</span>
        </li>
      </ul>
    </div>
  );
};

export default Hardskills;
