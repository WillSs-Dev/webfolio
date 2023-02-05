import { Container, Presentation } from "./styles";
import willPicture from '../../images/willian.png'


const About_Me = () => {
  return (
    <Container>
      <img src={willPicture} alt="Willian Silva" />
      <Presentation>
        <div>
          <h2>Willian Silva</h2>
        </div>
        <h2>Full-Stack</h2>
        <h3>Web Developer</h3>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iusto
          optio corporis sit sint ullam laboriosam quod. Obcaecati ab quibusdam
          fugiat facere. Veritatis id, corrupti adipisci error explicabo
          laboriosam temporibus?
        </p>
      </Presentation>
    </Container>
  );
};

export default About_Me;
