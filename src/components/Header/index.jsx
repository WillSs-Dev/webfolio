import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <h3>Web-Folio</h3>
      <ul>
        <li>
          <a href="#about-me">ABOUT ME</a>
        </li>
        <li>
          <a href="#projects">PROJECTS</a>
        </li>
        <li>
          <a href="#skills">SKILLS</a>
        </li>
        <li>
          <a href="#contact-me">CONTACT ME</a>
        </li>
      </ul>
    </Container>
  );
};

export default Header;
