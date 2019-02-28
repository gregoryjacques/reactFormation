
import fakeApiCall from './../api';

export const INIT_APP_START = 'INIT_APP_START';
export const INIT_APP_SUCCESS = 'INIT_APP_SUCCESS';
export const INIT_APP_FAIL = 'INIT_APP_FAIL';

function initAppStart() {
  return {
    type: INIT_APP_START,
  };
}

function initAppSuccess() {
  return {
    type: INIT_APP_SUCCESS,
  };
}

function initAppFailure() {
  return {
    type: INIT_APP_FAIL,
  };
}

export function initApp() {
  return dispatch => {
    dispatch(initAppStart());

    fakeApiCall().then(() => {
      dispatch(initAppSuccess());
    }).catch(() => {
      dispatch(initAppFailure());
    });
  }
}