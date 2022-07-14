import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import AvatarImg from "../../assets/images/avatar.png";
import GithubIcon from "../Icons/GithubIcon";
import DarkWavyBg from "../Backgrounds/DarkWavyBg";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import SectionHeading from "../SectionHeading/SectionHeading";

const About = () => {
  return (
    <section id="about" className="section-dark">
      <div className="content-section">
        <SectionHeading
          text={"about"}
          classDeclaration={"about-section-heading"}
        />
        <div className="about-container">
          <div className="about-left">
            <Avatar source={AvatarImg} />
            <Button innerText={"download cv"} link={"#"} />
            <GithubIcon />
          </div>
          <div className="about-right">
            <AboutMe />
            <Skills />
          </div>
        </div>
      </div>
      <DarkWavyBg />
    </section>
  );
};

export default About;
