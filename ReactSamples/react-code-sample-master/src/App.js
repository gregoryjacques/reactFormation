import React, { Component } from 'react';
import components from './demo-components';
import './App.css';

const currentHash = (window.location.hash && window.location.hash.substr(1)) || '';

class App extends Component {

  _renderMenu = () => {
    const links = components.map(c => c.hash);
    const navigate = link => () => {
      window.location.hash = link;
      window.location.reload();
    };

    return links.map(link => (
      <p
        className={'link'}
        onClick={navigate(link)} 
        key={link}>
        {link}
      </p>
    ));
  }

  _renderSubComponent = () => {
    const component = components.find(c => c.hash === currentHash);      
    return (component && component.render()) || this._renderMenu();
  }

  render() {
    return (
      <div className="App">
        <a href={'/'} id={'link-menu'}>menu <span role={'img'} aria-label={''}>🏃</span></a>
        <div id={'demo-wrapper'}>
          {this._renderSubComponent()}
        </div>
      </div>
    );
  }
}

export default App;
