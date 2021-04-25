import React from 'react';
import { act, cleanup, render, waitForElement } from '@testing-library/react';
import { AppLayout } from './AppLayout';
import { Columns_Data } from '../../utils/test/testEnums';
import { getColumns } from '../../api/plotterApi';

afterEach(cleanup);

jest.mock('../../api/plotterApi');

describe('<AppLayout />', () => {
  test('Draw columns by mocking the API call', async () => {
    await act(async () => {
      getColumns.mockImplementation(() => Promise.resolve({ status: 200, data: Columns_Data }));

      const { queryByTestId, getAllByTestId } = render(<AppLayout />);
      await waitForElement(() => getAllByTestId('column-item-id'));
      expect(queryByTestId('columns-id')).toBeTruthy();
      const columnNames = getAllByTestId('column-item-id').map(item => item.textContent);
      expect(columnNames).toHaveLength(Columns_Data.length);
    });
  });
});
