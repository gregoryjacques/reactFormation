
import { connect } from 'react-redux';
import AppBootstrap from './../components/AppBootstrap';
import { initApp } from './../actions/appActions';

export default connect(state => ({
  status: state.appState.status,
}), dispatch => ({
  initApp: () => dispatch(initApp()),  
}))(AppBootstrap);