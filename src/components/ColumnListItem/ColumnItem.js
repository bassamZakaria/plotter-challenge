import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { List, Typography } from 'antd';

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
            <List.Item>
              <Typography.Text>
                {item.name} ({item.function})
              </Typography.Text>
            </List.Item>
          </div>
        );
      }}
    </Draggable>
  );
});

export default ColumnListItem;
