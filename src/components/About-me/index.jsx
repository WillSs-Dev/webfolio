import { Container, Presentation } from "./styles";
import willPicture from "../../images/willian.png";

const About_Me = () => {
  return (
    <Container id="about-me">
      <img src={willPicture} alt="Willian Silva" />
      <Presentation>
        <div>
          <h2>Willian Silva</h2>
        </div>
        <h2>Full-Stack</h2>
        <h3>Web Developer</h3>
        <hr />
        <p>
        I&apos;m a full-stack developer with a background in graphic design and multimedia production. After two years in the field, I discovered my passion for technology. 
        </p>
        <p>
        With my skills in front-end and back-end development, I&apos;m dedicated to developing innovative solutions to make a difference in people&apos;s lives.
        </p>
      </Presentation>
    </Container>
  );
};

export default About_Me;
