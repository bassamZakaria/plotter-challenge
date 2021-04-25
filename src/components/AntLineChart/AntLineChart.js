import React from 'react';
import { Line } from '@ant-design/charts';

const AntLineChart = ({ data }) => {
  const config = {
    data,
    xField: 'xAxis',
    yField: 'yAxis',
    point: {
      size: 5,
      shape: 'point',
    },
    AxisLabelCfg: { autoEllipsis: true },
  };

  return <Line data-testid={'line-chart'} {...config} />;
};
export default AntLineChart;
