import styled from "styled-components";

export const Container = styled.header`
  background: #272828;
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 99;

  > h3 {
    color: #77d8b9;
    font-weight: bold;
    font-size: 35px;
    margin-left: 108px;

    @media (max-width: 920px) {
      font-size: 24px;
      width: 150px;
      margin-left: 65px;
      margin-right: 30px;
    }

    @media (max-width: 580px) {
      font-size: 20px;
      margin-left: 30px;
    }
  }

  > ul {
    display: flex;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 3px;
    gap: 35px;
    margin-right: 108px;
    list-style: none;
    color: #fff;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-right: 30px;
    }

    @media (max-width: 580px) {
      font-size: 14px;
      margin-right: 30px;
    }
  }
`;
