import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './../application/containers/CounterContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Counter />
        <small>(Ouvrir la console)</small>
      </Provider>
    );
  }
}

export default App;