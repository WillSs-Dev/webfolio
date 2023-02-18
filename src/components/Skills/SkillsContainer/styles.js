import styled from "styled-components";

export const Container = styled.div`
  min-width: ${({ isFocused }) => (isFocused ? '30vW' : '25vW')};
  max-width: 35vW;
  transition: 1s ease-in-out;
  background: #272828;
  border-radius: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  padding: 25px;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;