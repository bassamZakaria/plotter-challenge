import React from 'react';
import { Line } from '@ant-design/charts';

const LineChart = ({ data }) => {
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

  return <Line {...config} />;
};
export default LineChart;
