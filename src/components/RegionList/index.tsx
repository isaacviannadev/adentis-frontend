import React, { useState } from 'react';
import { IDataInResponseApi } from '../../utils/interfaces';
import InputFilter from '../InputFilter';
import Region from '../Region/index.';
import { RegionListContainer, Title } from './style';

interface IRegionList {
  apiData: IDataInResponseApi[];
  handleRegionClick: (globalIdLocal: number) => void;
}

const RegionList: React.FC<IRegionList> = ({ apiData, handleRegionClick }) => {
  const [value, setValue] = useState('');
  const [dataSearched, setDataSearched] = useState(apiData);

  function searchItem(value: string) {
    setValue(value);

    if (value.length > 0) {
      const filteredData = apiData.filter((item: IDataInResponseApi) =>
        item.local.includes(value)
      );

      return setDataSearched(filteredData);
    } else return setDataSearched(apiData);
  }

  return (
    <>
      <RegionListContainer>
        <Title>
          <h1>Region</h1>
          <InputFilter
            value={value}
            setValue={setValue}
            filterFunction={searchItem}
          />
        </Title>
        {dataSearched &&
          dataSearched.map((region: IDataInResponseApi) => {
            return (
              <Region
                handleRegionClick={() =>
                  handleRegionClick(region.globalIdLocal)
                }
                key={region.globalIdLocal}
                id={region.globalIdLocal}
                area={region.idAreaAviso}
                local={region.local}
              />
            );
          })}
      </RegionListContainer>
    </>
  );
};

export default RegionList;
