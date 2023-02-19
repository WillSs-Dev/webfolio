import styled from "styled-components";

export const Container = styled.div`
  background: #181818;
  width: 20vw;
  height: 20vh;
  position: relative;
  border-radius: 8px 8px 0 0;
  transition: 0.3s all;
  scale: ${({ showName }) => (showName ? 1.05 : 1)};

  > :first-child {
    background: rgba(59, 65, 60, 0.75);
    max-width: 90%;
    max-height: 90%;
    position: absolute;
    bottom: 3%;
    left: 3%;
    border-radius: 8px;
    padding: 5px;

    > h3 {
      font-size: 18px;
      color: #fff;
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

    > div {
      width: 30px;
      height: 30px;
      padding: 8px;
      background: #181818;
      border-radius: 15px;

      > img {
        width: 100%;
      }
    }
  }
`;
