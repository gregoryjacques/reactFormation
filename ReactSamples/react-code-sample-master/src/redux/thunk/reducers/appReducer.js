
import {
  INIT_APP_START,
  INIT_APP_SUCCESS,
  INIT_APP_FAIL,
} from './../actions/appActions';

const initialState = {
  status: 'default',
};

export default function appState(state = initialState, action) {
  switch(action.type) {
    case INIT_APP_START:
      return {
        status: 'loading',
      };
    case INIT_APP_SUCCESS:
      return {
        status: 'success',
      };
    case INIT_APP_FAIL:
      return {
        status: 'fail',
      };
    default:
      return state;
  }
}