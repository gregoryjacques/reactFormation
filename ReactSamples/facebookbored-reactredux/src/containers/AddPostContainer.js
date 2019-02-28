import { connect } from 'react-redux';
import AddPost from './../components/AddPost';
import { initAddPost } from './../actions/PostActions';

function mapDispatchToProps(dispatch) {
    return {
      addPost: (newPost) => dispatch(initAddPost(newPost))
      };
  }
 

export default connect(
  state => ({status : state.postState.posts.status}),  
  mapDispatchToProps
)(AddPost);


 