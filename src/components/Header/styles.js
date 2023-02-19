import styled from "styled-components";

export const Container = styled.header`
  background: #272828;
  width: 100vW;
  height: 10vH;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 99;
  
  > h3 {
    color: #77D8B9;
    font-weight: bold;
    font-size: 35px;
    margin-left: 108px;
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
}
`;
