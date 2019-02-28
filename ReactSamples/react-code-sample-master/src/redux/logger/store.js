
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './../application/reducers';

const store = createStore(
  reducers,
  applyMiddleware(logger),
);

export default store;