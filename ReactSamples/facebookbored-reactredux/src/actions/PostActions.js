
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POST_LOADING = 'ADD_POST_LOADING';
export const DELETE_POST_LOADING = 'DELETE_POST_LOADING';

function executeAddPost(newPost) {
  return {
    type: ADD_POST,
    payload: {
      post: newPost
    }
  }
}

function loadAddPost(dispatch) {
  return {
    type: ADD_POST_LOADING,

  } 
}

function loadDeletePost(dispatch) {
  return {
    type: DELETE_POST_LOADING
  } 
}

function apiAddPostCall(post, fail = false) {
  return new Promise((resolve, reject) => {
    if (fail) reject(new Error('error calling api'));

    setTimeout(() => { resolve(post); }, 2000);
  })  
}

export function initAddPost(newPost) {
  console.log(newPost);
  return dispatch => {
    dispatch(loadAddPost());

    apiAddPostCall(newPost)
      .then(r => dispatch(executeAddPost(r)))
      .catch(e => console.log(e))
  }
};

export function executeDeletePost(index) {
  return {
    type: DELETE_POST,
    payload: {
      index
    }
  }
}