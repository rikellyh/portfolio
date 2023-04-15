import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import '../../styles/components/footer.sass';

const Footer = () => {
  return (
    <footer>
      <div className='container-footer'>
        <span>
          © Todos os direitos reservados | Design & Desenvolvido com 🤍 por
          Rikelly Mendes (aka Kelly)
        </span>
        <div className='social-links'>
          <a href='https://github.com/rikellyH/' target='_blank'>
            <FaGithub size={25} />
          </a>
          <a href='https://www.linkedin.com/in/rikellyh' target='_blank'>
            <FaLinkedin size={25} />
          </a>
          <a href='https://wa.me/5581992889681' target='_blank'>
            <FaWhatsapp size={25} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
