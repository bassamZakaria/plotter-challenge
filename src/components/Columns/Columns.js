import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ColumnListItem from '../ColumnListItem/ColumnItem';
import { DND } from '../../utils/DnDIds';
import { List, Typography } from 'antd';
import ColumnsStyle from './Columns.module.scss';

const Columns = ({ columns }) => {
  return (
    <Droppable droppableId={DND.COLUMNS} key={DND.COLUMNS}>
      {provided => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef} className={ColumnsStyle.root}>
            <List header={<Typography.Title level={2}>Columns</Typography.Title>}>
              {columns.map((item, index) => (
                <ColumnListItem key={item.key} item={item} index={index} />
              ))}
            </List>
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default Columns;
