
import {
  ADD_POST,
  DELETE_POST,
  ADD_POST_LOADING,
  DELETE_POST_LOADING
} from './../actions/PostActions';

const initialState = {
  posts : {
    list : [{ 
      index : 0, 
      content:'1er post'
    }],
    status : 'default',
  }
};

export default function postState(state = initialState, action) {
  switch(action.type) {
    case ADD_POST_LOADING:
      return {
        posts : {
          ...state.posts,
          status : 'loading'
        }
      }
    case ADD_POST:    
      return {
        posts: {
          list : [
          ...state.posts.list,
          { 
            index : (state.posts.list.length++),
            content : action.payload.post
          }
        ],
        status : 'ready'
      }
    };
    case DELETE_POST_LOADING:
    return {
      posts : {
        ...state.posts,
        status : 'loading'
      }
    }
    case DELETE_POST:
      console.log(action.payload)
      return {
        posts: {
          list: state.posts.list.filter(item => item.index !== action.payload.index),
          status: 'ready'
        }
      };
    default:
      return state;
  }
}