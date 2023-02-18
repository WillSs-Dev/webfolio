import styled from "styled-components";

export const Container = styled.section`
  height: 50vh;
  background: #181818;
  padding: 25px 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  > :first-child {
    background: #fff;
    width: fit-content;
    height: fit-content;
    padding: 5px 10px;
    border-radius: 15px;

    > h2 {
      font-size: 32px;
    }
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;
