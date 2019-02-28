import { connect } from 'react-redux';
import CounterHistory from './../components/CounterHistory';

function mapStateToProps(state) {
  return {
    history: state.counterState.history,
  };
}

export default connect(
  mapStateToProps,
)(CounterHistory);