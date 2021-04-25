import React, { useEffect, useState } from 'react';
import { Layout, notification } from 'antd';
import Columns from '../../components/Columns/Columns';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4 } from 'uuid';
import { DND } from '../../utils/DnDIds';
import { getColumns } from '../../api/plotterApi';
import Plotter from '../Plotter/Plotter';

export const AppLayout = () => {
  //we could use redux but it isn't needed that much as we only passing states 2 level down directly
  //useContext isn't the best option due to performance issues and especially with arrays and objects
  const [selectedDimension, setSelectedDimension] = useState([]);
  const [selectedMeasure, setSelectedMeasure] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getColumns();
      if (response?.status === 200) {
        const tmp = response?.data.map(item => {
          return { ...item, key: uuidv4() };
        });
        setColumns(tmp);
      }
    };
    fetchData();
  }, []);

  const onDragEnd = result => {
    if (!result.destination) return;
    const { source, destination } = result;
    const sourceItem = columns[source.index];
    if (source.droppableId !== destination.droppableId) {
      if (sourceItem.function === destination.droppableId) {
        if (destination.droppableId === DND.MEASURE) {
          // const tmp = [...selectedMeasure, sourceItem];
          // setSelectedMeasure(tmp);
          setSelectedMeasure([{ ...sourceItem, key: uuidv4() }]);
        } else if (destination.droppableId === DND.DIMENSION) {
          setSelectedDimension([{ ...sourceItem, key: uuidv4() }]);
        }
      } else
        notification.warning({
          message: 'Warning',
          description: 'Type has to be the same',
        });
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }} data-testid="root">
      <DragDropContext
        onDragEnd={result =>
          onDragEnd(
            result,
            selectedDimension,
            setSelectedDimension,
            selectedMeasure,
            setSelectedMeasure
          )
        }
      >
        <Layout.Sider theme="light" width={241}>
          <Columns columns={columns} />
        </Layout.Sider>
        <Layout>
          <Plotter
            selectedDimension={selectedDimension}
            selectedMeasure={selectedMeasure}
            clearDimension={() => setSelectedDimension([])}
            clearMeasure={() => setSelectedMeasure([])}
          />
        </Layout>
      </DragDropContext>
    </Layout>
  );
};
