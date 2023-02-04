import styled from "styled-components";


export const Container = styled.section`
  height: 80vH;
  background: #181818;
  padding: 25px 108px;
  display: flex;
  justify-content: center;

  > div {
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