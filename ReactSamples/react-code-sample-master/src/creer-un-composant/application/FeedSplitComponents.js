import React, { Component, Fragment } from 'react';

class Form extends Component {
  state = {
    value: '',
  };

  _onSend = () => {
    const { value } = this.state;
    this.setState({ value: '' });
    this.props.onSubmit(value);
  }

  _onChange = (event) => this.setState({ value: event.target.value }); 

  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <input
          type={'text'}
          value={value}
          onChange={this._onChange} />
        <button onClick={this._onSend}>Envoyer</button>
      </Fragment>
    );
  }
}

class Sample extends Component {
  state = {
    items: [],
  };

  _onRemoveItem = (id) => () => {
    const { items } = this.state;
    const newItems = items.filter(item => item.id !== id);
    this.setState({ items: newItems });
  }

  _renderItems = () => {
    const { items } = this.state;
    return items.map(item => {
      return (
        <div key={item.id.toString()}>
          <p>{item.value}</p>
          <button onClick={this._onRemoveItem(item.id)}>
            <span role={'img'} aria-label={''}>❌</span>
          </button>
        </div>
      )
    });
  }

  _onSubmit = (value) => {
    const { items } = this.state;
    const item = {
      id: items.length + 1,
      value,
    };

    const newItems = [...items, item];
    this.setState({ items: newItems });
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this._onSubmit} />
        {this._renderItems()}
      </Fragment>
    );
  }
}

export default Sample;
