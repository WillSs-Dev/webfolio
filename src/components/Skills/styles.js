import styled from "styled-components";

export const Container = styled.section`
  height: 75vh;
  background: #3b413c;
  padding: 25px 108px;
  display: flex;
  align-items: center;
  flex-direction: column;

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
    
    > h3 {
      font-size: 38px;
      margin-bottom: 10px;
      color: #77D8B9;
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
  }
`;
