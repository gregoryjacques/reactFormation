import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import { PersistGate } from 'redux-persist/integration/react'
import o from './store'
import AddPost from './containers/AddPostContainer'
import ListPost from './containers/ListPostContainer'
import Loading from './components/Loading'

class App extends Component {
  render() {
    console.log(o);
    return (
      <Provider store={o.store}>
        <PersistGate loading={<Loading/>} persistor={o.persistor}>
          <AddPost />
          <ListPost/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
