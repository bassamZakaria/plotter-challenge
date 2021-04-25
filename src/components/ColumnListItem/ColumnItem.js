import { Draggable } from 'react-beautiful-dnd';
import React from 'react';
import { List, Typography } from 'antd';

function areEqual(prevProps, nextProps) {
  return prevProps.item.name === nextProps.item.name;
}

const ColumnListItem = ({ item, index }) => {
  return (
    <Draggable key={item?.key} draggableId={item?.key} index={index}>
      {provided => {
        return (
          <div
            data-testid={'column-item-id'}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            <List.Item>
              <Typography.Text>
                {item?.name} ({item?.function})
              </Typography.Text>
            </List.Item>
          </div>
        );
      }}
    </Draggable>
  );
};

export default React.memo(ColumnListItem, areEqual);
