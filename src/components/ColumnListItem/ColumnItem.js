import { Draggable } from 'react-beautiful-dnd';
import React from 'react';

const ColumnListItem = React.memo(({ item, index }) => {
  console.log({ item });
  return (
    <Draggable key={item.key} draggableId={item.key} index={index}>
      {provided => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            {item.name} {item.function}
          </div>
        );
      }}
    </Draggable>
  );
});

export default ColumnListItem;
