import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 100px;
  padding: 20px;
  position: sticky;
  background-color: #fafafa;
  top: -20px;
  border-bottom: 1px solid #1d1d1d;
  z-index: 1;
  gap: 10px;

  & h1 {
    color: #1d1d1d;
    font-size: 2rem;
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    max-height: 100%;
    padding: 10px;
    top: 0px;

    & h1 {
      color: #1d1d1d;
      font-size: 1.4rem;
      font-weight: bold;
    }
  }
`;

export const RegionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  height: 100%;
  font-size: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: relative;

  overflow: hidden;
  overflow-y: auto;
  max-height: 100%;
  gap: 10px;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: #99aeca;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #49668d;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 0 10px 10px;

    max-width: 100%;
    max-height: 400px;
    border-bottom: 3px solid #49668d;
  }
`;
