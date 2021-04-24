import React, { useEffect, useState } from 'react';
import { Layout, notification } from 'antd';
import Columns from '../../components/Columns/Columns';
import { DragDropContext } from 'react-beautiful-dnd';
import { v4 as uuidv4, v4 as uuid } from 'uuid';
import DroppableArea from '../../components/DroppableArea/DroppableArea';
import { DND } from '../../utils/DnDIds';
import { getColumns } from '../../api/plotterApi';

export const AppLayout = () => {
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
    console.log({ source });
    console.log({ destination });
    if (source.droppableId !== destination.droppableId) {
      const sourceItem = columns[source.index];
      const tmp = [...selectedMeasure, sourceItem];
      setSelectedMeasure(tmp);
      // const destColumn = columns[destination.droppableId];
      // const sourceItems = [...sourceColumn.items];
      // const destItems = [...destColumn.items];
      //   const item = sourceItems[source.index];
      //   if (item.type === destination.droppableId) {
      //     const [removed] = sourceItems.splice(source.index, 1);
      //     destItems.splice(destination.index, 0, removed);
      //     const tmp = {
      //       ...columns,
      //       [source.droppableId]: {
      //         ...sourceColumn,
      //         items: sourceItems,
      //       },
      //       [destination.droppableId]: {
      //         ...destColumn,
      //         items: destItems,
      //       },
      //     };
      //     setColumns(tmp);
      //   } else {
      //     notification.warning({
      //       message: 'Warning',
      //       description: 'Type has to be the same',
      //     });
      //   }
    } else {
      console.log('drop on the same');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
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
        <div key={'dimension'}>
          <DroppableArea areaId={DND.DIMENSION} items={selectedDimension} />
        </div>
        <div key={'measure'}>
          <DroppableArea areaId={DND.MEASURE} items={selectedMeasure} />
        </div>
      </DragDropContext>
      {/*<DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>*/}
      {/*  <Layout.Sider theme="light" width={241}>*/}
      {/*    <Columns />*/}
      {/*  </Layout.Sider>*/}
      {/*  <Layout>*/}
      {/*    <Plotter />*/}
      {/*  </Layout>*/}
      {/*</DragDropContext>*/}
    </Layout>
  );
};
