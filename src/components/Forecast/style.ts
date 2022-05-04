import styled from 'styled-components';

export const ForecastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex: 1;
  gap: 10px;

  position: relative;

  overflow: hidden;
  overflow-y: auto;
  max-height: 100%;

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
  }
`;

export const ForecastCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  height: 100%;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px 2px rgba(0, 0, 0, 0.1);

  & .headerDetails {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 6px;

    & span {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      font-size: 1.2rem;
      font-weight: bold;
    }
    & span.regionId {
      font-size: 0.7rem;
      margin-left: 10px;
    }
  }
  & .forecastDetails {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 6px;

    & p {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      & span {
        font-size: 1rem;
        font-weight: bold;
        position: relative;
      }

      &:first-child span {
        color: #0084c4;

        &::after {
          content: '❄';
          position: absolute;
          top: -10px;
          right: -12px;
        }
      }

      &:nth-child(2) span {
        color: #dc3403;
        &::after {
          content: '☀';
          position: absolute;
          top: -10px;
          right: -12px;
        }
      }
      &:last-child span {
        &::after {
          content: '🌧';
          position: absolute;
          top: -10px;
          right: -12px;
        }
      }
    }
  }
`;
