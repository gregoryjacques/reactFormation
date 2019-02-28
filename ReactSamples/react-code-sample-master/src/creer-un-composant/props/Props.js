import React, { Component, Fragment } from 'react';

class Title extends Component {
  render() {
    return <h4>{this.props.text}</h4>;
  }
}

class Sample extends Component {
  render() {
    return (
      <Fragment>
        <Title text={'Titre numéro 1'} />
        <Title text={'Deuxième titre avec le même composant !'}/>
      </Fragment>
    );
  }
}

export default Sample;