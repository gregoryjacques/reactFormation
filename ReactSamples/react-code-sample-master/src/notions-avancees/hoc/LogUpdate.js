import React, { Component, PureComponent } from 'react';
import SimpleStateDemo from './../../creer-un-composant/state/State';

function withComponentUpdateLog(WrappedComponent) {
  return class extends Component {
    componentDidUpdate() {
      console.log('Component update HOC !');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }
}

const SimpleStateDemoHOC = withComponentUpdateLog(SimpleStateDemo);

class Sample extends PureComponent {
  interval;
  state = {
    render: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ render: this.state.render + 1 }), 3000);
  }

  componentWillUnmount() {    
    this.interval && clearInterval(this.interval);
  }

  render() {
    return <SimpleStateDemoHOC />;
  }
}

export default Sample;