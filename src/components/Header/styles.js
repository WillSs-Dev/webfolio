import styled from "styled-components";

export const Container = styled.header`
  background: #272828;
  height: 10vH;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 108px;

  > h3 {
    color: #77D8B9;
    font-weight: bold;
    font-size: 35px;
  }

  > ul {
    display: flex;
    color: #ffff;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 3px;
    gap: 35px;

    > li {
      list-style: none;
    }
  }
`;
