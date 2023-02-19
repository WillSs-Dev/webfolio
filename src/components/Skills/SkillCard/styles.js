import styled from 'styled-components';

export const Container = styled.div`
  width: max-content;
  height: 60px;
  width: ${({ isOpen }) => (isOpen ? '180px' : '60px')};
  background: #181818;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease-in-out;

  > img {
    max-height: 60px;
    max-width: 60px;
  }

  > h4 {
    transition: 0.5s ease-in-out;
    font-size: ${({ isOpen }) => (isOpen ? '20px' : '0')};
    color: #fff;
    margin-left: ${({ isOpen }) => (isOpen ? '5px' : '0')};
  }
`;