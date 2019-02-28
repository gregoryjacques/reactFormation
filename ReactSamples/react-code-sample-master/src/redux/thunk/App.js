import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppBootstrap from './containers/AppBootstrapContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppBootstrap />
      </Provider>
    );
  }
}

export default App;