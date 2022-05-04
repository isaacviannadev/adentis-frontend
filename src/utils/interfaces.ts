export interface IDataInResponseApi {
  idRegiao: number;
  idAreaAviso: string;
  idConcelho: number;
  globalIdLocal: number;
  latitude: string;
  idDistrito: number;
  local: string;
  longitude: string;
}
[];

export interface IDataInForecastResponseApi {
  classWindSpeed: number;
  forecastDate: string;
  idWeatherType: number;
  latitude: string;
  longitude: string;
  precipitaProb: string;
  predWindDir: string;
  tMax: string;
  tMin: string;
}
[];

export interface IForecastResponseApi {
  owner: string;
  data: IDataInForecastResponseApi[];
  country: string;
  dataUpdate: string;
  globalIdLocal: number;
}

export interface IForecastObject {
  data: IForecastResponseApi;
  local: string;
  idAreaAviso: string;
}
