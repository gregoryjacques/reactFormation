import React from 'react';
import CounterHistory from '../containers/CounterHistoryContainer'

const Counter = (props) => (
  <div>
    <p>{props.counter}</p>
    <button onClick={props.inc}>INC</button>
    <button onClick={props.dec}>DEC</button>
    <button onClick={props.reset}>RESET</button>
    <CounterHistory  />
  </div>
  
);

export default Counter;