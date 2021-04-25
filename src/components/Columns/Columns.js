import React from 'react';
import ColumnListItem from '../ColumnListItem/ColumnItem';
import { List, Typography } from 'antd';
import { Droppable } from 'react-beautiful-dnd';
import ColumnsStyle from './Columns.module.scss';
import { DND } from '../../utils/DnDIds';

const Columns = ({ columns = [] }) => {
  return (
    <Droppable droppableId={DND.COLUMNS} key={DND.COLUMNS}>
      {provided => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef} className={ColumnsStyle.root}>
            <List
              data-testid="columns-id"
              header={<Typography.Title level={2}>Columns</Typography.Title>}
            >
              {columns?.map((item, index) => (
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
