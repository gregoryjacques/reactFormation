import { applyMiddleware, createStore } from 'redux';
import reducers from './../application/reducers';
import customMiddleware from './middleware';

const store = createStore(
  reducers,
  applyMiddleware(customMiddleware),
);

export default store;