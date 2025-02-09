import { ArrowUpRight } from "react-feather";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container displayFlex--center">
        <span>&copy; 2025. Todos os direitos reservados.</span>
        <nav className="footer__nav">
          <ul>
            <li className="displayFlex--center">
              <a
                href="https://www.linkedin.com/in/rikellyh/"
                className="displayFlex--center"
                target="_blank"
              >
                Linkedin
                <ArrowUpRight size={18} />
              </a>
            </li>
            <li className="displayFlex--center">
              <a
                href="https://github.com/rikellyh"
                className="displayFlex--center"
                target="_blank"
              >
                Github
                <ArrowUpRight size={18} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
