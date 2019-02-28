import SimpleStateDemo from './../state/State';

const COUNTER_LIMIT = 5;

class Sample extends SimpleStateDemo {
  shouldComponentUpdate(_, nextState) {
    if (nextState.counter >= COUNTER_LIMIT) {
      return false;
    }

    return true;
  }
}

export default Sample;