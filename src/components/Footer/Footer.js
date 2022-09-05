import EmailIcon from "../Icons/EmailIcon";
import GithubIcon from "../Icons/GithubIcon";
import ReturnHome from "../../assets/images/return-home.png";
import LinkedInIcon from "../Icons/LinkedInIcon";

const Footer = () => {
  return (
    <footer>
      <a className="return-home-container" href="#hero">
        <img className="return-home" src={ReturnHome} alt="return-home" />
      </a>
      <div className="footer-icons">
        <GithubIcon />
        <EmailIcon />
        <LinkedInIcon />
      </div>
    </footer>
  );
};

export default Footer;
