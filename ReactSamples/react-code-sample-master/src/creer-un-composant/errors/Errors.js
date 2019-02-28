import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {    
    return { hasError: true };
  }

  componentDidCatch(error, info) {    
    console.log(error, info);
  }

  render() {    
    const { hasError } = this.state;
    if (hasError) {
      return <p>Une erreur est survenue (ouvrir la console)</p>;
    }
    
    return this.props.children;
  }
}

class Button extends Component {
  state = {
    error: false,
  };

  _handleError = () => {
    this.setState({ error: true });
  }

  render() {
    const { error } = this.state;
    if (error) {
      throw new Error('Erreur pour la démo !');
    }

    return <button onClick={this._handleError}>Créer une erreur !</button>;
  }
}

class Sample extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Button />
      </ErrorBoundary>
    );
  }
}

export default Sample;
