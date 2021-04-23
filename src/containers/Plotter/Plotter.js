import React, { useEffect, useState } from 'react';
import SelectionBoxes from '../../components/SelectionBoxes/SelectionBoxes';
import LineChart from '../../components/LineChart/LineChart';
import { getColumns, getData } from '../../api/plotterApi';
import merge from 'lodash.merge';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Plotter = () => {
  const [columns, setColumns] = useState([]);
  const [selectedDimension, setSelectedDimension] = useState('Country');
  const [selectedMeasure, setSelectedMeasure] = useState(['Cost']);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getColumns();
      if (response?.status === 200) {
        setColumns(response?.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData({
        measures: selectedMeasure,
        dimension: selectedDimension,
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
    if (selectedDimension && selectedMeasure && selectedMeasure.length !== 0) {
      fetchData();
    }
  }, [selectedDimension, selectedMeasure]);

  return (
    <div style={{ margin: '2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <SelectionBoxes
          columns={columns}
          selectedDimension={selectedDimension}
          setSelectedDimension={setSelectedDimension}
          selectedMeasure={selectedMeasure}
          setSelectedMeasure={setSelectedMeasure}
        />
      </div>
      <LineChart data={data} />
    </div>
  );
};

export default Plotter;
