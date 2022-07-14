import Button from "../Button/Button";
import SkillIcon from "../Icons/SkillIcon";

const Project = ({
  title,
  image,
  summary,
  technologies,
  icon,
  preview,
  code,
  index,
}) => {
  return (
    <div
      className={
        index % 2 === 0 ? `project-container` : `project-container reverse`
      }
    >
      <div className="project-buttons">
        <Button innerText={"View The Code"} link={code} />
        <Button innerText={"Live Demo"} link={preview} />
        {icon}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-summary">{summary}</p>
        <div>
          <a
            className="project-image-link"
            href={preview}
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-image-container">
              <img
                className="project-image"
                alt="projectimage"
                src={image}
              ></img>
            </div>
          </a>
          <h3 className="technologies-used-heading">Technologies Used</h3>
          <div className="skill-icons">
            {technologies.map((technology) => (
              <SkillIcon icon={technology.icon} text={technology.text} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
