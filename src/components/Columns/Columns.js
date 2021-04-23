import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import { getColumns } from '../../api/plotterApi';
import { v4 as uuidv4 } from 'uuid';

const Columns = () => {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getColumns();
      if (response?.status === 200) {
        setColumns(response?.data);
      }
    };
    fetchData();
  }, []);

  return (
    <List
      style={{ height: '100%' }}
      header={<>Columns</>}
      bordered
      dataSource={columns}
      renderItem={item => (
        <List.Item key={uuidv4()}>
          <Typography.Text>
            {item?.name} {item.function}
          </Typography.Text>
        </List.Item>
      )}
    />
  );
};

export default Columns;
