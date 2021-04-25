import { v4 as uuidv4 } from 'uuid';

export const COLUMNS_DATA = [
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