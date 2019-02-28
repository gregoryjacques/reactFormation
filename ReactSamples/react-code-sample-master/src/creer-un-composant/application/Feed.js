import React, { Component, Fragment } from 'react';

class Sample extends Component {
  state = {
    value: '',
    items: [],
  };

  _onChange = (event) => this.setState({ value: event.target.value }); 

  _onSend = () => {
    const { value, items } = this.state;
    const item = {
      id: items.length + 1,
      value,
    };

    const newItems = [...items, item];
    this.setState({ items: newItems, value: '' });
  }

  _onRemoveItem = (id) => () => {
    const { items } = this.state;
    const newItems = items.filter(item => item.id !== id);
    this.setState({ items: newItems });
  }

  _renderItems = () => {
    const { items } = this.state;
    return items.map(item => {
      return (
        <div>
          <p>{item.value}</p>
          <button onClick={this._onRemoveItem(item.id)}>
            <span role={'img'} aria-label={''}>❌</span>
          </button>
        </div>
      )
    });
  }

  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <div>
          <input
            type={'text'}
            value={value}
            onChange={this._onChange} />
          <button onClick={this._onSend}>Envoyer</button>
        </div>
        {this._renderItems()}
      </Fragment>
    );
  }
}

export default Sample;
