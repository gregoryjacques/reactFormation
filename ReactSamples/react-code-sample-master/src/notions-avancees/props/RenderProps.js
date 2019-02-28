import React, { PureComponent, Fragment } from 'react';

class ToggleStateProvider extends PureComponent {
  state = {
    active: false,
  };

  static defaultProps = {
    renderActive: () => {},
    renderInactive: () => {},
  };

  _onToggle = () => this.setState({ active: !this.state.active });

  render() {
    const { active } = this.state;
    const { renderActive, renderInactive } = this.props;

    return (
      <Fragment>
        <div>
          {active && renderActive()}
          {!active && renderInactive()}
        </div>
        <button onClick={this._onToggle}>Toggle</button>
      </Fragment>
    )
  }
}

class Sample extends PureComponent {

  _renderActive = () => {
    return <span className={'emoji-big'} role={'img'} aria-label={''}>😁</span>
  }

  _renderInactive = () => {
    return <span className={'emoji-big'} role={'img'} aria-label={''}>😔</span>
  }

  render() {
    return (
      <ToggleStateProvider
        renderActive={this._renderActive}
        renderInactive={this._renderInactive} />
    );
  }
}

export default Sample;