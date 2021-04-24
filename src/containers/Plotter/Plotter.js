import React, { useEffect, useState } from 'react';
import LineChart from '../../components/LineChart/LineChart';
import { getData } from '../../api/plotterApi';
import SelectionBox from '../../components/SelectionBox/SelectionBox';
import { DND } from '../../utils/DnDIds';
import PlotterStyle from './Plotter.module.scss';

const Plotter = ({ selectedDimension, selectedMeasure, clearDimension, clearMeasure }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData({
        measures: [selectedMeasure[0]?.name],
        dimension: selectedDimension[0]?.name,
      });
      if (response.status === 200) {
        let tmp = [];
        for (let i = 0; i < 10; i++) {
          tmp.push({
            xAxis: response.data[0].values[i],
            yAxis: response.data[1].values[i],
          });
        }
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
    } else if (data.length !== 0) {
      setData([]);
    }
  }, [selectedDimension, selectedMeasure]);

  return (
    <div className={PlotterStyle.root}>
      <SelectionBox
        label="Dimension"
        areaId={DND.DIMENSION}
        items={selectedDimension}
        onClear={clearDimension}
      />
      <SelectionBox
        label="Measure"
        areaId={DND.MEASURE}
        items={selectedMeasure}
        onClear={clearMeasure}
      />
      <LineChart data={data} />
    </div>
  );
};

export default Plotter;
