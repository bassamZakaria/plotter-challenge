import React, { useEffect, useState } from 'react';
import AntLineChart from '../../components/AntLineChart/AntLineChart';
import { getData } from '../../api/plotterApi';
import SelectionBox from '../../components/SelectionBox/SelectionBox';
import { DND } from '../../utils/DnDIds';
import PlotterStyle from './Plotter.module.scss';
import { notification } from 'antd';

const Plotter = ({ selectedDimension, selectedMeasure, clearDimension, clearMeasure }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData({
        measures: [selectedMeasure[0]?.name],
        dimension: selectedDimension[0]?.name,
      });
      //Assumption dimension always the first and dimension and measure have the same length always
      if (response?.status === 200 && response?.data?.length > 1) {
        let tmp = [];
        for (let i = 0; i < response?.data[0]?.values?.length; i++) {
          tmp.push({
            xAxis: response.data[0].values[i],
            yAxis: response.data[1].values[i],
          });
        }
        setData(tmp);
      } else {
        notification.error({
          message: 'Error',
          description: 'Data is not as expected',
        });
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
  }, [selectedDimension, selectedMeasure, data.length]);

  return (
    <div className={PlotterStyle.root}>
      <SelectionBox
        label="Dimension"
        areaId={DND.DIMENSION}
        items={selectedDimension}
        onClear={clearDimension}
      />
      <SelectionBox
        data-testid="measure-selection-box"
        label="Measure"
        areaId={DND.MEASURE}
        items={selectedMeasure}
        onClear={clearMeasure}
      />
      {data && data?.length !== 0 && <AntLineChart data={data} />}
    </div>
  );
};

export default Plotter;
