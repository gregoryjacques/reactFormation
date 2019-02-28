import React, { Component } from 'react';

class AppBootstrap extends Component {
  
  componentDidMount() {
    const { initApp } = this.props;
    initApp(); 
  }

  render() {
    const { status } = this.props;
    return <p>App status: {status}</p>; 
  }

}

export default AppBootstrap;