import { useState } from "react";
import SkillCard from "../SkillCard/SkillCard";
import { Container } from "./styles";

const SkillsContainer = ({ skills }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleMouseEnter = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    setIsFocused(false);
  };

  return (
    <Container isFocused={isFocused} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {skills.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </Container>
  );
};

export default SkillsContainer;
