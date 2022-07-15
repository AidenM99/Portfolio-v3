import Project from "./Project";
import myProjects from "../../utils/projects";
import DarkerWavyBg from "../Backgrounds/DarkerWavyBg";
import SectionHeading from "../SectionHeading/SectionHeading";

const Projects = () => {
  return (
    <section className="section-darker">
      <a href="#" className="anchor" id="projects"></a>
      <div className="content-section">
        <SectionHeading
          text={"projects"}
          classDeclaration={`projects-section-heading`}
        />
        <div className="projects-container">
          {myProjects.map((project, index) => (
            <Project
              key={project.title}
              title={project.title}
              image={project.image}
              summary={project.summary}
              technologies={project.technologies}
              icon={project.icon}
              preview={project.preview}
              code={project.code}
              index={index}
            />
          ))}
        </div>
      </div>
      <DarkerWavyBg />
    </section>
  );
};

export default Projects;
