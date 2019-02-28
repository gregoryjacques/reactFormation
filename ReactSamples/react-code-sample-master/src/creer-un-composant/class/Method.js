import React, { Component, Fragment } from 'react';

class Sample extends Component {

  constructor() {
    super();
    this.variableScoped = '😉';

    this._fromConstructor = this._fromConstructor.bind(this);
  }

  _withoutContext() {
    alert(this.variableScoped);
  }

  _fromConstructor() {
    alert(this.variableScoped);
  }

  _withArrowFunction = () => {
    alert(this.variableScoped);
  }

  render() {
    return (
      <Fragment>
        <div>
          <button onClick={this._withoutContext}>Sans contexte</button>
        </div>
        <div>
          <button onClick={this._fromConstructor}>Via le constructor</button>
        </div>
        <div>
          <button onClick={this._withArrowFunction}>Via une arrow function</button>
        </div>
      </Fragment>
    );
  }
}

export default Sample;