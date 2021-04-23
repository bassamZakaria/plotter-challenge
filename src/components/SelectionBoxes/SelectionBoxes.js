import React from 'react';
import { Select } from 'antd';

const SelectionBoxes = ({
  columns,
  selectedDimension,
  setSelectedDimension,
  selectedMeasure,
  setSelectedMeasure,
}) => {
  return (
    <>
      <Select
        value={selectedDimension}
        onChange={selectedItem => setSelectedDimension(selectedItem)}
        style={{ width: '100%' }}
      >
        {columns
          .filter(item => item.function === 'dimension')
          .map(item => (
            <Select.Option value={item.name}>{item.name}</Select.Option>
          ))}
      </Select>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        value={selectedMeasure}
        onChange={selectedItems => setSelectedMeasure(selectedItems)}
      >
        {columns
          .filter(item => item.function === 'measure')
          .map(item => (
            <Select.Option value={item.name}>{item.name}</Select.Option>
          ))}
      </Select>
    </>
  );
};

export default SelectionBoxes;
