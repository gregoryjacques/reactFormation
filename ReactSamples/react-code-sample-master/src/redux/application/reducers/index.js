import { combineReducers } from 'redux';
import counterState from './counterReducer';

const state = combineReducers({
  counterState,
});

export default state;