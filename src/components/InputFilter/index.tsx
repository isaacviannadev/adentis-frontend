import React from 'react';
import { InputSC } from './style';

interface IInputSearchProps {
  value: string;
  setValue: (value: string) => void;
  filterFunction: (value: string) => void;
}

const InputFilter: React.FC<IInputSearchProps> = ({
  value,
  setValue,
  filterFunction,
}) => {
  return (
    <>
      <InputSC
        placeholder='Filter region...'
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
          filterFunction(value);
        }}
        tabIndex={0}
      />
    </>
  );
};

export default InputFilter;
