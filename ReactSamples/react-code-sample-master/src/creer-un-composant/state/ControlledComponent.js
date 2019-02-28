import React, { Component } from 'react';

class Sample extends Component {
  state = {
    value: '',
  };

  _onChange = (event) => {    
    this.setState({ value: event.target.value });
  }

  render() {
    const { value } = this.state;
    return (
      <input
        type={'text'}
        value={value}
        onChange={this._onChange} />
    );
  }
}

export default Sample;