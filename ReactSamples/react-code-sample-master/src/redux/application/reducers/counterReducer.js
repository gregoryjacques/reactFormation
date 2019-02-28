
import {
  INC,
  DEC,
  RESET,
} from './../actions/CounterActions';

const initialState = {
  counter: 0,
  history : []
};

const addEntry = (actionType) => {
  return {date:new Date(), action: actionType};
}

export default function counterState(state = initialState, action) {
  switch(action.type) {
    case INC:    
      return {
        counter: state.counter + 1,
        history: [
          ...state.history,
          addEntry(action.type)
        ]
      };
    case DEC: 
      return {
        counter: state.counter - 1,
        history: [
          ...state.history,
          addEntry(action.type)
        ]
      };
    case RESET: 
    return {
      counter: initialState.counter,
      history: [
        ...state.history,
        addEntry(action.type)
      ]
    };
    default:
      return state;
  }
}