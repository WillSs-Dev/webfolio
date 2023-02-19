import { useEffect, useState } from "react";
import ListItem from "./ListItem/ListItem";
import { Container } from "./styles";
import { sections } from "../../data";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(window.scrollY);
    });
  });

  return (
    <Container>
      <h3>Web-Folio</h3>
      <ul>
        {sections.map((section) => (
          <ListItem section={section} key={section.name} scrollPosition={scrollPosition}/>
        ))}
      </ul>
    </Container>
  );
};

export default Header;
