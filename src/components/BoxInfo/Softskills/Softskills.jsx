import verification from '../../../assets/verification.png';
import '../../../styles/components/box.sass';

const Softskills = () => {
  return (
    <div className='box-info'>
      <h2>Softskills</h2>
      <ul>
        <li>
          <img src={verification} alt='' />
          <span>Organização</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Eficiência</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Inovação</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Lealdade</span>
        </li>
        <li>
          <img src={verification} alt='' />
          <span>Perseverança</span>
        </li>
      </ul>
    </div>
  );
};

export default Softskills;
