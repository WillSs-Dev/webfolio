import styled from "styled-components";

export const Container = styled.section`
  height: 75vh;
  background: #3b413c;
  padding: 25px 108px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 25px 20px;
    height: fit-content;
  }

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

  > :nth-child(2) {
    display: flex;
    justify-content: space-between;
    width: 65%;
    margin-bottom: 2%;
    margin-top: 2%;

    @media (max-width: 580px) {
      display: none;
    }

    > h3 {
      font-size: 38px;
      margin-bottom: 10px;
      color: #77d8b9;
      text-decoration: underline #fff;
      text-underline-offset: 10px;
    }

    > :last-child {
      margin-right: 10px;
    }
  }

  > :nth-child(3) {
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 25px;

    @media (max-width: 580px) {
      flex-direction: column;
      margin-top: 25px;
    }
  }
`;
