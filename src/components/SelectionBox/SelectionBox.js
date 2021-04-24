import { Droppable } from 'react-beautiful-dnd';
import React from 'react';
import SelectionBoxItem from '../SelectionBoxItem/SelectionBoxItem';
import { Button, Typography, Row, Col } from 'antd';
import SelectionBoxStyle from './SelectionBox.module.scss';

const SelectionBox = ({ label, areaId, items, isDropDisabled = false }) => {
  return (
    <Row gutter={4} className={SelectionBoxStyle.root}>
      {label && (
        <Col span={2}>
          <Typography.Text>{label}</Typography.Text>
        </Col>
      )}
      <Col span={20} className={SelectionBoxStyle.selectionBox}>
        <Droppable
          droppableId={areaId}
          key={areaId}
          isDropDisabled={isDropDisabled}
          direction="horizontal"
        >
          {provided => {
            return (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={SelectionBoxStyle.dragBox}
              >
                {items.map((item, index) => (
                  <SelectionBoxItem item={item} index={index} />
                ))}
                {provided.placeholder}
              </div>
            );
          }}
        </Droppable>
        <Button style={{ left: -1 }}>Clear</Button>
      </Col>
    </Row>
  );
};
export default SelectionBox;