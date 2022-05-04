import React from 'react';
import {
  IDataInForecastResponseApi,
  IForecastObject,
} from '../../utils/interfaces';
import { formatDate } from '../../utils/regex';
import { Title } from '../RegionList/style';
import { ForecastCard, ForecastContainer } from './style';

interface IForecastProps {
  forecastData: IForecastObject;
}

const Forecast: React.FC<IForecastProps> = (forecastDate) => {
  const { data, idAreaAviso, local } = forecastDate.forecastData;

  return (
    <>
      <ForecastContainer>
        <Title>
          <h1>Forecast</h1>
        </Title>
        {data?.data?.map(
          (forecast: IDataInForecastResponseApi, count: number) => {
            return (
              <ForecastCard key={count}>
                <div className='headerDetails'>
                  <span>
                    {local}
                    <span className='regionId'>{idAreaAviso}</span>
                  </span>
                  <span>{formatDate(new Date(forecast.forecastDate))}</span>
                </div>
                <div className='forecastDetails'>
                  <p>
                    Minimum Temperature: <span>{forecast.tMin}ºC</span>
                  </p>
                  <p>
                    Maximum Temperature: <span>{forecast.tMax}ºC</span>
                  </p>
                  <p>
                    Precipitation Probability:
                    <span>{forecast.precipitaProb}%</span>
                  </p>
                </div>
              </ForecastCard>
            );
          }
        )}
      </ForecastContainer>
    </>
  );
};

export default Forecast;
