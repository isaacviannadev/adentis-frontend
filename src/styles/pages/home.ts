import styled from 'styled-components';

export const MainPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  font-size: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
