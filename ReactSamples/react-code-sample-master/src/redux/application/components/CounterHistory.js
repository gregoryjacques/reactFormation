import React from 'react';

const CounterHistory = (props) => {
    console.log(props.history);
    return (
        <div>  
        { 
            props.history.map((item) => {
                return item && <p>{item.date.toISOString()} - {item.action}</p>;    
        })
        }
        </div>
    )};

export default CounterHistory;