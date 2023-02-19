import styled from "styled-components";

export const Container = styled.section`
  background: #3b413c;
  height: 75vh;
  padding: 60px 128px 0;
  display: flex;
  justify-content: space-between;

  > img {
    scale: 0.9;
  }
`;

export const Presentation = styled.div`
  width: 50%;
  padding-top: 70px;

  > div {
    background: #272828;
    width: fit-content;
    color: #ffff;
    padding: 5px 15px;
    font-weight: bold;
    border-radius: 15px;
    margin-bottom: -5px;

    > h2 {
      font-size: 52px;
    }
  }

  > h2 {
    color: #77D8B9;
    font-size: 60px;
    font-weight: bold;
    margin-bottom: -8px;
  }

  > h3 {
    color: #ffff;
    font-size: 41px;
    font-weight: normal;
  }

  > hr {
    height: 2px;
    background: #ffff;
    border-radius: 10px;
    margin: 10px 0;
    width: 70%;
  }

  p {
    font-size: 24px;
    color: #ffff;
    font-weight: lighter;
    width: 597px;
  }

`;
