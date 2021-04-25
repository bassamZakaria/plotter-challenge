import { v4 as uuidv4 } from 'uuid';

export const Columns_Data = [
  {
    name: 'Product',
    function: 'dimension',
    key: uuidv4(),
  },
  {
    name: 'Year',
    function: 'dimension',
    key: uuidv4(),
  },
  {
    name: 'Country',
    function: 'dimension',
    key: uuidv4(),
  },
  {
    name: 'Cost',
    function: 'measure',
    key: uuidv4(),
  },
  {
    name: 'Revenue',
    function: 'measure',
    key: uuidv4(),
  },
  {
    name: 'Units sold',
    function: 'measure',
    key: uuidv4(),
  },
];

export const Plotter_Data = [
  {
    name: 'Product',
    values: [
      'Diskette',
      'Memory Card',
      'HDTV Tuner',
      'Flat Panel Graphics Monitor',
      'Digital Camera',
      'Minitower Speaker',
      'Extension Cable',
      'Y Box',
    ],
  },
  {
    name: 'Cost',
    values: [333.08, 7.07, 10.77, 194.76, 13.18, 143.3, 20.2, 405],
  },
];
