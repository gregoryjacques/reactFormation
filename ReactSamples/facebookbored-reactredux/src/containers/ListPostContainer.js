import { connect } from 'react-redux';
import ListPost from './../components/ListPost';

function mapStateToProps(state) {
  return {
    posts: state.postState.posts.list,
  };
}

export default connect(
  mapStateToProps
)(ListPost);