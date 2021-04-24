import { Droppable } from 'react-beautiful-dnd';
import React from 'react';
import DraggableItem from '../DraggableItem/DraggableItem';

const DroppableArea = ({ areaId, items, isDropDisabled = false }) => {
  console.log({ items });
  return (
    <Droppable
      droppableId={areaId}
      key={areaId}
      isDropDisabled={isDropDisabled}
      direction="horizontal"
    >
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              background:
                snapshot.isDraggingOver && areaId !== 'requested' ? 'lightblue' : 'lightgrey',
              border: '1px solid black',
              minWidth: 150,
              minHeight: 50,
            }}
          >
            {items.map((item, index) => (
              <DraggableItem item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
export default DroppableArea;
