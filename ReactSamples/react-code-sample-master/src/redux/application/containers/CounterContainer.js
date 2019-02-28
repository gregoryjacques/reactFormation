import { connect } from 'react-redux';
import Counter from './../components/Counter';
import { inc, dec, reset } from './../actions/CounterActions';

function mapStateToProps(state) {
  return {
    counter: state.counterState.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    inc: () => dispatch(inc()),
    dec: () => dispatch(dec()),
    reset: () => dispatch(reset()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);