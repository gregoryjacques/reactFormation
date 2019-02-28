import React from 'react';
import { 
  subtotalSelector,
  taxSelector,
  totalSelector,
} from './selectors';

const state = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ],
  },
};

const Console = () => {
  console.log('subtotalSelector', subtotalSelector(state));
  console.log('taxSelector', taxSelector(state));
  console.log('totalSelector', totalSelector(state));

  return <small>(Ouvrir la console)</small>;
};

export default Console;