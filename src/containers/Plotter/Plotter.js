import React, { useEffect, useState } from 'react';
import LineChart from '../../components/LineChart/LineChart';
import { getData } from '../../api/plotterApi';
import SelectionBox from '../../components/SelectionBox/SelectionBox';
import { DND } from '../../utils/DnDIds';

const Plotter = ({ selectedDimension, selectedMeasure }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData({
        measures: [selectedMeasure[0]?.name],
        dimension: selectedDimension[0]?.name,
      });
      if (response.status === 200) {
        console.log(response.data);
        let tmp = [];
        for (let i = 0; i < 10; i++) {
          tmp.push({
            xAxis: response.data[0].values[i],
            yAxis: response.data[1].values[i],
          });
        }
        console.log(tmp);
        setData(tmp);
      }
    };
    if (
      selectedDimension &&
      selectedMeasure &&
      selectedDimension.length !== 0 &&
      selectedMeasure.length !== 0
    ) {
      fetchData();
    }
  }, [selectedDimension, selectedMeasure]);

  return (
    <div style={{ margin: '2rem' }}>
      <SelectionBox areaId={DND.DIMENSION} items={selectedDimension} />
      <SelectionBox areaId={DND.MEASURE} items={selectedMeasure} />
      <LineChart data={data} />
    </div>
  );
};

export default Plotter;
