import React, { Fragment } from 'react';
import createStore from './simple-redux';

/**
 * Redux part 
 */

const initialState = {
  counter: 0,
};

function reducer(state, action) {
  switch(action.type) {
    case 'INC':
      return {
        counter: state.counter + 1,
      };
    case 'DEC':
      return {
        counter: state.counter - 1,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

/**
 * React part
 */

const App = () => (
  <Fragment>
    <div>
      <button onClick={() => store.dispatch({ type: 'INC' })}>INC</button>
      <button onClick={() => store.dispatch({ type: 'DEC' })}>DEC</button>
    </div>
    <div>
      <button onClick={() => store.dispatch({ type: 'RESET' })}>RESET</button>
    </div>
    <small>(Ouvrir la console)</small>
  </Fragment>
);

store.subscribe(() => {
  console.log('Store update ->', store.getState());
});

export default App;