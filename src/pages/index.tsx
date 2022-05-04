import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Forecast from '../components/Forecast';
import RegionList from '../components/RegionList';
import { MainPage } from '../styles/pages/home';
import { IDataInResponseApi, IForecastObject } from '../utils/interfaces';

const Home: NextPage = ({ apiData }: any) => {
  const [forecastRes, setForecastRes] = useState<IForecastObject>({
    data: {
      owner: '',
      data: [],
      country: '',
      dataUpdate: '',
      globalIdLocal: 0,
    },
    idAreaAviso: '',
    local: '',
  });

  const handleRegionClick = async (globalIdLocal: number) => {
    const promise = await fetch(
      `http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${globalIdLocal}.json`
    );

    const data = await promise.json();

    const payload = {
      data,
      idAreaAviso: apiData.find(
        (item: IDataInResponseApi) => item.globalIdLocal === globalIdLocal
      ).idAreaAviso,
      local: apiData.find(
        (item: IDataInResponseApi) => item.globalIdLocal === globalIdLocal
      ).local,
    };

    return setForecastRes(payload);
  };

  return (
    <>
      <Head>
        <title>Adentis | Frontend Test </title>
      </Head>

      <MainPage>
        <RegionList apiData={apiData} handleRegionClick={handleRegionClick} />
        <Forecast forecastData={forecastRes} />
      </MainPage>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  let apiData: IDataInResponseApi[] = [];

  try {
    const response = await fetch(
      'http://api.ipma.pt/open-data/distrits-islands.json'
    );

    apiData = await response.json().then((result) => result.data);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      apiData,
    },
    revalidate: 60,
  };
}
