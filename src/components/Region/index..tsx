import React from 'react';
import { RegionWrapper } from './style';

interface IRegion {
  id: number;
  area: string;
  local: string;
  handleRegionClick: (globalIdLocal: number) => void;
}

const Region: React.FC<IRegion> = ({ id, area, local, handleRegionClick }) => {
  return (
    <>
      <RegionWrapper onClick={() => handleRegionClick(id)}>
        <p>{local}</p>
        <div>
          <p>{id}</p>
          <p>{area}</p>
        </div>
      </RegionWrapper>
    </>
  );
};

export default Region;
