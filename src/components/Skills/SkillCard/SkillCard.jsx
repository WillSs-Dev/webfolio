import { useState } from "react";
import { Container } from "./styles";

const SkillCard = ({ skill }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <Container key={skill.name} isOpen={isOpen} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={skill.icon} alt={skill.name} />
      <h4>{skill.name}</h4>
    </Container>
  );
};

export default SkillCard;
