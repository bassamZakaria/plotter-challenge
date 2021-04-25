import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { COLUMNS_DATA } from '../../utils/test/testEnums';
import Columns from './Columns';

afterEach(cleanup);

test('render columns', () => {
  const { getAllByTestId, queryByTestId } = render(<Columns columns={COLUMNS_DATA} />);
  expect(queryByTestId('columns-id')).toBeTruthy();
  const contactNames = getAllByTestId('column-item-id').map(item => item.textContent);
  expect(contactNames).toHaveLength(COLUMNS_DATA.length);
});

test('render Empty', () => {
  const { queryByTestId } = render(<Columns />);
  expect(queryByTestId('columns-id')).toBeTruthy();
  expect(queryByTestId('column-item-id')).toBeFalsy();
});
