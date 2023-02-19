import { useState } from 'react';
import { Container } from './styles';
import { useEffect } from "react";

const ListItem = ({ scrollPosition, section }) => {
  const [higlight, setHiglight] = useState(false)
  
  useEffect(() => {
    if (scrollPosition >= section.start && scrollPosition <= section.end) {
      setHiglight(true)
    } else {
      setHiglight(false)
    }
  }, [scrollPosition, section]);

  return (
    <Container higlight={higlight}>
      <a href={section.ref}>{section.name}</a>
    </Container>
  )
}

export default ListItem