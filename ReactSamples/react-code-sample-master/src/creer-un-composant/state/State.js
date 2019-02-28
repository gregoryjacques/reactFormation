import React, { Component, Fragment } from 'react';

class Sample extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  _onClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    console.count('render');
    return (
      <Fragment>
        <button onClick={this._onClick}>
          <span>Button</span>
        </button>
        <small>(Ouvrir la console)</small>
      </Fragment>
    );
  }
}

export default Sample;