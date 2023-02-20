import styled from "styled-components";

export const Container = styled.div`
  background: #181818;
  width: 20vw;
  height: 20vh;
  position: relative;
  border-radius: 8px 8px 0 0;
  transition: 0.3s all;
  scale: ${({ showName }) => (showName ? 1.05 : 1)};

  @media (max-width: 1024px) {
    width: 25vw;
  }

  @media (max-width: 768px) {
    width: 30vw;
    height: 22vh;
  }

  @media (max-width: 580px) {
    width: 40vw;
    height: 22vh;
  }

  > :first-child {
    background: rgba(59, 65, 60, 0.75);
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    bottom: 3%;
    left: 3%;
    border-radius: 8px;
    padding: 5px;
    font-size: 16px;
    color: #fff;

    @media (max-width: 1350px) {
      bottom: 10%;
      left: 3%;
    }

    @media (max-width: 1250px) {
      bottom: 20%;
      left: 3%;
    }

    @media (max-width: 1150px) {
      bottom: 30%;
      left: 3%;
    }

    @media (max-width: 1050px) {
      bottom: 40%;
      left: 3%;
      font-size: 14px;
    }

    @media (max-width: 760px) {
      bottom: 35%;
      left: 3%;
      font-size: 12px;
    }

    @media (max-width: 580px) {
      left: 3%;
    }
  }

  > a {
    > img {
      width: 100%;
      border-radius: 8px 8px 0 0;
    }
  }

  > :last-child {
    background: #3b413c;
    width: 100%;
    height: 45%;
    position: absolute;
    border-radius: 0 0 8px 8px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 580px) {
      height: 35%;
    }

    > div {
      width: 30px;
      height: 30px;
      padding: 8px;
      background: #181818;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 768px) {
        width: 20px;
        height: 20px;
      }

      > img {
        width: 100%;
      }
    }
  }
`;
