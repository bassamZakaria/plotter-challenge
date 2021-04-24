import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Droppable } from 'react-beautiful-dnd';
import ColumnListItem from '../ColumnListItem/ColumnItem';
import { DND } from '../../utils/DnDIds';

const Columns = ({ columns }) => {
  return (
    <Droppable droppableId={DND.COLUMNS} key={DND.COLUMNS} isDropDisabled={true}>
      {provided => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              border: '1px solid black',
              minWidth: 150,
              height: '100%',
            }}
          >
            {columns.map((item, index) => (
              <ColumnListItem key={uuidv4()} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};

export default Columns;
