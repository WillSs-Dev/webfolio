import styled from "styled-components";


export const Container = styled.section`
  height: 80vH;
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

  > div {
    background: #DAF0EE;
    width: 20vW;
    position: relative;
    border-radius: 8px 8px 0 0;

    > img {
      width: 100%;
      object-position: 50% 50%;
      object-fit: scale-down;
      border-radius: 8px 8px 0 0;
    }

    > div {
      background: #3B413C;
      width: 100%;
      height: 35%;
      position: absolute;
      border-radius: 0 0 8px 8px;
    }
  }
`;
