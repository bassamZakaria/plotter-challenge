import React from 'react';
import Plotter from './Plotter';
import { v4 as uuidv4 } from 'uuid';
import { act, render, waitForElement } from '@testing-library/react';
import { getData } from '../../api/plotterApi';
import { Plotter_Data } from '../../utils/test/testEnums';

jest.mock('../../api/plotterApi');

describe('<Plotter />', () => {
  test('Draw the Selection Box', async () => {
    const clearDimensionMock = jest.fn();
    const clearMeasureMock = jest.fn();

    const { queryByTestId } = render(
      <Plotter
        selectedDimension={[{ name: 'Product', key: uuidv4() }]}
        selectedMeasure={[{ name: 'Cost', key: uuidv4() }]}
        clearDimension={clearDimensionMock}
        clearMeasure={clearMeasureMock}
      />
    );
    expect(queryByTestId('Dimension-selection-box')).toBeTruthy();
    expect(queryByTestId('Measure-selection-box')).toBeTruthy();
  });

  test('Draw the Plotter', async () => {
    await act(async () => {
      const clearDimensionMock = jest.fn();
      const clearMeasureMock = jest.fn();
      getData.mockImplementation(() => Promise.resolve({ status: 200, data: Plotter_Data }));

      const { container } = render(
        <Plotter
          selectedDimension={[{ name: 'Product', key: uuidv4() }]}
          selectedMeasure={[{ name: 'Cost', key: uuidv4() }]}
          clearDimension={clearDimensionMock}
          clearMeasure={clearMeasureMock}
        />
      );
      await waitForElement(() => container.querySelector('canvas'));
    });
  });

  test.skip("Plotter won't render because no dimension passed", async () => {
    //should fail
    await act(async () => {
      const clearDimensionMock = jest.fn();
      const clearMeasureMock = jest.fn();
      getData.mockImplementation(() => Promise.resolve({ status: 200, data: Plotter_Data }));

      render(
        <Plotter
          selectedDimension={[]}
          selectedMeasure={[{ name: 'Cost', key: uuidv4() }]}
          clearDimension={clearDimensionMock}
          clearMeasure={clearMeasureMock}
        />
      );
      // await waitForElementToBeRemoved(() => container.querySelector('canvas'));
    });
  });
});
