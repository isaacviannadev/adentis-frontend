import styled from 'styled-components';

export const RegionWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  color: black;
  font-weight: bold;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  & > p {
    width: 50%;
    text-align: right;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & div {
    width: 50%;
    display: flex;
    gap: 10px;
  }

  &:hover {
    background-color: #99aeca;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2px;

    & > p {
      width: 100%;
      text-align: center;
    }

    & div {
      width: 100%;
      align-items: center;
      justify-content: center;

      font-size: 0.8rem;
    }
  }
`;
