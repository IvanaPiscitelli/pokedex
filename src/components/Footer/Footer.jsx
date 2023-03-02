import style from "./Footer.module.css";
import github from "../../img/github.svg";
import linkedin from "../../img/linkedin.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        <span>Ivana Piscitelli |</span>
        <a href="https://github.com/IvanaPiscitelli">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/ivana-piscitelli-9021741b7/">
          <img src={linkedin} alt="Linkedin" />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
