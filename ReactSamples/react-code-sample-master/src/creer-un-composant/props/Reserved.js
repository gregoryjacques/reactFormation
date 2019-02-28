import React, { Component } from 'react';

const datas = [...Array(10).keys()];

const ButtonWithChildren = (props) => (
  <button>
    {props.children}
  </button>
);

class Sample extends Component {
  input = null;

  componentDidMount() {
    this.input && this.input.focus();
  }

  _renderDatas = () => {
    return datas.map(data => {
      return <p key={data.toString()}>{data}</p>;
    });
  }

  render() {
    return (
      <div>
        <input
          ref={ref => this.input = ref}
          type={'text'} />
        {this._renderDatas()}
        <ButtonWithChildren>
          <span>Le texte du bouton !</span>
        </ButtonWithChildren>
      </div>
    );
  }
}

export default Sample;