import styled from "styled-components";

export const Container = styled.div`
  min-width: ${({ isFocused }) => (isFocused ? "30vW" : "25vW")};
  max-width: 35vw;
  transition: 1s ease-in-out;
  background: #272828;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 20px;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-self: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    max-width: 80vw;
    gap: 5px;
  }
`;
