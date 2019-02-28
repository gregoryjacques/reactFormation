import { connect } from 'react-redux';
import Post from './../components/Post';
import { executeDeletePost } from './../actions/PostActions';

function mapDispatchToProps(dispatch) {
  return {
    removePost: (index) => dispatch(executeDeletePost(index))
    };
} 

export default connect(
  null,  
  mapDispatchToProps
)(Post);


 