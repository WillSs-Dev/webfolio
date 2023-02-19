import { useState } from "react";
import getImages from "../../../utils/getImages.js";
import { Container } from "./styles.js";

const ProjectCard = ({ project }) => {
  const [grow, setGrow] = useState(false);

  const handleMouseEnter = () => {
    setGrow(true);
  };

  const handleMouseLeave = () => {
    setGrow(false);
  };

  return (
    <Container
      showName={grow}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <h3>{project.name}</h3>
      </div>
      <a href={project.url} target="_blank" rel="noreferrer">
        <img src={project.thumbnail} alt={`${project.name} screenshot`} />
      </a>
      <div>
        {project.skills.map((skill) => (
          <div key={skill}>
            <img src={getImages[skill]} alt={skill} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProjectCard;
