import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Title = (props) => (
  <div>
    <h2>{props.text}</h2>
    <small>{props.subtitle}</small>
  </div>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Title.defaultProps = {
  subtitle: '',
};

class Sample extends Component {
  static propTypes = {
    showTitle: PropTypes.bool,
  };

  static defaultProps = {
    showTitle: false,
  };

  render() {
    const { showTitle } = this.props; 
    return (
      <div>
        <Title
          text={'Titre statique'}
          subtitle={'Il est toujours rendu dans le composant'} />
        {showTitle && <Title text={'Titre dynamique !'} />}
      </div>
    );
  }
}

export default Sample;