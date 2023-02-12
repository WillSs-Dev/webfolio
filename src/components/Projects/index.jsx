import { Container, ProjectsGrid } from "./styles";
import { projects } from '../../data/index';

const Projects = () => {
  return (
    <Container>
      <div>
        <h2>PROJECTS:</h2>
      </div>
      <ProjectsGrid>
        <div>
          <img src={projects[0].thumbnail} alt=""/>
          <div />
        </div>
      </ProjectsGrid>
    </Container>
  );
};

export default Projects;
