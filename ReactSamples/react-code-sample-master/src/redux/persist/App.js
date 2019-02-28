import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import Counter from './../application/containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate 
          loading={null} 
          persistor={persistor}>
          <Counter />
          <small>(Ouvrir la console)</small>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;