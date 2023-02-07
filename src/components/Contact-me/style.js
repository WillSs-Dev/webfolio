import styled from "styled-components";

export const Container = styled.header`
  background: #181818;
  height: 55vh;
  padding: 25px 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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

  > :last-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h3 {
      color: #fff;
      font-size: 28px;
    }

    > h4 {
      color: #fff;
      font-size: 26px;
      > span {
        color: #77D8B9;
      }
    }
  }
`;

export const Contacts = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;
