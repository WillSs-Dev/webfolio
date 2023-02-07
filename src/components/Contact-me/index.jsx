import { Contacts, Container } from "./style";
import linkedInIcon from "../../images/LinkedIn.png";
import gitHubIcon from "../../images/GitHub.png";
import mailIcon from "../../images/Mail.png";

const Contact_me = () => {
  return (
    <Container>
      <div>
        <h2>CONTACT ME:</h2>
      </div>
      <Contacts>
        <a
          href="https://www.linkedin.com/in/willian-silva-/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedInIcon} alt="LinkedIn" />
        </a>
        <a
          href="https://github.com/WillSs-Dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHubIcon} alt="LinkedIn" />
        </a>
        <a
          href="mailto:williansilva3dsi@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mailIcon} alt="LinkedIn" />
        </a>
      </Contacts>
      <div>
        <h3>{"Made with the <3 framework"}</h3>
        <h4>
          by <span>Willian Silva</span>
        </h4>
      </div>
    </Container>
  );
};

export default Contact_me;
