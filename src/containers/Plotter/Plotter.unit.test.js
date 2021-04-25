import React from 'react';
import Plotter from './Plotter';
import { v4 as uuidv4 } from 'uuid';
import { render } from '@testing-library/react';

// const data = [
//   {
//     name: 'Product',
//     values: [
//       'Diskette',
//       'Memory Card',
//       'HDTV Tuner',
//       'Flat Panel Graphics Monitor',
//       'Digital Camera',
//       'Minitower Speaker',
//       'Extension Cable',
//       'Y Box',
//     ],
//   },
//   {
//     name: 'Cost',
//     values: [333.08, 7.07, 10.77, 194.76, 13.18, 143.3, 20.2, 405],
//   },
// ];

// const axiosMock = { get: jest.fn().mockResolvedValue({ data: {} }) };

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
