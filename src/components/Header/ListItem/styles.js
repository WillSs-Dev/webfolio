import styled from "styled-components";

export const Container = styled.li`
  > a {
    color: ${({ higlight }) => (higlight ? "#77d8b9" : "#fff")};
    text-decoration: none;
  }
`;
