import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import AvatarImg from "../../assets/images/avatar.png";
import SkillIcon from "../../components/Icons/SkillIcon";
import GithubIcon from "../../components/Icons/GithubIcon";
import DarkerWavyBg from "../../components/Backgrounds/DarkerWavyBg";
import {
  html,
  css,
  javascript,
  react,
  materialui,
  bootstrap,
  sass,
  jest,
  git,
  webpack,
  npm,
  firebase,
} from "../../assets/icons/Icons";

const About = () => {
  const icons = [
    { icon: html, text: "HTML5" },
    { icon: css, text: "CSS3" },
    { icon: javascript, text: "JavaScript" },
    { icon: react, text: "React" },
    { icon: materialui, text: "Material UI" },
    { icon: bootstrap, text: "Bootstrap" },
    { icon: sass, text: "Sass" },
    { icon: jest, text: "Jest" },
    { icon: firebase, text: "Firebase" },
    { icon: git, text: "Git & Github" },
    { icon: webpack, text: "Webpack" },
    { icon: npm, text: "Npm" },
  ];

  return (
    <section className="section-darker">
      <div className="content-section">
        <h1 className="about-section-heading section-heading">ABOUT</h1>
        <div className="about-container">
          <div className="about-left">
            <Avatar source={AvatarImg} />
            <Button innerText={"download cv"} />
            <GithubIcon />
          </div>
          <div className="about-right">
            <div className="about-me">
              <p>
                I'm a front-end developer who is fully committed to turning my
                hobby into a successful career. Although I have a degree in Law
                with Business Management, I've found my passion with coding and
                I'm certain that it's the career path I want to pursue. If I
                could change one thing about my past, I'd choose to study
                computer science at university instead! Despite this, I'm
                thankful for experiencing all of the trials and tribulations
                that come with being self-taught, as it has taught me how to be
                independent and find my own solutions to the problems that I
                encounter, making me a more competent developer as a result.
              </p>

              <p>
                I enjoy the constant learning that comes with being a web
                developer, and then leveraging what I learn to build bigger and
                better applications. Creating something out of nothing, solving
                complex problems and building practical applications are what I
                love most about web development.
              </p>
            </div>
            <div className="skills">
              <h3 className="tech-stack-heading">My tech stack</h3>
              <p>I'm proficient with the following technologies:</p>
              <div className="skill-icons">
                {icons.map((icon) => (
                  <SkillIcon icon={icon.icon} text={icon.text} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DarkerWavyBg />
    </section>
  );
};

export default About;
