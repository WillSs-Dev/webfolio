import styled from "styled-components";

export const Container = styled.section`
  background: #3b413c;
  height: 75vh;
  padding: 60px 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1245px) {
    padding: 30px 60px;
  }

  @media (max-width: 800px) {
    padding: 60px 60px;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    height: 100vh;
    padding: 0;
    justify-content: space-evenly;
  }

  > img {
    width: 429px;
    height: auto;
    margin-bottom: -30px;
    margin-right: 30px;

    @media (max-width: 1245px) {
      width: 300px;
    }
    @media (max-width: 800px) {
      width: 200px;
      margin-top: 20px;
    }

    @media (max-width: 580px) {
      width: 150px;
      margin: 0;
    }
  }
`;

export const Presentation = styled.div`
  /* width: 50%; */
  padding-top: 70px;

  @media (max-width: 1245px) {
    /* width: 30%; */
  }

  @media (max-width: 800px) {
    /* padding: 60px 60px; */
  }

  @media (max-width: 580px) {
    padding-top: 0;
    width: 90%;
  }

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
      @media (max-width: 1245px) {
        font-size: 32px;
      }
    }
  }

  > h2 {
    color: #77d8b9;
    font-size: 60px;
    font-weight: bold;
    margin-bottom: -8px;
    @media (max-width: 1245px) {
      font-size: 42px;
    }
  }

  > h3 {
    color: #ffff;
    font-size: 41px;
    font-weight: normal;
    @media (max-width: 1245px) {
      font-size: 32px;
    }
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
    @media (max-width: 1245px) {
      width: fit-content;
    }
    @media (max-width: 900px) {
      font-size: 18px;
    }
  }
`;
