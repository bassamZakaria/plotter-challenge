import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { v4 as uuidv4 } from 'uuid';
import SelectionBox from './SelectionBox';

const tag1Key = uuidv4();
const tag2Key = uuidv4();
const data = [
  { name: 'Tag 1', key: tag1Key },
  { name: 'Tag 2', key: tag2Key },
];
const clearMock = jest.fn();

test('Draw items', async () => {
  const { queryByTestId } = render(
    <SelectionBox label="Test Label" areaId="testId" items={data} onClear={clearMock} />
  );
  expect(queryByTestId(`${tag1Key}-tag-id`)).toBeTruthy();
  expect(queryByTestId(`${tag2Key}-tag-id`)).toBeTruthy();
});

test('Click on Clear', async () => {
  render(<SelectionBox label="Test Label" areaId="testId" items={data} onClear={clearMock} />);

  fireEvent.click(screen.getByText('Clear'));
  expect(clearMock).toHaveBeenCalledTimes(1);
});
