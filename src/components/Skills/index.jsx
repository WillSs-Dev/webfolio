import { forntEndSkills, backEndSkills } from "../../data";
import SkillsContainer from "./SkillsContainer/SkillsContainer";
import { Container } from "./styles";

const Skills = () => {
  return (
    <Container>
      <div>
        <h2>Skills:</h2>
      </div>
      <div>
        <h3>Front-End</h3>
        <h3>Back-End</h3>
      </div>
      <div>
        <SkillsContainer skills={forntEndSkills} />
        <SkillsContainer skills={backEndSkills} />
      </div>
    </Container>
  );
};

export default Skills;
