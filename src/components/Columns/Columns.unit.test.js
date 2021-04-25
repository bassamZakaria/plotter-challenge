import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { Columns_Data } from '../../utils/test/testEnums';
import Columns from './Columns';

afterEach(cleanup);

test('render columns', () => {
  const { getAllByTestId, queryByTestId } = render(<Columns columns={Columns_Data} />);
  expect(queryByTestId('columns-id')).toBeTruthy();
  const columnNames = getAllByTestId('column-item-id').map(item => item.textContent);
  expect(columnNames).toHaveLength(Columns_Data.length);
});

test('render Empty', () => {
  const { queryByTestId } = render(<Columns />);
  expect(queryByTestId('columns-id')).toBeTruthy();
  expect(queryByTestId('column-item-id')).toBeFalsy();
});
