import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { Tag } from 'antd';

const SelectionBoxItem = ({ item, index }) => {
  return (
    <Draggable key={item.key} draggableId={item.key} index={index} isDragDisabled={true}>
      {provided => {
        return (
          <Tag ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {item.name}
          </Tag>
        );
      }}
    </Draggable>
  );
};
export default SelectionBoxItem;
