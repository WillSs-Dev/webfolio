import { Container, ProjectsGrid } from "./styles";
import { projects } from "../../data/index";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <Container>
      <div>
        <h2>PROJECTS:</h2>
      </div>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;
