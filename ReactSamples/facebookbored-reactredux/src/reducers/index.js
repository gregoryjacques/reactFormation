import { combineReducers } from 'redux';
import postState from './PostReducer';

const state = combineReducers({
  postState,
});

export default state;