import icons from "../../utils/icons";
import SkillIcon from "../Icons/SkillIcon";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="tech-stack-heading">My tech stack</h3>
      <p>I'm proficient with the following technologies:</p>
      <div className="skill-icons">
        {icons.map((icon, index) => (
          <SkillIcon
            key={icon.text}
            icon={icon.icon}
            text={icon.text}
            delay={index * 100}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
